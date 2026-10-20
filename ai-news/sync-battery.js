// Copies the latest Cell Dispatch battery page into ai-news/battery.html so the
// merged site can show it. Usage: node ai-news/sync-battery.js <saved-artifact.html>
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

const out = path.join(__dirname, "battery.html");
fs.writeFileSync(out, html);
console.log(`OK battery.html ${html.length} bytes`);
