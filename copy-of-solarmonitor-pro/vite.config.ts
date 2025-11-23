import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Обеспечивает работу сайта в подпапке (например, username.github.io/repo)
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});