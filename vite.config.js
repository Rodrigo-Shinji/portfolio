// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools' // Importe se estiver usando

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Corrigido: plugins é um array de plugins, não um objeto com 'plugins' dentro
    vueDevTools(), // Adicione se estiver usando o Vue DevTools plugin
  ],
  base: '/portfolio/', // <-- CORRIGIDO AQUI!
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})