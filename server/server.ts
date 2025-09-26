import express from "express"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: "*" },
})

app.use(cors())

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: 'Монитор LG 24"', stock: 100 },
    { id: 2, name: "Клавиатура Logitech", stock: 50 },
  ])
})

// Socket.IO
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)
  io.emit("clientCount", io.engine.clientsCount)

  console.log("Total clients:", io.sockets.sockets.size)

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id)
    io.emit("clientCount", io.engine.clientsCount)

    console.log("Total clients:", io.sockets.sockets.size)
  })
})

server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
