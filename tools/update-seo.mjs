import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const baseUrl = "https://miradouro.blog";
const defaultImage = `${baseUrl}/assets/og-default.png`;
const today = "2026-08-04";

const pairs = [
  ["articles/01-scissor-effect-fr.html", "articles/01-scissor-effect-en.html"],
  ["articles/02-immigration-fr.html", "articles/02-immigration-en.html"],
  ["articles/06-soft-power-portugal-fr.html", "articles/06-soft-power-portugal-en.html"],
  ["articles/09-talent-map-fr.html", "articles/09-talent-map-en.html"],
  ["articles/ai-music-fr.html", "articles/ai-music-en.html"],
  ["articles/internet-exe-europe-fr.html", "articles/internet-exe-europe-en.html"],
  ["articles/internet-exe-europe-part-2-fr.html", "articles/internet-exe-europe-part-2-en.html"],
  ["articles/internet-exe-europe-part-3-fr.html", "articles/internet-exe-europe-part-3-en.html"],
  ["articles/miradouro-cloud-FR.html", "articles/miradouro-cloud-EN.html"],
  ["articles/miradouro-sovereignty-fr.html", "articles/miradouro-sovereignty-en.html"],
  ["articles/miradouro_banques_portugal_FR_FINAL_V3.html", "articles/miradouro_banking_portugal_EN_FINAL.html"],
  ["articles/portugal-interface-atlantique-fr.html", "articles/portugal-atlantic-interface-en.html"],
];

const descriptionOverrides = {
  "articles/09-talent-map-fr.html": "Universités, polytechniques et écoles de code : cartographie documentée de celles et ceux qui forment les talents technologiques au Portugal.",
  "articles/09-talent-map-en.html": "Universities, polytechnics and coding schools: a documented map of the institutions training Portugal's technology talent.",
  "articles/miradouro-cloud-FR.html": "Salaires, compétences et géographie du cloud en Europe : où se situe le Portugal dans un marché dominé par les grands hubs technologiques ?",
  "articles/miradouro-cloud-EN.html": "Cloud salaries, skills and geography across Europe: where does Portugal stand in a market dominated by the largest technology hubs?",
  "articles/internet-exe-europe-fr.html": "En 2004, Nokia, Caramail, SAPO, Skyblog et Dailymotion dominaient nos usages. Une plongée dans l'Internet européen avant les grandes plateformes.",
  "articles/internet-exe-europe-part-2-fr.html": "Nokia, Skype, SAPO, OVHcloud : une cartographie des géants technologiques européens disparus, absorbés ou restés trop petits pour dominer.",
  "articles/internet-exe-europe-part-3-fr.html": "Comment la bulle Internet de 2000 a changé l'ambition technologique européenne, et ce que l'essor actuel de l'IA rejoue sans répéter le même scénario.",
};

const pairByFile = new Map();
for (const [fr, en] of pairs) {
  pairByFile.set(fr, { fr, en });
  pairByFile.set(en, { fr, en });
}

const relatedPairIndexes = [
  [1, 10, 8],
  [3, 0, 11],
  [1, 11, 3],
  [1, 2, 0],
  [9, 7, 8],
  [6, 7, 9],
  [5, 7, 9],
  [5, 6, 9],
  [9, 0, 11],
  [8, 7, 11],
  [0, 8, 2],
  [9, 8, 3],
];

