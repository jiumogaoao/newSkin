<template>
	<view v-if="destop && initReady">
		<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">
			<mineNavCP/>
			<view class="info">
				<view class="title">我的订单</view>
				<tabbarCP/>
				<view class="head">
					<view class="headItem first" style="width:50%">订单详情</view>
					<view class="headItem" style="width:10%">数量</view>
					<view class="headItem" style="width:10%">收货人</view>
					<view class="headItem" style="width:10%">金额</view>
					<view class="headItem" style="width:10%">状态</view>
					<view class="headItem" style="width:10%">操作</view>
				</view>
				<view class="listFrame">
					<view class="list">
						<view class="listItem" style="width:60%">
							<view class="product">
								<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
								<view class="infoFrame">
									<view class="productTitle">如新华贸骨骼配方</view>
									<view class="info">产品编号：01003331</view>
									<view class="info">规格：180粒</view>
								</view>
								<view class="count">x5</view>
							</view>
							<view class="product">
								<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
								<view class="infoFrame">
									<view class="productTitle">如新华贸骨骼配方</view>
									<view class="info">产品编号：01003331</view>
									<view class="info">规格：180粒</view>
								</view>
								<view class="count">x5</view>
							</view>
						</view>
						<view class="listItem" style="width:10%">收货人：张天爱</view>
						<view class="listItem" style="width:10%">￥2143.82</view>
						<view class="listItem" style="width:10%">
							<view>待收货</view>
							<view class="blue">订单详情</view>
						</view>
						<view class="listItem" style="width:10%">
							<view class="button">确认收货</view>
							<view class="button">查看物流</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<footerCP/>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	export default {
		mixins: [allPage,mine],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.band{
		width:100%;
		height:130px;
	}
	.body{
		width:1200px;
		margin: auto;
		margin-top: 20px;
		display: flex;
	}
	.info{
		flex-grow: 1;
	}
	.title{
		font-size: 16px;
		    font-weight: bold;
		    color: #000;
			margin-bottom: 60px;
	}
	.head{
		    margin: 42px 0 28px;
		    display: flex;
		    height: 52px;
		    background-color: #f5f5f5;
		    border-radius: 2px;
			align-items: center;
	}
	.headItem{
		font-size: 14px;
		text-align: center;
	}
	.headItem.first{
		text-align:left;
		text-indent: 30px;
	}
</style>
