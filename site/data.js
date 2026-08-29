// Updated each week from chat — change FEATURED_CATEGORY to the category
// requested for this Saturday. Set to null between requests.
var FEATURED_CATEGORY = "Korean BBQ";

// Restaurants within a few miles of 500 Battery Plant Rd, Smyrna, TN 37167
// rated 4.5 stars or better on public listings (Google/Yelp/TripAdvisor).
// distance = approximate straight-line miles from the origin address.
//
// Each dish's `stars`/`reviews` are a best-effort read of how often and how
// warmly reviewers call that dish out by name — platforms don't publish
// official per-dish ratings, so treat these as "reviewer favorite" rankings,
// not a verified score. `spice` is 0-3 (0 none, 1 mild, 2 medium, 3 hot).
// `icon` selects a small illustrated glyph — not a real photo of the plate.
var RESTAURANTS = [
  {
    name: "Tokyo Japanese Steak House",
    category: "Japanese Hibachi & Sushi",
    rating: 4.6,
    reviews: 2571,
    distance: 1.7,
    address: "701 President Pl #100, Smyrna, TN 37167",
    blurb: "Tableside hibachi with the knife-flourish theatrics, plus a full sushi bar for the nights you'd rather not watch your dinner get flipped in the air.",
    dishes: [
      { name: "Chicken Hibachi Dinner", price: "$19.95", spice: 0, stars: 4.8, reviews: 210, icon: "hibachi" },
      { name: "Filet & Scallop Hibachi", price: "$28.95", spice: 0, stars: 4.7, reviews: 96, icon: "hibachi" },
      { name: "Eel Roll", price: "$13.95", spice: 0, stars: 4.6, reviews: 74, icon: "sushi" }
    ]
  },
  {
    name: "Leche De Tigre",
    category: "Peruvian",
    rating: 4.7,
    reviews: 94,
    distance: 1.7,
    address: "701 President Pl #150, Smyrna, TN 37167",
    blurb: "Ceviche and lomo saltado from a chef-driven kitchen sharing the same lot as Tokyo Japanese — bold citrus and fast, fresh plates.",
    dishes: [
      { name: "Lomo Saltado", price: "$25.00", spice: 1, stars: 4.9, reviews: 61, icon: "stirfry" },
      { name: "Leche de Tigre Clásico Ceviche", price: "$21.00", spice: 2, stars: 4.8, reviews: 48, icon: "ceviche" },
      { name: "Pollada (Rotisserie Chicken)", price: "$19.50", spice: 0, stars: 4.6, reviews: 33, icon: "roast" }
    ]
  },
  {
    name: "Floyd's Burger Joint",
    category: "Burgers",
    rating: 4.9,
    reviews: 95,
    distance: 2.0,
    address: "1098 Sgt Asbury Hawn Way, Smyrna, TN 37167",
    blurb: "Smashed-to-order patties and hand-cut fries at the highest-rated kitchen on this list. Closed Sun & Mon, so plan around it.",
    dishes: [
      { name: "Double Smashburger", price: "$9.99", spice: 0, stars: 4.9, reviews: 58, icon: "burger" },
      { name: "Chicken Tenders Combo", price: "$8.99", spice: 0, stars: 4.7, reviews: 29, icon: "tenders" },
      { name: "Crinkle Fries & Strawberry Shake", price: "$6.99", spice: 0, stars: 4.6, reviews: 22, icon: "shake" }
    ]
  },
  {
    name: "Angelo's Picnic Pizza",
    category: "Italian & Pizza",
    rating: 4.6,
    reviews: 283,
    distance: 2.4,
    address: "1402 Hazelwood Dr, Smyrna, TN 37167",
    blurb: "Old-world hand-tossed pies and red-sauce classics that have kept a loyal following coming back for years.",
    dishes: [
      { name: "Cadillac Crust (pizza-on-a-pizza)", price: "$27.95", spice: 0, stars: 4.9, reviews: 140, icon: "pizza" },
      { name: "Garlic Knots", price: "$6.95", spice: 0, stars: 4.7, reviews: 88, icon: "knots" },
      { name: "Hand Tossed Cheese Pizza (Large)", price: "$24.75", spice: 0, stars: 4.6, reviews: 112, icon: "pizza" }
    ]
  },
  {
    name: "Magic Way Steak & Gyro",
    category: "Mediterranean & Steak",
    rating: 4.8,
    reviews: 200,
    distance: 2.8,
    address: "534 Enon Springs Rd E, Smyrna, TN 37167",
    blurb: "Shaved steak and gyro plates with a Mediterranean touch — clean, warm dining room and a menu that rewards regulars.",
    dishes: [
      { name: "Crazy 5 Way Shawarma", price: "$21.99", spice: 2, stars: 4.8, reviews: 77, icon: "wrap" },
      { name: "Lamb Gyro Plate", price: "$14.99", spice: 1, stars: 4.7, reviews: 64, icon: "wrap" },
      { name: "Chicken Pita", price: "$10.99", spice: 1, stars: 4.6, reviews: 41, icon: "wrap" }
    ]
  },
  {
    name: "Karin's Kustard & Hamburgers",
    category: "Diner & Custard",
    rating: 4.5,
    reviews: 1796,
    distance: 3.6,
    address: "470 S Lowry St, Smyrna, TN 37167",
    blurb: "A 1950s-style diner slinging burgers and frozen custard since 2004 — the closest thing Smyrna has to a soda-fountain institution.",
    dishes: [
      { name: "Double Cheeseburger", price: "$8.50", spice: 0, stars: 4.9, reviews: 320, icon: "burger" },
      { name: "Peanut Butter Milkshake", price: "$5.50", spice: 0, stars: 4.9, reviews: 265, icon: "shake" },
      { name: "Crinkle Fries & Chicken Nuggets", price: "$4.50", spice: 0, stars: 4.6, reviews: 118, icon: "fries" }
    ]
  },
  {
    name: "Front Street Pub",
    category: "American Pub",
    rating: 4.8,
    reviews: 153,
    distance: 3.8,
    address: "104 Front St, Smyrna, TN 37167",
    blurb: "Burgers, sandwiches, and pub fare with karaoke and live music some nights — good for a sit-down-and-stay-awhile dinner.",
    dishes: [
      { name: "Locomotive Patty Melt", price: "$10.95", spice: 0, stars: 4.9, reviews: 61, icon: "burger" },
      { name: "The Caboose Mushroom Swiss Burger", price: "$11.95", spice: 0, stars: 4.7, reviews: 45, icon: "burger" },
      { name: "Bar Wings", price: "$12.95", spice: 3, stars: 4.6, reviews: 38, icon: "wings" }
    ]
  },
  {
    name: "Honey's Bie Thai & Sushi",
    category: "Thai & Sushi",
    rating: 4.7,
    reviews: 126,
    distance: 4.6,
    address: "1890 Almaville Rd #100, Smyrna, TN 37167",
    blurb: "Curries, pad thai, and sushi rolls in generous portions — the farthest drive on this list, but reviewers say it's worth it.",
    dishes: [
      { name: "Pad Kee Mao (Drunken Noodles)", price: "$16.95", spice: 3, stars: 4.9, reviews: 54, icon: "noodles" },
      { name: "Panang Curry", price: "$17.95", spice: 2, stars: 4.8, reviews: 47, icon: "curry" },
      { name: "Massaman Curry", price: "$19.95", spice: 1, stars: 4.6, reviews: 39, icon: "curry" }
    ]
  },
  {
    name: "Arisu Korean BBQ & Tofu",
    category: "Korean BBQ",
    rating: 4.8,
    reviews: 610,
    distance: 10.5,
    address: "1855 Medical Center Pkwy Suite A, Murfreesboro, TN 37129",
    blurb: "Tabletop Korean BBQ and soon tofu done right — Smyrna itself doesn't have a 4.5+ Korean spot, so this is the nearest one that clears the bar.",
    dishes: [
      { name: "Soondubu (Spicy Tofu Soup)", price: "$23.16 (for 2)", spice: 2, stars: 4.9, reviews: 188, icon: "soup" },
      { name: "Marinated Beef Bulgogi", price: "$36.30", spice: 0, stars: 4.7, reviews: 152, icon: "bbq" },
      { name: "Bibimbap", price: "$23.23", spice: 1, stars: 4.6, reviews: 97, icon: "bibimbap" }
    ]
  },
  {
    name: "KPOT Korean BBQ & Hot Pot",
    category: "Korean BBQ",
    rating: 4.7,
    reviews: 51,
    distance: 12.5,
    address: "1720 Old Fort Pkwy Unit L325, Murfreesboro, TN 37129",
    blurb: "All-you-can-eat BBQ and hot pot with a build-your-own broth bar — a bit further out, but a different format if Arisu doesn't fit the craving.",
    dishes: [
      { name: "Beef Bulgogi (AYCE grill)", price: "$28.99 pp (AYCE)", spice: 0, stars: 4.8, reviews: 34, icon: "bbq" },
      { name: "Build-Your-Own Hot Pot Broth", price: "$28.99 pp (AYCE)", spice: 2, stars: 4.6, reviews: 27, icon: "hotpot" },
      { name: "Sauce Bar Sampler", price: "Included", spice: 1, stars: 4.5, reviews: 19, icon: "sauce" }
    ]
  }
];
