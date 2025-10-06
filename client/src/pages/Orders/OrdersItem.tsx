import React, { useState } from "react"
import type { Order } from "../../types/types"
import { formatDate } from "../../utils/formarDate"

type Props = {
  order: Order
  onOpen: (id: number) => void
}

const OrderItem: React.FC<Props> = ({ order, onOpen }) => {
  const [clickedOrder, setClickedOrder] = useState(false)
  const [isActive, setIsActive] = useState(false)

  function handleOpen() {
    setIsActive(true)
    onOpen(order.id)
  }

  function handleOrderClick(e: React.MouseEvent) {
    e.stopPropagation()
    setClickedOrder(true)
    setTimeout(() => setClickedOrder(false), 220)
    // place to call add logic
  }

  const exchangeRate = 40

  return (
    <li
      className={`orders__item ${isActive ? "orders__item--active" : ""}`}
      data-order-id={order.id}
      onClick={handleOpen}
    >
      <div className="orders__row orders__row--full" aria-hidden={isActive}>
        <div className="orders__info">
          <div className="orders__meta">
            <div className="orders__name cell cell--name text-truncate">{order.title}</div>
            <span className="orders__positions cell cell--price text-truncate">{23} продукта</span>
            <div className="cell cell--dates text-truncate">
              <p className="cell__dates-small">{formatDate(order.created_at, false, false)}</p>
              <div> {formatDate(order.created_at, true)}</div>
            </div>
            <div className="cell cell--price text-truncate">
              <p className="cell__price-small">{Math.trunc((order.id * 100) / exchangeRate)} $</p>
              {order.id * 100} <span className="cell__price-small">UAH</span>
            </div>
          </div>
        </div>
        <div className="orders__actions">
          <button className="orders__corf" type="button" aria-label="Удалить" onClick={handleOrderClick}>
            🗑️
          </button>
        </div>
      </div>

      <div className="orders__row orders__row--collapsed" aria-hidden={!isActive}>
        <div className="orders__summary">{order.title} </div>
        <div className="orders__date-short">{order.created_at}</div>
        <div className="orders__summary">➡️</div>
      </div>
    </li>
  )
}

export default OrderItem
