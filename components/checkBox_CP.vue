<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<image class="checkboxCP" :src="imgPath+'checked.png'" v-if="destop"></image>
		<!-- #endif -->
		<image class="checkboxCP" :src="imgPath+'cartxuan.png'" v-if="!destop&&checked"></image>
		<image class="checkboxCP" :src="imgPath+'card_wxuan.png'" v-if="!destop&&!checked"></image>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		props:['checked'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.checkboxCP{
			width:18px;
			height:18px;
		}
	}
	/* #endif */
	.phoneCP{
		.checkboxCP{
			width:38rpx;
			height:38rpx;
		}
	}
</style>
