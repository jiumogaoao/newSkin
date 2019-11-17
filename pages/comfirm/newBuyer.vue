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
				<text slot="center">购买人实名认证</text>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="top">
				<view class="nuskinIcon">&#xe60d;</view>
				<view class="text">海关规定购买跨境商品，购买人需提交真实姓名和身份证号码进行实名认证，且实名认证信息与支付本订单的银行卡实名信息一致。</view>
			</view>
			<view class="list">
				<view class="point">
					<view class="title">购买人姓名：</view>
					<input placeholder="请填写真是姓名"/>
				</view>
				<view class="point">
					<view class="title">身份证号码：</view>
					<input placeholder="请填写身份证号码"/>
				</view>
			</view>
			<view class="button" @click="back">保存并使用</view>
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
		.list{
			width:750rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.point{
				width: 100%;
				height: 88rpx;
				border-bottom: 1px solid $main-gray;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 24rpx;
					flex-shrink: 0;
				}
				input{
					font-size: 26rpx;
					flex-grow: 1;
					text-align: right;
				}
				.placeholder{
					color: $main-gray-deep;
					font-size: 26rpx;
				}
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

