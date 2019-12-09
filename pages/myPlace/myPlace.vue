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
					<view class="title">收货地址</view>
					<view class="frame">
						<view class="button">+新增收货地址</view>
						<view class="dsc">您已创建0个收货地址，最多可创建50个</view>
					</view>
				</view>
				
			</view>
			<footerCP/>
			</view>
			<view class="newPlaceFrame">
				<view class="newPlace">
					<view class="title">收货地址</view>
					<view class="grayFrame">
						<view class="blue">温馨提示:</view>
						<view class="dsc">1、请确保收货人的身份证号码真实有效，否则无法完成订单支付；</view>
						<view class="dsc">2、购买海外商品需依法向中国海关申报纳税，根据海关要求，请您填写真实的收货人姓名，并配合提供海关所需的身份证信息进行个人物品你入境申报。</view>
					</view>
					<view class="inputList">
						<view class="point">
							<view class="label">收货人姓名*</view>
							<input placeholder="请输入收货人真实姓名"/>
							<view class="error">请输入收货人姓名！</view>
						</view>
						<view class="point">
							<view class="label">收货人身份证*</view>
							<input placeholder="请输入正确的身份证号码,如填写有误,海关将取消订单,敬请留意"/>
							<view class="error">请输入收货人身份证！</view>
						</view>
						<view class="point">
							<view class="label">手机号码*</view>
							<input placeholder="请输入收货人手机号码"/>
							<view class="error">请输入手机号码！</view>
						</view>
						<view class="point">
							<view class="label">省份/城市/地区*</view>
							<input placeholder="请选择"/>
							<view class="error">请选择省市区！</view>
						</view>
						<view class="point">
							<view class="label">详细地址*</view>
							<input placeholder="请填写"/>
							<view class="error">请填写详细地址！</view>
						</view>
					</view>
					<view class="agreeFrame">
						<radioCP/> <view class="dsc">设为默认收货地址</view>
					</view>
					<view class="buttonFrame">
						<view class="button cancel">取消</view>
						<view class="button">绑定</view>
					</view>
				</view>
			</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">收货地址</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>

				<view class="point">
					<view class="top">
						<view class="name">里里</view>
						<view class="tel">153****2656</view>
					</view>
					<view class="place">所在地区：广东潮州潮安县沙爹激动啊师大暨大</view>
					<view class="bottom">
						<view class="left">
							<radioCP @click="back"/>
							<view class="text">默认地址</view>
						</view>
						<view class="right">
							<view class="button" @click="go('/pages/myPlace/newPlace')">编辑</view>
							<view class="button">删除</view>
						</view>
					</view>
				</view>

			<view class="newFrame">
				<view class="button" @click="go('/pages/myPlace/newPlace')">新建地址</view>
			</view>
		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	import radioCP from "@/components/radio_CP.vue"
	export default {
		mixins: [allPage,needLogon,mine],
		components:{radioCP},
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myPlace')
		},
		data() {
			return {
				newPlace:true
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
	.newPlaceFrame{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		.newPlace{
			width:668px;
			padding: 50px 75px;
			background-color: #fff;
			.title{
				font-size: 16px;
				font-weight: bold;
			}
			.grayFrame{
				width:500px;
				height: 105px;
				background-color: $main-gray-background;
				padding: 14px 18px;
				.blue{
					font-size: 12px;
					color: $main-hl;
					margin-bottom: 14px;
				}
				.dsc{
					font-size: 12px;
					color: $main-gray-deep;
					line-height: 1.5;
				}
			}
			.inputList{
				width: 500px;
				.point{
					margin-top: 26px;
					position: relative;
					.label{
						font-size: 13px;
						color: $main-black;
					}
					input{
						width: 100%;
						height: 46px;
						border: 1px solid $main-gray;
						margin-top: 20px;
					}
					.error{
						position: absolute;
						bottom:-18px;
						right:0px;
						font-size: 12px;
						color: #ee6463;
					}
				}
			}
			.agreeFrame{
				display: flex;
				align-items: center;
				margin-top: 22px;
			}
			.buttonFrame{
				display: flex;
				justify-content: flex-end;
				width:505px;
				margin-top: 17px;
				.button{
					width:140px;
					height: 44px;
					border: 1px solid $main-hl;
					background-color: $main-hl;
					color: #fff;
					line-height: 42px;
					text-align: center;
					border-radius: 22px;
					font-size: 16px;
				}
				.button.cancel{
					border: 1px solid $main-gray;
					background-color: #fff;
					color: $main-gray-deep;
					margin-right: 40px;
				}
			}
		}
	}
	}
	/* #endif */
	page{background-color: $main-gray-background;}
	.phone{
			display: flex;
			align-items: center;
			flex-direction: column;
			width:750rpx;
			.point{
				width: 750rpx;
				padding: 0 30rpx;
				background-color: #fff;
				margin-bottom: 20rpx;
				.top{
					width: 100%;
					height: 80rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.name{
						font-size: 26rpx;
					}
					.tel{
						font-size: 24rpx;
					}
				}
				.place{
					font-size: 24rpx;
					color: $main-gray-deep;
					margin-top: 20rpx;
					margin-bottom: 42rpx;
				}
				.bottom{
					width: 100%;
					height: 98rpx;
					border-top:1px solid $main-gray;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						display: flex;
						align-items: center;
						.text{
							margin-left: 20rpx;
							color: $main-gray-deep;
						}
					}
					.right{
						display: flex;
						align-items: center;
						.button{
							font-size: 24rpx;
							color: $main-gray-deep;
							margin-left: 94rpx;
						}
					}
				}
			}
			.newFrame{
				width: 750rpx;
				height: 120rpx;
				background-color: #fff;
				border-top:1px solid $main-gray;
				display: flex;
				align-items: center;
				justify-content: center;
				position: fixed;
				bottom:0;
				left: 0;
				.button{
					width:692rpx;
					height: 79rpx;
					background-color: $main-hl;
					color: #fff;
					text-align: center;
					line-height: 79rpx;
					font-size: 28rpx;
					border-radius: 79rpx;
				}
			}
		}
</style>
