# Telegram Bot & Mini App

Шаблон монорепозитория для Telegram-бота и Mini App.

## Запуск за 5 минут

1. Установите зависимости:
   ```bash
   pnpm install
   ```
2. Скопируйте `.env.example` в `.env` и укажите токен бота.
3. Запустите бота и веб-приложение:
   ```bash
   pnpm --filter bot start &
   pnpm --filter web dev
   ```
