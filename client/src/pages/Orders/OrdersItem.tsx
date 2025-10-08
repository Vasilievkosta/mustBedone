import React, { useState } from "react"
import type { Order } from "../../types/types"
import { formatDate } from "../../utils/formarDate"
import { Modal } from "../../components/Modal/Modal"
import { EXCHANGE_RATE } from "../../constants/currency"

type Props = {
  order: Order
  onOpen: (id: number) => void
}

const OrderItem: React.FC<Props> = ({ order, onOpen }) => {
  const [isActive, setIsActive] = useState(false)
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [modalData, setModalData] = useState<Order>()

  function handleOpen() {
    setIsActive(true)
    onOpen(order.id)
  }

  function handleOrderClick(data: Order) {
    setModalData(data)
    setModalActive(true)
  }

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
          <p className="modal__title">Вы уверены, что хотите удалить именно этот приход?</p>

          <div className="modal__wrap">
            <div className="modal__description text-truncate">
              {modalData?.title}
              <p className="modal__description--spec">продуктов {modalData?.products_count}</p>
            </div>
          </div>
        </div>
        <div className="modal__actions">
          <button className="modal__btn" onClick={() => setModalActive(false)}>
            ОТМЕНИТЬ
          </button>
          <button className="modal__btn" onClick={() => setModalActive(false)}>
            УДАЛИТЬ
          </button>
        </div>
      </Modal>
      <li
        className={`orders__item ${isActive ? "orders__item--active" : ""}`}
        data-order-id={order.id}
        onClick={handleOpen}
      >
        <div className="orders__row orders__row--full" aria-hidden={isActive}>
          <div className="orders__info">
            <div className="orders__meta">
              <div className="orders__name cell cell--name text-truncate">{order.title}</div>
              <span className="orders__positions cell cell--price text-truncate">{order.products_count} продукта</span>
              <div className="cell cell--dates text-truncate">
                <p className="cell__dates-small">{formatDate(order.created_at, false, false)}</p>
                <div> {formatDate(order.created_at, true)}</div>
              </div>
              <div className="cell cell--price text-truncate">
                <p className="cell__price-small">{Math.trunc(+order.total_sum / EXCHANGE_RATE)} $</p>
                {order.total_sum} <span className="cell__price-small">UAH</span>
              </div>
              <div className="orders__actions">
                <button
                  className="orders__corf"
                  type="button"
                  aria-label="Удалить"
                  onClick={() => handleOrderClick(order)}
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="orders__row orders__row--collapsed" aria-hidden={!isActive}>
          <div className="orders__summary">
            {order.products_count}
            <p>продукта</p>
          </div>
          <div className="cell cell--dates text-truncate">
            <p className="cell__dates-small">{formatDate(order.created_at, false, false)}</p>
            <div> {formatDate(order.created_at, true)}</div>
          </div>
        </div>
      </li>
    </>
  )
}

export default OrderItem
