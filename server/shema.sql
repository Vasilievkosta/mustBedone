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

-- заполняем таблицу приходов
INSERT INTO orders (id, title, created_at) VALUES
(1, 'Order 2025-09-01 #1', '2025-09-01'),
(2, 'Order 2025-09-05 #2', '2025-09-05'),
(3, 'Order 2025-09-10 #3', '2025-09-10'),
(4, 'Order 2025-09-15 #4', '2025-09-15');

-- заполняем таблицу товаров
INSERT INTO products (id, name, price, condition, status, inventory_code, created_at, updated_at, user_name, order_id) VALUES
(1, 'GigabyteTechnology X58-USB3 Max', 2200.00, 'новый', 'свободен', 'INV-010', '2025-09-10', '2025-09-10', 'Иванов Сергей', 3),
(2, 'GigabyteTechnology X58-USB3', 2000.00, 'новый', 'свободен', 'INV-002', '2025-09-01', '2025-09-01', '', 1),
(3, 'GigabyteTechnology X58-USB3 Pro Edition', 2600.00, 'новый', 'offline', 'INV-003', '2025-09-01', '2025-09-01', 'Ковальчук Ольга', 1),
(4, 'GigabyteTechnology X58-USB3 Ultra', 2400.00, 'новый', 'свободен', 'INV-004', '2025-09-01', '2025-09-01', 'Петренко Андрей', 1),
(5, 'GigabyteTechnology X58-USB3 Ultra', 2400.00, 'новый', 'свободен', 'INV-005', '2025-09-01', '2025-09-01', '', 1),
(6, 'GigabyteTechnology X58-USB3 Ultra', 2400.00, 'новый', 'свободен', 'INV-006', '2025-09-01', '2025-09-01', 'Мельник Наталья', 1),
(7, 'GigabyteTechnology X58-USB3 Basic', 1200.00, 'новый', 'offline', 'INV-007', '2025-09-05', '2025-09-05', 'Сидоров Алексей', 2),
(8, 'GigabyteTechnology X58-USB3 Basic', 1200.00, 'новый', 'offline', 'INV-008', '2025-09-05', '2025-09-05', '', 2),
(9, 'GigabyteTechnology X58-USB3 Slim', 1400.00, 'новый', 'свободен', 'INV-009', '2025-09-05', '2025-09-05', 'Ковальчук Ольга', 2),
(10, 'GigabyteTechnology X58-USB3 RGB', 2000.00, 'новый', 'offline', 'INV-011', '2025-09-10', '2025-09-10', '', 3),
(11, 'GigabyteTechnology X58-USB3 RGB', 2000.00, 'новый', 'offline', 'INV-012', '2025-09-10', '2025-09-10', 'Мельник Наталья', 3),
(12, 'GigabyteTechnology X58-USB3 RGB', 2000.00, 'новый', 'offline', 'INV-013', '2025-09-10', '2025-09-10', 'Петренко Андрей', 3),
(13, 'GigabyteTechnology X58-USB3 RGB', 2000.00, 'новый', 'offline', 'INV-014', '2025-09-10', '2025-09-10', '', 3),
(14, 'GigabyteTechnology X58-USB3 Silent', 1700.00, 'новый', 'offline', 'INV-015', '2025-09-10', '2025-09-10', 'Сидоров Алексей', 3),
(15, 'GigabyteTechnology X58-USB3 Silent', 1700.00, 'новый', 'offline', 'INV-016', '2025-09-10', '2025-09-10', '', 3),
(16, 'GigabyteTechnology X58-USB3 Mini', 1800.00, 'новый', 'свободен', 'INV-017', '2025-09-10', '2025-09-10', 'Ковальчук Ольга', 3),
(17, 'GigabyteTechnology X58-USB3 Compact', 1500.00, 'новый', 'свободен', 'INV-018', '2025-09-15', '2025-09-15', 'Петренко Андрей', 4),
(18, 'GigabyteTechnology X58-USB3 Compact', 1500.00, 'новый', 'свободен', 'INV-019', '2025-09-15', '2025-09-15', '', 4),
(19, 'GigabyteTechnology X58-USB3 Eco', 1600.00, 'новый', 'свободен', 'INV-020', '2025-09-15', '2025-09-15', 'Мельник Наталья', 4);

-- проверка что таблицы не пустые
SELECT COUNT(*) FROM products;
SELECT COUNT(*) FROM orders;

-- вывести первые три строки
SELECT * FROM products LIMIT 3;
SELECT * FROM orders LIMIT 3;

