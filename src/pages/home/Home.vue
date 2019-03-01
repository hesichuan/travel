<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import HomeHeader from './components/Header.vue'

@Component({
  components: {
    HomeHeader
  }
})
export default class Home extends Vue {
}
</script>

<style>

</style>
