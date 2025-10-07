import { useOrdersView } from "../../hooks/useOrdersView"
import { ProductsList } from "../Products/ProductsList"
import { OrdersList } from "./OrdersList"

export const Orders = () => {
  const { openedOrderId, openOrder, closeProducts } = useOrdersView()

  return (
    <>
      <OrdersList isCollapsed={!!openedOrderId} onOpen={openOrder} />
      <ProductsList orderId={openedOrderId} onClose={closeProducts} />
    </>
  )
}
