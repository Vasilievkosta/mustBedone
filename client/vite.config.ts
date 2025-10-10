import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // важно в Docker, чтобы слушал на 0.0.0.0
    port: 5173,
    proxy: {
      "/api": {
        target: "http://server:3000", // имя сервиса из docker-compose
        changeOrigin: true,
      },
      "/socket.io": {
        target: "http://server:3000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          chart: ["chart.js"],
          leaflet: ["leaflet", "react-leaflet"],
          rtk: ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
})
