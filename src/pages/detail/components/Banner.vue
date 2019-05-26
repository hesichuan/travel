<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/travel/d8/1704/3d/edfa46d0ad0e39b5.jpg_r_640x426x70_e97a057f.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">中国古代宫廷建筑之精华</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <CommonGallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CommonGallary from 'common/gallary/Gallary.vue'

@Component({
  components: {
    CommonGallary
  }
})
export default class Banner extends Vue {
  private imgs: Array<string> = [
    'https://img1.qunarzz.com/travel/d3/1509/97/ff002d96a2f511.jpg_600x600x70_f6312004.jpg',
    'https://img1.qunarzz.com/travel/d1/1509/8c/706459896e55c.jpg_600x600x70_a5be441a.jpg'
  ]
  private showGallary: Boolean = false

  handleBannerClick () {
    this.showGallary = true
  }

  handleGallaryClose () {
    this.showGallary = false
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 62.7%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        height .32rem
        margin-top .14rem
        line-height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
