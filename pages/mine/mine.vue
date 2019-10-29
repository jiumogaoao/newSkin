<template>
	<view :class="destop?'destop':'phone'">
		<block if="!destop">
			<view class="top">
				<view class="header">
					<image class="notice" src=""></image>
					<view class="right">
						<image class="shoppingCar" src=""></image>
						<image class="option" src=""></image>
					</view>
				</view>
				<view class="infoFrame">
					<image class="avatar" src=""></image>
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
							<image class="icon" src=""></image>
							<view class="name">待付款</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
							<view class="name">待发货</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
							<view class="name">待收货</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
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
							<image class="icon" src=""></image>
							<view class="name">发货地址</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
							<view class="name">优惠券</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
							<view class="name">售后查询</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
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
							<image class="icon" src=""></image>
							<view class="name">我的账号</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
							<view class="name">我的积分</view>
						</view>
						<view class="item">
							<image class="icon" src=""></image>
							<view class="name">我的收藏</view>
						</view>
					</view>
				</view>
			</view>
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

	}
</style>
