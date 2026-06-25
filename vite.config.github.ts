import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 

export default defineConfig({
  plugins: [react()],
  base: '/website/',          // 1. Must start (and preferably end) with a slash
})
