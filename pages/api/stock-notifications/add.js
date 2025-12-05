import connectDB from "../../../middleware/mongodb";
import Product from "../../../models/product";

const addEmailToNotificaionList = async (req, res, next) => {
  const { id, email } = req.body;

  const product = await Product.findById(id);

  if (!product) {
    res.status(401).send();
  }

  if (product.notificationList.includes(email)) {
    res.status(200).send();
  } else if (email === "") {
    res.status(500).send();
  } else {
    product.notificationList.push(email);

    try {
      await product.save();
      res.status(200).send();
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  }
};

export default connectDB(addEmailToNotificaionList);
