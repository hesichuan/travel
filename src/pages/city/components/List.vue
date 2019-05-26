<template>
  <div class="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="botton-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="botton-list">
          <div class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { Cities, HotCities } from '@/types'
import Bscroll from 'better-scroll'

@Component
export default class List extends Vue {
  private scroll: any
  @State('city') city!: string
  @Action('changeCity') changeCity!: Function
  @Prop() cities!: Array<Cities>
  @Prop() hotCities!: Array<HotCities>
  @Prop() letter: string = ''
  @Watch('letter', { deep: true })
  onChangeLetter (val: string) {
    if (this.letter) {
      const element = (this.$refs[this.letter] as Array<Element>)[0]
      this.scroll.scrollToElement(element)
    }
  }
  handleCityClick (city: string) {
    this.changeCity(city)
    this.$router.push('/')
  }
  mounted () {
    this.scroll = new Bscroll('.list', {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .botton-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>
