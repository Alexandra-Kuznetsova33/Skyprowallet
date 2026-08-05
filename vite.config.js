import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Skyprowallet/',
  server: {
    port: 3000,
    open: true,
  },
});
