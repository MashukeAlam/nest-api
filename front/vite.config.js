import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:3333/audios",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api', '')
      },
      '/upload': {
        target: "http://localhost:3333/upload",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/upload', '')
      }
    }
  }
})
