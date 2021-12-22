import connectDB from "../../middleware/mongodb";
import Stick from "../../models/stick";

const handler = async (req, res) => {
  console.log("HELLLOEOOOEOE");
  const sticks = await Stick.find();
  console.log(sticks);
  res.json({ sticks });
};

export default connectDB(handler);
