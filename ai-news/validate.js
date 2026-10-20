// Checks ai-news/news.json against the schema in UPDATE.md. Prints OK or the problems.
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "news.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));
const problems = [];
const date = /^\d{4}-\d{2}-\d{2}$/;
const regions = ["us", "cn", "eu", "kr", "jp", "in", "me", "global"];
const cats = ["model", "layoff", "safety", "biz"];

if (!date.test(data.updated)) problems.push("updated is not YYYY-MM-DD");
if (!Array.isArray(data.items)) problems.push("items is not an array");

const seen = new Set();
(data.items || []).forEach((n, i) => {
  const at = `item ${i} (${n.zt || n.et || "?"})`;
  if (!date.test(n.d || "")) problems.push(`${at}: bad d`);
  if (!n.co) problems.push(`${at}: missing co`);
  if (!regions.includes(n.r)) problems.push(`${at}: bad r "${n.r}"`);
  if (!cats.includes(n.cat)) problems.push(`${at}: bad cat "${n.cat}"`);
  for (const k of ["zt", "et", "zs", "es", "src", "u"]) if (typeof n[k] !== "string" || !n[k].trim()) problems.push(`${at}: missing ${k}`);
  for (const k of ["zd", "ed"]) if (!Array.isArray(n[k]) || n[k].length < 2) problems.push(`${at}: ${k} needs 2+ paragraphs`);
  if (n.u && !/^https:\/\//.test(n.u)) problems.push(`${at}: u must be https`);
  const key = n.u + "|" + n.zt;
  if (seen.has(key)) problems.push(`${at}: duplicate`);
  seen.add(key);
  if (i > 0 && n.d > data.items[i - 1].d) problems.push(`${at}: not sorted newest first`);
});

const leads = (data.items || []).filter(n => n.lead).length;
if (leads > 1) problems.push(`${leads} items have lead: true; keep exactly one`);

if (problems.length) { console.log(problems.join("\n")); process.exit(1); }
console.log("OK");
