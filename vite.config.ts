import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite'
import unocss from 'unocss/vite'
import {presetIcons,presetAttributify,presetUno} from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
  AutoImport({
    imports: ['vue'],
    dts: "src/auto-import.d.ts"
  }),
  unocss({
    presets:[presetIcons(), presetAttributify(), presetUno()],
    rules: [
      ['flex', { display: "flex" }],
      ['red', { color: 'red' }],
      [/^m-(\d+)$/, ([, d]) => ({ 'margin-left': `${Number(d) * 10}px` })]
    ],
    // 组合自定义样式
    shortcuts: {
      zhcj: ['flex', 'red']
    }
  })
  ],
  // resolve: {
  //   alias: {
  //     '@': fileU
  //   }
  // }
})
