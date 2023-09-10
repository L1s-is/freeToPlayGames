import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/index.html",
    port: 3000,
  },
  "compilerOptions": {
    "target": "esnext",
    "module": "amd",
    "moduleResolution": "node",
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      devSourcemap: true,
    },
  },
})
