<template>
	<view :class="destop?'destop':'phone'">
		<block if="!destop">
			<view class="top">
				<view class="header">
					<image class="notice" :src="imgPath+'xinxi2.0-hl.png'" @click="go('/pages/notice/notice')"></image>
					<view class="right">
						<image class="shoppingCar" :src="imgPath+'tab-cart-hl.png'" @click="go('/pages/shoppingCar/shoppingCar')"></image>
						<image class="option" :src="imgPath+'menu01-hl.png'"></image>
					</view>
				</view>
				<view class="infoFrame">
					<image class="avatar" :src="imgPath+'missing-face.png'"></image>
					<view class="logon" @click="go('/pages/logon/logon')">注册登录</view>
				</view>
			</view>
			<view class="bottom">
				<view class="list">
					<view class="topFrame">
						<view class="title">我的订单</view>
						<view class="go" @click="go('/pages/myOrder/myOrder')">全部订单 ></view>
					</view>
					<view class="itemFrame">
						<view class="item" @click="go('/pages/myOrder/myOrder?type=1')">
							<image class="icon" :src="imgPath+'daifukuan.png'"></image>
							<view class="name">待付款</view>
						</view>
						<view class="item" @click="go('/pages/myOrder/myOrder?type=2')">
							<image class="icon" :src="imgPath+'daifahuo.png'"></image>
							<view class="name">待发货</view>
						</view>
						<view class="item" @click="go('/pages/myOrder/myOrder?type=3')">
							<image class="icon" :src="imgPath+'daishouhuo.png'"></image>
							<view class="name">待收货</view>
						</view>
						<view class="item" @click="go('/pages/myOrder/myOrder?type=4')">
							<image class="icon" :src="imgPath+'yiwancheng.png'"></image>
							<view class="name">已完成</view>
						</view>
					</view>
				</view>
				<view class="list">
					<view class="topFrame">
						<view class="title">交易管理</view>
					</view>
					<view class="itemFrame">
						<view class="item" @click="go('/pages/myPlace/myPlace')">
							<image class="icon" :src="imgPath+'dizhi.png'"></image>
							<view class="name">发货地址</view>
						</view>
						<view class="item" @click="go('/pages/myCoupon/myCoupon')">
							<image class="icon" :src="imgPath+'youhuoquan.png'"></image>
							<view class="name">优惠券</view>
						</view>
						<view class="item" @click="go('/pages/afterSale/afterSale')">
							<image class="icon" :src="imgPath+'shouhou.png'"></image>
							<view class="name">售后查询</view>
						</view>
						<view class="item" @click="go('/pages/amout/amout')">
							<image class="icon" :src="imgPath+'goumaiedu.png'"></image>
							<view class="name">年度购买额度</view>
						</view>
					</view>
				</view>
				<view class="list">
					<view class="topFrame">
						<view class="title">我的账号</view>
					</view>
					<view class="itemFrame">
						<view class="item" @click="go('/pages/myInfo/myInfo')">
							<image class="icon" :src="imgPath+'wodezhanghao.png'"></image>
							<view class="name">我的账号</view>
						</view>
						<view class="item" @click="go('/pages/myIntegral/myIntegral')">
							<image class="icon" :src="imgPath+'wodejifen.png'"></image>
							<view class="name">我的积分</view>
						</view>
						<view class="item" @click="go('/pages/myFollow/myFollow')">
							<image class="icon" :src="imgPath+'wodeshoucang.png'"></image>
							<view class="name">我的收藏</view>
						</view>
					</view>
				</view>
				<view class="list">
					<view class="topFrame">
						<view class="title">我的推广</view>
					</view>
					<view class="itemFrame">
						<view class="item" @click="go('/pages/myCard/myCard')">
							<image class="icon" :src="imgPath+'wodezhanghao.png'"></image>
							<view class="name">我的银行卡</view>
						</view>
						<view class="item" @click="go('/pages/myLevel/myLevel')">
							<image class="icon" :src="imgPath+'wodejifen.png'"></image>
							<view class="name">我的身份</view>
						</view>
						<view class="item" @click="go('/pages/myShare/myShare')">
							<image class="icon" :src="imgPath+'wodeshoucang.png'"></image>
							<view class="name">我的分享</view>
						</view>
						<view class="item" @click="go('/pages/myIncome/myIncome')">
							<image class="icon" :src="imgPath+'wodeshoucang.png'"></image>
							<view class="name">我的收入</view>
						</view>
					</view>
				</view>
			</view>
			<view style="width:100%;height:100rpx;"></view>
			<headerCP/>
		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon],
		onShow: function() {
			this.$store.dispatch('rootST/changeFootNav', 'mine')
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.phone{
		.top{
			width:750rpx;
			background-color: #0391b7;
			.header{
				width:750rpx;
				height:50rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.notice{
					width:24rpx;
					height:24rpx;
					margin-left: 20rpx;
				}
				.right{
					display: flex;
					align-items: center;
					.shoppingCar,.option{
						width:20rpx;
						height:20rpx;
						margin-right: 20rpx;
					}
				}
			}
			.infoFrame{
				width:750rpx;
				height:430rpx;
				background: url($oss-phone+'user_bg.png') 50%;
				display: flex;
				align-items: center;
				.avatar{
					    width: 120rpx;
					    height: 120rpx;
					    border: 5px solid #fff;
					    border-radius: 50%;
					    margin-left: 30rpx;
				}
				.logon{
					font-size: 38rpx;
					color: #fff;
					margin-left: 30rpx;
				}
			}
		}
		.bottom{
			width:750rpx;
			.list{
				width:750rpx;
				.topFrame{
					display: flex;
					align-items: center;
					height: 100rpx;
					border-bottom: 1px solid #e2e2e2;
					line-height: 100rpx;
					padding: 0 30rpx;
					background: #fff;
					justify-content: space-between;
					.title{
						font-size: 30rpx;
						color: #333;
					}
					.go{
						font-size: 28rpx;
						    color: grey;
					}
				}
				.itemFrame{
					width:750rpx;
					display: flex;
					align-items: center;
					height: 148rpx;
					margin-top: 40rpx;
					.item{
						width:25%;
						display: flex;
						flex-direction: column;
						align-items: center;
						.icon{
							    width: 54rpx;
							    height: 54rpx;
						}
						.name{
							font-size: 24rpx;
							    width: 100%;
							    text-align: center;
							    padding-bottom: 20rpx;
							    color: #1f1f1f;
							    padding-top: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
