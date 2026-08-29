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

// Real dish photos aren't embedded here — they'd mean copying copyrighted
// Yelp/Google/restaurant images without a license, and the artifact host's
// content policy blocks hotlinking external images anyway. This links out
// to a live image search instead, so one click shows the actual plate.
function dishPhotoSearchUrl(restaurantName, dishName) {
  return "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(restaurantName + " " + dishName);
}

var SPICE_LABELS = ["No spice", "Mild", "Medium", "Hot"];

function spiceGlyph(level) {
  var out = "";
  for (var i = 1; i <= 3; i++) out += i <= level ? "🌶" : "";
  return level === 0 ? '<span class="spice none">' + SPICE_LABELS[0] + '</span>'
    : '<span class="spice"><span class="peppers">' + out + '</span>' + SPICE_LABELS[level] + '</span>';
}

// Small illustrated glyphs standing in for a dish photo — built from basic
// shapes so they stay crisp at icon size and read at a glance, not photos.
var DISH_ICONS = {
  hibachi: '<ellipse cx="24" cy="30" rx="15" ry="6" class="ln"/><rect x="14" y="18" width="18" height="9" rx="3" class="ln fill-a"/><line x1="17" y1="21" x2="29" y2="21" class="ln thin"/><line x1="17" y1="24" x2="29" y2="24" class="ln thin"/><path d="M20 15c0-3 3-3 2-6 2 1 4 3 3 6" class="ln fill-b"/>',
  sushi: '<circle cx="24" cy="24" r="12" class="ln fill-a"/><circle cx="24" cy="24" r="12" class="ln" fill="none"/><circle cx="24" cy="24" r="7" fill="none" class="ln thin"/><circle cx="24" cy="17" r="2" class="fill-c"/>',
  stirfry: '<path d="M10 26a14 6 0 0 0 28 0z" class="ln fill-a"/><path d="M12 26h24" class="ln thin"/><path d="M17 18c1-2-1-3 0-5M24 16c1-2-1-3 0-5M31 18c1-2-1-3 0-5" class="ln thin"/>',
  ceviche: '<path d="M9 24a15 9 0 0 0 30 0z" class="ln fill-a"/><circle cx="19" cy="23" r="2" class="fill-c"/><circle cx="25" cy="26" r="2" class="fill-c"/><circle cx="30" cy="22" r="2" class="fill-c"/><path d="M31 10a6 6 0 0 1 6 6h-6z" class="ln fill-b"/>',
  roast: '<ellipse cx="22" cy="20" rx="9" ry="7" class="ln fill-a"/><path d="M27 25c4 2 6 6 9 6" class="ln thin"/><path d="M34 29a2 2 0 1 1 3 1" class="ln thin"/>',
  burger: '<path d="M12 20a12 7 0 0 1 24 0z" class="ln fill-a"/><rect x="11" y="21" width="26" height="4" class="ln fill-b"/><rect x="10" y="26" width="28" height="5" rx="2.5" class="ln"/><circle cx="18" cy="15" r="0.8" class="fill-c"/><circle cx="24" cy="13.5" r="0.8" class="fill-c"/><circle cx="30" cy="15" r="0.8" class="fill-c"/>',
  tenders: '<rect x="8" y="18" width="9" height="20" rx="4.5" class="ln fill-a"/><rect x="19.5" y="14" width="9" height="24" rx="4.5" class="ln fill-a"/><rect x="31" y="19" width="9" height="19" rx="4.5" class="ln fill-a"/>',
  shake: '<path d="M16 14h16l-2 22a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2z" class="ln fill-a"/><line x1="24" y1="8" x2="27" y2="14" class="ln thin"/><path d="M18 20h12" class="ln thin"/>',
  pizza: '<path d="M24 10l14 26H10z" class="ln fill-a"/><path d="M13 30l11-18 11 18" class="ln thin" fill="none"/><circle cx="22" cy="24" r="1.6" class="fill-c"/><circle cx="27" cy="27" r="1.6" class="fill-c"/><circle cx="24" cy="20" r="1.6" class="fill-c"/>',
  knots: '<circle cx="18" cy="24" r="8" class="ln fill-a" fill="none"/><circle cx="30" cy="24" r="8" class="ln fill-a" fill="none"/>',
  wrap: '<path d="M24 8l12 30a14 6 0 0 1-24 0z" class="ln fill-a"/><line x1="18" y1="24" x2="30" y2="24" class="ln thin"/><line x1="20" y1="30" x2="28" y2="30" class="ln thin"/>',
  fries: '<path d="M14 20h20l-2 17a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z" class="ln fill-a"/><line x1="19" y1="10" x2="18" y2="20" class="ln thin"/><line x1="24" y1="8" x2="24" y2="20" class="ln thin"/><line x1="29" y1="10" x2="30" y2="20" class="ln thin"/>',
  wings: '<path d="M10 30c4-10 12-14 16-10-2 6-10 8-16 10z" class="ln fill-a"/><path d="M38 30c-4-10-12-14-16-10 2 6 10 8 16 10z" class="ln fill-a"/>',
  noodles: '<path d="M9 24a15 9 0 0 0 30 0z" class="ln fill-a"/><path d="M15 22c2-3 1-5 3-7M22 20c2-3 1-5 3-7M29 22c2-3 1-5 3-7" class="ln thin"/><line x1="30" y1="12" x2="36" y2="8" class="ln"/><line x1="33" y1="14" x2="39" y2="10" class="ln"/>',
  curry: '<path d="M9 24a15 9 0 0 0 30 0z" class="ln fill-a"/><path d="M17 22a7 4 0 0 1 14 0" class="ln thin" fill="none"/><line x1="34" y1="10" x2="30" y2="20" class="ln"/><ellipse cx="34" cy="9" rx="2" ry="3" class="ln"/>',
  soup: '<path d="M9 24a15 9 0 0 0 30 0z" class="ln fill-a"/><path d="M18 14c1-2-1-3 0-5M24 12c1-2-1-3 0-5M30 14c1-2-1-3 0-5" class="ln thin"/>',
  bbq: '<rect x="9" y="22" width="30" height="12" rx="3" class="ln fill-a" fill="none"/><ellipse cx="18" cy="28" rx="5" ry="3.5" class="ln fill-b"/><ellipse cx="30" cy="28" rx="5" ry="3.5" class="ln fill-b"/><line x1="9" y1="17" x2="39" y2="17" class="ln thin"/>',
  bibimbap: '<path d="M9 24a15 9 0 0 0 30 0z" class="ln fill-a"/><circle cx="19" cy="23" r="2.2" class="fill-b"/><circle cx="24" cy="26" r="2.2" class="fill-c"/><circle cx="29" cy="23" r="2.2" class="fill-b"/>',
  hotpot: '<rect x="10" y="20" width="28" height="14" rx="3" class="ln fill-a"/><line x1="24" y1="20" x2="24" y2="34" class="ln thin"/><rect x="8" y="17" width="32" height="4" rx="2" class="ln"/><path d="M17 13c1-2-1-3 0-5M31 13c1-2-1-3 0-5" class="ln thin"/>',
  sauce: '<rect x="19" y="18" width="10" height="18" rx="2" class="ln fill-a"/><rect x="21" y="12" width="6" height="6" rx="1" class="ln"/><circle cx="14" cy="30" r="1.6" class="fill-c"/><circle cx="34" cy="26" r="1.6" class="fill-c"/>',
  friedchicken: '<path d="M10 30c4-10 12-14 16-10-2 6-10 8-16 10z" class="ln fill-a"/><path d="M38 30c-4-10-12-14-16-10 2 6 10 8 16 10z" class="ln fill-a"/><circle cx="16" cy="24" r="1.2" class="fill-b"/><circle cx="32" cy="24" r="1.2" class="fill-b"/>',
  comfort: '<path d="M9 24a15 9 0 0 0 30 0z" class="ln fill-a"/><path d="M19 20c1 3-1 4 0 7M24 18c1 3-1 4 0 7M29 20c1 3-1 4 0 7" class="ln thin"/>',
  dessert: '<path d="M15 20h18l-2 14a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2z" class="ln fill-a"/><path d="M17 20c2-4 12-4 14 0" class="ln thin" fill="none"/><circle cx="24" cy="14" r="2" class="fill-c"/>',
  boil: '<path d="M14 20c0-4 4-6 10-6s10 2 10 6l-2 14a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3z" class="ln fill-a"/><line x1="16" y1="16" x2="32" y2="16" class="ln thin"/><circle cx="20" cy="26" r="1.6" class="fill-c"/><circle cx="28" cy="29" r="1.6" class="fill-c"/>',
  fish: '<path d="M10 24c6-6 18-6 24 0-6 6-18 6-24 0z" class="ln fill-a"/><path d="M34 24l6-5v10z" class="ln fill-b"/><circle cx="16" cy="22" r="1.2" class="fill-c"/>',
  pupusa: '<ellipse cx="24" cy="26" rx="13" ry="6" class="ln fill-a"/><path d="M14 26h20" class="ln thin"/><circle cx="20" cy="24" r="1.4" class="fill-b"/><circle cx="28" cy="25" r="1.4" class="fill-b"/>',
  waffle: '<rect x="10" y="12" width="28" height="20" rx="3" class="ln fill-a"/><line x1="17" y1="12" x2="17" y2="32" class="ln thin"/><line x1="24" y1="12" x2="24" y2="32" class="ln thin"/><line x1="31" y1="12" x2="31" y2="32" class="ln thin"/><line x1="10" y1="19" x2="38" y2="19" class="ln thin"/><line x1="10" y1="25" x2="38" y2="25" class="ln thin"/><circle cx="30" cy="16" r="1.4" class="fill-c"/>'
};

