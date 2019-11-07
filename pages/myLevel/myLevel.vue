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
				<view class="title">年度购买额度</view>
				<view class="row">
					<view class="userInfo">我现在的身份：推广商</view>
				</view>
				<view class="row">
					<view class="userInfo"><view class="infoTitle">CN号：</view><view class="infoMessage">cn06000617</view></view>
					<view class="userInfo"><view class="infoTitle">姓名：</view><view class="infoMessage">孙亚全</view></view>
					<view class="userInfo"><view class="infoTitle">身份证号码：</view><view class="infoMessage">350206198710041057</view></view>
				</view>
				
			</view>
			
		</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
							<image class="back" :src="imgPath+'back.png'" @click="back"></image>
							我的身份
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
