<template>
	<view>
		<!-- #ifdef  -->
		<block  v-if="destop && initReady">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">
			<mineNavCP/>
			<view class="info">
				<view class="title">我的收入</view>
				<view class="blue">积分规则></view>
				<view class="totalList">
					<view class="total">
						<view class="integral">0</view>
						<view class="dsc">我的积分</view>
						<view class="button">去积分购物</view>
					</view>
					<view class="total">
						<view class="integral">0</view>
						<view class="dsc red">即将失效的积分</view>
						<view class="button">查看更多</view>
					</view>
				</view>
				<view class="subTitle">积分记录</view>
				<view class="head">
					<view class="headItem first" style="width:40%">详细</view>
					<view class="headItem" style="width:30%">收入/支出</view>
					<view class="headItem" style="width:30%">时间</view>
				</view>
				<view class="listFrame">
					<view class="list">
						<view class="listItem" style="width:40%">买了东西</view>
						<view class="listItem" style="width:30%">￥0.00</view>
						<view class="listItem" style="width:30%">2019年10月29日</view>
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
		    line-height: 66px;
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
		text-align: right;
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
			margin-top: 28px;
	}
	.totalList{
		display: flex;
		justify-content: space-between;
	}
	.total{
		width: 500px;
		    height: 200px;
		    background-color: #f8f8f8;
		    padding-top: 40px;
		    padding-bottom: 38px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
	}
	.integral{
		color: #333333;
		    font-size: 26px;
		    line-height: 26px;
		    text-align: center;
		    margin-bottom: 14px;
	}
	.dsc{
		font-size: 14px;
		line-height: 14px;
		color: #333333;
		text-align: center;
	}
	.dsc.red{
		color: #f03a3a;
	}
</style>
