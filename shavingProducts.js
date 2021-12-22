import smallJar from "./public/shaving_jar_small.jpeg";
import smallPuck from "./public/shaving_puck_small.jpeg";
import smallStick from "./public/shaving_stick_small.jpg";
import smallLogo from "./public/MNS_PDX_SMALL.jpeg";

const JAR_WEIGHT = 10;
const PUCK_WEIGHT = 7;
const STICK_WIEGHT = 6;

export const jars = [
  {
    id: "TLKBSSJBS",
    scent: "Barber Shop",
    price: 13.0,
    description:
      "A complex, potent, manly scent consisting of bergamot, basil, oakmoss, and patchouli.",
    inStock: 14,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJBR",
    scent: "Bay Rum",
    price: 16.0,
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: 0,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJBOYY",
    scent: "Bergamot, Orange, Ylang-ylang",
    price: 15.0,
    description:
      "Citrus top notes supported by the deep, sweet, sultry aroma of the ylang-ylang flower.",
    inStock: 1,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJC",
    scent: "Coconut",
    price: 13.0,
    description: "Refreshing raw coconut with a base of vanilla.",
    inStock: 3,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJHL",
    scent: "Hungarian Lavender",
    price: 15.0,
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: 0,
    weight: JAR_WEIGHT,
  },

  {
    id: "TLKBSSJLE",
    scent: "Lavandin & Eucalyptus",
    price: 14.0,
    description:
      "A subtle scent similar to lavender, but with a slightly more camphorous, slightly less floral quality. More invigorating than calming/soothing.",
    inStock: 4,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJLEE",
    scent: "Lemongrass & Eucalyptus",
    price: 13.5,
    description: "Dry, lemony, and invigorating.",
    inStock: 0,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJL",
    scent: "Lime",
    price: 14.0,
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: 0,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJOCWBP",
    scent: "Orange, Cedarwood, Black Pepper",
    price: 14.5,
    description:
      "While orange is the dominant scent here, a judicious blend of cedarwood and black pepper is easily discerned and provides additional complexity.",
    inStock: 3,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJPR",
    scent: "Peppermint & Rosemary",
    price: 14.0,
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: 0,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJPC",
    scent: "Pine & Cedarwood",
    price: 14.0,
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: 0,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJRPC",
    scent: "Rose, Patchouli, Cedarwood",
    price: 15.0,
    description:
      "Sweet and delicate rose geranium rounds out a soft, woody base of patchouli & cedarwood.",
    inStock: 1,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJU",
    scent: "Unscented",
    price: 12.5,
    description:
      "I add no fragrance or essential oils to this soap. It smells simply like the ingredients of which it is composed.",
    inStock: 12,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJV",
    scent: "Vetiver",
    price: 19.0,
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: 0,
    weight: JAR_WEIGHT,
  },
  {
    id: "TLKBSSJWH",
    scent: "Wild Honeysuckle",
    price: 14.0,
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
    inStock: 0,
    weight: JAR_WEIGHT,
  },
];

