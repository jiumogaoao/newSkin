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
				<view class="title">我的二维码</view>
				<view class="row">
					<view class="text">我的二维码</view><image src="/static/qrCode.png" class="qrCode"/><view class="text">此二维码为您的身份凭证，可作为他人注册和身份验证使用</view>
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
	.phone{}
	
</style>
