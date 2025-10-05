// Products.tsx
import { useEffect } from "react"
import { skipToken } from "@reduxjs/toolkit/query"
import { useGetOrderProductsQuery } from "../../services/api/api"
import ProductItem from "./ProductItem"

type Props = {
  orderId: number | null
  onClose: () => void
}

const Products: React.FC<Props> = ({ orderId, onClose }) => {
  const { data: products, isLoading, error } = useGetOrderProductsQuery(orderId ?? skipToken)

  useEffect(() => {
    if (orderId) {
      const el = document.getElementById("products")
      el?.focus()
    }
  }, [orderId])

  if (!orderId) return null

  return (
    <section
      id="products"
      className={`products ${orderId ? "products--open" : "products--hidden"}`}
      aria-hidden={!orderId}
    >
      <button
        className="products__close"
        aria-label="Закрыть панель продуктов"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        ✕
      </button>

      <header className="products__header">
        <h3 className="products__title">Список продуктов</h3>
        {isLoading && <span className="products__loading">Загрузка…</span>}
      </header>

      {error && <p className="products__error">Ошибка загрузки</p>}

      <ul className="products__list" id="productsList">
        {isLoading ? (
          <p>Loading... </p>
        ) : products && products.length > 0 ? (
          products.map((p, idx) => <ProductItem key={p.id} product={p} index={idx} />)
        ) : (
          <li className="products__item products__item--visible">Нет продуктов</li>
        )}
      </ul>
    </section>
  )
}

export default Products
