<template>
  <div id="app">
    <v-tabar v-if="footerStatus"></v-tabar>
    <v-loading v-if="loading"></v-loading>
    <v-header :title="title" :menu-display="menuDisplay" :back-display="backDisplay" :map-display="mapDisplay"></v-header>
      <transition name="slide-left">
        <router-view></router-view>
      </transition>
      <v-sidebar></v-sidebar>
      <v-alert v-if="showAlert"></v-alert>
  </div>
</template>
<script>
import sidebar from '@/components/sidebar'
import tabar from '@/components/tabar'
import loading from '@/components/loading'
import alert from '@/components/alert'
import header from '@/components/header'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    'v-tabar': tabar,
    'v-header': header,
    'v-loading': loading,
    'v-sidebar': sidebar,
    'v-alert': alert
  },
  methods: {
    ...mapActions({ setNavState: 'setNavState' })
  },
  watch: {
    $route (to, from) {
      if (to.path === '/product') {
        this.$store.dispatch('setFooterState', false)
      } else {
        this.$store.dispatch('setFooterState', true)
      }
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'showToast',
      'showAlert',
      'footerStatus'
    ]),
    menuDisplay () {
      if (this.$route.path === '/') {
        return true
      }
    },
    title () {
      switch (this.$route.path.split('/')[1]) {
        case '':
          return '首页'
        case 'login':
          return '登录'
        case 'product':
          return '产品'
        case 'travel':
          return '约行'
        case 'user':
          return '我的'
      }
    },
    backDisplay () {
      return this.$route.path.split('/').length > 2
    }
  }
}
</script>
<style lang="scss">
@import './assets/css/function';

@font-face {
  font-family: 'icon';  /* project id 172436 */
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
}
.icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
}

html,body {
  margin: 0px;
  padding:0px;
}

a.active {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #F5F5F5;
  .content{
    padding-top: px2rem(100px);
    background: #F5F5F5;
  }
  .tabar {
    margin-bottom: px2rem(120px);
  }
  //渐变动效
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .1s ease-in;
    opacity: 1;
  }
  .slide-left-enter,
  .slide-left-leave-active {
    opacity: 0;
  }

  //左滑动效
  // .slide-left-enter-active {
  //   animation: slideLeft .3s;
  // }
}

@keyframes slideLeft {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
