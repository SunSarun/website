import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue, svelte, etc.

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  base: './', // <--- Add this if your assets are returning 404s
    server: {
    host: '0.0.0.0',          // 2. Must be wrapped in quotes
    port: 5173                // 3. (Optional) Explicitly define your server port
  }
})