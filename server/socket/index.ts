import { Server } from "socket.io"

export const setupSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id)
    io.emit("clientCount", io.engine.clientsCount)

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id)
      io.emit("clientCount", io.engine.clientsCount)
    })
  })
}
