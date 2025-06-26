import express from "express";
import mongoose from "mongoose";
import webpush from "web-push";
import dotenv from "dotenv";
import Subscription from "../models/Subscription.js";
dotenv.config();
const router = express.Router();

// web push
console.log("Public Key:", process.env.VAPID_PUBLIC_KEY);
console.log("Private Key:", process.env.VAPID_PRIVATE_KEY);
webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

router.post("/subscribe", async (req, res) => {
  const subscription = req.body;
  try {
    const sub = subscription.findOne({
      endpoint: subscription.endpoint,
    });
    if (!endpoint) {
      await Subscription.save(sub);
    } else {
      console.log("Subscription already exists.");
    }
  } catch (err) {}
  res.status(200).json({ message: "subscribed successfully", subscription });
});

router.post("/sendNotification", async (req, res) => {
  const payload = JSON.stringify({
    title: "testing",
    body: "hellooooooo",
  });
  try {
    const subscriptions = await Subscription.find();
    const results = await Promise.allSettled(
      subscriptions.map((value, index) => {
        webpush.sendNotification(value, payload);
      })
    );
    res
      .status(200)
      .json({ message: "notification sent", total: subscriptions.length });
  } catch (error) {
    console.log("error in sending not.", error);
    res.status(500).send({ error });
  }
});

export default router;
