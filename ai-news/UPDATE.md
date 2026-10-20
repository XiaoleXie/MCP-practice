# AI 情报台 · Daily update procedure

The page `index.html` renders stories from `news.json`, and its 电池情报 switch shows
`battery.html`, a daily copy of the Cell Dispatch battery page. A scheduled task runs this
procedure once a day. Follow it exactly; only `news.json` and `battery.html` change on a
normal day.

- Repository: `xiaolexie/MCP-practice`, branch `ccr-9268cd2a-a3i3mk`
- Published page: https://claude.ai/artifact/Fw8QZUt2dzEeTN4qZ8SEUY

## Steps

1. Check out the branch and pull the latest commit:
   `git fetch origin ccr-9268cd2a-a3i3mk && git checkout ccr-9268cd2a-a3i3mk && git pull origin ccr-9268cd2a-a3i3mk`
2. Read `ai-news/news.json`. Note `updated` and the URLs/titles already present.
3. Search the web for news published since `updated` (use today's date in queries). Cover:
   - Model launches and major model updates from any country: OpenAI, Anthropic Claude,
     Google Gemini, Meta, xAI, Microsoft, Amazon, Apple, NVIDIA; DeepSeek, Alibaba Qwen
     (千问), Tencent Hunyuan and WorkBuddy (腾讯), ByteDance Doubao/Seed (字节), Baidu ERNIE
     (百度), Moonshot Kimi, Zhipu GLM, MiniMax; Mistral and other European labs; Japan,
     Korea, India, Middle East and anywhere else.
   - AI-related layoffs anywhere (US, China, India, Europe, ...), including trackers.
   - CNN technology coverage of AI, and public X posts from company leaders.
   Run several searches in one turn. Prefer primary or major outlets; aggregators are OK
   when nothing better exists, and say so in the details.
4. Add one item per distinct story that is not already in the file (same URL or same
   event = duplicate; update the existing item instead if there is a material new fact).
   Never invent facts, numbers or quotes; write only what the sources say.
5. Set `updated` to today's date (YYYY-MM-DD). Keep `items` sorted newest first.
   Move `"lead": true` to the single most important story of the last few days (a major
   model launch or a large layoff); exactly one item may carry it. It shows as 今日焦点.
6. Validate: `node ai-news/validate.js` must print `OK`.
7. If nothing new was found, still bump `updated`.
   Model ranking (`ai-news/models.json`, the 模型排行 tab): when a search turns up newer
   third-party scores (Artificial Analysis Intelligence Index, Vals Terminal-Bench 4.0,
   Humanity's Last Exam, AA-LCR, LMArena WebDev) or a major new model gets scored, update
   or add that model and set its `updated`. Never use vendor self-reported numbers; leave
   a metric out when no third-party score exists.
   Conferences (`ai-news/conferences.json`, the AI 会议 tab): when official dates, venues or
   registration fees are announced, update the entry (drop `tentative`/`approx`, fill `e`,
   replace "待公布" fees; set `feeReported: true` for fees from media or resellers). After a
   conference ends, replace it with its next edition once that is announced.
8. Refresh the battery desk. The site also shows the Cell Dispatch battery page
   (https://claude.ai/artifact/QWbnzmKHMjPhUvjStq9mXE, kept up to date by its own daily
   tasks; never edit or republish that artifact). Call Artifact `action: "read"` on it,
   then run `node ai-news/sync-battery.js <path of the saved HTML file>`; it must print
   `OK` (it also applies `ai-news/battery-skin.css`, the AI-desk look). If the read fails,
   keep the existing `ai-news/battery.html`.
9. Commit (`AI news: daily update YYYY-MM-DD`) and `git push -u origin ccr-9268cd2a-a3i3mk`.
10. Republish the page: first Artifact `action: "read"` on the AI page URL above, then
   Artifact publish with `url` set to that URL, `file_path: ai-news/index.html`, and
   `files: {"news.json": "ai-news/news.json", "models.json": "ai-news/models.json", "conferences.json": "ai-news/conferences.json", "battery.html": "ai-news/battery.html"}`.

## Item schema

```json
{
  "d": "2026-10-20",          // publication/event date, YYYY-MM-DD
  "approx": true,              // optional: only the month is known (use day 01 or 15)
  "co": "alibaba",             // company key, see list below; unknown -> "other" + coName
  "coName": "Monday.com",      // optional display name when co is "other" or a new key
  "lead": true,                // optional: the one story featured as 今日焦点
  "r": "cn",                   // region: us | cn | eu | kr | jp | in | me | global
  "cat": "model",              // model | layoff | safety | biz
  "tags": ["Qwen", "Qwen 4", "X"], // optional: product/model names, topics, and "X"/"CNN" for those sources
  "zt": "中文标题", "et": "English title",
  "zs": "一句中文摘要", "es": "One-sentence English summary",
  "zd": ["中文详情段落 1", "段落 2", "段落 3"],
  "ed": ["English detail paragraph 1", "paragraph 2", "paragraph 3"],
  "src": "Source name", "u": "https://source.url"
}
```

Company keys the page knows: openai, anthropic, google, meta, deepseek, alibaba, tencent,
bytedance, baidu, moonshot, zhipu, minimax, xai, microsoft, amazon, nvidia, oracle,
salesforce, mistral, softbank, sarvam, other.

Give each item 1–3 `tags`: the product or model family (Qwen, Claude, Gemini 4 Argon,
WorkBuddy, ...), a key topic when there is no product (IPO, Instagram, AI 安全 Safety), and
"X" or "CNN" when the source is an X post or CNN. Reuse existing tag spellings.

Details need 2–4 paragraphs in each language covering what happened, the key numbers
and the context. Chinese and English must say the same thing.
