/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
   },
   test: {
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.ts"
   }
})
