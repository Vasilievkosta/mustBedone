import type { FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import type { SerializedError } from "@reduxjs/toolkit/react"

export function getErrorMessage(error: FetchBaseQueryError | SerializedError | undefined): string | null {
  if (!error) return null

  if ("status" in error) {
    const err = error as FetchBaseQueryError
    if (typeof err.status === "number") {
      switch (err.status) {
        case 400:
          return "Некорректный запрос"
        case 401:
          return "Неверный логин или пароль"
        case 403:
          return "Доступ запрещён"
        case 404:
          return "Ресурс не найден"
        case 500:
          return "Ошибка сервера, попробуйте позже"
        default:
          return `Ошибка: ${err.status}`
      }
    }
    if (err.status === "FETCH_ERROR") return "Нет соединения с сервером"
    if (err.status === "PARSING_ERROR") return "Ошибка обработки ответа"
  }

  if ("message" in error) return error.message ?? "Неизвестная ошибка"

  return "Что-то пошло не так"
}
