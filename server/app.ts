import express from "express"
import cors from "cors"
import productsRoutes from "./routes/products.routes"
import ordersRoutes from "./routes/orders.routes"
import authRoutes from "./routes/auth.routes"
import { verifyToken } from "./controllers/auth.controller"

const app = express()
app.use(cors())
app.use(express.json())

// Public
app.use("/api/auth", authRoutes)

// Private
app.use("/api/products", verifyToken, productsRoutes)
app.use("/api/orders", verifyToken, ordersRoutes)

export default app
