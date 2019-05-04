<template>
  <city-header></city-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CityHeader from './components/Header.vue'
@Component({
  components: {
    CityHeader
  }
})
export default class City extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>
