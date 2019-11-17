<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<image class="checkboxCP" :src="imgPath+'checked.png'" v-if="destop"></image>
		<!-- #endif -->
		<view class="checkboxCP nuskinIcon" v-if="!destop&&!checked">&#xea2a;</view>
		<view class="checkboxCP nuskinIcon checked" v-if="!destop&&checked">&#xe62e;</view>
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
			font-size: 50rpx;
			color: $main-gray;
		}
		.checkboxCP.checked{
			color: $main-hl;
		}
	}
</style>
