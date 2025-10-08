import { formatDate } from "./formarDate"

describe("formatDate", () => {
  test("форматирует дату в формате DD/MM/YYYY", () => {
    const result = formatDate("2025-10-08T12:00:00Z")
    expect(result).toBe("08/10/2025")
  })

  test("форматирует дату с названием месяца", () => {
    const result = formatDate("2025-10-08T12:00:00Z", true)
    expect(result).toBe("08/Окт/2025")
  })

  test("форматирует дату без года", () => {
    const result = formatDate("2025-10-08T12:00:00Z", true, false)
    expect(result).toBe("08/Окт")
  })
})
