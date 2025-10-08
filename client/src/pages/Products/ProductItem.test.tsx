import { render, screen } from "@testing-library/react"
import ProductItem from "./ProductItem"
import type { Product } from "../../types/types"
import { vi } from "vitest"

const mockProduct: Product = {
  id: 1,
  name: "Монитор Samsung",
  price: 10000,
  condition: "new",
  status: "free",
  inventory_code: "INV001",
  created_at: "2025-10-08T12:00:00Z",
  updated_at: "2025-10-08T12:00:00Z",
  user_name: "Alexander",
  category: "monitor",
  order_id: 1,
  order_title: "Order 1",
}

describe("ProductItem", () => {
  test("отображает название и инвентарный код", () => {
    render(<ProductItem product={mockProduct} index={0} />)

    expect(screen.getByText("Монитор Samsung")).toBeInTheDocument()
    expect(screen.getByText("SN-INV001")).toBeInTheDocument()
  })

  test("добавляет класс products__item--visible с задержкой", () => {
    vi.useFakeTimers()
    render(<ProductItem product={mockProduct} index={2} />)

    const item = screen.getByRole("listitem")

    // сразу после рендера класса нет
    expect(item.classList.contains("products__item--visible")).toBe(false)

    // прокручиваем таймер на 160 мс (80 * index)
    vi.advanceTimersByTime(160)

    expect(item.classList.contains("products__item--visible")).toBe(true)
  })
})
