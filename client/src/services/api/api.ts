import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Order, Product } from "../../types/types"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({ query: () => "/api/orders" }),
    getProducts: builder.query<Product[], void>({ query: () => "/products" }),
    getOrderProducts: builder.query<Product[], number | null>({
      query: (id) => `/api/orders/${id}/products`,
    }),
  }),
})

export const { useGetOrdersQuery, useGetProductsQuery, useGetOrderProductsQuery } = api
