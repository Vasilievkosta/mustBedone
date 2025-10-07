import http from "http"
import { Server } from "socket.io"
import dotenv from "dotenv"
import app from "./app"
import { setupSocket } from "./socket"

dotenv.config()

const PORT = process.env.PORT || 8080
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: "*" } })

setupSocket(io)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
