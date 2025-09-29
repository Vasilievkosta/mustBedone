import express from "express"
const db = require("./db")
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

// Эндпоинт для получения списка товаров
app.get("/products", async (req, res) => {
  try {
    const result = await db.query("SELECT id, name, price FROM products ORDER BY id")

    // Отключаем кэширование
    // res.setHeader("Cache-Control", "no-store")

    res.json(result.rows)
  } catch (err) {
    console.error("Ошибка запроса:", err)
    res.status(500).send("Ошибка сервера")
  }
})

app.get("/api/orders", async (req, res) => {
  try {
    const result = await db.query("SELECT id, title, created_at FROM orders ORDER BY created_at DESC")

    res.json(result.rows)
  } catch (err) {
    console.error("Ошибка при получении заказов:", err)
    res.status(500).json({ error: "Ошибка сервера" })
  }
})

app.get("/api/orders/:id/products", async (req, res) => {
  const orderId = parseInt(req.params.id)
  if (isNaN(orderId)) return res.status(400).json({ error: "Неверный ID заказа" })

  try {
    const result = await db.query(
      `SELECT id, name, price, condition, status, inventory_code, created_at, updated_at, user_name, order_id
       FROM products
       WHERE order_id = $1
       ORDER BY inventory_code`,
      [orderId]
    )
    res.json(result.rows)
  } catch (err) {
    console.error("Ошибка при получении товаров:", err)
    res.status(500).json({ error: "Ошибка сервера" })
  }
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
