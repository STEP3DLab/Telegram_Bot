import { config } from 'dotenv';
config();
import { Telegraf } from 'telegraf';
import echo from './handlers/echo';

const bot = new Telegraf(process.env.TELEGRAM_TOKEN!);

bot.start((ctx) => ctx.reply('Бот запущен'));
bot.on('text', echo);

bot.launch().then(() => {
  console.log('Bot started');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
