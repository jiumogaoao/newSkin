<template>
	<view>
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">
			<mineNavCP/>
			<view class="info">
				<view class="title">我的订单</view>
				<tabbarCP/>
				<view class="head">
					<view class="headItem first" style="width:46%">订单详情</view>
					<view class="headItem" style="width:10%">数量</view>
					<view class="headItem" style="width:12%">收货人</view>
					<view class="headItem" style="width:12%">金额</view>
					<view class="headItem" style="width:10%">状态</view>
					<view class="headItem" style="width:10%">操作</view>
				</view>
				<view class="listFrame">
					<view class="list">
						<view class="listItem" style="width:56%">
							<view class="product">
								<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="productImg"></image>
								<view class="infoFrame">
									<view class="productTitle">如新华贸骨骼配方</view>
									<view class="info">产品编号：01003331</view>
									<view class="info">规格：180粒</view>
								</view>
								<view class="count">x5</view>
							</view>
							<view class="product">
								<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="productImg"></image>
								<view class="infoFrame">
									<view class="productTitle">如新华贸骨骼配方</view>
									<view class="info">产品编号：01003331</view>
									<view class="info">规格：180粒</view>
								</view>
								<view class="count">x5</view>
							</view>
						</view>
						<view class="listItem" style="width:12%">收货人：张天爱</view>
						<view class="listItem" style="width:12%">￥2143.82</view>
						<view class="listItem" style="width:10%">
							<view class="state">待收货</view>
							<view class="blue">订单详情</view>
						</view>
						<view class="listItem" style="width:10%">
							<view class="button" style="margin: 0 auto 18px;">确认收货</view>
							<view class="button">查看物流</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady"></block>
		
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
	.listFrame{
		width:100%;
	}
	.list{
		display: flex;
		align-items: center;
		border: 1px solid #f5f5f5;
		border-left: 1px solid #f5f5f5;
	}
	.product{
		margin-top: -1px;
		width:100%;
		height: 142px;
		border: 1px solid #f5f5f5;
		border-bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.productImg{
		width:142px;
		height: 142px;
		flex-shrink: 0;
	}
	.count{
		width:16%;
		text-align: center;
		flex-shrink: 0;
	}
	.infoFrame{
		flex-grow: 1;
		margin-left: 10px;
	}
	.productTitle{
		    padding: 20px 0 10px;
		    margin: 0;
		    font-size: 16px;
		    color: #333;
		    line-height: 25px;
	}
	.info{
		font-size: 14px;
		    line-height: 20px;
		    color: #808080;
	}
	.listItem{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		    font-size: 14px;
		    line-height: 170px;
		    letter-spacing: 1px;
	}
	.state{
		line-height: 40px;
		font-size: 14px;
		    text-align: center;
		    letter-spacing: 1px;
		    color: #808080;
	}
	.blue{
		color: #008ab0;
		font-size: 14px;
		letter-spacing: 1px;
	}
	.button{
		    width: 90px;
		    height: 28px;
		    background-color: #008ab0;
		    border-radius: 14px;
		    text-align: center;
		    line-height: 28px;
		    color: #fff;
		    cursor: pointer;
	}
</style>
