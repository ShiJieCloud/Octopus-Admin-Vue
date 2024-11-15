// 静态路由配置
import Layout from '@/layouts/index.vue'
import Login from '@/views/Login/index.vue'

export const staticRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title: '用户登录'
    }
  }
]
