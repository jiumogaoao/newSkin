<template>
	<view class="tabbarCP">
		<view class="item hl">全部订单<view class="line"></view></view>
		<view class="item">待付款（0）<view class="line"></view></view>
		<view class="item">待发货（1）<view class="line"></view></view>
		<view class="item">已发货（0）<view class="line"></view></view>
		<view class="item">清关中（0）<view class="line"></view></view>
		<view class="item">待收货（1）<view class="line"></view></view>
		<view class="item">已完成（3）<view class="line"></view></view>
		<view class="item">已取消（2）<view class="line"></view></view>
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
	.tabbarCP{
		height: 40px;
		border-bottom: 1px solid #f5f5f5;
		width:100%;
		display: flex;
		align-items: center;
	}
	.item{
		margin-right: 45px;
		cursor: pointer;
		color: #000;
		font-size: 14px;
		position: relative;
	}
	.line{
		display: none;
		position: absolute;
		bottom:-13px;
		    left: 5%;
		    width: 90%;
		height:2px;
		background-color: #008ab0;
	}
	.hl .line{
		display: block;
	}
</style>
