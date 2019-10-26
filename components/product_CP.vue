<template>
	<view class="productCP">
		<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg" class="img"></image>
		<view class="brand">王牌ageLOC</view>
		<view class="title">商品标题</view>
		<view class="taxes">预计税费：￥100</view>
		<view class="price">零售价：<block style="font-size: 20px;">￥100</block></view>
		<image class="follow" src="/static/sellWellHIcon.png"></image>
		<image class="shoppingCar" src="/static/caricon-blue.png"></image>
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
	.productCP{
		width: 274px;
		    height: 468px;
		    border: 1px solid #f0e9de;
		    position: relative;
		    background-color: #fff;
		    margin-bottom: 25px;
		    cursor: pointer;
	}
	.img{
		width:272px;
		height:272px;
	}
	.brand{
		font-size: 14px;
		color: #808080;
		line-height: 14px;
		display: block;
		margin-left: 19px;
	}
	.title{
		font-size: 16px;
		    color: #333333;
		    line-height: 24px;
		    margin-bottom: 10px;
		    height: 48px;
			margin-left: 19px;
	}
	.taxes{
		font-size: 14px;
		    line-height: 30px;
		    color: #c2c2c2;
		    display: inline-block;
			margin-left: 19px;
	}
	.price{
		line-height: 30px;
	    color: #37b0c9;
	    font-size: 14px;
		margin-left: 19px;
		}
	.follow{
		width:20px;
		height:18px;
		position: absolute;
		right: 19px;
		top: 11px;
		cursor: pointer;
	}
	.shoppingCar{
		width:24px;
		height:25px;
		position: absolute;
		right: 19px;
		bottom: 30px;
		cursor: pointer;
	}
</style>
