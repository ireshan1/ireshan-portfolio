import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/ireshan-portfolio/",
  server: {
    hmr: {
      overlay: false,  // Disable error overlay
    },
  },
})
