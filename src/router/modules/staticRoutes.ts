// 静态路由配置
import Login from '@/views/Login/index.vue'
import Register from '@/views/Register/index.vue'

export const staticRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title: '用户登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title: '用户注册'
    }
  }
]
