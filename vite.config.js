import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(
          __dirname,
          'src/global.scss'
        )}";`,
      },
    },
  },
  plugins: [vue()],
});
