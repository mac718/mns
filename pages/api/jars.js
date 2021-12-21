import connectDB from "../../middleware/mongodb";
import Jar from "../../models/jar";

const handler = async (req, res) => {
  const jars = await Jar.find();
  res.json({ jars });
};

export default connectDB(handler);
