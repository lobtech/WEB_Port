import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // 引入vue-router
import store, { key } from './store'
import './index.css' // 自定义全局样式
import Alert from './components/alert/alert.vue'

const app = createApp(App)// 创建实例
app.use(router) // 挂载路由
app.use(store, key) // 挂载vuex
app.component('Alert', Alert)
app.mount('#app')
