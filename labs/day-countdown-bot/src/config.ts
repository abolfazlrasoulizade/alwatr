import {createLogger} from '@alwatr/logger';

export const logger = createLogger('telegram-notifier');

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;

if (telegramBotToken == undefined) {
  throw new Error('telegram bot token required, TELEGRAM_BOT_TOKEN="YOUR_SECRET_TOKEN" yarn start');
}

export const config = {
  telegramBot: {
    token: telegramBotToken,
  },
  storage: {
    name: process.env.STORAGE_NAME ?? 'dayCountdown',
    debugNotifyToken: 'alw007',
  },
};

logger.logProperty('config', config);