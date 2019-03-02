<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperImgs" :key="item.id">
        <img class="swiper-img" :src="require(`@/assets/image/${item.filename}`)" :alt="item.alt">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'

@Component
export default class SwiperPic extends Vue {
  @Provide() swiperImgs: Array<object> = [
    {
      id: '0001',
      filename: 'one.jpg',
      alt: '应季尖儿货一日游'
    },
    {
      id: '0002',
      filename: 'two.jpg',
      alt: '去哪儿用户专享，寺库7日会员'
    },
    {
      id: '0003',
      filename: 'three.jpg',
      alt: '激情滑雪，乐趣崇礼'
    }
  ]
  @Provide() swiperOption: object = {
    pagination: {
      el: '.swiper-pagination'
    },
    loop: true
  }
  public a () {
    console.log(this.swiperImgs, this.swiperOption)
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.66%
    background #eee
    .swiper-img
      width 100%
</style>
