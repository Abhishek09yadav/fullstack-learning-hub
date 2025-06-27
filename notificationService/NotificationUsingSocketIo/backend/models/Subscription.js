import mongoose from "mongoose";
const subscriptionShema = new mongoose.Schema(
  {
    endpoint: { type: String, required: true, unique: true },
    keys: {
      p256dh: { type: String, required: true },
      auth: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);
const Subscription = mongoose.model("Subscription",subscriptionShema)
export default Subscription;

