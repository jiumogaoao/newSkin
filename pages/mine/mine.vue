<template>
	<view :class="destop?'destop':'phone'">
		<block if="!destop">
			<view class="top">
				<view class="header">
					<image class="notice" :src="imgPath+'xinxi2.0-hl.png'"></image>
					<view class="right">
						<image class="shoppingCar" :src="imgPath+'tab-cart-hl.png'"></image>
						<image class="option" :src="imgPath+'menu01-hl.png'"></image>
					</view>
				</view>
				<view class="infoFrame">
					<image class="avatar" :src="imgPath+'missing-face.png'"></image>
					<view class="logon">注册登录</view>
				</view>
			</view>
			<view class="bottom">
				<view class="list">
					<view class="topFrame">
						<view class="title">我的订单</view>
						<view class="go">全部订单 ></view>
					</view>
					<view class="itemFrame">
						<view class="item">
							<image class="icon" :src="imgPath+'daifukuan.png'"></image>
							<view class="name">待付款</view>
						</view>
						<view class="item">
							<image class="icon" :src="imgPath+'daifahuo.png'"></image>
							<view class="name">待发货</view>
						</view>
						<view class="item">
							<image class="icon" :src="imgPath+'daishouhuo.png'"></image>
							<view class="name">待收货</view>
						</view>
						<view class="item">
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
						<view class="item">
							<image class="icon" :src="imgPath+'dizhi.png'"></image>
							<view class="name">发货地址</view>
						</view>
						<view class="item">
							<image class="icon" :src="imgPath+'youhuoquan.png'"></image>
							<view class="name">优惠券</view>
						</view>
						<view class="item">
							<image class="icon" :src="imgPath+'shouhou.png'"></image>
							<view class="name">售后查询</view>
						</view>
						<view class="item">
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
						<view class="item">
							<image class="icon" :src="imgPath+'wodezhanghao.png'"></image>
							<view class="name">我的账号</view>
						</view>
						<view class="item">
							<image class="icon" :src="imgPath+'wodejifen.png'"></image>
							<view class="name">我的积分</view>
						</view>
						<view class="item">
							<image class="icon" :src="imgPath+'wodeshoucang.png'"></image>
							<view class="name">我的收藏</view>
						</view>
					</view>
				</view>
			</view>
			<headerCP/>
		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
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
					    width: 120px;
					    height: 120px;
					    border: 5px solid #fff;
					    border-radius: 50%;
					    margin-left: 30px;
				}
				.logon{
					font-size: 38px;
					color: #fff;
					margin-left: 30px;
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
					padding: 0 30px;
					background: #fff;
					justify-content: space-between;
					.title{
						font-size: 30px;
						color: #333;
					}
					.go{
						font-size: 28px;
						    color: grey;
					}
				}
				.itemFrame{
					width:750rpx;
					display: flex;
					align-items: center;
					height: 148px;
					.item{
						width:25%;
						.icon{
							    width: 54px;
							    height: 54px;
						}
						.name{
							font-size: 24px;
							    width: 100%;
							    text-align: center;
							    padding-bottom: 20px;
							    color: #1f1f1f;
							    padding-top: 10px;
						}
					}
				}
			}
		}
	}
</style>
