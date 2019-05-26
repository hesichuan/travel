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
import { Component, Prop, Vue } from 'vue-property-decorator'
import { WeekendList } from '@/types'

@Component
export default class Weekend extends Vue {
	@Prop() weekendList!: Array<WeekendList>
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
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
