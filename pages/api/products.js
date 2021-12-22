import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";

const handler = async (req, res) => {
  console.log("HELLLOEOOOEOE");
  const products = await Product.find();
  console.log(products);
  res.json({ products });
};

export default connectDB(handler);
