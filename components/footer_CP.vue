<template>
	<view class="footer_CP">
		<view class="centerFrame">
			<view class="left">
				<view class="list">
					<view class="title">公司信息</view>
					<view class="item">关于我们</view>
				</view>
				<view class="list">
					<view class="title">帮助</view>
					<view class="item">售后服务</view>
					<view class="item">联系我们</view>
					<view class="item">帮助中心</view>
				</view>
				<view class="list">
					<view class="title">其他</view>
					<view class="item">官网主页</view>
				</view>
			</view>
			<view class="right">
				<view class="title">关注我们</view>
				<view class="followFrame">
					<image class="followItem" :src="imgPath+'weibo.png'"></image>
					<image class="followItem" :src="imgPath+'weixin.png'"></image>
				</view>
				<view class="line"></view>
			</view>
		</view>
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
	.footer_CP{
		    background: url($oss-destop+'footer_bg.png') no-repeat center center;
		    width: 100%;
		    height: 328px;
			margin-top: 100px;
	}
	.centerFrame{
		width:1200px;
		margin:auto;
		display: flex;
		justify-content: space-between;
	}
	.left{
		display: flex;
		padding-top: 89px;
	}
	.right{
		padding-top: 89px;
	}
	.title{
		font-size: 20px;
		    line-height: 20px;
		    margin-bottom: 10px;
		    color: #fff;
			font-weight: 700;
	}
	.item{
		margin-top: 34px;
		    font-size: 14px;
		    line-height: 4px;
			color: #fff;
	}
	.followFrame{
		margin-top: 34px;
		display: flex;
	}
	.followItem{
		margin-right: 100px;
		    width: 45px;
		    height: 45px;
	}
	.list{
		margin-right:80px;
	}
	.line{
		width: 330px;
		    height: 3px;
		    background-color: #676767;
		    margin-top: 30px;
		    margin-left: 6px;
	}
</style>
