<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Fade extends Vue {
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity .5s
</style>
