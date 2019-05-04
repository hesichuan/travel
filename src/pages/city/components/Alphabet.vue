<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
interface Cities {
  [key: string]: {
    id: number
    spell: string
    name: string
  }
}
@Component
export default class Alphabet extends Vue {
  @Prop() cities!: Cities
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
