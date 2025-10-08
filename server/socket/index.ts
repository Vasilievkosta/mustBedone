import { Server } from "socket.io"

// export const setupSocket = (io: Server) => {
  // io.on("connection", (socket) => {
    // console.log("Client connected:", socket.id)
    // io.emit("clientCount", io.engine.clientsCount)

    // socket.on("disconnect", () => {
      // console.log("Client disconnected:", socket.id)
      // io.emit("clientCount", io.engine.clientsCount)
    // })
  // })
// }

export const setupSocket = (io: Server) => {
  const getCount = () => (io.engine?.clientsCount ?? 0);

  // helper: broadcast to everyone
  const broadcastCount = () => {
    io.emit("clientCount", getCount());
  };

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id, "total:", getCount());

    // гарантированно ответить на прямой запрос клиента (если он пропустил broadcast)
    socket.on("getClientCount", () => {
      socket.emit("clientCount", getCount());
    });

    // сразу обновляем всех (включая только что подключившегося)
    broadcastCount();

    socket.on("disconnect", (reason) => {
      console.log("Client disconnected:", socket.id, reason, "total:", getCount());
      broadcastCount();
    });
  });
};
