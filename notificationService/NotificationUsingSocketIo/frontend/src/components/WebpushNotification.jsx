"use client";
import axiosInstance from "@/utils/axiosInstance";
import { subscribeUser } from "../../utils/subscribe";

const WebpushNotification = () => {
  const handleSubscribe = async () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      try {
        const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
        console.log(vapidPublicKey);
        const subscription = await subscribeUser(vapidPublicKey);

        await axiosInstance.post("/sendnotification/subscribe", subscription)

        console.log("User is subscribed to notifications!", subscription);
        alert("Subscribed successfully!");
      } catch (error) {
        console.error("Subscription failed:", error);
        alert("Failed to subscribe.");
      }
    } else {
      alert("Push Notification is not supported in your browser.");
    }
  };

  return (
    <div>
      <h1>Web Push Notifications</h1>
      <button onClick={handleSubscribe}>Subscribe to Notifications</button>
    </div>
  );
};

export default WebpushNotification;
