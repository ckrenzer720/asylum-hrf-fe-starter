import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/cases': {
        target: 'https://hrf-asylum-be-b.herokuapp.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
