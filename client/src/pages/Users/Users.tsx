import React, { Suspense } from "react"
import { Loader } from "../../components/Loader/Loader"

const SupplyMap = React.lazy(() => import("../../components/Map/SupplyMap"))

export const Users = () => {
  return (
    <div>
      <h2>Пользователи. Поставщики. Карта.</h2>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <SupplyMap />
      </Suspense>
    </div>
  )
}
