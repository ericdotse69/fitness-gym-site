import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/fitness-gym-site/',
  plugins: [react()],
  build: {
    sourcemap: false
  }
})
