<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">
			<mineNavCP/>
			<view class="info">
				<view class="title">我的银行卡</view>
				<view class="blue">您还未绑定银行卡，将影响商品分享推广和奖励发放，请尽快绑定您的常用银行卡！</view>
				<view class="bindCard">+绑定银行卡</view>
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
	/* #ifdef H5 */
	.destop{
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
		.blue{
			color: #008ab0;
			font-size: 14px;
			letter-spacing: 1px;
		}
		.bindCard{
			    width: 334px;
			    height: 130px;
			    line-height: 130px;
			    background-color: #f4f4f4;
			    font-size: 14px;
			    color: #008ab0;
			    text-align: center;
			    cursor: pointer;
				margin-top: 20px;
		}
	}
	/* #endif */
	.phone{}
	
</style>
