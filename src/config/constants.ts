// Popular Places Image URLs
export const PLACE_IMAGES = {
  MARINA_BEACH: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/21/b54df6cab2e2f5fd3150e2326eb4a818_1000x1000.jpg",
  MAHABALIPURAM: "https://www.mahabalipuram.org/wp-content/uploads/2023/05/07577cc1e3ad69d8c7f6af153dbc3665.webp",
  PONDICHERRY: "https://im.hunt.in/cg/poun/puducherry/City-Guide/Tourism-in-Puducherry.jpg",
  KAPALEESWARAR_TEMPLE: "https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/kapaleeshwarar-temple-1656078500_97b56461f9ad05d3b236.jpg",
  ELLIOT_BEACH: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/elliots-beach-1656503428_2e88a74ef2335f8f99f7.webp",
  T_NAGAR: "https://upload.wikimedia.org/wikipedia/en/b/b1/Ranganathan_Street_T_Nagar.jpg"
} as const;

// Popular Places Data
export const POPULAR_PLACES = [
  {
    name: "Marina Beach",
    image: PLACE_IMAGES.MARINA_BEACH,
    description: "The second-longest urban beach in the world"
  },
  {
    name: "Mahabalipuram",
    image: PLACE_IMAGES.MAHABALIPURAM,
    description: "UNESCO World Heritage site known for its temples"
  },
  {
    name: "Pondicherry",
    image: PLACE_IMAGES.PONDICHERRY,
    description: "French colonial settlement with beautiful architecture"
  },
  {
    name: "Kapaleeswarar Temple",
    image: PLACE_IMAGES.KAPALEESWARAR_TEMPLE,
    description: "Ancient Dravidian architecture temple in Mylapore"
  },
  {
    name: "Elliot Beach",
    image: PLACE_IMAGES.ELLIOT_BEACH,
    description: "Less crowded alternative to Marina Beach"
  },
  {
    name: "T Nagar",
    image: PLACE_IMAGES.T_NAGAR,
    description: "Shopping hub of Chennai"
  }
] as const;

// Popular Foods Image URLs
export const FOOD_IMAGES = {
  SOUTH_INDIAN: "https://i0.wp.com/blog.bigbasket.com/wp-content/uploads/2023/04/South-Indian-main_584509564.jpeg",
  CHETTINAD: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/chettinadu-cuisine-1656503171_6929db3e81e334ad982b.webp",
  BURMESE: "https://crispyfriedopinions.com/wp-content/uploads/sites/105/2017/01/Burmese_1h.jpeg",
  SEAFOOD: "https://imgcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/03/20204935/Moonrakers2.jpg",
  KUNHIRAMAN: "https://th-i.thgim.com/public/incoming/61nwwq/article68487852.ece/alternates/LANDSCAPE_1200/04dc_sahana.jpeg",
  MURUGAN_IDLI: "https://crispyfriedopinions.com/wp-content/uploads/sites/105/2019/01/MuruganIdliShop_Krishnagiri_1a.jpeg"
} as const;

// Popular Foods Data
export const POPULAR_FOODS = [
  {
    name: "South Indian Cuisine",
    image: FOOD_IMAGES.SOUTH_INDIAN,
    description: "Traditional delicacies from South India"
  },
  {
    name: "Chettinad Cuisine",
    image: FOOD_IMAGES.CHETTINAD,
    description: "Spicy and aromatic traditional Tamil Nadu cuisine"
  },
  {
    name: "Burmese Food",
    image: FOOD_IMAGES.BURMESE,
    description: "Unique Indo-Burmese fusion dishes"
  },
  {
    name: "Seafood",
    image: FOOD_IMAGES.SEAFOOD,
    description: "Fresh coastal delicacies"
  },
  {
    name: "Kunhiraman Juice",
    image: FOOD_IMAGES.KUNHIRAMAN,
    description: "Century-old iconic juice shop"
  },
  {
    name: "Murugan Idli",
    image: FOOD_IMAGES.MURUGAN_IDLI,
    description: "Famous for soft and fluffy idlis"
  }
] as const;