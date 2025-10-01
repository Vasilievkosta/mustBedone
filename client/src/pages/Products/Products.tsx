import { useGetProductsQuery } from "../../services/api/api"

export const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки</div>
  if (!products) return <div>Нет данных</div>

  return (
    <div>
      <h2>Товары</h2>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.name} — Price: {p.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
