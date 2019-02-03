process.env["NTBA_FIX_319"] = 1;

const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const config = require(__dirname + '/config.json');

const telegramToken = config.telegramToken;
const travisToken = config.travisToken;
const bot = new TelegramBot(telegramToken, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});
