import { useGetOrdersQuery } from "../../services/api/api"
import OrderItem from "./OrdersItem"

type Props = {
  isCollapsed: boolean
  onOpen: (id: number) => void
}

export const Orders: React.FC<Props> = ({ isCollapsed, onOpen }) => {
  const { data: orders, isLoading, error } = useGetOrdersQuery()

  if (isLoading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка загрузки</p>

  return (
    <section className={`orders ${isCollapsed ? "orders--collapsed" : "orders--expanded"}`} id="orders">
      <header className="orders__header">
        <h2 className="orders__title">
          Приходы <span className="orders__Count orders__count">/ {orders?.length}</span>
        </h2>
      </header>

      <ul className="orders__list" id="ordersList">
        {orders?.map((o) => (
          <OrderItem key={o.id} order={o} onOpen={onOpen} />
        ))}
      </ul>
    </section>
  )
}
