import { useEffect, useState } from "react"
import { useGetOrdersQuery, useGetProductsQuery } from "../../features/api/api"

export type Product = {
  id: number
  name: string
  price: number
  condition: string
  status: string
  inventory_code: string
  created_at: string
  updated_at: string
  user_name: string | null
  order_id: number
}

export type Order = {
  id: number
  title: string
  created_at: string
}

export const Orders = () => {
  // const [orders, setOrders] = useState<Order[]>([])
  const [activeOrderId, setActiveOrderId] = useState<number | null>(null)
  // const [products, setProducts] = useState<Product[]>([])

  const { data: orders, isLoading, error } = useGetOrdersQuery()
  const { data: products } = useGetProductsQuery()

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки</div>
  if (!orders) return <div>Нет данных</div>

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/api/orders`)
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data))
  // }, [])

  // useEffect(() => {
  //   if (activeOrderId !== null) {
  //     fetch(`${import.meta.env.VITE_API_URL}/api/orders/${activeOrderId}/products`)
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data))
  //   }
  // }, [activeOrderId])

  const activeOrder = orders?.find((order) => order.id === activeOrderId)

  return (
    <>
      <h2>Orders</h2>
      <div className="orders-page">
        <div className="orders-list">
          {orders?.map((order) => (
            <div
              key={order.id}
              className={`order-item ${order.id === activeOrderId ? "active" : ""}`}
              onClick={() => setActiveOrderId(order.id)}
            >
              <div>{order.title}</div>
            </div>
          ))}
        </div>

        <div className="products-wrapper">
          {activeOrder ? (
            <>
              <h3>{activeOrder.title}</h3>
              <table className="products-table">
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Инв. номер</th>
                    <th>Статус</th>
                    <th>Ответственный</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.inventory_code}</td>
                      <td>{product.status}</td>
                      <td>{product.user_name || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <div>Выберите заказ слева</div>
          )}
        </div>
      </div>
    </>
  )
}
