<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
			<view class="title">帮助中心</view>
			<view class="info">帮助中心</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">帮助中心</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="frame">
				<view class="list" @click="go('/pages/help/userRule')">
					<view class="title">如新用户注册协议</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
				<view class="list">
					<view class="title">如新隐私政策</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
				<view class="list">
					<view class="title">企业证照</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
				</view>
				<view class="list">
					<view class="title">常见问题</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
				<view class="list">
					<view class="title">操作手册</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
				<view class="list">
					<view class="title">咨询热线</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
		components:{},
		data() {
			return {
			
			};
		},
		methods:{

		},
		computed:{
	
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
		.title{
			font-size: 36px;
			    width: 100%;
			    text-align: center;
			    line-height: 1.3;
			    color: #008ab0;
			    margin: 20px auto 55px;
		}
		.info{
			@include frame-width;
			margin: auto;
		}
	}
	/* #endif */
	page{background-color: $main-gray-background;}
	.phone{
			display: flex;
			align-items: center;
			flex-direction: column;
			width:750rpx;
			.frame{
				width:750rpx;
				background-color: #fff;
				padding: 0 30rpx;
				margin-top: 20rpx;
				.list{
					width:100%;
					height: 96rpx;
					border-bottom: 1px solid $main-gray;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.title{
						font-size: 26rpx;
					}
					.right{
						display: flex;
						align-items: center;
						.dsc{
							font-size: 24rpx;
							color: $main-gray-deep
						}
						.nuskinIcon{
							font-size: 24rpx;
							color: $main-gray-deep
						}
						.qr{
							font-size: 40rpx;
						}
					}
				}
			}
			.logout{
				width:669rpx;
				height: 80rpx;
				border-radius: 80rpx;
				background-color: #fff;
				font-size: 26rpx;
				text-align: center;
				line-height: 80rpx;
				margin: auto;
				margin-top: 38rpx;
			}
		}
	
</style>
