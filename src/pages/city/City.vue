<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterClick"
    ></city-alphabet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'

interface Cities {
  [key: string]: {
    id: number
    spell: string
    name: string
  }
}
interface HotCities {
  id: number
  spell: string
  name: string
}
@Component({
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
})
export default class City extends Vue {
  private cities: Array<Cities> = []
  private hotCities: Array<HotCities> = []
  private letter: string = ''

  mounted () {
    this.getHomeInfo()
  }

  async getHomeInfo () {
    let data = await axios.get('/api/city.json')
      .then(await this.getHomeInfoSucc)
    if (data) {
      this.cities = data.cities
      this.hotCities = data.hotCities
    }
  }
  async getHomeInfoSucc (res: any) {
    res = res.data
    if (res && res.status && res.data) {
      return res.data
    } else {
      return null
    }
  }
  handleLetterClick (letter: string) {
    this.letter = letter
  }
}
</script>

<style lang="stylus" scoped>
</style>
