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
			<view class="head">
							<image class="back" :src="imgPath+'back.png'" @click="back"></image>
							个人信息
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
	.phone{
			display: flex;
			align-items: center;
			flex-direction: column;
			width:750rpx;
			.head{
				width:100%;
				text-align: center;
				    font-size: 40rpx;
				padding-top: 34rpx;
				position: relative;
				.back{
					width:32rpx;
					height:32rpx;
					position:absolute;
					left:20rpx;
				}
			}
		}
	
</style>