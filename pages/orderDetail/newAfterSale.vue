<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
		</block>
		<!-- #endif -->
		<block  v-if="!destop">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">售后申请</text>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="topFrame">
					<view class="title">售后说明</view>
					<view class="dsc">亲爱的顾客：如新海外购暂时不支持无理由退货和退换。如果您购买的商品出现漏发、错发和破损的情况，您可以在此提交售后申请，客服同事会与您联系确定具体情况并及时处理，谢谢！</view>
			</view>
			<view class="productFrame">
				<view class="top">
					<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
					<view class="right">
						<view class="title">清如新盈透三校保护系列</view>
						<view class="text">产品编号：2911533</view>
						<view class="text">规格：粉红 100ml*2</view>
						<view class="price">￥ 140.00 x1</view>
					</view>
				</view>
				<view class="point">
					<view class="title">申请数量</view>
					<view class="countFrame">
						<view class="sub nuskinIcon">&#xe693;</view>
						<input class="count"/>
						<view class="add nuskinIcon">&#xe61a;</view>
					</view>
				</view>
				<view class="point">
					<view class="title">最大退款金额</view>
					<view class="money">￥140.00</view>
				</view>
			</view>
			<view class="infoFrame">
				<view class="reason">
					<view class="title">申请原因：</view>
					<view class="dsc">请选择<text class="nuskinIcon">&#xe636;</text></view>
				</view>
				<view class="dscFrame">
					<view class="title">问题描述：</view>
					<textarea></textarea>
					<view class="dsc">建议您提供有效凭证，包含商品照片或物流凭证等</view>
					<view class="demo">参考拍照实例 <text class="nuskinIcon">&#xe636;</text></view>
				</view>
				<view class="picFrame">
					<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
					<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
					<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
				</view>
			</view>
			<view style="width:100%;height:120rpx;"></view>
			<view class="buttonFrame">
				<view class="button">提交</view>
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
				hl:0
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
		
	}
	/* #endif */
	page{background-color: $main-gray-background;}
	.phone{
		display: flex;
		align-items: center;
		flex-direction: column;
		width:750rpx;
		.topFrame{
			width: 750rpx;
			background-color: #fff;
			padding: 30rpx;
			margin-top: 20rpx;
			.title{
				font-size: 26rpx;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
				margin-top: 20rpx;
			}
		}
		.productFrame{
			width: 750rpx;
			margin-top: 20rpx;
			background-color: #fff;
			padding: 30rpx;
			.top{
				width: 100%;
				display: flex;
				align-items: center;
				image{
					width:160rpx;
					height:160rpx;
				}				
				.right{
					margin-left: 20rpx;
					.title{
						font-size: 26rpx;
						}
					.dsc{
						font-size: 24rpx;
						color: $main-gray-deep;
						margin-top: 20rpx;
						}
					.price{
						font-size: 24rpx;
						color: $main-hl;
						margin-top: 20rpx;
					}
				}
			}
			.point{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				.title{
					font-size: 26rpx;
				}
				.countFrame{
					display: flex;
					align-items: center;
					margin-left: 50rpx;
					width: 142rpx;
					justify-content: space-between;
					.sub,.add{
						font-size: 40rpx;
					}
					.count{
						    text-align: center;
						    padding: 0;
						    font-size: 30rpx;
					}
				}
				.money{
					color: red;
					font-size: 24rpx;
				}
			}
		}
		.infoFrame{
			width: 750rpx;
			padding: 30rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.title{
				font-size: 26rpx;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
			}
			.reason{
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.dscFrame{
				with:100%;
				margin-top: 20rpx;
				textarea{
					width: 100%;
					border: 1px solid $main-gray;
					margin-top: 20rpx;
				}
				.dsc{
					margin-top: 20rpx;
				}
				.demo{
					font-size: 24rpx;
					margin-top: 20rpx;
					color: $main-hl;
				}
			}
			.picFrame{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				image{
					width:200rpx;
					height:200rpx;
				}
			}
		}
		.buttonFrame{
			width:100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			position: fixed;
			bottom:0;
			left:0;
			.button{
				width: 500rpx;
				height: 82rpx;
				text-align: center;
				line-height: 82rpx;
				background-color: $main-hl;
				color: #fff;
				font-size: 30rpx;
				border-radius: 82rpx;
			}
		}
	}
	
</style>
