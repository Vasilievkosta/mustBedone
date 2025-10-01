import { useEffect, useState } from "react"

export const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Ошибка загрузки:", err))
  }, [])

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
