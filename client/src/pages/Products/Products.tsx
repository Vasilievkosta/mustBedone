import { useState } from "react"
import { useGetProductsQuery } from "../../services/api/api"
import { formatDate } from "../../utils/formarDate"
import { Modal } from '../../components/Modal/Modal'


export const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()
  const [category, setCategory] = useState("all")
  const [modalActive, setModalActive] = useState<boolean>(false)

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки</div>
  if (!products) return <div>Нет данных</div>

  const filteredProducts =
    category === "all" ? products : products.filter((p) => p.category.toLowerCase() === category.toLowerCase())

  const exchangeRate = 40

  const handleClick = () => {
    setModalActive(true)
  }

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Delete </p>
        <button className="auth__btn" onClick={() => setModalActive(false)}>
          Yes
        </button>
      </Modal>
      <section className="products-page">
        <header className="products-page__header">
          <h2 className="products-page__title">Продукты / {filteredProducts.length}</h2>
          <div className="products-page__filters d-flex gap-2">
            <select className="form-select w-auto" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">Все категории</option>
              <option value="monitor">Monitor</option>
              <option value="mouse">Mouse</option>
              <option value="keyboard">Keyboard</option>
            </select>
            <select className="form-select w-auto">
              <option>Сортировка</option>
            </select>
          </div>
        </header>
        <ul className="list-group products-page__list">
          {filteredProducts.map((p) => (
            <li key={p.id} className="p-0">
              <div className="products-page__row">
                <div className="cell cell--name text-truncate">
                  {p.name}
                  <div>{p.inventory_code}</div>
                </div>
                <div className="cell cell--status text-truncate">{p.status}</div>
                <div className="cell cell--dates text-truncate">
                  с {formatDate(p.created_at)}
                  <div> по {formatDate(p.updated_at)}</div>
                </div>
                <div className="cell cell--condition text-truncate">{p.condition}</div>
                <div className="cell cell--price text-truncate">
                  <p className="cell__price-small">{Math.trunc(p.price / exchangeRate)} $</p>
                  {p.price} <span className="cell__price-small">UAH</span>
                </div>
                <div className="cell cell--category text-truncate">{p.category}</div>
                <div className="cell cell--user text-truncate">{p.user_name}</div>
                <div className="cell cell--order text-truncate">{p.order_title}</div>
                <div className="cell cell--dates text-truncate">
                  <p className="cell__dates-small">{formatDate(p.created_at, false, false)}</p>
                  <div> {formatDate(p.created_at, true)}</div>
                </div>
                <div className="cell cell__btn">
                  <button className="orders__corf" type="button" aria-label="Удалить" onClick={handleClick}>
                    🗑️
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
