import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //for connection on deployment 
  server: {
    proxy: {
      '/user': {
        target: process.env.VITE_BASE_URL,
        changeOrigin: true,
        secure: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  }
})
