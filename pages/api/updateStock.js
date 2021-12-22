const Product = require("../../models/product");

export default async function handler(req, res) {
  let { items } = req.body;

  items.forEach(async (item) => {
    try {
      let product = await Product.findOne({ _id: item.id });
      const inStock = Number(product.inStock);
      product.inStock = Number(inStock) - Number(item.quantity);
      await product.save();
    } catch (err) {
      console.log(err);
    }
  });

  res.status(200).send();
}
