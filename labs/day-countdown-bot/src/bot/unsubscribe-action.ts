import {message} from '../director/l18e-loader.js';
import {userComposer} from '../lib/bot.js';
import {deleteUser, isSubscribed} from '../user.js';

userComposer.action('unsubscribe', async (ctx) => {
  if (ctx.chatId == null) return;

  if (isSubscribed(ctx.chatId)) {
    deleteUser(ctx.chatId);
    await ctx.sendMessageToChat(message('action_unsubscribe_success'), {
      reply_markup: {
        inline_keyboard: [[
          {text: message('button_subscribe'), callback_data: 'subscribe'},
        ]],
      },
    });
  }
  else {
    await ctx.sendMessageToChat(message('action_unsubscribe_failed'), {
      reply_markup: {
        inline_keyboard: [[
          {text: message('button_subscribe'), callback_data: 'subscribe'},
        ]],
      },
    });
  }

  await ctx.answerCbQuery();
});
