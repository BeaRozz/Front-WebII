import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Open the browser automatically when the server starts
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for easier imports
    },
  },
  build: {
    outDir: 'dist', // Output directory for build
  },
});
