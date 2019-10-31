<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<view class="tabbarCP">
			<view class="item hl">综合<view class="line"></view></view>
			<view class="item">销量<view class="line"></view></view>
			<view class="item">人气<view class="line"></view></view>
			<view class="item">价格<view class="line"></view></view>
		</view>
	</view>
	
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.tabbarCP{
			height: 40px;
			border-bottom: 1px solid #f5f5f5;
			width:100%;
			display: flex;
			align-items: center;
		}
		.item{
			margin-right: 45px;
			cursor: pointer;
			color: #000;
			font-size: 14px;
			position: relative;
		}
		.line{
			display: none;
			position: absolute;
			bottom:-13px;
			    left: 5%;
			    width: 90%;
			height:2px;
			background-color: #008ab0;
		}
		.hl .line{
			display: block;
		}
	}
	/* #endif */
	.phoneCP{
		width:100%;
		.tabbarCP{
			height: 80rpx;
			border-bottom: 1px solid #f5f5f5;
			width:100%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
		}
		.item{
			align-items: center;
			    height: 100%;
			    font-size: 30rpx;
			    color: #303133;
			position: relative;
		}
		.line{
			display: none;
			position: absolute;
			    left: 50%;
			    bottom: 0;
			    transform: translateX(-50%);
			    width: 120rpx;
			    height: 0;
			    border-bottom: 4px solid #008ab0;
		}
		.hl{
			color:#008ab0;
		}
		.hl .line{
			display: block;
		}
	}
</style>
