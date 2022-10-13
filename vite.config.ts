import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $api: path.resolve('./src/api'),
      $assets: path.resolve('./src/assets'),
      $components: path.resolve('./src/components'),
      $hooks: path.resolve('./src/hooks'),
      $layouts: path.resolve('./src/layouts'),
      $pages: path.resolve('./src/pages'),
      $routes: path.resolve('./src/routes'),
      $styles: path.resolve('./src/styles'),
      $utils: path.resolve('./src/utils'),
      $views: path.resolve('./src/views'),
    }
  }
})
