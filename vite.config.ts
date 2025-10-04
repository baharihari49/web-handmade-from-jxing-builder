import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   server: {
    // Serve from root, let Nginx handle path prefix
    // Using base path in dev mode causes Vite to only serve from that path
    origin: process.env.VITE_ORIGIN || undefined,
    host: '0.0.0.0',
    // Allow wildcard subdomain access for preview servers
    allowedHosts: [
      'localhost',
      '.jxing-builder.jxing.my', // Allow all subdomains (including preview-*)
    ],
  }

})
