import smallJar from "./public/shaving_jar_small.jpeg";
import smallPuck from "./public/shaving_puck_small.jpeg";
import smallStick from "./public/shaving_stick_small.jpg";
import smallLogo from "./public/MNS_PDX_SMALL.jpeg";

export const jars = [
  {
    id: "TLKBSSJBS",
    scent: "Barber Shop",
    price: 13.0,
    description:
      "A complex, potent, manly scent consisting of bergamot, basil, oakmoss, and patchouli.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="EYKE47SL9ET5A" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
    weight: 10,
  },
  {
    id: "TLKBSSJBR",
    scent: "Bay Rum",
    price: 16.0,
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSJBOYY",
    scent: "Bergamot, Orange, Ylang-ylang",
    price: 15.0,
    description:
      "Citrus top notes supported by the deep, sweet, sultry aroma of the ylang-ylang flower.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="74RCMESZRQXBL" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSJC",
    scent: "Coconut",
    price: 13.0,
    description: "Refreshing raw coconut with a base of vanilla.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="6T5MWC2LT59QL" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSJHL",
    scent: "Hungarian Lavender",
    price: 15.0,
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: false,
    button: "",
  },

  {
    id: "TLKBSSJLE",
    scent: "Lavandin & Eucalyptus",
    price: 14.0,
    description:
      "A subtle scent similar to lavender, but with a slightly more camphorous, slightly less floral quality. More invigorating than calming/soothing.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="DZ3Z84XYXTW4C" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSJLEE",
    scent: "Lemongrass & Eucalyptus",
    price: 13.5,
    description: "Dry, lemony, and invigorating.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSJL",
    scent: "Lime",
    price: 14.0,
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSJOCWBP",
    scent: "Orange, Cedarwood, Black Pepper",
    price: 14.5,
    description:
      "While orange is the dominant scent here, a judicious blend of cedarwood and black pepper is easily discerned and provides additional complexity.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="9EXE864P7LZ78" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSJPR",
    scent: "Peppermint & Rosemary",
    price: 14.0,
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSJPC",
    scent: "Pine & Cedarwood",
    price: 14.0,
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSJRPC",
    scent: "Rose, Patchouli, Cedarwood",
    price: 15.0,
    description:
      "Sweet and delicate rose geranium rounds out a soft, woody base of patchouli & cedarwood.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="SLHP9MZM69CYS" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSJU",
    scent: "Unscented",
    price: 12.5,
    description:
      "I add no fragrance or essential oils to this soap. It smells simply like the ingredients of which it is composed.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="25Y23T6Y8AVPC" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSJV",
    scent: "Vetiver",
    price: 19.0,
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSJWH",
    scent: "Wild Honeysuckle",
    price: 14.0,
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
  },
];

export const pucks = [
  {
    id: "TLKBSSPBS",
    scent: "Barber Shop",
    price: 10.5,
    description:
      "A complex, potent, manly scent consisting of bergamot, basil, oakmoss, and patchouli.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="UZKC9RWW5GUW4" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSPBR",
    scent: "Bay Rum",
    price: 13.5,
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPBOYY",
    scent: "Bergamot, Orange, Ylang-ylang",
    price: 12.5,
    description:
      "Citrus top notes supported by the deep, sweet, sultry aroma of the ylang-ylang flower.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPC",
    scent: "Coconut",
    price: 10.5,
    description: "Refreshing raw coconut with a base of vanilla.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPHL",
    scent: "Hungarian Lavender",
    price: 12.5,
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: false,
    button: "",
  },

  {
    id: "TLKBSSPLE",
    scent: "Lavandin & Eucalyptus",
    price: 11.5,
    description:
      "A subtle scent similar to lavender, but with a slightly more camphorous, slightly less floral quality. More invigorating than calming/soothing.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="4CJPYX3CS5KNJ" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSPLEE",
    scent: "Lemongrass & Eucalyptus",
    price: 11.0,
    description: "Dry, lemony, and invigorating.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPL",
    scent: "Lime",
    price: 11.5,
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPOCWBP",
    scent: "Orange, Cedarwood, Black Pepper",
    price: 12.0,
    description:
      "While orange is the dominant scent here, a judicious blend of cedarwood and black pepper is easily discerned and provides additional complexity.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPPR",
    scent: "Peppermint & Rosemary",
    price: 11.5,
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPPC",
    scent: "Pine & Cedarwood",
    price: 11.5,
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPRPC",
    scent: "Rose, Patchouli, Cedarwood",
    price: 12.5,
    description:
      "Sweet and delicate rose geranium rounds out a soft, woody base of patchouli & cedarwood.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPU",
    scent: "Unscented",
    price: 10.0,
    description:
      "I add no fragrance or essential oils to this soap. It smells simply like the ingredients of which it is composed.",
    inStock: true,
    button: (
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="MXB8J6FY6E88Q" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
      </form>
    ),
  },
  {
    id: "TLKBSSPV",
    scent: "Vetiver",
    price: 16.5,
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSPWH",
    scent: "Wild Honeysuckle",
    price: 11.5,
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
    inStock: false,
    button: "",
  },
];

export const shaveSticks = [
  {
    id: "TLKBSSSBS",
    scent: "Barber Shop",
    price: 10.5,
    description:
      "A complex, potent, manly scent consisting of bergamot, basil, oakmoss, and patchouli.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSBR",
    scent: "Bay Rum",
    price: 13.5,
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSBOYY",
    scent: "Bergamot, Orange, Ylang-ylang",
    price: 12.5,
    description:
      "Citrus top notes supported by the deep, sweet, sultry aroma of the ylang-ylang flower.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSC",
    scent: "Coconut",
    price: 10.5,
    description: "Refreshing raw coconut with a base of vanilla.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSHL",
    scent: "Hungarian Lavender",
    price: 12.5,
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: false,
    button: "",
  },

  {
    id: "TLKBSSSLE",
    scent: "Lavandin & Eucalyptus",
    price: 11.5,
    description:
      "A subtle scent similar to lavender, but with a slightly more camphorous, slightly less floral quality. More invigorating than calming/soothing.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSLEE",
    scent: "Lemongrass & Eucalyptus",
    price: 11.0,
    description: "Dry, lemony, and invigorating.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSL",
    scent: "Lime",
    price: 11.5,
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSOCWBP",
    scent: "Orange, Cedarwood, Black Pepper",
    price: 12.0,
    description:
      "While orange is the dominant scent here, a judicious blend of cedarwood and black pepper is easily discerned and provides additional complexity.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSPR",
    scent: "Peppermint & Rosemary",
    price: 11.5,
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSPC",
    scent: "Pine & Cedarwood",
    price: 11.5,
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSRPC",
    scent: "Rose, Patchouli, Cedarwood",
    price: 12.5,
    description:
      "Sweet and delicate rose geranium rounds out a soft, woody base of patchouli & cedarwood.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSU",
    scent: "Unscented",
    price: 10.0,
    description:
      "I add no fragrance or essential oils to this soap. It smells simply like the ingredients of which it is composed.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSV",
    scent: "Vetiver",
    price: 16.5,
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: false,
    button: "",
  },
  {
    id: "TLKBSSSWH",
    scent: "Wild Honeysuckle",
    price: 11.5,
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
    inStock: false,
    button: "",
  },
];

export const shavingSoapFormats = [
  { type: "Jars", image: smallJar, url: "/shaving_jars" },
  { type: "Pucks", image: smallPuck, url: "/shaving_pucks" },
  { type: "Sticks", image: smallStick, url: "/shaving_jars" },
  { type: "Sample Pucks", image: smallLogo, url: "/shaving_jars" },
];
