// 静态路由配置
import Login from '@/views/Login/index.vue'

export const staticRoutes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      title: '用户登录'
    }
  }
]
