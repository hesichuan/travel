<template>
  <div>
    <home-header></home-header>
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
import { SwiperList, IconList, RecommendList, WeekendList } from '@/types'
import axios from 'axios'

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
  private lastCity: String = ''
  @State('city') city!:String

  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  }

  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }

  async getHomeInfo () {
    let data = await axios.get(`/api/index.json?city=${this.city}`)
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
