//import connectDB from "../../middleware/mongodb";
import dbConnect from "../../lib/dbConnect";

const Product = require("../../models/product");

async function handler(req, res) {
  await dbConnect();
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

export default handler;
