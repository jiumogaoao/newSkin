<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">订单评价</text>
				<text slot="right" class="navBarText">提交</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="frame">
				<view class="title">订单号：CN25369836</view>
				<view class="dsc">2019-01-03 16:36:36</view>
				<view class="dsc">请您对本次的购买体验做出评价</view>
			</view>
			<view class="frame">
				<view class="title">
					综合评价： 好评 <text class="nuskinIcon">&#xe637;</text> 中评 <text class="nuskinIcon">&#xe631;</text> 差评 <text class="nuskinIcon">&#xe62a;</text>
				</view>
				<view class="title">
					产品评价： <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe6d6;</text>
				</view>
				<view class="title">
					物流评价： <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe6d6;</text> <text class="nuskinIcon">&#xe625;</text>
				</view>
			</view>
			<view class="frame">
				<view class="title">意见和建议</view>
				<textarea></textarea>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon],
		components:{},
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
	}
	/* #endif */
	page{
		background: $main-gray-background;
	}
	.phone{
		.frame{
			width: 750rpx;
			margin-top: 20rpx;
			padding: 30rpx;
			background-color: #fff;
			.title{
				font-size: 26rpx;
				margin-bottom: 20rpx;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
				margin-top: 20rpx;
			}
			textarea{
				margin-top: 20rpx;
				width:100%;
				border: 1px solid $main-gray;
			}
			.nuskinIcon{
				font-size: 50rpx;
				color: $main-hl;
			}
		}
	}
	
</style>