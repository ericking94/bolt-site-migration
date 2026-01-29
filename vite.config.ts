import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-htaccess',
      writeBundle() {
        try {
          copyFileSync('public/.htaccess', 'dist/.htaccess');
        } catch (error) {
          console.warn('Could not copy .htaccess file:', error);
        }
      }
    }
  ],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});