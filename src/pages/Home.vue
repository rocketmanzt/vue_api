<template>
<div class="home">
<div class="banner">
<swiper :options="swiperOption" class="swiper-box">
  <swiper-slide class="swiper-item"><img src="../assets/images/y-banner01.jpg" alt="..."></swiper-slide>
  <swiper-slide class="swiper-item"><img src="../assets/images/y-banner03.jpg" alt="..."></swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          stopOnlastSlide: true,
          delay: 5000,
          reverseDirection: true
        },
        loop: {
          loop: true
        }
      }
    }
  },
  created () {
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
@import "../assets/css/function";

.banner {
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: visible;
    .swiper-item {
      height: px2rem(375px);
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        display: block
      }
    }
  }
}
</style>
