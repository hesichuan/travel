<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'

@Component({
  components: {
    HomeHeader,
    HomeSwiper
  }
})
export default class Home extends Vue {
}
</script>

<style>

</style>
