import path from 'node:path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    UnoCSS({
      presets: [presetUno()],
    }),
    solidPlugin(),
    AutoImport({
      imports: ['solid-js'],
      dts: './src/auto-imports.d.ts',
      // resolvers: [
      //   IconsResolver({
      //     componentPrefix: 'Icon',
      //   }),
      // ],
    }),
  ],
  // 打包配置
  build: {
    lib: {
      entry: 'src/index.ts', // 设置入口文件
      name: 'easy-context', // 起个名字，安装、引入用
      formats: ['es'], // 输出格式
      fileName: format => `easy-context.${format}.js`, // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['solid-js', 'solid-js/store', 'solid-js/web'],
    },
  },
})
