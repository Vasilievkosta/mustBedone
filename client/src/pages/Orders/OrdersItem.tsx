import React, { useState } from "react"
import type { Order } from "../../types/types"

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

  return (
    <li
      className={`orders__item ${isActive ? "orders__item--active" : ""}`}
      data-order-id={order.id}
      onClick={handleOpen}
    >
      <div className="orders__row orders__row--full" aria-hidden={isActive}>
        <div className="orders__info">
          <div className="orders__name">{order.title}</div>
          <div className="orders__meta">
            <span className="orders__positions">{23} позиции</span>
            <span className="orders__date">{order.created_at}</span>
            <span className="orders__sum">{order.id * 100} UAH</span>
          </div>
        </div>
        <div className="orders__actions">
          <button className="orders__corf" type="button" aria-label="Удалить" onClick={handleOrderClick}>
            {/* <IconCart /> */}🗑️
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
