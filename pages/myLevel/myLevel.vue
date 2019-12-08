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
				<view class="title">年度购买额度</view>
				<view class="row">
					<view class="userInfo">我现在的身份：{{binded?'推广商':'零售商'}}</view>
				</view>
				<view class="row" v-if="binded">
					<view class="userInfo"><view class="infoTitle">CN号：</view><view class="infoMessage">cn06000617</view></view>
					<view class="userInfo"><view class="infoTitle">姓名：</view><view class="infoMessage">孙亚全</view></view>
					<view class="userInfo"><view class="infoTitle">身份证号码：</view><view class="infoMessage">350206198710041057</view></view>
				</view>
				<view class="go" v-else>
					<view class="goTitle">申请成为推广商</view>
					<view class="goDsc">推广商可以查看每个商品得佣金金额或比例，且推广商分享有专属得链接，零售客户没有专属链接；当推广商将如新海外购得商品链接分享出去，他人从链接进入成功购买，即可分享佣金。</view>
					<view class="button" @click="go('/pages/regest/bind')">推广商申请</view>
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
				<text slot="center">我的身份</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="top">
				<view class="title">我的身份</view>
				<view class="dsc">{{binded?'推广商':'零售商'}}</view>
			</view>
			<view class="point" @click="go('/pages/regest/bind')">
				<view class="title">申请成为推广商</view>
				<view class="dsc">
					推广商可以查看每个商品的佣金金额或比例，且推广商分享有专属的链接，零售客户没有专属链接；当推广商将如新海外购的商品链接分享出去，他人从链接进入成功购买，即可分享佣金。
				</view>
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
			this.$store.dispatch('rootST/changeMyPage', 'myLevel')
			this.$store.dispatch('CNST/getInfo')
		},
		data() {
			return {
				
			};
		},
		computed:{
			binded(){
				return this.$store.state.CNST.binded
			}
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
	.go{
		width:100%;
		padding: 23px 20px;
		display: flex;
		align-items: center;
		border: 1px solid $main-gray;
		margin-top: 39px;
		flex-wrap: wrap;
		.goTitle{
			font-size: 16px;
			color: $main-black;
			flex-shrink: 0;
		}
		.goDsc{
			width: 698px;
			font-size: 14px;
			line-height: 1.5;
			color: $main-black;
			flex-shrink: 0;
			margin-left: 60px;
			flex-shrink: 0;
		}
		.button{
			width:100px;
			height:30px;
			background-color: #008AB0;
			color: #fff;
			text-align: center;
			line-height: 30px;
			font-size: 12px;
			margin-left: 56px;
			border-radius: 30px;
		}
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
	}
	}
	/* #endif */
	page{
		background-color: $main-gray-background;
	}
	.phone{
			width:750rpx;
			.top{
				width:750rpx;
				padding: 0 30rpx;
				height: 90rpx;
				border-bottom: 1px solid $main-gray;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #fff;
				.title{
					font-weight: 26rpx;
				}
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
				}
			}
			.point{
				width:750rpx;
				padding: 30rpx;
				margin-top: 20rpx;
				background-color: #fff;
				.title{
					font-weight: 26rpx;
				}
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
					margin-top: 20rpx;
					line-height: 1.5;
				}
			}
		}
	
</style>
