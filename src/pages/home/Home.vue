<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/SwiperPic.vue'
import HomeIcons from './components/Icons.vue'

@Component({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
})
export default class Home extends Vue {
}
</script>

<style>

</style>
