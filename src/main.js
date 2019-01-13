//入口文件
import Vue from 'vue'
import app from './App.vue'
//导入路由包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入路由模块
import router from './router'
//导入mint-ui中的组件

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


//导入app跟组件


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})