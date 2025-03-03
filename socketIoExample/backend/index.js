import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'
import { log } from 'console'

const app = express()
app.use(cors())
app.listen(4000, () => {
    console.log('listening on port 4000')
})
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods:["GET","POST"]
  },
});


io.on("connection",(socket)=>{
console.log(`user connected ${socket.id}`);

socket.on("join_room",(data)=> {socket.join(data)})
socket.on("send_message",(data)=> {socket.t})

})
