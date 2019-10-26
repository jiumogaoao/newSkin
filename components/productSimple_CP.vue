<template>
	<view class="productSimpleCP">
		<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg" class="img"></image>
		<view class="title">商品标题</view>
		<view class="price">￥100</view>
		<image class="follow" src="/static/sellWellHIcon.png"></image>
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

<style lang="scss" scoped>
	.productSimpleCP{
		width: 275px;
		height: 375px;
		border: 1px solid #F0E9DE;
		position: relative;
	}
	.img{
		width: 273px;
		height: 270px;
	}
	.title{
		padding-left: 20px;
		padding-right: 20px;
		margin-top: 15px;
		text-align: center;
		font-size: 16px;
		font-weight: 500;
	}
	.price{
		text-align: center;
		margin-top: 5px;
		font-weight: bold;
		font-size: 16px;
	}
	.follow{
		width:20px;
		height:18px;
		position: absolute;
		right: 19px;
		top: 11px;
		cursor: pointer;
	}
</style>
