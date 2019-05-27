<template>
  <div>
    <router-link
      class="header-abs"
      tag="div"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opcityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  private showAbs: boolean = true
  private opcityStyle: Object = {
    opacity: 0
  }
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll () {
    const top: number = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    if (top > 60) {
      let opacity = top / 140
      opacity = opacity > 1 ? 1 : opacity
      this.opcityStyle = { opacity }
      this.showAbs = false
    } else {
      this.showAbs = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
