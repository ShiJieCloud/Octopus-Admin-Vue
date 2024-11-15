import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { staticRoutes } from './modules/staticRoutes'

import getPageTitle from '@/utils/pageTitle'
import { RouterMode } from '@/constants/RouterMode'

const routerMode = {
  history: () => createWebHistory(import.meta.env.BASE_URL),
  hash: () => createWebHashHistory(import.meta.env.BASE_URL)
}

// 从环境变量 VITE_ROUTER_MODE 读取路由模式，默认使用 RouterMode.History
const mode:RouterMode = import.meta.env.VITE_ROUTER_MODE || RouterMode.Hash

const router = createRouter({
  history: routerMode[mode](),
  routes: staticRoutes, // 初始路由仅包含静态路由
})

// 路由守卫
router.beforeEach((to, from, next) => {

  // 填充页面标题
  document.title = getPageTitle(to.meta.title as string)

  next() // 继续导航
})

export default router
