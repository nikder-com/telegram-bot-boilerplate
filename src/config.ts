import * as dotenv from 'dotenv'

dotenv.config()

export const config = {
	telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',
}
