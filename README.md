# 🧩 Fullstack Web App — React + Express + PostgreSQL в Docker

## 📦 Состав проекта

- `client/` — React + Vite
- `server/` — Express API + Socket.io
- `database/` — PostgreSQL
- `schema.sql` — схема для создания таблиц
- `docker-compose.yml` — описание контейнеров

## 🛠️ Требования

Перед запуском убедитесь, что у вас установлены:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- На Windows/macOS — Docker Desktop
- На Linux — `docker` и `docker-compose`

## ⚙️ Установка и запуск

1. Зайди на GitHub и склонируй репозиторий:

```bash
git clone https://github.com/Vasilievkosta/mustBedone.git
```

2. Перейдите в папку проекта:

```bash
cd mustBedone
```

3. Запустите проект в Docker:

```bash
docker-compose up --build
```

4. Откройте клиент в браузере:

```Text
  http://localhost:5173
```

Готово! Теперь можно тестировать клиент, API и маршруты прямо в браузере.
