// Copies the latest Immigration Policy Briefing into ai-news/immigration.html so the
// merged site can show it in its own tab. Usage: node ai-news/sync-immigration.js <saved-artifact.html>
// The input is the file the Artifact tool's "read" action saves for
// https://claude.ai/artifact/LnUGC3HFJ5ruKbSt1kNVGH. Its colors and layout are kept as is:
// the only change is a small script so links work inside the frame.
const fs = require("fs");
const path = require("path");

const input = process.argv[2];
if (!input) { console.error("usage: node ai-news/sync-immigration.js <saved-artifact.html>"); process.exit(1); }
let html = fs.readFileSync(input, "utf8");

if (!/<title>Immigration Policy Briefing<\/title>/i.test(html)) throw new Error("no Immigration Policy Briefing <title>; is this the right file?");
if (!/<meta charset/i.test(html.slice(0, 2000))) throw new Error("briefing page has no charset meta");

// In an srcdoc frame "#id" links resolve against the parent URL, so scroll in-page
// ourselves (after the page's own handlers), and open external links in a new tab.
const fix = `<script id="ai-desk-frame-fix">
(function(){
  document.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    var id = decodeURIComponent(a.getAttribute("href").slice(1));
    var el = id ? document.getElementById(id) : null;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (!id) window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelectorAll('a[href^="http"]:not([target])').forEach(function(a){
    a.target = "_blank"; a.rel = "noopener";
  });
})();
</script>
`;
const at = html.search(/<\/body>(?![\s\S]*<\/body>)/i);
html = at >= 0 ? html.slice(0, at) + fix + html.slice(at) : html + fix;

const out = path.join(__dirname, "immigration.html");
fs.writeFileSync(out, html);
console.log(`OK immigration.html ${html.length} bytes`);
