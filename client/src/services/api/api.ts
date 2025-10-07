import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Order, Product } from "../../types/types"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => "/api/orders",
    }),
    getProducts: builder.query<Product[], void>({
      query: () => "/api/products",
    }),
    getOrderProducts: builder.query<Product[], number | null>({
      query: (id) => `/api/orders/${id}/products`,
    }),

    login: builder.mutation<{ token: string }, { username: string; password: string }>({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
})

export const { useGetOrdersQuery, useGetProductsQuery, useGetOrderProductsQuery, useLoginMutation } = api
