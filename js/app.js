(function () {
  const state = { country: "ALL" };

  const chipsEl = document.getElementById("country-chips");
  const gridEl = document.getElementById("news-grid");
  const themeToggleEl = document.getElementById("theme-toggle");
  const countEl = document.getElementById("result-count");

  function countryMeta(code) {
    return COUNTRIES.find((c) => c.code === code);
  }

  function makeChip(code, label, count) {
    const btn = document.createElement("button");
    btn.className = "chip" + (state.country === code ? " chip--active" : "");
    btn.type = "button";
    btn.innerHTML = `<span>${label}</span><span class="chip__count mono">${count}</span>`;
    btn.addEventListener("click", () => {
      state.country = code;
      render();
    });
    return btn;
  }

  function renderChips() {
    chipsEl.innerHTML = "";
    chipsEl.appendChild(makeChip("ALL", `🌍 All Countries <span class="zh">/ 全部国家</span>`, NEWS_DATA.length));
    COUNTRIES.forEach((c) => {
      const count = NEWS_DATA.filter((n) => n.country === c.code).length;
      if (count === 0) return;
      const label = `${c.flag} ${c.name_en} <span class="zh">/ ${c.name_zh}</span>`;
      chipsEl.appendChild(makeChip(c.code, label, count));
    });
  }

  function renderCards() {
    const items = state.country === "ALL" ? NEWS_DATA : NEWS_DATA.filter((n) => n.country === state.country);
    countEl.innerHTML = `${items.length} ${items.length === 1 ? "story" : "stories"} <span class="zh">· 共 ${items.length} 条</span>`;
    gridEl.innerHTML = "";

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.innerHTML = `No news for this country yet. <span class="zh">该国家暂无相关新闻。</span>`;
      gridEl.appendChild(empty);
      return;
    }

    items.forEach((item) => {
      const meta = countryMeta(item.country);
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <div class="card__tag">
          <span class="card__flag">${meta.flag}</span>
          <span>${meta.name_en}</span>
          <span class="card__tag-zh">/ ${meta.name_zh}</span>
        </div>
        <div class="card__title-block">
          <h2 class="card__title">${item.title_en}</h2>
          <h3 class="card__title-zh">${item.title_zh}</h3>
        </div>
        <div class="card__desc-block">
          <p class="card__desc">${item.desc_en}</p>
          <p class="card__desc-zh">${item.desc_zh}</p>
        </div>
        <div class="card__footer">
          <span class="card__date">Updated <span class="zh">/ 更新</span>: ${item.date}</span>
          <a class="card__source" href="${item.source_url}" target="_blank" rel="noopener noreferrer">Source <span class="zh">/ 来源</span>: ${item.source_name} ↗</a>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  function render() {
    renderChips();
    renderCards();
  }

  themeToggleEl.addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    let next;
    if (!current) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      next = prefersDark ? "light" : "dark";
    } else {
      next = current === "dark" ? "light" : "dark";
    }
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch (e) {}

  render();
})();
