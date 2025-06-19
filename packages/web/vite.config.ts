import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Telegram_Bot/',
  test: {
    environment: 'jsdom'
  }
});
