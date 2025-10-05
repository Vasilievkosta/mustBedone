import { useState, useCallback } from "react"

export function useOrdersView() {
  const [openedOrderId, setOpenedOrderId] = useState<number | null>(null)

  const openOrder = useCallback((id: number) => {
    setOpenedOrderId(id)
  }, [])

  const closeProducts = useCallback(() => {
    setOpenedOrderId(null)
  }, [])

  return { openedOrderId, openOrder, closeProducts }
}
