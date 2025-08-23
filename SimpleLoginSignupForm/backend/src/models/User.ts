import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone:number;
  password: string;
  profileUrl:string;
}
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    profileUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", userSchema);
