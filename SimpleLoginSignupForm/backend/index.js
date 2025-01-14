const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemon = require("nodemon");
const app = express();
const PORT = 5000;
const bcrypt = require("bcryptjs"); // Import bcryptjs
const jwt = require("jsonwebtoken"); //
app.use(cors());
app.use(bodyParser.json());
mongoose
  .connect("mongodb://localhost:27017/SimpleLogin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);
app.post("/Signup", async (req, res) => {
  const { username, password, email } = req.body;

  try {
       const finduser = await User.findOne({ username });
   if (finduser) {
     res.status(401).json({ error: " user exists" });
   }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ username, password: hashedPassword, email });
    await user.save();
    res.status(200).json({ message: "user created" });
  } catch (err) {
    console.log(err);
  }
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
try {  const finduser = await User.findOne({ username });
  if (!finduser) {
    res.status(401).json({ error: "wrong username" });
  }
  const matchPassword = await bcrypt.compare(password, finduser.password);
  if (!matchPassword) {
    res.status(401).json({ error: "wrong password" });
  }
  if (matchPassword) {
    res.status(200).json({ message: "login success" });
  }
  const token = jwt.sign({ id: User._id }, "jwtsecret", { expiresIn: "1w" });
  res.status(200).json({ message: "jwt token", token });}
catch(err){
  console.log(err);
}
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
