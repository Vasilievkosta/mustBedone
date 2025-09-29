-- Таблица приходов
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  created_at DATE NOT NULL
);

-- Таблица товаров
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(10, 2),
  condition TEXT,
  status TEXT,
  inventory_code TEXT UNIQUE,
  created_at DATE,
  updated_at DATE,
  user_name TEXT,
  order_id INTEGER REFERENCES orders(id)
);

SELECT * FROM information_schema.tables WHERE table_schema = 'public';