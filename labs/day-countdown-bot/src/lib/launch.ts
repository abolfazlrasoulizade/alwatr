import {bot} from './bot.js';
import {logger} from '../config.js';

export async function launchBot(): Promise<void> {
  logger.logMethod('launchBot');
  try {
    bot.botInfo ??= await bot.telegram.getMe();
    logger.logProperty('botInfo', bot.botInfo);

    bot.launch().catch((err) => {
      logger.error('launchBot', 'launch_bot_failed', err);
    });

    // await sendMessage(config.telegramBot.debugNotifyToken, '⚡️ Bot launched');
  }
  catch (err) {
    logger.error('launchBot', 'launch_bot_failed', err);
  }
}
