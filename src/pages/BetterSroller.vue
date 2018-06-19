<template>
  <div>
    <scroll ref="scroll"
    :data="List"
    :listenScrollEnd="true"
    :pullUpLoad="pullUpLoad"
    @pullingUp="onPullingUp">
  <v-content style="padding-top: 61px;" :List="List"></v-content>
  </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import content from '@/components/Content'
import Scroll from '@/components/better-scroll/Scroll.vue'
export default {
  components: {
    'v-content': content,
    Scroll
  },
  data () {
    return {
      pageNo: 1,
      pageSize: 6,
      header: 'Better-scroll',
      pullUpLoad: {
        threshold: 8,
        txt: {more: '', noMore: '暂无更多数据'}
      }
    }
  },
  computed: {
    ...mapGetters([
      'List'
    ])
  },
  methods: {
    onPullingUp () {
      let params = {
        pageNo: ++this.pageNo
      }
      this.$store.dispatch('getProductList', params)
    }
  },
  mounted () {
    let params = {
      pageNo: this.pageNo,
      pageSize: this.pageSize
    }
    this.$store.dispatch('getProductList', params)
  }
}
</script>
<style lang="less" rel="stylesheet/less">
</style>
