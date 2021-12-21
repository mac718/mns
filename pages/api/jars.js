import connectDB from "../../middleware/mongodb";
import Jar from "../../models/jar";

const handler = async (req, res) => {
  console.log("HELLLOEOOOEOE");
  const jars = await Jar.find();
  console.log(jars);
  res.json({ jars });
};

export default connectDB(handler);
