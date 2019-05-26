<template>
  <div class="detail">
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    />
    <DetailHeader/>
    <div class="content">
      <DetailList :categoryList="categoryList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SightName, BannerImg, GallaryImgs, CategoryList } from '@/types'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
@Component({
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
})
export default class Detail extends Vue {
  private sightName: string = ''
  private bannerImg: string = ''
  private gallaryImgs: Array<GallaryImgs> = []
  private categoryList: Array<CategoryList> = []

  mounted () {
    this.getDetailInfo()
  }

  async getDetailInfo () {
    let data = await axios.get('/api/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then(await this.getDetailInfoSucc)
    if (data) {
      this.sightName = data.sightName
      this.bannerImg = data.bannerImg
      this.gallaryImgs = data.gallaryImgs
      this.categoryList = data.categoryList
    }
  }
  async getDetailInfoSucc (res: any) {
    res = res.data
    if (res && res.status && res.data) {
      return res.data
    } else {
      return null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
