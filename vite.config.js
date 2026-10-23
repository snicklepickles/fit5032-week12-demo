import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/fit5032-week12-demo/'
    : '/',
  plugins: [vue()],
})