<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
@Component({
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
})
export default class City extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>
