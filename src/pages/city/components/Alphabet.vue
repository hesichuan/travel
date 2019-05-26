<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { Cities } from '@/types'

@Component
export default class Alphabet extends Vue {
  private touchStatus: Boolean = false
  private startY: number = 0
  private timer: any = null
  @Prop() cities!: Cities
  updated () {
    this.startY = (this.$refs['A'] as any)[0].offsetTop
  }
  @Emit('change')
  handleLetterClick (e: any) {
    return e.target.innerText
  }
  handleTouchStart () {
    this.touchStatus = true
  }
  @Emit('change')
  handleTouchMove (e: TouchEvent) {
    if (this.touchStatus) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 节流
      this.timer = setTimeout(() => {
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - this.startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        } else {
          this.$emit('change', '')
        }
      }, 16)
      return ''
    }
  }
  handleTouchEnd () {
    this.touchStatus = false
  }
  get letters () {
    const letters = []
    for (let i in this.cities) {
      letters.push(i)
    }
    return letters
  }
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
  right .15rem
  bottom 0
  width .4rem
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
