import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { resolve } from 'path'
import { globSync } from 'glob'
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dts from 'vite-plugin-dts'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    dts({ tsconfigPath: resolve(__dirname, "tsconfig.lib.json") })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      input: Object.fromEntries(
        globSync('lib/**/*.{ts,vue}', {
          ignore: ['lib/**/*.d.ts']
        }).map(file => [
          path.relative(
            'lib',
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  }
})
