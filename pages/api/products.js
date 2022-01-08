import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";

const handler = async (req, res) => {
  const products = await Product.find();
  console.log(products);
  res.json({ products });
};

export default connectDB(handler);
