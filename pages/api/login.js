import * as bcrypt from "bcrpyt";
import { User } from "../../models/user";

export const login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: `No user with email ${email}.` });
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res
      .status(400)
      .json({ msg: "Email and/or password is/are incorrect." });
  }
  const payload = { id: user._id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  res
    .cookie("token", token, { httpOnly: true })
    .sendStatus(StatusCodes.OK)
    .json();
});
