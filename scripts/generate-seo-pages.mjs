import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { seoPages } from "../src/seoPages.js";

const outputDirectory = resolve("dist");
const shell = await readFile(resolve(outputDirectory, "index.html"), "utf8");

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setMetaContent(html, key, value) {
  const escaped = escapeAttribute(value);
  const pattern = new RegExp(`(<meta\\s+${key.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\s+content=")[^"]*("\\s*/?>)`, "i");
  return html.replace(pattern, `$1${escaped}$2`);
}

for (const page of seoPages) {
  const url = `https://mftgworks.org/${page.slug}/`;
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.type === "areas" ? "WebPage" : "Service",
        "@id": `${url}#${page.type === "areas" ? "webpage" : "service"}`,
        name: page.eyebrow,
        description: page.description,
        url,
        provider: { "@id": "https://mftgworks.org/#business" },
        areaServed: { "@type": "City", name: "Melbourne" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mftgworks.org/" },
          { "@type": "ListItem", position: 2, name: page.eyebrow, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  let html = shell.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(page.seoTitle)}</title>`);
  html = setMetaContent(html, 'name="description"', page.description);
  html = setMetaContent(html, 'property="og:url"', url);
  html = setMetaContent(html, 'property="og:title"', page.seoTitle);
  html = setMetaContent(html, 'property="og:description"', page.description);
  html = setMetaContent(html, 'name="twitter:title"', page.seoTitle);
  html = setMetaContent(html, 'name="twitter:description"', page.description);
  html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/i, `$1${url}$2`);
  html = html.replace("</head>", `    <script id="page-structured-data" type="application/ld+json">${JSON.stringify(pageSchema).replaceAll("<", "\\u003c")}</script>\n  </head>`);

  const pageDirectory = resolve(outputDirectory, page.slug);
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(resolve(pageDirectory, "index.html"), html, "utf8");
}

console.log(`Generated ${seoPages.length} search landing pages.`);
