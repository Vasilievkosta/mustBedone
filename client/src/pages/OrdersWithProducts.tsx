import { useOrdersView } from "../hooks/useOrdersView"
import { Orders } from "./Orders/Orders"
import Products from "./Orders/Products"

export const OrdersWithProducts = () => {
  const { openedOrderId, openOrder, closeProducts } = useOrdersView()

  return (
    <>
      <Orders isCollapsed={!!openedOrderId} onOpen={openOrder} />
      <Products orderId={openedOrderId} onClose={closeProducts} />
    </>
  )
}
