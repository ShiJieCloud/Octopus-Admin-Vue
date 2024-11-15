import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'
import pkg from './package.json'
import { wrapperEnv } from './build/getEnv'

// 从 package.json 中解构字段
const { dependencies, devDependencies, name, version } = pkg

// 创建应用信息对象，包括包的详细信息和构建时间
const __APP_INFO__ = {
  pkg: {
    dependencies, // 包的常规依赖项
    devDependencies, // 包的开发依赖项
    name, // 包的名称
    version // 包的版本
  },
  lastBuildTime: new Date().toString() // 构建的日期和时间
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {

  const root = process.cwd()
  // 获取.env文件中的内容
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  return {
    root, //项目根目录
    base: viteEnv.VITE_BASE_URL,
    server: {
      host: '0.0.0.0', //指定服务器主机地址
      port: viteEnv.VITE_SERVER_PORT, //指定开发服务器端口
      strictPort: true, //若端口已被占用则会直接退出
      open: viteEnv.VITE_SERVER_OPEN //服务器启动时，自动在浏览器中打开应用程序
    },
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      VueSetupExtend(),
      // SVG 图标插件配置
      createSvgIconsPlugin({
        // 指定图标目录 src/assets/icons
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // 指定生成的 symbol-id 的格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          // 向全局 scss 文件内容注入变量
          additionalData: '@use "@/styles/variable.scss" as *;'
        }
      }
    }
  }
})
