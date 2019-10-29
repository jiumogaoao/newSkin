<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<view class="productSimpleCP">
			<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="img"></image>
			<view class="title">商品标题</view>
			<view class="price">￥100</view>
			<image class="follow" :src="imgPath+'sellWellHIcon.png'"></image>
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
	.destopCP{
		.productSimpleCP{
			width: 275px;
			height: 375px;
			border: 1px solid #F0E9DE;
			position: relative;
		}
		.img{
			width: 273px;
			height: 270px;
		}
		.title{
			padding-left: 20px;
			padding-right: 20px;
			margin-top: 15px;
			text-align: center;
			font-size: 16px;
			font-weight: 500;
		}
		.price{
			text-align: center;
			margin-top: 5px;
			font-weight: bold;
			font-size: 16px;
		}
		.follow{
			width:20px;
			height:18px;
			position: absolute;
			right: 19px;
			top: 11px;
			cursor: pointer;
		}
	}
	.phoneCP{
		.productSimpleCP{
			width: 670rpx;
			height: 812rpx;
			border: 1px solid #F0E9DE;
			position: relative;
			.img{
				width: 665rpx;
				height: 668rpx;
			}
			.title{
				padding: 10rpx 30rpx;
				    color: #191919;
				    font-size: 28rpx;
				    line-height: 40rpx;
				    text-align: center;
			}
			.price{
				padding: 0 30rpx;
				    text-align: center;
				    font-size: 32rpx;
				    color: #191919;
			}
			.follow{
				width:40rpx;
				height:40rpx;
				position: absolute;
				    top: 20rpx;
				    right: 20rpx;
			}
		}
	}
</style>
