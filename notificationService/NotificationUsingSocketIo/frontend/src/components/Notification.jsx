"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function Notification() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    socket.on("pushNotification", (data) => {
      console.log("message", data);
      toast.success("notification received");
      setNotifications((prev) => [...prev, data]);
    });
    return () => socket.off("pushNotification");
  }, []);
  return (
    <div>
      <h1>push notifications</h1>
      <ul>
        {notifications.map((value, index) => {
          return <li key={index}>{value.message}</li>;
        })}
      </ul>
    </div>
  );
}

export default Notification;
