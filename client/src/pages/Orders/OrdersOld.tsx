import { useState } from "react"
import { ordersData } from "./ordersData"

export const Orders = () => {
  const [activeOrderId, setActiveOrderId] = useState<number | null>(null)

  const activeOrder = ordersData.find((order) => order.id === activeOrderId)

  return (
    <>
      <h2>Orders test</h2>
      <div className="orders-page">
        <div className="orders-list">
          {ordersData.map((order) => (
            <div
              key={order.id}
              className={`order-item ${order.id === activeOrderId ? "active" : ""}`}
              onClick={() => setActiveOrderId(order.id)}
            >
              <div>Приход {order.date}</div>
              <div>{order.products.length} товаров</div>
            </div>
          ))}
        </div>

        <div className="products-wrapper">
          <h3>Длинное предлинное предлиннючее название</h3>
          {activeOrder ? (
            <table className="products-table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {activeOrder.products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.qty}</td>
                    <td>{product.available ? "Свободен" : "Занят"}</td>
                    <td>
                      <button className="delete-btn">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>Выберите заказ слева</div>
          )}
        </div>
      </div>
    </>
  )
}
