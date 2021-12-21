import connectDB from "../../middleware/mongodb";
import Jar from "../../models/jar";

const handler = async (req, res) => {
  console.log("HHHHELLLLLLLOOOOOOOO");
  const jars = await Jar.find();
  console.log("jars", jars);
  res.json({ jars });
};

export default connectDB(handler);
