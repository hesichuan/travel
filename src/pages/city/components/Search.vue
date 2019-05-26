<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import Bscroll from 'better-scroll'
import { Action } from 'vuex-class'
import { Cities } from '@/types'

@Component
export default class Search extends Vue {
  private keyword: string = ''
  private list: Array<object> = []
  private timer: any = null
  private scroll: any = null
  @Prop() cities!: Cities
  @Action changeCity!: Function

  handleCityClick (city: string) {
    this.changeCity(city)
    this.$router.push('/')
  }
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  }
  @Watch('keyword', { deep: true })
  onChangeKeyword () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    if (!this.keyword) {
      this.list = []
      return
    }
    // 节流
    this.timer = setTimeout(() => {
      const result: Array<object> = []
      for (let i in this.cities) {
        (this.cities[i] as any).forEach((value: any) => {
          if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
            result.push(value)
          }
        })
      }
      this.list = result
    }, 100)
  }

  get hasNoData () {
    return !this.list.length
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
