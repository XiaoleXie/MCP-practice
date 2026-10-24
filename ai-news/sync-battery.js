// Copies the latest Cell Dispatch battery page into ai-news/battery.html so the
// merged site can show it, restyled with battery-skin.css. Usage: node ai-news/sync-battery.js <saved-artifact.html>
// The input is the file the Artifact tool's "read" action saves for
// https://claude.ai/artifact/QWbnzmKHMjPhUvjStq9mXE (it may include the publish skeleton).
const fs = require("fs");
const path = require("path");

const input = process.argv[2];
if (!input) { console.error("usage: node ai-news/sync-battery.js <saved-artifact.html>"); process.exit(1); }
let html = fs.readFileSync(input, "utf8");

// Drop the outer publish skeleton if present: keep the inner document only.
const inner = html.toLowerCase().indexOf("<!doctype html>", 1);
if (inner > 0) {
  html = html.slice(inner).replace(/\s*<\/body>\s*<\/html>\s*$/i, "");
  if (!/<\/html>\s*$/i.test(html)) html += "\n</html>";
}

if (!/<meta charset/i.test(html.slice(0, 2000))) throw new Error("battery page has no charset meta");
if (!/<title>/i.test(html)) throw new Error("battery page has no <title>; is this the right file?");

// Links inside the embedded page must open outside the frame.
if (!/<base\s/i.test(html)) html = html.replace(/<head>/i, '<head>\n  <base target="_blank">');

// Restyle it like the AI desk: fonts plus battery-skin.css, last in <head> so it wins.
const skin = fs.readFileSync(path.join(__dirname, "battery-skin.css"), "utf8");
const fonts = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Noto+Sans+SC:wght@400;500;700;900&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap">';
html = html.replace(/<\/head>/i, () => `  ${fonts}\n  <style id="ai-desk-skin">\n${skin}\n  </style>\n</head>`);

// Stamp the sync date (US Central, like the daily task) so the site can show "MM/DD/YYYY 已更新".
const synced = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date());
html = html.replace(/<head>/i, m => `${m}\n  <meta name="ai-desk-synced" content="${synced}">`);

const out = path.join(__dirname, "battery.html");
fs.writeFileSync(out, html);
console.log(`OK battery.html ${html.length} bytes`);
