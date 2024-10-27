# My Node.js Boilerplate with TypeScript and Webpack

## Опис

Цей проект демонструє налаштування Node.js додатку з використанням TypeScript і Webpack.
Проєкт включає налаштування для автоматичної компіляції у development режимі та збірки для production.

## Структура проекту

```plaintext
ts-webpack-boilerplate
├── src
│   └── index.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```

## Встановлення

### 1. Клонувати репозиторій:

```bash
git clone https://github.com/yourusername/my-node-project.git
cd my-node-project
```

### 2. Встановити залежності:

```bash
npm install
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

## Додатково

Для будь-яких змін у конфігурації, будь ласка, звертайся до документації Webpack та TypeScript.