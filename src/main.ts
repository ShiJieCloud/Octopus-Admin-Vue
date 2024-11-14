// 统一导入样式文件
import './assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 统一注册全局组件
import 'virtual:svg-icons-register'
import GlobalComponents from '@/components/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.use(GlobalComponents)

app.mount('#app')
