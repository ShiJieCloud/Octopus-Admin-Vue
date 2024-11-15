// 动态路由配置（这些路由只有在用户登录后才加载）

// {
//   path: '',  // 匹配路径，留空或通配符，根据实际情况调整
//   name: '',  // 路由名称，用于引用该路由
//   component: '',  // 该路由对应的组件，填写组件名或导入的组件
//   meta: {  // 路由的元数据
//     title: '',  // 页面标题，用于设置浏览器标签页的标题
//     requiresAuth: false,  // 是否需要授权，默认为false，可以根据需要修改
//     description: '',  // 页面描述，可以用于SEO优化或其他用途
//     keepAlive: false  // 是否缓存该路由组件，默认为false
//   },
//   beforeEnter: (to, from, next) => {  // 路由独立的进入守卫
//     // 在路由跳转之前的逻辑，通常用于权限校验、日志记录等
//     next();  // 必须调用 next() 来继续路由跳转
//   },
//   children: [] // 可选，子路由配置
// }

import { RouteRecordRaw } from 'vue-router'

export const dynamicRoutes:Array<RouteRecordRaw> = []
