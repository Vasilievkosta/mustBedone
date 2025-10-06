import React, { useEffect, useRef } from "react"

// import "./productsPage.css"
import type { Product } from "../../types/types"

type Props = {
  product: Product
  index: number
}

const ProductItem: React.FC<Props> = ({ product, index }) => {
  const ref = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // стэггер: чем дальше карточка, тем позже появится
    const t = setTimeout(() => el.classList.add("products__item--visible"), 80 * index)
    return () => clearTimeout(t)
  }, [index])

  return (
    <li ref={ref} className="products__item">
      {/* Слот под картинку. <img src={product.imageUrl} alt="" /> при наличии */}

      <div className="product__thumb" aria-hidden="true">
        <p style={{ fontSize: "30px" }}>
          {product?.category === "monitor" ? "📺" : product?.category === "keyboard" ? "⌨️" : "🖱️"}
        </p>
      </div>
      <div className="product__meta">
        <div className="product__name cell cell--name text-truncate">
          {product.name}
          <div className="product__spec">SN-{product.inventory_code}</div>
        </div>
        <div className="product__status">
          <span className="status-pill status-pill--free">Свободен</span>
        </div>
      </div>
    </li>
  )
}

export default ProductItem
