<!--  -->
<template>
  <div>
    <input type="text" class="text" v-model="text">
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <a :href="`https://www.baidu.com/s?wd=${item}`">{{item}}</a></li>
    </ul>
  </div>
</template>

<script>
import {getRecommend} from '@/common/js/recommend'
import {getMusic} from '@/common/js/music'
export default {
  components: {},
  data () {
    return {
      text: '',
      data: '',
      list: JSON.parse(window.localStorage.getItem('lists') || '[]'),
      singers: []
    }
  },
  computed: {},
  watch: {
    text: {
      handler (value) {
        let obj = {
          wd: value
        }
        this.myFc(obj)
      }
    },
    list: {
      deep: true,
      handler (value) {
        window.localStorage.setItem('lists', JSON.stringify(value))
      }
    }
  },
  mounted () {
    getMusic().then(res => {
      console.log(res.data)
      this.singers = res.data.list
      this.normalizeSinger(this.singers)
    })
  },
  methods: {
    myFc (a) {
      getRecommend(a).then(res => {
        this.data = res.s
      })
    },
    normalizeSinger (list) {
      let map = {
        hot: {
          title: '热门',
          items: []
        }
      }
      list.forEach((items, index) => {
        map.hot.items.push(new Singer({
          name: items.Fsinger_name
        }))
      })
      console.log(map)
      return map
    }
  }
}
</script>
<style  scoped>
  .text{
    border: 1px solid #f00
  }
</style>
