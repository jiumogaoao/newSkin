<template>
		<view class="breadcrumbs">
			<view class="item">首页</view>
			<view class="deg">></view>
			<view class="item">一级导航</view>
			<view class="deg">></view>
			<view class="item">二级导航</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.breadcrumbs{
		width:1200px;
		margin: auto;
		display: flex;
	}
	.item{
		cursor: pointer;
	}
	.deg,.item{
		font-size: 14px;
		color:#212529;
		margin-right: 10px;
	}
</style>
