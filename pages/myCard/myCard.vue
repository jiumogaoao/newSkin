<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">
			<mineNavCP/>
			<view class="info">
				<view class="title">我的银行卡</view>
				<view class="blue">您还未绑定银行卡，将影响商品分享推广和奖励发放，请尽快绑定您的常用银行卡！</view>
				<view class="bindCard" @click="go('/pages/myCard/newCard')">+绑定银行卡</view>
			</view>
			
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">我的银行卡</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="dsc">
				您还未绑定银行卡，将影响商品分享推广和奖励发放，请尽快绑定您的常用银行卡！
			</view>
			<view class="add" @click="go('/pages/myCard/newCard')">
				+ 绑定银行卡
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon,mine],
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myCard')
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destop{
		.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transform-origin: left top;
		}
		.band{
			width:100%;
			height:130px;
		}
		.body{
			@include frame-width;
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
	page{
		background-color: $main-gray-background;
	}
	.phone{
			width:750rpx;
			.dsc{
				padding: 30rpx;
				color: $main-hl;
				font-size: 24rpx;
				line-height: 1.5;
			}
			.add{
				width: 690rpx;
				height: 200rpx;
				border: 1px solid $main-gray;
				background-color: #fff;
				margin: auto;
				margin-top: 20rpx;
				font-size: 26rpx;
				line-height: 198rpx;
				text-align: center;
			}
		}
	
</style>
