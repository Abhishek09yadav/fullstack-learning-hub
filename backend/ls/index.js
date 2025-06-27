import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/loginRoute.js'
dotenv.config();
const PORT = 4000;

const mongoURI = process.env.MONGO_URI;
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(mongoURI)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log("error connecting to mongodb ", e));
app.use("/", (req, res) => res.status(200).json({ message: "hello user " }));
app.use('/api/auth',authRoute)

app.listen(PORT, () => console.log("server is running on port", PORT));
