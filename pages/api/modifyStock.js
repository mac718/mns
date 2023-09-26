import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";

export const modifyStock = async (req, res, next) => {
  const { product, quantity } = req.body;

  const productTerms = product.split(" ");
  const productType = productTerms[productTerms.length - 1];
  const productScent = productTerms.slice(0, productTerms.length - 1).join(" ");

  let exisitingProduct = await Product.find({
    scent: productScent,
    type: productType,
  });
  exisitingProduct = exisitingProduct[0];

  exisitingProduct.inStock = quantity;

  try {
    await exisitingProduct.save();
    res.status(200).send();
  } catch (err) {
    res.status(500).json(err);
  }
};

export default connectDB(modifyStock);
