import { Router } from "express"
import { getAllOrders, getProductsByOrderId } from "../controllers/orders.controller"

const router = Router()

router.get("/", getAllOrders)
router.get("/:id/products", getProductsByOrderId)

export default router
