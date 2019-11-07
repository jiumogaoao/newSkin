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
					<view class="title">收货地址</view>
					<view class="frame">
						<view class="button">+新增收货地址</view>
						<view class="dsc">您已创建0个收货地址，最多可创建50个</view>
					</view>
				</view>
				
			</view>
			<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
							<image class="back" :src="imgPath+'back.png'" @click="back"></image>
							收货地址
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
			this.$store.dispatch('rootST/changeMyPage', 'myPlace')
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
	.frame{
		display: flex;
		align-items: center;
		.button{
				width:140px;
				height:34px;
				background-color: #008ab0;
				line-height: 34px;
				border-radius: 34px;
				font-size: 14px;
				margin-right: 40px;
				color:#fff;
				text-align: center;
		}
		.dsc{
			font-size: 14px;
			color: #333;
		}
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
