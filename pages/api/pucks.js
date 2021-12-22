import connectDB from "../../middleware/mongodb";
import Puck from "../../models/puck";

const handler = async (req, res) => {
  console.log("HELLLOEOOOEOE");
  const pucks = await Puck.find();
  console.log(pucks);
  res.json({ pucks });
};

export default connectDB(handler);
