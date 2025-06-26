// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io =new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", (reason) => {
    console.log("Client disconnected:", socket.id, "Reason:", reason);
  });
});

app.post("/send", (req, res) => {
  const { message } = req.body;
  io.emit("pushNotification", {
    message,
  });
  res.status(200).json({ message: "sent" });

});
server.listen(4000,()=> console.log('server is running on port 4000'))