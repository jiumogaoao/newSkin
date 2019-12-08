<template>
	<view :class="destop?'destop':'phone'">
		<block if="!destop">
			<view class="top">
				<view class="infoFrame">
					<view class="header">
						<image class="notice" :src="imgPath+'xinxi2.0-hl.png'" @click="go('/pages/notice/notice')"></image>
						<view class="right">
							<image class="shoppingCar" :src="imgPath+'tab-cart-hl.png'" @click="go('/pages/shoppingCar/shoppingCar')"></image>
							<image class="option" :src="imgPath+'menu01-hl.png'"></image>
						</view>
					</view>
					<view class="infoMain">
						<view class="infoMainFrame">
							<image class="avatar" :src="avatar"></image>
							<view class="userInfo">
								<view class="top">
									<view class="nickName">{{nick_name}}</view>
									<view class="level">{{level==1?'零售顾客':'推广商'}}<text class="yellow" v-if="level==1">V</text></view>
								</view>
								<view class="CN">{{user_account}}</view>
							</view>
						</view>
						<view class="nuskinIcon" @click="go('/pages/myQrcode/myQrcode')">&#xe739;</view>
					</view>
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
						<view class="item" @click="go('/pages/myFollow/myFollow')">
							<image class="icon" :src="imgPath+'wodeshoucang.png'"></image>
							<view class="name">我的收藏</view>
						</view>
						<view class="item" @click="go('/pages/myIntegral/myIntegral')">
							<image class="icon" :src="imgPath+'wodejifen.png'"></image>
							<view class="name">我的积分</view>
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
						<view class="item" @click="go('/pages/myShare/myShare')">
							<image class="icon" :src="imgPath+'wodeshoucang.png'"></image>
							<view class="name">我的分享</view>
						</view>
						<view class="item" @click="go('/pages/myIncome/myIncome')">
							<image class="icon" :src="imgPath+'wodeshoucang.png'"></image>
							<view class="name">我的收入</view>
						</view>
						<view class="item" @click="go('/pages/myLevel/myLevel')">
							<image class="icon" :src="imgPath+'wodejifen.png'"></image>
							<view class="name">我的身份</view>
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
		},
		computed:{
			avatar(){
				return this.$store.state.userST.avatar
			},
			nick_name(){
				return this.$store.state.userST.nick_name
			},
			user_account(){
				return this.$store.state.userST.user_account
			},
			level(){
				return this.$store.state.userST.level
			}
		}
	}
</script>

<style lang="scss" scoped>
	.phone{
		.top{
			width:750rpx;
			.infoFrame{
				width:750rpx;
				height:430rpx;
				background: url($oss-phone+'user_bg.png') 50%;
				display: flex;
				flex-direction: column;
				.header{
					width:750rpx;
					height:60rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-shrink: 0;
					padding: 0 30rpx;
					.notice{
						width:45rpx;
						height:45rpx;
					}
					.right{
						display: flex;
						align-items: center;
						.shoppingCar,.option{
							width:45rpx;
							height:45rpx;
							margin-left: 20rpx;
						}
					}
				}
				.infoMain{
					flex-grow: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.infoMainFrame{
						width:600rpx;
						display: flex;
						align-items: center;
						.avatar{
							    width: 120rpx;
							    height: 120rpx;
							    border: 5px solid #fff;
							    border-radius: 50%;
							    margin-left: 30rpx;
						}
						.userInfo{
							margin-left: 30rpx;
							.top{
								display: flex;
								align-items: center;
								.nickName{
									font-size: 30rpx;
									color: #fff;
									font-weight: bold;
								}
								.level{
									padding: 14rpx 9rpx;
									border: 1px solid #fff;
									border-radius: 20rpx;
									font-size: 24rpx;
									color: #fff;
									margin-left: 28rpx;
									.yellow{
										color: #f1bc9c;
										font-weight: bold;
									}
								}
							}
							.CN{
								font-size: 22rpx;
								color: #fff;
								margin-top: 18rpx;
							}
						}
					}
					.nuskinIcon{
						font-size: 100rpx;
						color: #fff;
						flex-shrink: 0;
						margin-right: 30rpx;
					}
					.logon{
						font-size: 38rpx;
						color: #fff;
						margin-left: 30rpx;
					}
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
