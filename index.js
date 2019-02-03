process.env["NTBA_FIX_319"] = 1;

const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent')
const config = require(__dirname + '/config.json');
let request = {};

if (process.env.NODE_ENV !== 'production') {
  request = {
    agentClass: Agent,
    agentOptions: {
      socksHost: config.socksHost,
      socksPort: config.socksPort,
      socksUsername: config.socksUsername,
      socksPassword: config.socksPassword
    }
  }
}

const telegramToken = config.telegramToken;
const travisToken = config.travisToken;
const bot = new TelegramBot(telegramToken, {
  polling: true,
  request,
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});
