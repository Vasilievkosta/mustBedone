import { Request, Response } from "express"
const db = require("../db")

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await db.query(`SELECT 
  o.id,
  o.title,
  o.created_at,
  COUNT(p.id) AS products_count,   -- количество товаров в заказе
  SUM(p.price) AS total_sum        -- сумма цен всех товаров
FROM orders o
JOIN products p ON p.order_id = o.id
GROUP BY o.id, o.title, o.created_at
ORDER BY o.id
`)

    res.json(result.rows)
  } catch (err) {
    console.error("Ошибка при получении заказов:", err)
    res.status(500).json({ error: "Ошибка сервера" })
  }
}

export const getProductsByOrderId = async (req: Request, res: Response) => {
  const orderId = parseInt(req.params.id)
  if (isNaN(orderId)) return res.status(400).json({ error: "Неверный ID заказа" })

  try {
    const result = await db.query(
      `SELECT id, name, price, category, condition, status, inventory_code, created_at, updated_at, user_name, order_id
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
}
