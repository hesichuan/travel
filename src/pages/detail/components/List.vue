<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of categoryList"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <List :categoryList="item.children" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CategoryList } from '@/types'
@Component
export default class List extends Vue {
  @Prop() categoryList!: CategoryList
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .06rem
    top .06rem
    display inline-block
    width .36rem
    height .36rem
    background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') no-repeat 0 -.38rem/cover
    margin-right .1rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem
</style>
