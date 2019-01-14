import Vue from 'vue'
import Router from 'vue-router'
//导入对应的路由组件
import home from '../components/home'
import menber from '../components/menber'
import shopCar from '../components/shopCar'
import search from '../components/search'

Vue.use(Router)

export default new Router({
  routes: [
   { path: '/home',component: home},
   { path: '/menber',component: menber},
   { path: '/shopCar',component: shopCar},
   { path: '/search',component: search}

  ],
  linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类router-link-active
})
