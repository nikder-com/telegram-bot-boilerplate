# Node.js Telegram Bot Boilerplate with grammY lib and TypeScript, Webpack support

## Опис

Цей проект демонструє налаштування Telegram бота на Node.js з використанням бібліотеки grammY і підтримкою TypeScript і Webpack.
Проєкт включає налаштування для автоматичної компіляції у development режимі та збірки для production.

## Структура проекту

```plaintext
telegram-bot-boilerplate
├── src
│   ├── bot.ts
│   ├── config.ts
│   └── index.ts
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```

## Встановлення

### 1. Клонувати репозиторій:

```bash
git clone https://github.com/nikder-com/telegram-bot-boilerplate.git
cd telegram-bot-boilerplate
```

### 2. Встановити залежності:

```bash
npm install
```

### 3. Отримання Bot Token:

Створити нового бота та отримати його Token через BotFather в Telegram:
[BotFather](https://t.me/BotFather)

### 3. Додати Bot Token в файл .env:

Створити файл у корневій папкі проєкту .env

```plaintext
// .env
TELEGRAM_BOT_TOKEN=YOU_TELEGRAM_BOT_TOKEN
```

## Запуск

### Development Mode

Запуск Webpack у режимі перегляду та автоматичний перезапуск сервера з Nodemon:

```bash
npm run dev
```

### Production Mode

1. Збірка проекту:

```bash
npm run build:prod
```

2. Запуск зібраного проекту:

```bash
npm run start
```

## Форматування коду

Запуск Prettier для автоматичного форматування всіх файлів:

```bash
npm run format
```

## Додатково

Для будь-яких змін у конфігурації та налаштуваннях бота, будь ласка, звертайся до документації бібліотеки grammY, Webpack та TypeScript.
