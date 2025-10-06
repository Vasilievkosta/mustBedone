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
  category: string
  order_id: number
  order_title: string
}

export type Order = {
  id: number
  products_count: string
  title: string
  created_at: string
  total_sum: string
}
