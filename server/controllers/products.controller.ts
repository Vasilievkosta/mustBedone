import { Request, Response } from "express"
const db = require("../db")

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await db.query(`
      SELECT p.*, o.title AS order_title
      FROM products p
      LEFT JOIN orders o ON p.order_id = o.id
      ORDER BY p.id
    `)
    res.json(result.rows)
  } catch (err) {
    console.error("Ошибка запроса:", err)
    res.status(500).send("Ошибка сервера")
  }
}
