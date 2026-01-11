import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@kay-ui/core': resolve(__dirname, '../../packages/core/src'),
      '@kay-ui/tokens': resolve(__dirname, '../../packages/tokens/src'),
      '@kay-ui/utils': resolve(__dirname, '../../packages/utils/src')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})