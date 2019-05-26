<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide
          v-for="(item, index) in gallaryImgs"
          :key="index"
        >
          <img class="gallary-img" :src="require(`@/assets/image/${item}`)">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Inject } from 'vue-property-decorator'
import { SwiperList, SwiperOption, GallaryImgs } from '@/types'
@Component
export default class Gallary extends Vue {
  @Prop() swiperList!: Array<SwiperList>
  @Prop() gallaryImgs!: Array<GallaryImgs>
  private swiperOption: SwiperOption = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    observer: true,
    observeParents: true
  }
  @Emit('close')
  handleGallaryClick () {}
  // v-if判断swiper是否已经渲染，可解决loop不生效的bug
  get showSwiper () {
    return this.gallaryImgs.length
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-pagination
    color #fff
    bottom -1rem
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
</style>
