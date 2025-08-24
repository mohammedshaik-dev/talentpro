import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/talentpro/', // IMPORTANT for GitHub Pages
  build: {
    outDir: 'dist',
  }
})
