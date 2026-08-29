// Updated each week from chat — change FEATURED_CATEGORY to the category
// requested for this Saturday. Set to null between requests.
var FEATURED_CATEGORY = null; // e.g. "Burgers"

// Restaurants within a few miles of 500 Battery Plant Rd, Smyrna, TN 37167
// rated 4.5 stars or better on public listings (Google/Yelp/TripAdvisor).
// distance = approximate straight-line miles from the origin address.
var RESTAURANTS = [
  {
    name: "Tokyo Japanese Steak House",
    category: "Japanese Hibachi & Sushi",
    rating: 4.6,
    reviews: 2571,
    distance: 1.7,
    address: "701 President Pl #100, Smyrna, TN 37167",
    blurb: "Tableside hibachi with the knife-flourish theatrics, plus a full sushi bar for the nights you'd rather not watch your dinner get flipped in the air."
  },
  {
    name: "Leche De Tigre",
    category: "Peruvian",
    rating: 4.7,
    reviews: 94,
    distance: 1.7,
    address: "701 President Pl #150, Smyrna, TN 37167",
    blurb: "Ceviche and lomo saltado from a chef-driven kitchen sharing the same lot as Tokyo Japanese — bold citrus and fast, fresh plates."
  },
  {
    name: "Floyd's Burger Joint",
    category: "Burgers",
    rating: 4.9,
    reviews: 95,
    distance: 2.0,
    address: "1098 Sgt Asbury Hawn Way, Smyrna, TN 37167",
    blurb: "Smashed-to-order patties and hand-cut fries at the highest-rated kitchen on this list. Closed Sun & Mon, so plan around it."
  },
  {
    name: "Angelo's Picnic Pizza",
    category: "Italian & Pizza",
    rating: 4.6,
    reviews: 283,
    distance: 2.4,
    address: "1402 Hazelwood Dr, Smyrna, TN 37167",
    blurb: "Old-world hand-tossed pies and red-sauce classics that have kept a loyal following coming back for years."
  },
  {
    name: "Magic Way Steak & Gyro",
    category: "Mediterranean & Steak",
    rating: 4.8,
    reviews: 200,
    distance: 2.8,
    address: "534 Enon Springs Rd E, Smyrna, TN 37167",
    blurb: "Shaved steak and gyro plates with a Mediterranean touch — clean, warm dining room and a menu that rewards regulars."
  },
  {
    name: "Karin's Kustard & Hamburgers",
    category: "Diner & Custard",
    rating: 4.5,
    reviews: 1796,
    distance: 3.6,
    address: "470 S Lowry St, Smyrna, TN 37167",
    blurb: "A 1950s-style diner slinging burgers and frozen custard since 2004 — the closest thing Smyrna has to a soda-fountain institution."
  },
  {
    name: "Front Street Pub",
    category: "American Pub",
    rating: 4.8,
    reviews: 153,
    distance: 3.8,
    address: "104 Front St, Smyrna, TN 37167",
    blurb: "Burgers, sandwiches, and pub fare with karaoke and live music some nights — good for a sit-down-and-stay-awhile dinner."
  },
  {
    name: "Honey's Bie Thai & Sushi",
    category: "Thai & Sushi",
    rating: 4.7,
    reviews: 126,
    distance: 4.6,
    address: "1890 Almaville Rd #100, Smyrna, TN 37167",
    blurb: "Curries, pad thai, and sushi rolls in generous portions — the farthest drive on this list, but reviewers say it's worth it."
  }
];
