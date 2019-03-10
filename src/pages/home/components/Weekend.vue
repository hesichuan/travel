<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of weekendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="require(`@/assets/image/${item.filename}`)" :alt="item.desc">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'

interface WeekendList {
	id: number | string
	filename: string
	title: string
	desc: string
}
@Component
export default class Weekend extends Vue {
   @Provide() weekendList: WeekendList[] = [
		{
			id: '0001',
			filename: 'sh.jpg',
			title: '北京赏花好地方',
			desc: '乱花渐欲迷人眼，京城赏花大搜索'
		},
		{
			id: '0002',
			filename: 'zmsh.jpg',
			title: '京城周末撒欢',
			desc: '在帝都过周末，不仅仅是城中游！'
		},
		{
			id: '0003',
			filename: 'lw.jpg',
			title: '京城溜娃必去',
			desc: '德智体美劳全面发展的亲子日，这些地方该去看'
		},
		{
			id: '0004',
			filename: 'dk.jpg',
			title: '帝都必打卡',
			desc: '来北京必去的景点非这些地方莫属'
		},
		{
			id: '0005',
			filename: 'hcfe.jpg',
			title: '寻找北京的皇城范儿',
			desc: '数百年的宫廷庙宇，至今依旧威严霸气'
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
.item-img-wrapper
	height 0
	overflow hidden
	padding-bottom 33.9%
	.item-img
		width 100%
.item-info
	padding .1rem
	.item-title
		line-height .54rem
		font-size .32rem
		ellipsis()
	.item-desc
		line-height .4rem
		color #616161
		ellipsis()
</style>
