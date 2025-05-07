import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@vedin-pp-se/bolido-design": "@vedin-pp-se/bolido-design"
    }
  }
})
