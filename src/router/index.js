import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Product from '@/pages/Product'
import Product1 from '@/pages/Product1'
import Cache from '@/pages/Cache'
import Home from '@/pages/Home'
import BetterSroller from '@/pages/BetterSroller'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product1',
      name: 'Product1',
      component: Product1
    },
    {
      path: '/cache',
      name: 'cache',
      component: Cache
    },
    {
      path: '/better-sroller',
      name: 'BetterSroller',
      component: BetterSroller
    }
  ]
})
