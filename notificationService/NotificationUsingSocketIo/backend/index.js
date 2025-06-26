// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import sendPushNotification from "./routes/sendPushNotification.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
const mongoURI = process.env.MONGO_URL;
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/sendnotification", sendPushNotification);

app.get("/", (res) => res.send("welcome"));

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("Client connected:", socket.id);

//   socket.on("disconnect", (reason) => {
//     console.log("Client disconnected:", socket.id, "Reason:", reason);
//   });
// });

// app.post("/send", (req, res) => {
//   const { message } = req.body;
//   io.emit("pushNotification", {
//     message,
//   });
//   res.status(200).json({ message: "sent" });
// });

app.listen(4000, () => console.log("app is running on port 4000"));
// server.listen(5000, () => console.log("server is running on port 5000"));
