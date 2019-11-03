<template>
	<view class="mineNavCP">
		<view class="title">交易管理</view>
		<view class="item hl" @click="go('/pages/myOrder/myOrder')">我的订单</view>
		<view class="item" @click="go('/pages/afterSale/afterSale')">售后服务查询</view>
		<view class="item" @click="go('/pages/myCoupon/myCoupon')">我的优惠券</view>
		<view class="item" @click="go('/pages/myPlace/myPlace')">收货地址</view>
		<view class="item" @click="go('/pages/amount/amount')">年度购买额度</view>
		<view class="title">交易管理</view>
		<view class="item" @click="go('/pages/myLevel/myLevel')">我的身份</view>
		<view class="item" @click="go('/pages/myShare/myShare')">我的分享</view>
		<view class="item" @click="go('/pages/myIncome/myIncome')">我的收入</view>
		<view class="item" @click="go('/pages/myCard/myCard')">我的银行卡</view>
		<view class="title">我的账号</view>
		<view class="item" @click="go('/pages/myInfo/myInfo')">个人信息</view>
		<view class="item" @click="go('/pages/myQrcode/myQrcode')">我的二维码</view>
		<view class="item" @click="go('/pages/myNotice/myNotice')">我的消息</view>
		<view class="item" @click="go('/pages/myFollow/myFollow')">我的收藏</view>
		<view class="item" @click="go('/pages/myIntegral/myIntegral')">我的积分</view>
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
	.mineNavCP{
		width:180px;
		flex-grow: 0;
		flex-shrink: 0;
	}
	.title{
		font-size: 16px;
		font-weight: bold;
		color: #000;
		margin-bottom: 20px;
	}
	.item{
		color: #333333;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.item.hl{
		color:#008ab0
	}
</style>
