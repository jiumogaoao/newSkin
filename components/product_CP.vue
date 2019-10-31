<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<view class="productCP" v-if="destop">
			<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="img"></image>
			<view class="brand">王牌ageLOC</view>
			<view class="title">商品标题</view>
			<view class="taxes">预计税费：￥100</view>
			<view class="price">零售价：<block style="font-size: 20px;">￥100</block></view>
			<image class="follow" :src="imgPath+'sellWellHIcon.png'"></image>
			<image class="shoppingCar" :src="imgPath+'caricon-blue.png'"></image>
		</view>
		<!-- #endif -->
		<view class="productCP" v-if="!destop">
			<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="img"></image>
			<view class="brand">王牌ageLOC</view>
			<view class="title">商品标题</view>
			<view class="taxes">预计税费：￥100</view>
			<view class="price">零售价：<block style="font-size: 20px;">￥100</block></view>
			<image class="shoppingCar" :src="imgPath+'tab-cart-current.png'"></image>
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

<style lang="scss">
	/* #ifdef H5 */
	.destopCP{
		.productCP{
			width: 274px;
			    height: 468px;
			    border: 1px solid #f0e9de;
			    position: relative;
			    background-color: #fff;
			    margin-bottom: 25px;
			    cursor: pointer;
		}
		.img{
			width:272px;
			height:272px;
		}
		.brand{
			font-size: 14px;
			color: #808080;
			line-height: 14px;
			display: block;
			margin-left: 19px;
		}
		.title{
			font-size: 16px;
			    color: #333333;
			    line-height: 24px;
			    margin-bottom: 10px;
			    height: 48px;
				margin-left: 19px;
		}
		.taxes{
			font-size: 14px;
			    line-height: 30px;
			    color: #c2c2c2;
			    display: inline-block;
				margin-left: 19px;
		}
		.price{
			line-height: 30px;
		    color: #37b0c9;
		    font-size: 14px;
			margin-left: 19px;
			}
		.shoppingCar{
			width:24px;
			height:25px;
			position: absolute;
			right: 19px;
			bottom: 30px;
			cursor: pointer;
		}
	}
	/* #endif */
	.phoneCP{
		.productCP{
			width: 329rpx;
			    height: 580rpx;
			    border: 1px solid #f0e9de;
			    position: relative;
			    background-color: #fff;
			    margin-bottom: 25rpx;
			    cursor: pointer;
		}
		.img{
			width:329rpx;
			height:329rpx;
		}
		.brand{
			display: block;
			padding: 0 20rpx;
			color: grey;
			font-size: 24rpx;
		}
		.title{
			    padding: 0 20rpx;
			    padding-top: 15rpx;
			    font-size: 26rpx;
			    color: #333;
			    line-height: 35rpx;
			    height: 80rpx;
			    display: -webkit-box;
			    overflow: hidden;
		}
		.taxes{
			font-size: 22rpx;
			    color: #c2c2c2;
			    padding: 0 20rpx;
			    padding-top: 10rpx;
			    height: 40rpx;
		}
		.price{
			font-size: 34rpx;
			    color: #37b0c9;
			    line-height: 1;
				margin-left: 20rpx;
				margin-top: 15rpx;
			}
		.follow{
			width:20rpx;
			height:18rpx;
			position: absolute;
			right: 19rpx;
			top: 11rpx;
			cursor: pointer;
		}
		.shoppingCar{
			width:40rpx;
			height:40rpx;
			position: absolute;
			right: 20rpx;
			bottom: 30rpx;
			cursor: pointer;
		}
	}
</style>
