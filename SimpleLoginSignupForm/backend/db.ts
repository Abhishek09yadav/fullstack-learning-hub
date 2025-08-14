import mongoose from "mongoose"
import { MONGO_URI } from "./src/config.js";

export const connectdb = async() =>{
  await mongoose.connect(MONGO_URI);
  console.log("mongo db connected");
  
}