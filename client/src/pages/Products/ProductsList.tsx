// Products.tsx
import { useEffect } from "react"
import { skipToken } from "@reduxjs/toolkit/query"
import { useGetOrderProductsQuery } from "../../services/api/api"
import ProductItem from "./ProductItem"

type Props = {
  orderId: number | null
  onClose: () => void
}

export const ProductsList: React.FC<Props> = ({ orderId, onClose }) => {
  const { data: products, isLoading, error } = useGetOrderProductsQuery(orderId ?? skipToken)

  useEffect(() => {
    if (orderId) {
      const el = document.getElementById("products-list")
      el?.focus()
    }
  }, [orderId])

  if (!orderId) return null

  return (
    <section
      id="products-list"
      className={`products-list ${orderId ? "products-list--open" : "products-list--hidden"}`}
      aria-hidden={!orderId}
    >
      <button
        className="products-list__close"
        aria-label="Закрыть панель продуктов"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        ✕
      </button>

      <header className="products-list__header">
        <h3 className="products-list__title">Список продуктов</h3>
        {isLoading && <span className="products-list__loading">Загрузка…</span>}
      </header>

      {error && <p className="products-list__error">Ошибка загрузки</p>}

      <ul className="products-list__list" id="productsList">
        {isLoading ? (
          <p>Loading... </p>
        ) : products && products.length > 0 ? (
          products.map((p, idx) => <ProductItem key={p.id} product={p} index={idx} />)
        ) : (
          <li className="products-list__item products-list__item--visible">Нет продуктов</li>
        )}
      </ul>
    </section>
  )
}
