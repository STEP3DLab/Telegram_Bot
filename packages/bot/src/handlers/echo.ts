import { Context } from 'telegraf';

export default function echo(ctx: Context) {
  if (ctx.message && 'text' in ctx.message) {
    ctx.reply(ctx.message.text);
  }
}
