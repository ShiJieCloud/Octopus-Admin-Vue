import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { staticRoutes } from './modules/staticRoutes'

import getPageTitle from '@/utils/pageTitle'
import { AppConfig } from '@/config/AppConfig'

const routerMode = {
  history: () => createWebHistory(AppConfig.getBaseUrl()),
  hash: () => createWebHashHistory(AppConfig.getBaseUrl())
}

const router = createRouter({
  history: routerMode[AppConfig.getRouterMode()](),
  routes: staticRoutes, // 初始路由仅包含静态路由
})

// 路由守卫
router.beforeEach((to, from, next) => {

  // 填充页面标题
  document.title = getPageTitle(to.meta.title as string)

  next() // 继续导航
})

export default router
