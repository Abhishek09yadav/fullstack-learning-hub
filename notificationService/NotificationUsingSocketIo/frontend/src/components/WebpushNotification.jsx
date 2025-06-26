"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect } from "react";
import { subscribeUser } from "../../utils/subscribe";

const WebpushNotification = () => {
  useEffect(() => {
    // if ("serviceWorker" in navigator && "pushManger" in window) {
      axiosInstance
        .post("/sendnotification/subscribe")
        .then((res) => res.data)
        .then((data) => subscribeUser(data))
        .catch((e) => console.log("error ", e));
    // }
  }, []);

  return (
    <div>
      <h1 >Send Notification</h1>
      <button className="" />
    </div>
  );
};

export default WebpushNotification;
