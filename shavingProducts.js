import smallJar from "./public/shaving_jar_small.jpeg";
import smallPuck from "./public/shaving_puck_small.jpeg";

export const jars = [
  {
    scent: "Barber Shop",
    price: "$13.00",
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
  },
  {
    scent: "Bay Rum",
    price: "$16.00",
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: false,
    button: "",
  },
  {
    scent: "Bergamot, Orange, Ylang-ylang",
    price: "$15.00",
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
    scent: "Coconut",
    price: "$13.00",
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
    scent: "Hungarian Lavender",
    price: "$15.00",
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: false,
    button: "",
  },

  {
    scent: "Lavandin & Eucalyptus",
    price: "$14.00",
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
    scent: "Lemongrass & Eucalyptus",
    price: "$13.50",
    description: "Dry, lemony, and invigorating.",
    inStock: false,
    button: "",
  },
  {
    scent: "Lime",
    price: "$14.00",
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: false,
    button: "",
  },
  {
    scent: "Orange, Cedarwood, Black Pepper",
    price: "$14.50",
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
    scent: "Peppermint & Rosemary",
    price: "$14.00",
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: false,
    button: "",
  },
  {
    scent: "Pine & Cedarwood",
    price: "$14.00",
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: false,
    button: "",
  },
  {
    scent: "Rose, Patchouli, Cedarwood",
    price: "$15.00",
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
    scent: "Unscented",
    price: "$12.50",
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
    scent: "Vetiver",
    price: "$19.00",
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: false,
    button: "",
  },
  {
    scent: "Wild Honeysuckle",
    price: "$14.00",
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
  },
];

export const pucks = [
  {
    scent: "Barber Shop",
    price: "$10.50",
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
    scent: "Bay Rum",
    price: "$13.50",
    description: "Spicy bay leaf combined with bergamot and a dab of vanilla.",
    inStock: false,
    button: "",
  },
  {
    scent: "Bergamot, Orange, Ylang-ylang",
    price: "$12.50",
    description:
      "Citrus top notes supported by the deep, sweet, sultry aroma of the ylang-ylang flower.",
    inStock: false,
    button: "",
  },
  {
    scent: "Coconut",
    price: "$10.50",
    description: "Refreshing raw coconut with a base of vanilla.",
    inStock: false,
    button: "",
  },
  {
    scent: "Hungarian Lavender",
    price: "$12.50",
    description:
      "I've acquired a Hungarian lavender essential oil that I'm very enthusiastic about. It's flowery, herbaceous, earthy, and fresh.",
    inStock: false,
    button: "",
  },

  {
    scent: "Lavandin & Eucalyptus",
    price: "$11.50",
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
    scent: "Lemongrass & Eucalyptus",
    price: "$11.00",
    description: "Dry, lemony, and invigorating.",
    inStock: false,
    button: "",
  },
  {
    scent: "Lime",
    price: "$11.50",
    description: "Simple, sweet, citrusy invigorating lime",
    inStock: false,
    button: "",
  },
  {
    scent: "Orange, Cedarwood, Black Pepper",
    price: "$12.00",
    description:
      "While orange is the dominant scent here, a judicious blend of cedarwood and black pepper is easily discerned and provides additional complexity.",
    inStock: false,
    button: "",
  },
  {
    scent: "Peppermint & Rosemary",
    price: "$11.50",
    description:
      "A minty, fresh, and herbaceous combo that imparts a mild cooling sensation to the skin.",
    inStock: false,
    button: "",
  },
  {
    scent: "Pine & Cedarwood",
    price: "$11.50",
    description:
      "This scent is simultaneously invigorating and warm. The dominant note is pine, which is backed up and rounded out by a cedarwood base.",
    inStock: false,
    button: "",
  },
  {
    scent: "Rose, Patchouli, Cedarwood",
    price: "$12.50",
    description:
      "Sweet and delicate rose geranium rounds out a soft, woody base of patchouli & cedarwood.",
    inStock: false,
    button: "",
  },
  {
    scent: "Unscented",
    price: "$10.00",
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
    scent: "Vetiver",
    price: "$16.50",
    description:
      "The vetiver essential oil used in this soap hails from Haiti. It's deep, earthy, smoky, and just a little sweet.",
    inStock: false,
    button: "",
  },
  {
    scent: "Wild Honeysuckle",
    price: "$11.50",
    description:
      "The sweet, uplifting scent of wild honeysuckle. Avoid this one if you have an especially sensitive schnoz; it's pretty potent.",
    inStock: false,
    button: "",
  },
];

export const shavingSoapFormats = [
  { type: "Jars", image: smallJar, url: "/shaving_jars" },
  { type: "Pucks", image: smallPuck, url: "/shaving_pucks" },
  { type: "Sticks", image: smallJar, url: "/shaving_jars" },
  { type: "Sample Pucks", image: smallJar, url: "/shaving_jars" },
];
