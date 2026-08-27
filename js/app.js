(function () {
  const state = {
    lang: "en", // "en" | "zh"
    country: "ALL"
  };

  const UI_TEXT = {
    en: {
      title: "Lithium-Ion Battery Industry News",
      subtitle: "Tracking gigafactories, policy, and supply chains around the world",
      all: "All Countries",
      updated: "Updated",
      source: "Source",
      noResults: "No news for this country yet.",
      countLabel: (n) => `${n} ${n === 1 ? "story" : "stories"}`
    },
    zh: {
      title: "锂离子电池产业新闻",
      subtitle: "追踪全球超级工厂、产业政策与供应链动态",
      all: "全部国家",
      updated: "更新时间",
      source: "来源",
      noResults: "该国家暂无相关新闻。",
      countLabel: (n) => `共 ${n} 条`
    }
  };

  const chipsEl = document.getElementById("country-chips");
  const gridEl = document.getElementById("news-grid");
  const langToggleEl = document.getElementById("lang-toggle");
  const titleEl = document.getElementById("site-title");
  const subtitleEl = document.getElementById("site-subtitle");
  const countEl = document.getElementById("result-count");

  function countryMeta(code) {
    return COUNTRIES.find((c) => c.code === code);
  }

  function renderChips() {
    const t = UI_TEXT[state.lang];
    const allChip = makeChip("ALL", `🌍 ${t.all}`, NEWS_DATA.length);
    chipsEl.innerHTML = "";
    chipsEl.appendChild(allChip);

    COUNTRIES.forEach((c) => {
      const count = NEWS_DATA.filter((n) => n.country === c.code).length;
      if (count === 0) return;
      const label = `${c.flag} ${state.lang === "en" ? c.name_en : c.name_zh}`;
      chipsEl.appendChild(makeChip(c.code, label, count));
    });
  }

  function makeChip(code, label, count) {
    const btn = document.createElement("button");
    btn.className = "chip" + (state.country === code ? " chip--active" : "");
    btn.type = "button";
    btn.innerHTML = `<span>${label}</span><span class="chip__count">${count}</span>`;
    btn.addEventListener("click", () => {
      state.country = code;
      render();
    });
    return btn;
  }

  function renderCards() {
    const t = UI_TEXT[state.lang];
    const items =
      state.country === "ALL"
        ? NEWS_DATA
        : NEWS_DATA.filter((n) => n.country === state.country);

    countEl.textContent = t.countLabel(items.length);
    gridEl.innerHTML = "";

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = t.noResults;
      gridEl.appendChild(empty);
      return;
    }

    items.forEach((item) => {
      const meta = countryMeta(item.country);
      const card = document.createElement("article");
      card.className = "card";

      const title = state.lang === "en" ? item.title_en : item.title_zh;
      const desc = state.lang === "en" ? item.desc_en : item.desc_zh;
      const countryName =
        state.lang === "en" ? meta.name_en : meta.name_zh;

      card.innerHTML = `
        <div class="card__tag">
          <span class="card__flag">${meta.flag}</span>
          <span>${countryName}</span>
        </div>
        <h2 class="card__title">${title}</h2>
        <p class="card__desc">${desc}</p>
        <div class="card__footer">
          <span class="card__date">${t.updated}: ${item.date}</span>
          <a class="card__source" href="${item.source_url}" target="_blank" rel="noopener noreferrer">${t.source}: ${item.source_name} ↗</a>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  function renderHeader() {
    const t = UI_TEXT[state.lang];
    titleEl.textContent = t.title;
    subtitleEl.textContent = t.subtitle;
    langToggleEl.textContent = state.lang === "en" ? "中文" : "English";
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  }

  function render() {
    renderHeader();
    renderChips();
    renderCards();
  }

  langToggleEl.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "zh" : "en";
    render();
  });

  render();
})();
