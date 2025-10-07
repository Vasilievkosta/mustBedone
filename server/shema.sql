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
  category TEXT,
  order_id INTEGER REFERENCES orders(id)
);

-- заполняем таблицу приходов
INSERT INTO orders (id, title, created_at) VALUES
(1, 'Order 2025-09-01 #1', '2025-09-01'),
(2, 'Order 2025-09-05 #2', '2025-09-05'),
(3, 'Order 2025-09-10 #3', '2025-09-10'),
(4, 'Order 2025-09-15 #4', '2025-09-15');

-- заполняем таблицу товаров
INSERT INTO products (id, name, price, condition, status, inventory_code, created_at, updated_at, user_name, category, order_id) VALUES
(1, 'GigabyteTechnology X58-USB3 Max', 2200.00, 'новый', 'свободен', 'INV-010', '2025-09-10', '2025-09-10', 'Иванов Сергей', 'monitor', 3),
(2, 'GigabyteTechnology X58-USB3', 2000.00, 'новый', 'свободен', 'INV-002', '2025-09-01', '2025-09-01', '', 'monitor', 1),
(3, 'GigabyteTechnology X58-USB3 Pro Edition', 2600.00, 'новый', 'в ремонте', 'INV-003', '2025-09-01', '2025-09-01', 'Ковальчук Ольга', 'monitor', 1),
(4, 'GigabyteTechnology X58-USB3 Ultra', 2400.00, 'новый', 'свободен', 'INV-004', '2025-09-01', '2025-09-01', 'Петренко Андрей', 'monitor', 1),
(5, 'GigabyteTechnology X58-USB3 Ultra', 2400.00, 'новый', 'свободен', 'INV-005', '2025-09-01', '2025-09-01', '', 'monitor', 1),
(6, 'GigabyteTechnology X58-USB3 Ultra', 2400.00, 'новый', 'свободен', 'INV-006', '2025-09-01', '2025-09-01', 'Мельник Наталья', 'monitor', 1),
(7, 'GigabyteTechnology X58-USB3 Basic', 1200.00, 'новый', 'в ремонте', 'INV-007', '2025-09-05', '2025-09-05', 'Сидоров Алексей', 'monitor', 2),
(8, 'GigabyteTechnology X58-USB3 Basic', 1200.00, 'новый', 'в ремонте', 'INV-008', '2025-09-05', '2025-09-05', '', 'monitor', 2),
(9, 'GigabyteTechnology X58-USB3 Slim', 1400.00, 'новый', 'свободен', 'INV-009', '2025-09-05', '2025-09-05', 'Ковальчук Ольга', 'monitor', 2),
(10, 'Logitech K120', 450.00, 'новый', 'свободен', 'INV-K001', '2025-10-03', '2025-10-03', 'Иванов Сергей', 'keyboard', 1),
(11, 'Razer BlackWidow V3', 2800.00, 'новый', 'в ремонте', 'INV-K002', '2025-10-03', '2025-10-03', 'Ковальчук Ольга', 'keyboard', 2),
(12, 'Microsoft Ergonomic Keyboard', 1900.00, 'б/у', 'свободен', 'INV-K003', '2025-10-03', '2025-10-03', 'Петренко Андрей', 'keyboard', 3),
(13, 'A4Tech Bloody B810', 1200.00, 'новый', 'свободен', 'INV-K004', '2025-10-03', '2025-10-03', 'Мельник Наталья', 'keyboard', 4),
(14, 'Logitech G502 Hero', 1600.00, 'новый', 'свободен', 'INV-M001', '2025-10-03', '2025-10-03', 'Иванов Сергей', 'mouse', 1),
(15, 'Razer DeathAdder V2', 2100.00, 'б/у', 'в ремонте', 'INV-M002', '2025-10-03', '2025-10-03', 'Ковальчук Ольга', 'mouse', 2),
(16, 'A4Tech X7', 900.00, 'новый', 'свободен', 'INV-M003', '2025-10-03', '2025-10-03', 'Петренко Андрей', 'mouse', 3);