function dishIconSvg(key) {
  var inner = DISH_ICONS[key] || DISH_ICONS.bbq;
  return '<svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">' + inner + '</svg>';
}

function dishRow(dish, restaurantName) {
  return (
    '<div class="dish-row">' +
      '<div class="dish-icon">' + dishIconSvg(dish.icon) + '</div>' +
      '<div class="dish-info">' +
        '<div class="dish-top"><span class="dish-name">' + dish.name + '</span><span class="dish-price">' + dish.price + '</span></div>' +
        '<div class="dish-meta">' +
          '<span class="rating"><span class="stars">' + starString(dish.stars) + '</span><span class="num">' + dish.stars.toFixed(1) + '</span><span class="count">(' + dish.reviews + ')</span></span>' +
          spiceGlyph(dish.spice) +
          '<a class="photo-link" href="' + dishPhotoSearchUrl(restaurantName, dish.name) + '" target="_blank" rel="noopener">📷 Photos</a>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

var state = {
  category: "All",
  minStars: 0
};

function render() {
  var list = RESTAURANTS.slice().sort(function (a, b) { return a.distance - b.distance; });
  if (state.category !== "All") {
    list = list.filter(function (r) { return r.category === state.category; });
  }
  if (state.minStars > 0) {
    list = list.filter(function (r) { return r.rating >= state.minStars; });
  }

  var listEl = document.getElementById("list");
  listEl.innerHTML = "";

  if (list.length === 0) {
    listEl.innerHTML = '<p class="empty">No restaurants match that filter — try lowering the minimum rating.</p>';
    return;
  }

  list.forEach(function (r) {
    var card = document.createElement("div");
    card.className = "card";

    var isFeatured = FEATURED_CATEGORY && r.category === FEATURED_CATEGORY;
    var dishesSorted = r.dishes.slice().sort(function (a, b) { return b.stars - a.stars; });

    card.innerHTML =
      '<div class="marker"><span class="mi">' + r.distance.toFixed(1) + '</span><span class="unit">miles</span></div>' +
      '<div class="card-body">' +
        '<button type="button" class="card-toggle" aria-expanded="false">' +
          (isFeatured ? '<span class="featured-badge">Saturday pick</span><br>' : '') +
          '<div class="card-top">' +
            '<div><h3>' + r.name + '</h3><span class="tag">' + r.category + '</span></div>' +
            '<div class="rating"><span class="stars">' + starString(r.rating) + '</span><span class="num">' + r.rating.toFixed(1) + '</span><span class="count">(' + r.reviews.toLocaleString() + ')</span></div>' +
          '</div>' +
          '<p class="blurb">' + r.blurb + '</p>' +
          '<span class="dishes-cta"><span class="chevron">▸</span> Top dishes</span>' +
        '</button>' +
        '<div class="meta"><span>' + r.address + '</span><a href="' + mapsUrl(r.address) + '" target="_blank" rel="noopener">Directions →</a></div>' +
        '<div class="dishes-panel" hidden>' +
          '<p class="dishes-note">Ranked by reviewer favorite, highest first</p>' +
          dishesSorted.map(function (d) { return dishRow(d, r.name); }).join("") +
        '</div>' +
      '</div>';

    var toggle = card.querySelector(".card-toggle");
    var panel = card.querySelector(".dishes-panel");
    toggle.addEventListener("click", function () {
      var isOpen = !panel.hasAttribute("hidden");
      if (isOpen) {
        panel.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        panel.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

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
    if (cat === state.category) btn.classList.add("active");
    btn.addEventListener("click", function () {
      state.category = cat;
      Array.prototype.forEach.call(filtersEl.children, function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      render();
    });
    filtersEl.appendChild(btn);
  });
}

function renderStarFilter() {
  var starsEl = document.getElementById("starFilter");
  starsEl.innerHTML = "";

  for (var n = 0; n <= 5; n++) {
    (function (n) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "star-btn";
      if (n === state.minStars) btn.classList.add("active");
      btn.innerHTML = n === 0 ? "Any" : n + "★+";
      btn.setAttribute("aria-pressed", n === state.minStars ? "true" : "false");
      btn.addEventListener("click", function () {
        state.minStars = n;
        Array.prototype.forEach.call(starsEl.children, function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        render();
      });
      starsEl.appendChild(btn);
    })(n);
  }
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
renderStarFilter();
renderPickBand();
render();
