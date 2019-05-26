<template>
  <div class="detail">
    <DetailBanner/>
    <DetailHeader/>
    <div class="content">
      <DetailList :list="list" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
@Component({
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
})
export default class Detail extends Vue {
  private list: Array<object> = [
    {
      title: '成人票',
      children: [
        {
          title: '成人三馆联票',
          children: [
            { title: '成人三馆联票 - 长安街连锁店销售' }
          ]
        },
        { title: '成人五馆联票' }
      ]
    },
    { title: '学生票' },
    { title: '儿童票' },
    { title: '特惠票' }
  ]
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
