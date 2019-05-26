<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="require(`@/assets/image/${item.filename}`)" :alt="item.alt">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SwiperList, SwiperOption } from '@/types'

@Component
export default class SwiperPic extends Vue {
  @Prop() swiperList!: Array<SwiperList>
  private swiperOption: SwiperOption = {
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    }
  }
  // v-if判断swiper是否已经渲染，可解决loop不生效的bug
  get showSwiper () {
    return this.swiperList.length
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
