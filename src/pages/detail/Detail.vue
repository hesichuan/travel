<template>
  <div class="detail">
    <DetailBanner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DetailBanner from './components/Banner.vue'
@Component({
  components: {
    DetailBanner
  }
})
export default class Detail extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>