export const pucks = [
  {
    id: "TLKBSSPBS",
    scent: "Barber Shop",
    price: 10.5,
    description:
      "A complex, potent, manly scent consisting of bergamot, basil, oakmoss, and patchouli.",
    inStock: 10,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPBR",
    scent: "Bay Rum",
    price: 13.5,
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPBOYY",
    scent: "Bergamot, Orange, Ylang-ylang",
    price: 12.5,
    description:
      "Citrus top notes supported by the deep, sweet, sultry aroma of the ylang-ylang flower.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPC",
    scent: "Coconut",
    price: 10.5,
    description: "Refreshing raw coconut with a base of vanilla.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPHL",
    scent: "Hungarian Lavender",
    price: 12.5,
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },

  {
    id: "TLKBSSPLE",
    scent: "Lavandin & Eucalyptus",
    price: 11.5,
    description:
      "A subtle scent similar to lavender, but with a slightly more camphorous, slightly less floral quality. More invigorating than calming/soothing.",
    inStock: 8,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPLEE",
    scent: "Lemongrass & Eucalyptus",
    price: 11.0,
    description: "Dry, lemony, and invigorating.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPL",
    scent: "Lime",
    price: 11.5,
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPOCWBP",
    scent: "Orange, Cedarwood, Black Pepper",
    price: 12.0,
    description:
      "While orange is the dominant scent here, a judicious blend of cedarwood and black pepper is easily discerned and provides additional complexity.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPPR",
    scent: "Peppermint & Rosemary",
    price: 11.5,
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPPC",
    scent: "Pine & Cedarwood",
    price: 11.5,
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPRPC",
    scent: "Rose, Patchouli, Cedarwood",
    price: 12.5,
    description:
      "Sweet and delicate rose geranium rounds out a soft, woody base of patchouli & cedarwood.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPU",
    scent: "Unscented",
    price: 10.0,
    description:
      "I add no fragrance or essential oils to this soap. It smells simply like the ingredients of which it is composed.",
    inStock: 5,
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPV",
    scent: "Vetiver",
    price: 16.5,
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: false,
    button: "",
    weight: PUCK_WEIGHT,
  },
  {
    id: "TLKBSSPWH",
    scent: "Wild Honeysuckle",
    price: 11.5,
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
    inStock: 0,
    weight: PUCK_WEIGHT,
  },
];

export const shaveSticks = [
  {
    id: "TLKBSSSBS",
    scent: "Barber Shop",
    price: 10.5,
    description:
      "A complex, potent, manly scent consisting of bergamot, basil, oakmoss, and patchouli.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSBR",
    scent: "Bay Rum",
    price: 13.5,
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSBOYY",
    scent: "Bergamot, Orange, Ylang-ylang",
    price: 12.5,
    description:
      "Citrus top notes supported by the deep, sweet, sultry aroma of the ylang-ylang flower.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSC",
    scent: "Coconut",
    price: 10.5,
    description: "Refreshing raw coconut with a base of vanilla.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSHL",
    scent: "Hungarian Lavender",
    price: 12.5,
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },

  {
    id: "TLKBSSSLE",
    scent: "Lavandin & Eucalyptus",
    price: 11.5,
    description:
      "A subtle scent similar to lavender, but with a slightly more camphorous, slightly less floral quality. More invigorating than calming/soothing.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSLEE",
    scent: "Lemongrass & Eucalyptus",
    price: 11.0,
    description: "Dry, lemony, and invigorating.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSL",
    scent: "Lime",
    price: 11.5,
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSOCWBP",
    scent: "Orange, Cedarwood, Black Pepper",
    price: 12.0,
    description:
      "While orange is the dominant scent here, a judicious blend of cedarwood and black pepper is easily discerned and provides additional complexity.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSPR",
    scent: "Peppermint & Rosemary",
    price: 11.5,
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSPC",
    scent: "Pine & Cedarwood",
    price: 11.5,
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSRPC",
    scent: "Rose, Patchouli, Cedarwood",
    price: 12.5,
    description:
      "Sweet and delicate rose geranium rounds out a soft, woody base of patchouli & cedarwood.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSU",
    scent: "Unscented",
    price: 10.0,
    description:
      "I add no fragrance or essential oils to this soap. It smells simply like the ingredients of which it is composed.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSV",
    scent: "Vetiver",
    price: 16.5,
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
  {
    id: "TLKBSSSWH",
    scent: "Wild Honeysuckle",
    price: 11.5,
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
    inStock: 0,
    weight: STICK_WIEGHT,
  },
];

export const shavingSoapFormats = [
  { type: "Jars", image: smallJar, url: "/shaving_jars" },
  { type: "Pucks", image: smallPuck, url: "/shaving_pucks" },
  { type: "Sticks", image: smallStick, url: "/shaving_sticks" },
  { type: "Sample Pucks", image: smallLogo, url: "/shaving_jars" },
];

export const updateStock = (order) => {
  console.log("order", order);
  order.forEach((item) => {
    let purchasedItem;
    if (item.id.includes("SSJ")) {
      purchasedItem = jars.filter((jar) => jar.id === item.id);
    } else if (item.id.includes("SSP")) {
      purchasedItem = pucks.filter((jar) => jar.id === item.id);
    }
    purchasedItem.inStock -= item.quantity;
  });
};
