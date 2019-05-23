<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/SwiperPic.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import { State } from 'vuex-class'
import axios from 'axios'

interface SwiperList {
  id: number | string
  filename: string
  alt?: string
}
interface IconList {
  id: number | string
  filename: string
  desc: string
  alt?: string
}
interface RecommendList {
	id: number | string
	filename: string
	title: string
	desc: string
}
interface WeekendList {
	id: number | string
	filename: string
	title: string
	desc: string
}
@Component({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
})
export default class Home extends Vue {
  private swiperList: Array<SwiperList> = []
  private iconList: Array<IconList> = []
  private recommendList: Array<RecommendList> = []
  private weekendList: Array<WeekendList> = []
  @State('city') city!: string

  mounted () {
    this.getHomeInfo()
    console.error(this.city)
  }

  async getHomeInfo () {
    let data = await axios.get('/api/index.json')
      .then(await this.getHomeInfoSucc)
    if (data) {
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    }
  }
  async getHomeInfoSucc (res: any) {
    res = res.data
    if (res && res.status && res.data) {
      return res.data
    } else {
      return null
    }
  }
}
</script>

<style>

</style>
