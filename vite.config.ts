import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Mapeia o @src para o diretório físico src
      '@src': path.resolve(__dirname, './src'),
    },
  },
})