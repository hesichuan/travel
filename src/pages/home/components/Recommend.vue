<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="require(`@/assets/image/${item.filename}`)" :alt="item.desc">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'

interface RecommendList {
	id: number | string
	filename: string
	title: string
	desc: string
}
@Component
export default class Recommend extends Vue {
  @Provide() recommendList: RecommendList[] = [
    {
      id: '0001',
      filename: 'gg.jpg',
      title: '故宫',
      desc: '世界上现存规模最大、保存最为完整的木质结构古建筑'
    },
    {
      id: '0002',
      filename: 'cc.jpg',
      title: '八达岭长城',
      desc: '居庸之险不在关而在八达岭'
    },
    {
      id: '0003',
      filename: 'ymy.jpg',
      title: '圆明园',
      desc: '实天宝地灵之区，帝王豫游之地，无以逾此'
    },
    {
      id: '0004',
      filename: 'ssh.jpg',
      title: '什刹海',
      desc: '什刹海景区风光秀丽，被誉为“北方的水乡”'
    },
    {
      id: '0005',
      filename: 'sjhhdgy.jpg',
      title: '世界花卉大观园',
      desc: '各温室内的植物千奇百怪、花团锦簇'
    },
    {
      id: '0006',
      filename: 'yjhxc.png',
      title: '云居滑雪场',
      desc: '山清水秀,景色怡人。登临峰顶，从咖啡屋外城碟一般的护墙口北望，云居寺的宝塔尖顶仿佛触手可及'
    },
    {
      id: '0007',
      filename: 'yhy.jpg',
      title: '颐和园',
      desc: '保存最完整的一座皇家行宫御苑，被誉为“皇家园林博物馆”，也是国家重点旅游景点'
    },
    {
      id: '0008',
      filename: 'hlg.jpg',
      title: '北京欢乐谷',
      desc: '50余项主题景观、10余项主题表演、30多项主题游乐设施、20余项主题游戏及商业辅助设施，每天提供近80场的表演'
    }
  ]
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
	margin-top .2rem
	line-height .8rem
	background #eee
	text-indent .2rem
.item
	overflow hidden
	display flex
	height 1.9rem
	.item-img
		width 1.7rem
		height 1.7rem
		padding .1rem
	.item-info
		flex 1
		padding .1rem
		min-width 0
		.item-title
			line-height .54rem
			font-size .32rem
			ellipsis()
		.item-desc
			line-height .4rem
			color #ccc
			ellipsis()
		.item-button
			line-height .44rem
			margin-top .16rem
			background #ff9300
			padding	0 .2rem
			border-radius .06rem
			color #fff
</style>
