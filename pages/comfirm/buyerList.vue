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
				<text slot="center">选择购买人</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="top">
				<view class="nuskinIcon">&#xe60d;</view>
				<view class="text">海关规定购买跨境商品，购买人需提交真实姓名和身份证号码进行实名认证，且实名认证信息与支付本订单的银行卡实名信息一致。</view>
			</view>
			<view class="point">
				<view class="left">
					<view class="title">黄潇雨 440963************69</view>
					<view class="dsc">本年度平台已购买的总额： 12000元</view>
				</view>
				<radioCP @click="back"/>
			</view>
			<view class="button" @click="go('/pages/comfirm/newBuyer')">新添加购买人</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	import radioCP from "@/components/radio_CP.vue"
	export default {
		mixins: [allPage,needLogon],
		components:{radioCP},
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
		.top{
			padding: 30rpx;
			display: flex;
			align-items: center;
			.nuskinIcon{
				font-size: 50rpx;
			}
			.text{
				margin-left: 20rpx;
			}
		}
		.point{
			width: 750rpx;
			background-color: #fff;
			border-bottom: 1px solid $main-gray;
			height: 120rpx;
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				font-size: 26rpx;
			}
			.dsc{
				font-size: 24rpx;
				margin-top: 10rpx;
				color: $main-gray-deep;
			}
		}
		.button{
			width: 500rpx;
			height: 82rpx;
			text-align: center;
			line-height: 82rpx;
			margin: auto;
			margin-top: 100rpx;
			background-color: $main-hl;
			color: #fff;
			font-size: 30rpx;
			border-radius: 82rpx;
		}
	}
	
</style>
