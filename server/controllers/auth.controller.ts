import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET || "super_secret_key"

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body

  //  ищем пользователя в БД
  if (username === "admin" && password === "123456") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "8h" })
    return res.json({ token })
  }

  return res.status(401).json({ message: "Неверный логин или пароль" })
}

// Middleware для проверки токена
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Нет токена" })
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Неверный или истёкший токен" })
    }
    ;(req as any).user = user // можно расширить типизацию Request
    next()
  })
}
