<template>
  <div class="detail">
    <DetailBanner/>
    <DetailHeader/>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
@Component({
  components: {
    DetailBanner,
    DetailHeader
  }
})
export default class Detail extends Vue {
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
