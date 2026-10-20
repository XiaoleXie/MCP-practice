# AI 情报台 · Daily update procedure

The page `index.html` renders stories from `news.json`. A scheduled task runs this
procedure once a day. Follow it exactly; only `news.json` changes on a normal day.

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
6. Validate: `node ai-news/validate.js` must print `OK`.
7. Commit (`AI news: daily update YYYY-MM-DD`) and `git push -u origin ccr-9268cd2a-a3i3mk`.
   If nothing new was found, still bump `updated`, commit and publish.
8. Republish the page: first Artifact `action: "read"` on the URL above, then Artifact
   publish with `url` set to that URL, `file_path: ai-news/index.html`, and
   `files: {"news.json": "ai-news/news.json"}`.

## Item schema

```json
{
  "d": "2026-10-20",          // publication/event date, YYYY-MM-DD
  "approx": true,              // optional: only the month is known (use day 01 or 15)
  "co": "alibaba",             // company key, see list below; unknown -> "other" + coName
  "coName": "Monday.com",      // optional display name when co is "other" or a new key
  "r": "cn",                   // region: us | cn | eu | kr | jp | in | me | global
  "cat": "model",              // model | layoff | safety | biz
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

Details need 2–4 paragraphs in each language covering what happened, the key numbers
and the context. Chinese and English must say the same thing.
