import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { email, fullname, password } = req.body;
  try {
    if (password.length < 6)
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword  = bcrypt.hash(password,salt)
  } catch (error) {
    console.log(error);
  }
};
export const login = (req, res) => {
  res.send("login");
};
export const logout = (req, res) => {
  res.send("logout");
};
