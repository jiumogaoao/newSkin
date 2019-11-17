<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="top">
				<view class="inputFrame">
					<view class="nuskinIcon">&#xe72f;</view>
					<input/>
				</view>
				<view class="nuskinIcon close" @click="back">&#xe600;</view>
			</view>
			<view style="width:100%;height: 147rpx;"></view>
			<view class="titleFrame">相关产品</view>
			<view class="product">
				<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
				<view class="right">
					<view class="dsc">5000元-9999元</view>
					<view class="title">ageLoc Galvanic Spa家庭套装</view>
					<view class="price">零售顾客价 ￥10000</view>
				</view>
			</view>
			<view class="titleFrame">相关文章</view>
			<view class="news">如新现身云栖大会，用“社交+云”重新定义直销</view>
			<view class="news">如新现身云栖大会，用“社交+云”重新定义直销</view>
			<view class="news">如新现身云栖大会，用“社交+云”重新定义直销</view>
			<view class="button">查看所有结果</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
		components:{},
		data() {
			return {
			
			};
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destop{

	}
	/* #endif */
	page{
		background-color: $main-gray-background;
	}
	.phone{
		.top{
			width:750rpx;
			height: 147rpx;
			padding: 0 30rpx;
			display: flex;
			align-items: center;
			position: fixed;
			top:0;
			left: 0;
			background-color: #fff;
			.inputFrame{
				width:526rpx;
				height: 82rpx;
				background-color: $main-gray-background;
				display: flex;
				align-items: center;
				border-radius: 5rpx;
				.nuskinIcon{
					color: $main-hl;
					font-size: 40rpx;
					margin-left: 16rpx;
					flex-shrink: 0;
				}
				input{
					flex-grow: 1;
				}
			}
			.close{
				margin-left: 46rpx;
				font-size: 40rpx;
				color: $main-gray-deep;
			}
		}
		.titleFrame{
			width:750rpx;
			padding: 30rpx;
			background-color: #fff;
			font-size: 26rpx;
		}
		.product{
			width:750rpx;
			height: 250rpx;
			background-color: #fff;
			padding: 30rpx;
			display: flex;
			align-items: center;
			image{
				width:208rpx;
				height: 208rpx;
				border: 1px solid $main-gray;
				flex-shrink: 0;
			}
			.right{
				margin-left: 30rpx;
				height: 208rpx;
				flex-flow: 1;
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
				}
				.title{
					font-size: 26rpx;
					margin-top: 35rpx;
				}
				.price{
					font-size: 24rpx;
					color: $main-hl;
					margin-top: 28rpx;
				}
			}
		}
		.news{
			width: 100%;
			padding: 30rpx;
			background-color: #fff;
			font-size: 24rpx;
			color: $main-gray-deep;
		}
		.button{
			width:300rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			color: #fff;
			background-color: $main-hl;
			font-size: 30rpx;
			margin: auto;
			margin-top: 80rpx;
		}
	}
</style>
