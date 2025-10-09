import React, { Suspense } from "react"
import { Loader } from "../../components/Loader/Loader"

const OrderChart = React.lazy(() => import("../../components/Chart/OrderChart"))

export const Groups = () => {
  return (
    <div>
      <h2>Графики</h2>

      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <OrderChart />
      </Suspense>
    </div>
  )
}
