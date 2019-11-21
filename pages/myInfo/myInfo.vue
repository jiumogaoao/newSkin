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
				<view class="title">个人信息</view>
				<view class="row">
					<view class="userInfo"><view class="infoTitle">昵称</view><view class="infoMessage"><view class="text">David Li</view></view></view>
					<view class="userInfo"><view class="infoTitle">账号</view><view class="infoMessage"><view class="text">13900000002</view><view class="blue">修改</view> </view></view>
					<view class="userInfo"><view class="infoTitle">账号密码</view><view class="infoMessage"><view class="blue">修改密码</view></view></view>
					<view class="userInfo"><view class="infoTitle">手机号</view><view class="infoMessage"><view class="text">139****0002</view><view class="blue">修改</view></view></view>
					<view class="userInfo"><view class="infoTitle">微信</view><view class="infoMessage"><view class="blue">解绑</view></view></view>
					<view class="userInfo"><view class="infoTitle">QQ</view><view class="infoMessage"><view class="blue">绑定</view></view></view>
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
				<text slot="center">我的账号</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="frame">
				<view class="list" @click="go('/pages/myQrcode/myQrcode')">
					<view class="title">我的二维码</view>
					<view class="right">
						<view class="nuskinIcon qr" style="margin-right: 20rpx;">&#xe6e5;</view>
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
				<view class="list">
					<view class="title">账号</view>
					<view class="right" @click="go('/pages/myInfo/setAccount')">
						<view class="dsc">去修改</view>
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
				<view class="list">
					<view class="title">账号密码</view>
					<view class="right" @click="go('/pages/myInfo/setPassword')">
						<view class="dsc">修改密码</view>
						<view class="nuskinIcon">&#xe636;</view>
					</view>
				</view>
				<view class="list">
					<view class="title">手机号</view>
					<view class="right" @click="go('/pages/myInfo/setPhone')">
						<view class="dsc">139*****2563</view>
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
			</view>
			<view class="frame">
				<view class="list">
					<view class="title">微信</view>
					<view class="right">
						<view class="dsc">David</view>
						<view class="nuskinIcon">&#xe636;</view>
					</view>
				</view>
				<view class="list">
					<view class="title">QQ</view>
					<view class="right">
						<view class="dsc">绑定</view>
						<view class="nuskinIcon">&#xe636;</view>
					</view>
					
				</view>
			</view>
			<view class="frame">
				<view class="list">
					<view class="title">联系我们</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
				</view>
				<view class="list" @click="go('/pages/help/help')">
					<view class="title">帮助中心</view>
					<view class="right">
						<view class="nuskinIcon">&#xe636;</view>
					</view>
				</view>
			</view>
			<view class="logout">退出登录</view>
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
			this.$store.dispatch('rootST/changeMyPage', 'myInfo')
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
	}
	.userInfo{
		display: flex;
		align-items: center;
		width: 100%;
		    min-height: 1px;
		    padding-right: 15px;
		    padding-left: 15px;
			font-size: 14px;
			line-height: 35px;
	}
	.infoTitle{
		font-size: 14px;
		line-height: 35px;
		width:200px;
	}
	.infoMessage{
		font-size: 14px;
		line-height: 35px;
		display: flex;
		align-items: center;
	}
	.blue{
		color: #008ab0;
		font-size: 14px;
		letter-spacing: 1px;
	}
	.text{
		font-size: 14px;
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