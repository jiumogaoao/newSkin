<template>
	<view>
		<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="top">
			<view class="topLeft">
				<image class="noticeIcon" src="/static/order-check.png"></image>
				<view class="noticeTitle" >填写并核对订单信息</view>
			</view>
			<view class="flow">
				<view class="flowNumber hl">1</view>
				<view class="flowName hl">提交订单</view>
				<view class="flowLine"></view>
				<view class="flowNumber">2</view>
				<view class="flowName">支付</view>
				<view class="flowLine"></view>
				<view class="flowNumber">3</view>
				<view class="flowName">完成</view>
			</view>
		</view>
		<view class="orderFrame">
			
		</view>
		<footerCP/>
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
	.band{
		width:100%;
		height:130px;
	}
	.top{
		width: 1200px;
		margin: auto;
		height: 80px;
		background-color: #f3f8fb;
		margin-bottom: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.topLeft{
		display: flex;
		align-items: center;
		margin-left: 20px;
	}
	.noticeIcon{
		width: 22px;
		height:22px;
		margin-right: 5px;
	}
	.noticeTitle{
		font-size: 14px;
		    color: #333333;
	}
	.flow{
		display: flex;
		align-items: center;
		margin-right: 5px;
	}
	.flowNumber{
		color: #fff;
		    background-color: #baced5;
		    border: 1px solid #e5e5e5;
		    width: 24px;
		    height: 24px;
		    font-size: 16px;
		    line-height: 24px;
		    display: inline-block;
		    text-align: center;
		    border-radius: 12px;
		    font-style: normal;
			margin-right: 5px;
	}
	.flowNumber.hl{
		background-color: #0089af;
		border: 1px solid #0089af;
	}
	.flowName{
		font-size: 14px;
		margin-right: 15px;
	}
	.flowName.hl{
		color:#0089af;
	}
	.flowLine{
		width:55px;
		height:2px;
		background-color: #dee2e6;
		margin-right: 15px;
	}
	.orderFrame{
		width:1160px;
		margin: auto;
		padding: 0px 19px 29px 19px;
		border: 1px solid #f5f5f5;
	}
</style>
