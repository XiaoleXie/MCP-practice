function starString(rating) {
  var full = Math.round(rating * 2) / 2;
  var out = "";
  for (var i = 1; i <= 5; i++) {
    out += full >= i - 0.5 ? "★" : "☆";
  }
  return out;
}

function mapsUrl(address) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
}

function render(activeCategory) {
  var list = RESTAURANTS.slice().sort(function (a, b) { return a.distance - b.distance; });
  if (activeCategory && activeCategory !== "All") {
    list = list.filter(function (r) { return r.category === activeCategory; });
  }

  var listEl = document.getElementById("list");
  listEl.innerHTML = "";

  list.forEach(function (r) {
    var card = document.createElement("div");
    card.className = "card";

    var isFeatured = FEATURED_CATEGORY && r.category === FEATURED_CATEGORY;

    card.innerHTML =
      '<div class="marker"><span class="mi">' + r.distance.toFixed(1) + '</span><span class="unit">miles</span></div>' +
      '<div class="card-body">' +
        (isFeatured ? '<span class="featured-badge">Saturday pick</span><br>' : '') +
        '<div class="card-top">' +
          '<div><h3>' + r.name + '</h3><span class="tag">' + r.category + '</span></div>' +
          '<div class="rating"><span class="stars">' + starString(r.rating) + '</span><span class="num">' + r.rating.toFixed(1) + '</span><span class="count">(' + r.reviews.toLocaleString() + ')</span></div>' +
        '</div>' +
        '<p class="blurb">' + r.blurb + '</p>' +
        '<div class="meta"><span>' + r.address + '</span><a href="' + mapsUrl(r.address) + '" target="_blank" rel="noopener">Directions →</a></div>' +
      '</div>';

    listEl.appendChild(card);
  });
}

function renderFilters() {
  var cats = ["All"].concat(
    RESTAURANTS.map(function (r) { return r.category; })
      .filter(function (c, i, arr) { return arr.indexOf(c) === i; })
  );
  var filtersEl = document.getElementById("filters");
  filtersEl.innerHTML = "";

  cats.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.textContent = cat;
    if (cat === "All") btn.classList.add("active");
    btn.addEventListener("click", function () {
      Array.prototype.forEach.call(filtersEl.children, function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      render(cat);
    });
    filtersEl.appendChild(btn);
  });
}

function renderPickBand() {
  var valueEl = document.getElementById("pickValue");
  var hintEl = document.querySelector(".pick-band .hint");
  if (FEATURED_CATEGORY) {
    valueEl.textContent = FEATURED_CATEGORY;
    hintEl.textContent = "Craving something else? Just say the word.";
  }
}

renderFilters();
renderPickBand();
render("All");
