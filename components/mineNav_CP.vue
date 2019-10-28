<template>
	<view class="mineNavCP">
		<view class="title">交易管理</view>
		<view class="item hl">我的订单</view>
		<view class="item">售后服务查询</view>
		<view class="item">我的优惠券</view>
		<view class="item">收货地址</view>
		<view class="item">年度购买额度</view>
		<view class="title">交易管理</view>
		<view class="item">我的身份</view>
		<view class="item">我的分享</view>
		<view class="item">我的收入</view>
		<view class="item">我的银行卡</view>
		<view class="title">我的账号</view>
		<view class="item">个人信息</view>
		<view class="item">我的二维码</view>
		<view class="item">我的消息</view>
		<view class="item">我的收藏</view>
		<view class="item">我的积分</view>
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
