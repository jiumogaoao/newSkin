<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
				<headerCP/>
				<view class="band"></view>
				<breadcrumbsCP/>
				<view class="stepFrame">
					<view class="left">
						<image src="/static/secord_pay_03.jpg"></image>
						<view class="title">选择支付方式</view>
					</view>
					<view class="right">
						<image src="/static/secord_progress_03.jpg"></image>
						<view class="bottom">
							<view class="name">提交订单</view>
							<view class="name">支付</view>
							<view class="name">交易完成</view>
						</view>
					</view>
				</view>
				<view class="dsc">订单提交成功，请您在 41分 26秒 内支付，否则将自动取消</view>
				<view class="dsc">订单号:CN53498931&nbsp;&nbsp;&nbsp;支付交易号:DG53480958&nbsp;&nbsp;&nbsp;订单金额:￥43,150.00</view>
				<view class="bigTitle">支付方式</view>
				<view class="payType">
					<image src="/static/yinglian.png"></image>
					<image src="/static/kuaiqian_paying_13.jpg"></image>
					<image src="/static/zhifubao_paying_11.jpg"></image>
				</view>
				<view class="info">中国银联：可用微信/支付宝扫码支付</view>
				<view class="info">NU SKIN产品经监管部门备案或注册取得批准，成分优质：请按产品标签标</view>
				<view class="info">识及官方指引使用产品；保健食品不能代替药物，普通食品仅为日常膳食补</view>
				<view class="info">充；婴幼儿需特别呵护，建议选择专为婴幼儿设计的产品。</view>
				<view class="buttonFrame">
					<view class="button" @click="go('/pages/myOrder/myOrder')">确定支付</view>
				</view>
				<footerCP/>
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
		.content{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: column;
			transform-origin: left top;
			}
			.band{
			width:100%;
			height:130px;
		}
		.stepFrame{
			@include frame-width;
			margin-top: 50px;
			height: 85px;
			    padding: 18px 20px 14px;
			    background: #f7fbfc;
			    border: 1px solid #c7e2e6;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				image{
					width:26px;
					height:21px;
				}
				.title{
					font-size: 16px;
					    margin-left: 8px;
				}
			}
			.right{
				image{
					height: 24px;
					width: 474px;
				}
				.bottom{
					width: 473px;
					display: flex;
					justify-content: space-between;
					.name{
						color: #A8D8E6;
						font-size: 12px;
					}
					.name.hl{
						color: #0089ae;
					}
				}
			}
		}
		.dsc{
			@include frame-width;
			font-size: 14px;
			margin-top: 15px;
		}
		.bigTitle{
			@include frame-width;
			font-size: 16px;
			    color: #333;
				margin-top: 36px;
		}
		.payType{
			@include frame-width;
			display: flex;
			margin-top: 20px;
			image{
				width:162px;
				height: 62px;
				margin-right: 19px;
			}
		}
		.info{
			@include frame-width;
			margin-top: 10px;
			font-size: 16px;
			color: #757575;
		}
		.buttonFrame{
			@include frame-width;
			.button{
				font-size: 14px;
				    display: block;
				    width: 112px;
				    height: 40px;
				    text-align: center;
				    line-height: 40px;
				    background: #0089ae;
				    color: #fff;
				    border-radius: 20px;
				    margin-top: 40px;
			}
		}
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
