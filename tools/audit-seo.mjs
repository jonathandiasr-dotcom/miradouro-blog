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
  const favicons = tags(html, "link").filter((tag) => /rel=["']icon["']/i.test(tag));
  const jsonScripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const parsedSchemas = [];

  if (h1Count !== 1) errors.push(`${relative}: expected 1 h1, found ${h1Count}`);
  if (canonicalTags.length !== 1) errors.push(`${relative}: expected 1 canonical, found ${canonicalTags.length}`);
  if (!canonical.startsWith(`${baseUrl}/`)) errors.push(`${relative}: canonical is not on ${baseUrl}`);
  if (descriptions.length !== 1 || !description.trim()) errors.push(`${relative}: missing or duplicate description`);
  if (ogImages.length !== 1 || !ogImages[0].includes(`${baseUrl}/assets/og-default.png`)) errors.push(`${relative}: missing or incorrect og:image`);
  if (favicons.length !== 1 || !favicons[0].includes(`${baseUrl}/assets/favicon.svg`)) errors.push(`${relative}: missing or incorrect favicon`);
  if (description.length < 80 || description.length > 180) warnings.push(`${relative}: description length ${description.length}`);
  if (relative !== "index.html" && hreflangCount !== 3) errors.push(`${relative}: expected 3 hreflang links, found ${hreflangCount}`);
  if (relative !== "index.html") {
    const sharedHeaders = html.match(/<header\b[^>]*class=["'][^"']*\bmira-site-header\b[^"']*["'][\s\S]*?<\/header>/gi) ?? [];
    const sharedStyles = tags(html, "link").filter((tag) => /assets\/site-header\.css/i.test(tag));
    if (sharedHeaders.length !== 1) errors.push(`${relative}: expected one shared Miradouro header, found ${sharedHeaders.length}`);
    if (sharedStyles.length !== 1) errors.push(`${relative}: expected one shared header stylesheet, found ${sharedStyles.length}`);
    if ((html.match(/data-mira-native-header/gi) ?? []).length !== 1) errors.push(`${relative}: native header was not uniquely retired`);
    const sharedHeader = sharedHeaders[0] ?? "";
    if ((sharedHeader.match(/class=["']mira-site-logo["']/gi) ?? []).length !== 1) errors.push(`${relative}: shared wordmark is missing`);
    if ((sharedHeader.match(/hreflang=["'](?:fr|en)["']/gi) ?? []).length !== 2) errors.push(`${relative}: shared language switch is incomplete`);
    if ((sharedHeader.match(/aria-current=["']page["']/gi) ?? []).length !== 1) errors.push(`${relative}: shared language switch has no unique active language`);
  }
  if (relative.startsWith("articles/") && (html.match(/class=["']seo-related__link["']/gi) ?? []).length !== 3) {
    errors.push(`${relative}: expected 3 related article links`);
  }
  if (jsonScripts.length !== 1) errors.push(`${relative}: expected 1 JSON-LD block, found ${jsonScripts.length}`);
  for (const script of jsonScripts) {
    try { parsedSchemas.push(JSON.parse(script[1])); } catch (error) { errors.push(`${relative}: invalid JSON-LD (${error.message})`); }
  }
  const schemaNodes = parsedSchemas.flatMap((schema) => schema["@graph"] ?? [schema]);
  if (relative.startsWith("articles/")) {
    const article = schemaNodes.find((node) => node["@type"] === "BlogPosting");
    const breadcrumb = schemaNodes.find((node) => node["@type"] === "BreadcrumbList");
    if (!article) errors.push(`${relative}: missing BlogPosting schema`);
    if (!breadcrumb || breadcrumb.itemListElement?.length !== 3) errors.push(`${relative}: missing complete BreadcrumbList schema`);
    if (!article?.author?.url || !article?.author?.sameAs?.length) errors.push(`${relative}: incomplete author entity`);
    if (!article?.articleSection || !article?.keywords?.length) errors.push(`${relative}: missing semantic article classification`);
    if (!article?.wordCount || article.wordCount < 200) errors.push(`${relative}: invalid schema word count`);
  }
  if (relative === "index.html") {
    if (!schemaNodes.some((node) => node["@type"] === "Person")) errors.push("index.html: missing Person entity");
    if (!schemaNodes.some((node) => node["@type"] === "Organization")) errors.push("index.html: missing Organization entity");
    if ((html.match(/<header\b[^>]*class=["'][^"']*\bmira-site-header\b/gi) ?? []).length !== 1) errors.push("index.html: missing shared Miradouro header");
    if (tags(html, "link").filter((tag) => /assets\/site-header\.css/i.test(tag)).length !== 1) errors.push("index.html: missing shared header stylesheet");
    if ((html.match(/<button\b[^>]*id=["']btn(?:FR|EN)["']/gi) ?? []).length !== 2) errors.push("index.html: homepage language switch is incomplete");
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

const vercelConfig = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
const legacyNoIndex = vercelConfig.headers?.some((rule) =>
  rule.has?.some((condition) => condition.type === "host" && condition.value === "miradouro-blog.vercel.app")
  && rule.headers?.some((header) => header.key.toLowerCase() === "x-robots-tag" && header.value.toLowerCase().includes("noindex"))
);
if (!legacyNoIndex) errors.push("vercel.json: legacy Vercel domain is not protected with X-Robots-Tag: noindex");

if (!fs.existsSync(path.join(root, "assets/favicon.svg"))) errors.push("assets/favicon.svg: file is missing");
if (!fs.existsSync(path.join(root, "assets/site-header.css"))) errors.push("assets/site-header.css: file is missing");
for (const discoveryFile of ["llms.txt", "sitemap.md"]) {
  const discovery = fs.readFileSync(path.join(root, discoveryFile), "utf8");
  for (const relative of publicFiles) {
    if (relative === "index.html") continue;
    if (!discovery.includes(`${baseUrl}/${relative}`)) errors.push(`${discoveryFile}: missing ${relative}`);
  }
}

console.log(JSON.stringify({ pages: publicFiles.length, errors, warnings }, null, 2));
if (errors.length) process.exitCode = 1;
