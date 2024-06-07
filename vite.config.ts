import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      dts: resolve(__dirname, 'types/auto-imports.d.ts'),
      dirs: ['src/composables', 'src/stores'],
      eslintrc: {
        enabled: true,
        filepath: 'types/eslintrc-auto-import.json',
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: [resolve(__dirname, 'src/components')],
      dts: resolve(__dirname, 'types/components.d.ts'),
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
