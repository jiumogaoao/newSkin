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
				<view class="title">我的二维码</view>
				<view class="row">
					<view class="text">我的二维码</view><image src="/static/qrCode.png" class="qrCode"/><view class="text">此二维码为您的身份凭证，可作为他人注册和身份验证使用</view>
				</view>
				
			</view>
			
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">我的二维码</text>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="frame">
				<view class="title">
					此二维码为您的身份凭证，可作为分享他人注册和身份验证使用
				</view>
				<image src="/static/qrCode.png"></image>
				<view class="dsc">138****1848</view>
				<view class="dsc">请扫描我的二维码进行注册</view>
				<view class="button">保存到手机</view>
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
			this.$store.dispatch('rootST/changeMyPage', 'myQrcode')
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
		.row{
			margin-top: 55px;
			width: 100%;
			display: flex;
		}
		.qrCode{
			width:194px;
			height:194px;
			margin-right: 30px;
		}
		.text{
			font-size: 14px;
			margin-right: 30px;
		}
	}
	/* #endif */
	.phone{
			.frame{
				width:750rpx;
				padding: 30rpx;
				background-color: #fff;
				display: flex;
				align-items: center;
				flex-direction: column;
				.title{
					font-size: 32rpx;
					text-align: center;
				}
				image{
					width:400rpx;
					height:400rpx;
					margin-top: 250rpx;
				}
				.dsc{
					font-size: 24rpx;
					margin-top: 20rpx;
					text-align: center;
				}
				.button{
					width:303rpx;
					height: 84rpx;
					border: 1px solid $main-gray;
					margin: auto;
					margin-top: 62rpx;
					line-height: 84rpx;
					text-align: center;
				}
			}
		}
	
</style>
