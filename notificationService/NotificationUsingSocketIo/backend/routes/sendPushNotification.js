import express from "express";
import mongoose from "mongoose";
import webpush from "web-push";
const router = express.Router();
import dotenv from 'dotenv'
dotenv.config();


// web push
console.log("Public Key:", process.env.VAPID_PUBLIC_KEY);
console.log("Private Key:", process.env.VAPID_PRIVATE_KEY);
webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

let subscriptions = [];

router.post("/subscribe", (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(200).json({ message: "subscribed successfully",subscription });
});

router.post("/sendNotification", async (req, res) => {
  const message = "hello";
  try {
    subscriptions.forEach((curr, index) => {
      webpush.sendNotification(curr, message);
    });
    res.status(200).json({ message: "notification sent",subscriptions });
  } catch (error) {
    console.log("error in sending not.", error);
    res.status(500).send({ error });
  }
});

export default router;
