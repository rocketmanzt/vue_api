<template>
  <div>
  <scroller :on-infinite="pullup" :on-refresh="refresh"  ref="my_scroller">
  <v-content style="padding-top:63px;" :List="List"></v-content>
  </scroller>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import content from '@/components/Content'
export default {
  components: {
    'v-content': content
  },
  data () {
    return {
      pageNo: 0,
      items: []
    }
  },
  computed: {
    ...mapGetters([
      'List'
    ])
  },
  methods: {
    pullup (done) {
      this.$store.dispatch('getProductList', {
        pageNo: ++this.pageNo,
        scb: (result) => {
          this.List = this.List.concat(result)
          done(true)
        }
      })
    },
    refresh () {
      console.log('6')
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" rel="stylesheet/less">
</style>
