<template>
  <div>
    <div class="scroller" v-infinite-scroll="pullup" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <v-content :List="List"></v-content>
    </div>
  </div>
</template>

<script>
import content from '@/components/Content'
import infiniteScroll from 'vue-infinite-scroll'
import api from '@/fetch/api'
import * as _ from '@/utils/tool'
export default {
  components: { 'v-content': content },
  directives: { infiniteScroll },
  data () {
    return {
      pageNo: 0,
      List: [],
      busy: false
    }
  },
  methods: {
    getData () {
      this.busy = true
      let params = {
        pageNo: ++this.pageNo,
        pageSize: 8
      }
      api.ProductList(params).then(res => {
        this.List = this.List.concat(res.data)
        this.busy = false
      }, err => {
        _.alert('没有更多了', err)
      })
    },
    pullup () {
      console.log('121231')
      if (!this.busy) {
        this.getData()
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
</style>
