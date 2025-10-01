# 🧩 Fullstack Web App — React + Express + PostgreSQL в Docker

## 📦 Состав проекта

- client/ — фронтенд на React
- server/ — бэкенд на Express
- schema.sql — SQL-скрипт для создания таблиц
- docker-compose.yml — описание контейнеров
- .env — переменные окружения (не входит в репозиторий)

## 🛠️ Требования

Перед запуском убедитесь, что у вас установлены:

- Docker
- Docker Compose
- На Windows/macOS — Docker Desktop
- На Linux — docker и docker-compose через пакетный менеджер

## ⚙️ Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

2. Создайте .env файл:

```Env
  DB_USER=postgres
  DB_PASSWORD=yourpassword
  DB_NAME=yourdb
```

3. Запустите проект:

```bash
docker-compose up --build
```

4. Доступ к сервисам:

- Фронтенд: http://localhost:5137
- Бэкенд: http://localhost:8080
- PostgreSQL: порт 5432 (если нужно подключиться вручную)

## 📂 Структура базы данных

При первом запуске PostgreSQL, таблицы создаются из schema.sql.

## 🧹 Остановка и удаление

- Остановить контейнеры:

```bash
docker-compose down
```

- Удалить все контейнеры и образы:

```bash
docker system prune -a
```
