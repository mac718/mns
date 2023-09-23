import connectDB from "../../../middleware/mongodb";
import Product from "../../../models/product";

const addEmailToNotificaionList = async (req, res, next) => {
  const { id, email } = req.body;

  console.log("id, email", id, email);

  const product = await Product.findById(id);

  if (!product) {
    res.status(401).send();
  }

  product.notificationList.push(email);

  try {
    await product.save();
    console.log(product);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export default connectDB(addEmailToNotificaionList);
