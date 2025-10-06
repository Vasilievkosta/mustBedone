import { useOrdersView } from "../../hooks/useOrdersView"
import { OrdersList } from "./OrdersList"
import { ProductsList } from "../Products/ProductsList"

export const Orders = () => {
  const { openedOrderId, openOrder, closeProducts } = useOrdersView()

  return (
    <>
      <OrdersList isCollapsed={!!openedOrderId} onOpen={openOrder} />
      <ProductsList orderId={openedOrderId} onClose={closeProducts} />
    </>
  )
}
