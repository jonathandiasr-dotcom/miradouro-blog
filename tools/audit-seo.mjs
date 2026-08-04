import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const baseUrl = "https://miradouro.blog";
const articleDir = path.join(root, "articles");
const articleFiles = fs.readdirSync(articleDir)
  .filter((name) => name.endsWith(".html") && !/mockup|proposition/i.test(name))
  .map((name) => `articles/${name}`);
const publicFiles = ["index.html", "miradouro-map.html", "miradouro-map-en.html", ...articleFiles];
const errors = [];
const warnings = [];

function tags(html, name) {
  return html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];
}

for (const relative of publicFiles) {
  const html = fs.readFileSync(path.join(root, relative), "utf8");
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const canonicalTags = tags(html, "link").filter((tag) => /rel=["']canonical["']/i.test(tag));
  const canonical = canonicalTags[0]?.match(/href=["']([^"']+)/i)?.[1] ?? "";
  const descriptions = tags(html, "meta").filter((tag) => /name=["']description["']/i.test(tag));
  const description = descriptions[0]?.match(/content=(['"])([\s\S]*?)\1/i)?.[2] ?? "";
  const hreflangCount = tags(html, "link").filter((tag) => /rel=["']alternate["']/i.test(tag) && /hreflang=/i.test(tag)).length;
  const ogImages = tags(html, "meta").filter((tag) => /property=["']og:image["']/i.test(tag));
  const jsonScripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  if (h1Count !== 1) errors.push(`${relative}: expected 1 h1, found ${h1Count}`);
  if (canonicalTags.length !== 1) errors.push(`${relative}: expected 1 canonical, found ${canonicalTags.length}`);
  if (!canonical.startsWith(`${baseUrl}/`)) errors.push(`${relative}: canonical is not on ${baseUrl}`);
  if (descriptions.length !== 1 || !description.trim()) errors.push(`${relative}: missing or duplicate description`);
  if (ogImages.length !== 1 || !ogImages[0].includes(`${baseUrl}/assets/og-default.png`)) errors.push(`${relative}: missing or incorrect og:image`);
  if (description.length < 80 || description.length > 180) warnings.push(`${relative}: description length ${description.length}`);
  if (relative !== "index.html" && hreflangCount !== 3) errors.push(`${relative}: expected 3 hreflang links, found ${hreflangCount}`);
  if (relative.startsWith("articles/") && (html.match(/class=["']seo-related__link["']/gi) ?? []).length !== 3) {
    errors.push(`${relative}: expected 3 related article links`);
  }
  if (jsonScripts.length !== 1) errors.push(`${relative}: expected 1 JSON-LD block, found ${jsonScripts.length}`);
  for (const script of jsonScripts) {
    try { JSON.parse(script[1]); } catch (error) { errors.push(`${relative}: invalid JSON-LD (${error.message})`); }
  }
  if (html.includes("https://miradouro-blog.vercel.app") || html.includes("https://miradouro.pt")) {
    errors.push(`${relative}: legacy domain reference remains`);
  }

  for (const match of html.matchAll(/<a\b[^>]*href=(['"])(.*?)\1/gi)) {
    const href = match[2];
    if (!href || href.includes("${") || /^(?:#|https?:|mailto:|tel:|javascript:)/i.test(href)) continue;
    const url = new URL(href, `${baseUrl}/${relative}`);
    if (url.origin !== baseUrl) continue;
    let localPath = decodeURIComponent(url.pathname).replace(/^\//, "");
    if (!localPath) localPath = "index.html";
    const candidates = [localPath, `${localPath}.html`, path.join(localPath, "index.html")];
    if (!candidates.some((candidate) => {
      const candidatePath = path.join(root, candidate);
      return fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile();
    })) {
      errors.push(`${relative}: broken internal link ${href}`);
    }
  }
}

const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const crawlableCards = (home.match(/<a\b[^>]*id=["']card-(?:\d{2}|hs)["']/gi) ?? []).length;
const expectedCards = (home.match(/^\s*'card-(?:\d{2}|hs)'\s*:/gmi) ?? []).length;
if (crawlableCards !== expectedCards) errors.push(`index.html: expected ${expectedCards} crawlable article cards, found ${crawlableCards}`);

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrlCount = (sitemap.match(/<url>/g) ?? []).length;
if (sitemapUrlCount !== publicFiles.length) errors.push(`sitemap.xml: expected ${publicFiles.length} URLs, found ${sitemapUrlCount}`);
if (sitemap.includes("<priority>") || sitemap.includes("<changefreq>")) warnings.push("sitemap.xml: contains ignored priority/changefreq fields");

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${baseUrl}/sitemap.xml`)) errors.push("robots.txt: incorrect sitemap URL");

console.log(JSON.stringify({ pages: publicFiles.length, errors, warnings }, null, 2));
if (errors.length) process.exitCode = 1;