const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const write = (relative, content) => fs.writeFileSync(path.join(root, relative), content, "utf8");

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function plainText(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function headlineFromTitle(title) {
  return title
    .replace(/\s+(?:\||·|-)\s+Miradouro(?:\s+Dossier)?$/i, "")
    .replace(/\s+-\s+Dossier Miradouro$/i, "")
    .trim();
}

function attribute(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function extractTagContent(html, tagName) {
  return html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"))?.[1] ?? "";
}

function extractMeta(html, key, value) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const keyMatch = tag.match(new RegExp(`${key}=["']([^"']+)["']`, "i"));
    if (keyMatch?.[1].toLowerCase() !== value.toLowerCase()) continue;
    const content = tag.match(/content=(['"])([\s\S]*?)\1/i)?.[2];
    if (content) return decodeEntities(content.trim());
  }
  return "";
}

function extractDate(html, name) {
  return html.match(new RegExp(`"${name}"\\s*:\\s*"(\\d{4}-\\d{2}-\\d{2})"`, "i"))?.[1]
    ?? extractMeta(html, "property", name === "datePublished" ? "article:published_time" : "article:modified_time")
    ?? "";
}

function cleanSeoFromHead(head) {
  head = head.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "");
  head = head.replace(/<meta\b[^>]*>/gi, (tag) => {
    if (/\bname=["'](?:description|author|robots|twitter:[^"']+)["']/i.test(tag)) return "";
    if (/\bproperty=["'](?:og:[^"']+|article:[^"']+)["']/i.test(tag)) return "";
    return tag;
  });
  head = head.replace(/<link\b[^>]*>/gi, (tag) => {
    if (/\brel=["']canonical["']/i.test(tag)) return "";
    if (/\brel=["']alternate["']/i.test(tag) && /\bhreflang=/i.test(tag)) return "";
    return tag;
  });
  return head.replace(/\n{3,}/g, "\n\n");
}

function injectSeo(relative, kind = "article") {
  const sourceHtml = read(relative);
  let html = sourceHtml;
  html = html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "");
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) throw new Error(`Missing <head> in ${relative}`);

  const originalHead = headMatch[1];
  const lang = html.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)?.[1]?.toLowerCase().startsWith("en") ? "en" : "fr";
  const title = plainText(extractTagContent(originalHead, "title"));
  const headline = headlineFromTitle(title);
  const description = descriptionOverrides[relative] || extractMeta(originalHead, "name", "description");
  if (!description) throw new Error(`Missing description for ${relative}`);

  const canonical = `${baseUrl}/${relative.replace(/\\/g, "/")}`;
  const locale = lang === "fr" ? "fr_FR" : "en_GB";
  const pair = pairByFile.get(relative);
  const published = extractDate(sourceHtml, "datePublished");
  const modified = extractDate(sourceHtml, "dateModified");

  const schema = kind === "map"
    ? {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: title.replace(/\s+[|·-]\s+.*$/, ""),
        description,
        url: canonical,
        inLanguage: lang,
        applicationCategory: "LifestyleApplication",
        image: defaultImage,
        author: { "@type": "Person", name: "Jonathan Dias", sameAs: "https://www.linkedin.com/in/jonathandiasreis/" },
      }
    : {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline,
        description,
        url: canonical,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        inLanguage: lang,
        author: { "@type": "Person", name: "Jonathan Dias", sameAs: "https://www.linkedin.com/in/jonathandiasreis/" },
        publisher: { "@type": "Organization", name: "Miradouro", url: baseUrl },
        image: [defaultImage],
        ...(published ? { datePublished: published } : {}),
        ...(modified ? { dateModified: modified } : {}),
      };

  const alternateLinks = pair
    ? [
        `<link rel="alternate" hreflang="fr" href="${baseUrl}/${pair.fr}">`,
        `<link rel="alternate" hreflang="en" href="${baseUrl}/${pair.en}">`,
        `<link rel="alternate" hreflang="x-default" href="${baseUrl}/${pair.fr}">`,
      ].join("\n")
    : "";

  const block = [
    `<meta name="description" content="${attribute(description)}">`,
    `<meta name="author" content="Jonathan Dias">`,
    `<meta name="robots" content="index, follow, max-image-preview:large">`,
    `<link rel="canonical" href="${canonical}">`,
    alternateLinks,
    `<meta property="og:type" content="${kind === "article" ? "article" : "website"}">`,
    `<meta property="og:site_name" content="Miradouro">`,
    `<meta property="og:locale" content="${locale}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${attribute(title)}">`,
    `<meta property="og:description" content="${attribute(description)}">`,
    `<meta property="og:image" content="${defaultImage}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Miradouro — la tech européenne depuis Lisbonne">`,
    ...(kind === "article" ? [`<meta property="article:author" content="https://www.linkedin.com/in/jonathandiasreis/">`] : []),
    ...(published ? [`<meta property="article:published_time" content="${published}">`] : []),
    ...(modified ? [`<meta property="article:modified_time" content="${modified}">`] : []),
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${attribute(title)}">`,
    `<meta name="twitter:description" content="${attribute(description)}">`,
    `<meta name="twitter:image" content="${defaultImage}">`,
    `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`,
  ].filter(Boolean).join("\n");

  let cleanedHead = cleanSeoFromHead(originalHead);
  cleanedHead = cleanedHead.replace(/<link\b[^>]*href=["']\.\.\/assets\/seo-related\.css["'][^>]*>\s*/gi, "");
  cleanedHead = cleanedHead.replace(/(<title>[\s\S]*?<\/title>)/i, `$1\n${block}`);
  if (kind === "article") cleanedHead += '\n<link rel="stylesheet" href="../assets/seo-related.css">\n';
  html = html.replace(headMatch[0], `<head>${cleanedHead}</head>`);
  if (kind === "article") html = injectRelated(html, relative, lang);
  write(relative, html);
}

function injectRelated(html, relative, lang) {
  html = html.replace(/\s*<nav\b[^>]*class=["']seo-related["'][\s\S]*?<\/nav>\s*/gi, "\n");
  const pairIndex = pairs.findIndex(([fr, en]) => relative === fr || relative === en);
  if (pairIndex < 0) return html;
  const suggestions = relatedPairIndexes[pairIndex].map((targetIndex) => {
    const target = pairs[targetIndex][lang === "fr" ? 0 : 1];
    const targetHtml = read(target);
    const label = headlineFromTitle(plainText(extractTagContent(targetHtml, "title")));
    return { href: path.basename(target), label };
  });
  const heading = lang === "fr" ? "À lire ensuite" : "Read next";
  const eyebrow = lang === "fr" ? "Continuer sur Miradouro" : "Continue on Miradouro";
  const links = suggestions.map(({ href, label }) => `      <a class="seo-related__link" href="${href}"><span>${label}</span><span class="seo-related__arrow" aria-hidden="true">→</span></a>`).join("\n");
  const nav = `\n<nav class="seo-related" aria-label="${heading}">\n  <div class="seo-related__inner">\n    <p class="seo-related__eyebrow">${eyebrow}</p>\n    <h2 class="seo-related__title">${heading}</h2>\n    <div class="seo-related__grid">\n${links}\n    </div>\n  </div>\n</nav>\n`;
  const footerIndex = html.search(/<footer\b/i);
  if (footerIndex >= 0) return `${html.slice(0, footerIndex)}${nav}${html.slice(footerIndex)}`;
  return html.replace(/<\/body>/i, `${nav}</body>`);
}

function updateHome() {
  const relative = "index.html";
  let html = read(relative);
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  const originalHead = headMatch[1];
  const title = plainText(extractTagContent(originalHead, "title"));
  const description = extractMeta(originalHead, "name", "description");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${baseUrl}/#website`, name: "Miradouro", url: `${baseUrl}/`, inLanguage: ["fr", "en"] },
      {
        "@type": "Blog",
        "@id": `${baseUrl}/#blog`,
        name: "Miradouro",
        description,
        url: `${baseUrl}/`,
        inLanguage: ["fr", "en"],
        author: { "@type": "Person", name: "Jonathan Dias", sameAs: "https://www.linkedin.com/in/jonathandiasreis/" },
        image: defaultImage,
      },
    ],
  };
  const block = [
    `<meta name="description" content="${attribute(description)}">`,
    `<meta name="author" content="Jonathan Dias">`,
    `<meta name="robots" content="index, follow, max-image-preview:large">`,
    `<link rel="canonical" href="${baseUrl}/">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Miradouro">`,
    `<meta property="og:locale" content="fr_FR">`,
    `<meta property="og:url" content="${baseUrl}/">`,
    `<meta property="og:title" content="${attribute(title)}">`,
    `<meta property="og:description" content="${attribute(description)}">`,
    `<meta property="og:image" content="${defaultImage}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Miradouro — la tech européenne depuis Lisbonne">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${attribute(title)}">`,
    `<meta name="twitter:description" content="${attribute(description)}">`,
    `<meta name="twitter:image" content="${defaultImage}">`,
    `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`,
  ].join("\n");
  let cleanedHead = cleanSeoFromHead(originalHead);
  cleanedHead = cleanedHead.replace(/(<title>[\s\S]*?<\/title>)/i, `$1\n${block}`);
  html = html.replace(headMatch[0], `<head>${cleanedHead}</head>`);
  write(relative, html);
}

function markNoIndex(relative) {
  let html = read(relative);
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) return;
  let head = headMatch[1].replace(/<meta\b[^>]*name=["']robots["'][^>]*>\s*/gi, "");
  head = head.replace(/(<title>[\s\S]*?<\/title>)/i, '$1\n<meta name="robots" content="noindex, nofollow">');
  html = html.replace(headMatch[0], `<head>${head}</head>`);
  write(relative, html);
}

function buildSitemap() {
  const entries = [
    { relative: "", alternates: null },
    { relative: "miradouro-map.html", alternates: { fr: "miradouro-map.html", en: "miradouro-map-en.html" } },
    { relative: "miradouro-map-en.html", alternates: { fr: "miradouro-map.html", en: "miradouro-map-en.html" } },
    ...pairs.flatMap(([fr, en]) => [
      { relative: fr, alternates: { fr, en } },
      { relative: en, alternates: { fr, en } },
    ]),
  ];
  const urls = entries.map(({ relative, alternates }) => {
    const links = alternates
      ? `\n    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/${alternates.fr}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/${alternates.en}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${alternates.fr}"/>`
      : "";
    return `  <url>\n    <loc>${baseUrl}/${relative}</loc>\n    <lastmod>${today}</lastmod>${links}\n  </url>`;
  }).join("\n");
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);
  write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
}

updateHome();
for (const [fr, en] of pairs) {
  injectSeo(fr, "article");
  injectSeo(en, "article");
}

pairByFile.set("miradouro-map.html", { fr: "miradouro-map.html", en: "miradouro-map-en.html" });
pairByFile.set("miradouro-map-en.html", { fr: "miradouro-map.html", en: "miradouro-map-en.html" });
injectSeo("miradouro-map.html", "map");
injectSeo("miradouro-map-en.html", "map");

const noIndexFiles = [
  "merci.html",
  "index-four-scenarios-mockup.html",
  "index-new-identity-mockup.html",
  "index-observatory-miradouro-colors-mockup.html",
  "index-type-only-scenarios-mockup.html",
  "index-vintage-mockup.html",
  "typography-mockup.html",
  "articles/internet-exe-europe-fr-mockup.html",
  "articles/internet-exe-europe-part-3-fr-proposition-courte.html",
  "articles/articles/ai-music-fr.html",
  "articles/articles/ai-music-en.html",
];
for (const relative of noIndexFiles) {
  if (fs.existsSync(path.join(root, relative))) markNoIndex(relative);
}

buildSitemap();
console.log(`SEO metadata updated for ${pairs.length * 2 + 3} public pages.`);
