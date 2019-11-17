<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">订单支付</text>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="top">
				<image class="logo" :src="imgPath+'logo_mobile.png'"></image>
				<view class="title">订单提交成功</view>
				<view class="dsc">请在<text class="blue">00时59分秒</text>内支付，否则将自动取消</view>
				<view class="list">
					<view class="left">订单号</view>
					<view class="right">CB52366363</view>
				</view>
				<view class="list">
					<view class="left">支付单号</view>
					<view class="right">AIP99999999</view>
				</view>
				<view class="list">
					<view class="left">订单金额</view>
					<view class="right">￥1253.00</view>
				</view>
			</view>
			<view class="payType" v-if="step==0">
				<view class="left">
					<view class="nuskinIcon">&#xe654;</view>
					<view class="name">微信支付</view>
				</view>
				<radioCP></radioCP>
			</view>
			<view class="payType" v-if="step==0">
				<view class="left">
					<view class="nuskinIcon">&#xe65f;</view>
					<view class="name">支付宝支付</view>
				</view>
				<radioCP></radioCP>
			</view>
			<view class="next" v-if="step==0" @click="next">确认支付</view>
			<view class="bottom" v-if="step==1">
				<view class="button" @click="go('/pages/myOrder/myOrder')">查看订单</view>
				<view class="button" @click="go('/pages/index/index')">继续购物</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	import radioCP from "@/components/radio_CP.vue"
	export default {
		mixins: [allPage,needLogon],
		components:{radioCP},
		data() {
			return {
				step:0
			};
		},
		methods:{
			next(){
				this.step=1;
			}
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
			padding: 30rpx;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 20rpx;
			.logo{
				width:58rpx;
				height:58rpx;
				margin-top: 80rpx;
			}
			.title{
				font-size: 32rpx;
				margin-top: 60rpx;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
				margin-top: 20rpx;
			}
			.list{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				.left{
					font-size: 26rpx;
				}
				.right{
					font-size: 26rpx;
					color: $main-gray-deep;
				}
			}
		}
		.payType{
			background-color: #fff;
			width:100%;
			padding: 0 30rpx;
			border-bottom: 1px solid $main-gray;
			border-top: 1px solid $main-gray;
			height: 120rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: -1px;
			.left{
				display: flex;
				align-items: center;
				.nuskinIcon{
					font-size: 50rpx;
					margin-right: 20rpx;
				}
				.name{
					font-size: 26rpx;
				}
			}
		}
		.next{
			width: 500rpx;
			height: 82rpx;
			text-align: center;
			line-height: 82rpx;
			margin: auto;
			margin-top: 100rpx;
			background-color: $main-hl;
			color: #fff;
			font-size: 30rpx;
			border-radius: 82rpx;
		}
		.bottom{
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding: 0 30rpx;
			.button{
				width: 200rpx;
				height: 82rpx;
				text-align: center;
				line-height: 82rpx;
				background-color: $main-hl;
				color: #fff;
				font-size: 30rpx;
				border-radius: 82rpx;
				margin-left: 20rpx;
			}
		}
	}
</style>
