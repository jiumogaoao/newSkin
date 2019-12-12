<template>
	<view :class="destop?'destopCP':'phoneCP'" @click="c">
		<view class="productSimpleCP">
			<image :src="img" class="img"></image>
			<view class="title">{{name}}</view>
			<view class="price">￥{{price}}</view>
			<image class="follow" :src="imgPath+'favorite-full-love.png'" v-if="follow" @click="f"></image>
			<image class="follow" :src="imgPath+'sellWellHIcon.png'" v-else @click="f"></image>
		</view>
	</view>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		props:['follow','img','name','price','pId'],
		mixins: [allComponent],
		methods: {
			c(){
				this.$emit('click')
			},
			f(){
				this.$emit('follow')
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.productSimpleCP{
			width: 275px;
			height: 378px;
			border: 1px solid #F0E9DE;
			position: relative;
		}
		.productSimpleCP:hover{
			box-shadow: 3px 10px 13px rgba(0,0,0,0.3);
		}
		.img{
			width: 273px;
			height: 272px;
		}
		.title{
			padding-left: 20px;
			padding-right: 20px;
			margin-top: 17px;
			text-align: center;
			font-size: 16.5px;
			font-weight: 500;
			overflow: hidden;
			text-overflow: ellipsis;
			display:-webkit-box; //作为弹性伸缩盒子模型显示。
			-webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
			-webkit-line-clamp:2; //显示的行
			width: 100%;
			height: 42px;
			line-height: 1.3;
		}
		.price{
			text-align: center;
			margin-top: 19px;
			font-weight: 500;
			font-size: 14px;
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
		.productSimpleCP{
			width: 671rpx;
			height: 842rpx;
			border: 1px solid #F0E9DE;
			position: relative;
			.img{
				width: 100%;
				height: 668rpx;
			}
			.title{
				height: 67rpx;
				width: 100%;
				padding: 0 32rpx;
				margin-top: 27rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #191919;
				line-height: 1.3;
				overflow: hidden;
				text-overflow: ellipsis;
				display:-webkit-box; //作为弹性伸缩盒子模型显示。
				-webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
				-webkit-line-clamp:2; //显示的行
			}
			.price{
				margin-top: 25rpx;
				    text-align: center;
				    font-size: 24rpx;
				    color: #191919;
					font-weight: 500;
			}
			.follow{
				width:45rpx;
				height:39rpx;
				position: absolute;
				    top: 16rpx;
				    right: 22rpx;
			}
		}
	}
</style>
