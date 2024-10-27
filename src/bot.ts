import { Bot } from 'grammy'
import { config } from './config'

if (!config.telegramBotToken) {
	throw new Error('Variable TELEGRAM_BOT_TOKEN is required')
}

// Створюємо екземпляр класу `Bot` і передаємо йому свій токен бота.
const bot = new Bot(config.telegramBotToken) // <-- Помістіть токен свого бота

// Тепер можемо зареєструвати обробників для обʼєкта `bot`.
// grammY викликатиме обробники, коли користувачі надсилатимуть повідомлення боту.

// Обробляємо команду /start.
bot.command('start', ctx => ctx.reply('Ласкаво просимо! Бот запущений.'))
// Обробляємо інші повідомлення.
bot.on('message', ctx => ctx.reply('Отримав ще одне повідомлення!'))

// Тепер, коли ми вказали, як обробляти повідомлення, ми можете запустити свого бота.
// Це призведе до підключення до серверів Telegram і очікування повідомлень.

// Експортуємо бота.
export default bot
