<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, key) of pages" :key="key">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="require(`@/assets/image/${item.filename}`)" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

interface IconList {
  id: number | string
  filename: string
  desc: string
  alt?: string
}
interface Pagination {
  el: string
}
interface SwiperOption {
  pagination: Pagination
  loop?: boolean
}
@Component
export default class Icons extends Vue {
  private PAGES_ICON_NUM = 8
  @Prop({ default: [] }) iconList: Array<IconList> = []
  private swiperOption: SwiperOption = {
    pagination: {
      el: '.swiper-pagination'
    }
  }
  get pages (): IconList[][] {
    const pages: IconList[][] = []
    this.iconList.forEach((item, index) => {
      const page: number = Math.floor(index / 8)
      if (!pages[page]) {
        pages[page] = []
      }
      pages[page].push(item)
    })
    return pages
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons >>> .swiper-pagination-bullets
  bottom 5px
.icons >>> .swiper-pagination-bullet-active
  background $themeColor
.icons
  height 0
  padding-bottom 50%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 22%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .2rem
      box-sizing border-box
      padding .2rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .3rem
      line-height .3rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
