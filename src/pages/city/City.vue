<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
@Component({
  components: {
    CityHeader,
    CitySearch
  }
})
export default class City extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>
