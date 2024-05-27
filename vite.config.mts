import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({ defaultImport: 'component' }),
    ViteImageOptimizer({
      png: {
        quality: 90
      },
      webp: {
        quality: 90,
        lossless: true
      },
      avif: {
        quality: 90,
        lossless: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/ui/include-media-variables";
          @import "include-media";
        `
      }
    }
  },
  base: '/Breeze/'
})
