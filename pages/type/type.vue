<template>
	<view :class="destop?'destop':'phone'">
		<block if="!destop">
			<view class="header">分类</view>
			<view class="frame">
				<view class="left">
					<view class="item">王牌ageLOC</view>
					<view class="item">护肤</view>
					<view class="item">彩妆</view>
					<view class="item">营养补充</view>
				</view>
				<view class="right">
					<view class="item">唇部彩妆</view>
					<view class="item">基础营养</view>
					<view class="item">头发洗护</view>
					<view class="item">ageLOC焕新系列</view>
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
		.header{
			width:750rpx;
			height:20rpx;
			line-height: 20rpx;
			text-align: center;
			position: fixed;
			top:0;
			left: 0;
			font-size: 16px;
			background-color: #fff;
		}
		.frame{
			position: fixed;
			top:20rpx;
			left:0;
			width:750rpx;
			bottom:50rpx;
			display: flex;
			justify-content: space-between;
			.left{
				width:240rpx;
				background-color: #f6f7f7;
				flex-shrink: 0;
				.item{
					width:240rpx;
					height: 110rpx;
					line-height: 110rpx;
					text-align: center;
					font-size: 28rpx;
				}
			}
			.right{
				flex-grow: 1;
				background-color:#fff;
				.item{
					width: 100%;
					height: 78rpx;
					color: #303133;
					font-size: 28px;
					line-height: 78rpx;
					text-align: center;
				}
			}
		}
	}
</style>
