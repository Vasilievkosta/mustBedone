import { useGetProductsQuery } from "../../services/api/api"

export const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки</div>
  if (!products) return <div>Нет данных</div>

  return (
    <section className="products-page">
      <header className="products-page__header">
        <h2>Продукты / {products.length}</h2>
        <div className="products-page__filters">
          <select>…</select>
          <select>…</select>
        </div>
      </header>

      <ul className="products-page__list">
        {products.map((p) => (
          <li className="products-page__item" key={p.id}>
            <div className="products-page__title">{p.name}</div>
            <div className="products-page__meta">
              <span className="status">{p.status}</span>
              <span className="duration">{p.name}</span>
              <span className="date">{p.price}</span>
              <span className="time">{p.condition}</span>
              <span className="user">{p.inventory_code}</span>
              <span className="user">{p.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
