// Configure the environment
import './config.js'

// Import modules
import TelegramBot from 'node-telegram-bot-api'
import { Server } from 'http'

// Initialize a bot and enable polling
const bot = new TelegramBot(
    process.env.TELEGRAM_BOT_TOKEN, { polling: true }
)

// Define a RegExp for a start message
const startMessageRE = /\/start/

// Configure a greeting message
bot.onText(startMessageRE, msg => {
    bot.sendMessage(msg.chat.id, 'Hello, this is a bot!')
})

// Configure a response to text messages
bot.on('text', msg => {

    // Determine if it’s a start message, and skip if so
    if (msg.text.match(startMessageRE)) return

    // Compose a sample keyboard layout
    const keyboard = [['First', 'Second'], ['Third', 'Fourth']]

    // Reponse with the received text and a sample keyboard
    bot.sendMessage(
        msg.chat.id,
        msg.text,
        { reply_markup: { keyboard } }
    )
})

// Starting a server for continious polling
const port = process.env.PORT
new Server().listen({ port }, () =>
    console.log(`📱 Telegram Bot is running on port ${port}`)
)