// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { vitePluginLibInsertUnocss } from 'vite-plugin-lib-insert-unocss'
import dts from 'vite-plugin-dts'
import vitePluginInspectorLibCss from 'vite-plugin-inspector-lib-css'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    cssInjectedByJsPlugin(),
    vueJsx(),
    vitePluginLibInsertUnocss(),
    dts(),
    vitePluginInspectorLibCss(),
  ],
})

