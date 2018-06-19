import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import VueScroller from 'vue-scroller'
import store from './vuex/store'
import 'swiper/dist/css/swiper.css'
import '@/style/reset.css'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: require('@/assets/logo.png'),
  loading: require('@/assets/loading.gif'),
  attempt: 1
})
Vue.use(VueScroller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
