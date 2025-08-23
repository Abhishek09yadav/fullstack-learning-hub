import mongoose from "mongoose";
import { MONGO_URI } from "./config.ts";

const connectDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then((data) => console.log("mongo connected"))
    .catch((err) => console.log("error connecting to mongodb", err));
};
export default connectDB;
