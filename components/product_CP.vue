<template>
	<view :class="destop?'destopCP':'phoneCP'" @click="c">
		<!-- #ifdef H5 -->
		<view class="productCP" v-if="destop">
			<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="img"></image>
			<view class="brand">王牌ageLOC</view>
			<view class="title">商品标题</view>
			<view class="taxes">预计税费：￥100</view>
			<view class="price">零售价：<block style="font-size: 20px;">￥100</block></view>
			<image class="follow" :src="imgPath+'favorite-full-love.png'" v-if="follow" @click="f"></image>
			<image class="follow" :src="imgPath+'sellWellHIcon.png'" v-else @click="f"></image>
			<image class="shoppingCar" :src="imgPath+'caricon-blue.png'" @click="a"></image>
		</view>
		<!-- #endif -->
		<view class="productCP" v-if="!destop">
			<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="img"></image>
			<view class="brand">王牌ageLOC</view>
			<view class="title">商品标题</view>
			<view class="taxes">预计税费：￥100</view>
			<view class="price">零售价：<block style="font-size: 20px;">￥100</block></view>
			<view :class="{follow:1,nuskinIcon:1,hl:(follow?1:0)}" @click="f($event)">&#xe64e;</view>
			<image class="shoppingCar" :src="imgPath+'tab-cart-current.png'" @click="a"></image>
		</view>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		props:['follow','img','band','name','taxes','price','id'],
		mixins: [allComponent],
		data() {
			return {
				
			};
		},
		methods: {
			c(){
				this.$emit('click')
			},
			f(e){
				e.stopPropagation()
				e.preventDefault()
				alert(1)
				this.$emit('follow',{id})
			},
			a(){
				this.$emit('addCar')
			}
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
		.follow{
			width:20px;
			height:18px;
			position: absolute;
			right: 19px;
			top: 11px;
			cursor: pointer;
		}
	}
	/* #endif */
	.phoneCP{
		.productCP{
			width: 340rpx;
			    height: 570rpx;
			    border: 1px solid #ddd;
			    position: relative;
			    background-color: #fff;
			    margin-bottom: 42rpx;
			    cursor: pointer;
		}
		.img{
			width:100%;
			height:338rpx;
		}
		.brand{
			display: block;
			padding: 0 18rpx;
			color: $main-gray-deep;
			font-size: 16rpx;
			text-align: center;
			margin-top: 23rpx;
		}
		.title{
			    padding: 0 18rpx;
			    margin-top: 22rpx;
			    font-size: 26rpx;
			    color: $main-gray-deep;
			    line-height: 25rpx;
				text-align: center;
			    height: 50rpx;
			    overflow: hidden;
		}
		.taxes{
			font-size: 18rpx;
			padding: 0 18rpx;
			margin-top: 20rpx;
		}
		.price{
			font-size: 34rpx;
			    color: $main-hl;
			    font-size: 18rpx;
			    padding: 0 18rpx;
				margin-top: 20rpx;
			}
		.follow{
			color: $main-gray;
			position: absolute;
			right: 39rpx;
			top: 43rpx;
			cursor: pointer;
			font-size: 30rpx;
		}
		.follow.hl{
			color: $main-hl;
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
