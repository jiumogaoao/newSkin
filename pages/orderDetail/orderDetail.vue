<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">

			
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">订单详情</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			
			<view class="topFrame">
				<view class="state">已取消</view>
				<view class="type">线上购物</view>
			</view>
			<view class="logisticsFrame" @click="go('/pages/orderDetail/logistics')">
				<view class="left">
					<view class="nuskinIcon">&#xe8ee;</view>
					<view class="info">
						<view class="title">清关完成，移交快递公司</view>
						<view class="dsc">快递单号：1253623630</view>
						<view class="dsc">2019-05-03 15:23:36</view>
					</view>
				</view>
				<view class="nuskinIcon">&#xe636;</view>
			</view>
			<view class="placeFrame">
				<view class="nuskinIcon">&#xe74a;</view>
				<view class="right">
					<view class="title">里里 153****2656</view>
					<view class="dsc">收货地址：广东，潮州，潮安县，沙爹激动啊师大暨大</view>
				</view>
			</view>
			<view class="list">
				<view class="top">
					<view class="title">包裹1</view>
					<view class="dsc">订单将按照以下明细拆为多个包裹发货</view>
				</view>
				<view class="item">
					<image class="pic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
					<view class="right">
						<view>
							<view class="title">如新新动轻享套装（适用油性肌肤）</view>
							<view class="code">产品编号 29139479</view>
						</view>
						<view class="rightBottom">
							<view class="text">￥1,775.00</view>
							<view class="text">X1</view>
						</view>
					</view>
				</view>
			</view>
			<view class="invoiceFrame">
				<view class="title">购买人</view>
				<view class="dsc">黄潇雨 440963***********69</view>
			</view>
			<view class="idFrame">
				<view class="row">订单号：<text class="id">CN52919693</text></view>
				<view class="row">支付交易号：<text class="id">CN52919693</text></view>
				<view class="row">下单日期：<text class="id">2019-09-11 23:04:59</text></view>
			</view>
			<view class="priceFrame">
				<view class="row">
					<view class="text">产品数量</view>
					<view class="text">1</view>
				</view>
				<view class="row">
					<view class="text">运费</view>
					<view class="text">￥0.00</view>
				</view>
				<view class="row">
					<view class="text">产品总金额</view>
					<view class="text">￥1，775.00</view>
				</view>
				<view class="row">
					<view class="text">直销产品总业绩</view>
					<view class="text">￥1,775.00</view>
				</view>
				<view class="bottom">
					<view class="row">
						<view class="text">应付总额</view>
						<view class="text blue">￥1,775.00</view>
					</view>
				</view>
			</view>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="bottomFrame">
				<view class="go" @click="go('/pages/comfirm/comfirm')">再次购买</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon],
		onShow: function() {
	
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{background-color: #f1f1f1;}
	/* #ifdef H5 */
	.destop{
		.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transform-origin: left top;
		}
	}
	/* #endif */
	.phone{
		.logisticsFrame{
			width:750rpx;
			height: 300rpx;
			padding: 30rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: $main-gray-background;
			.left{
				display: flex;
				align-items: center;
				.nuskinIcon{
					font-size: 50rpx;
					margin-right: 20rpx;;
				}
				.title{
					font-size: 26rpx;
				}
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
					margin-top: 20rpx;
				}
			}
		}
		.topFrame{
			width:750rpx;
			height: 160rpx;
			background-image: url('https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/4d72aebd.detail.png');
			display: flex;
			    background-size: 100%;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			.state{
				font-size: 34rpx;
				color: #fff;
			}
			.type{
				padding: 14rpx 30rpx;
				font-size: 22rpx;
				color: #fff;
				background-image: linear-gradient(-135deg,#0573b2,#02c8d1);
				border-radius: 30rpx;
			}
		}
		.placeFrame{
			padding: 0 30rpx;
			width:750rpx;
			background-color: #fff;
			height: 162rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;
			.nuskinIcon{
				font-size: 50rpx;
				color: $main-gray-deep;
				flex-shrink: 0;
			}
			.right{
				flex-grow: 1;
				margin-left: 48rpx;
				.title{
					font-size: 26rpx;
				}
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
					margin-top: 20rpx;
				}
			}
		}
		.list{
			width:100%;
			background-color: #fff;
			margin-top: 20rpx;
			.top{
				padding: 0 30rpx;
				width: 750rpx;
				height: 87rpx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid $main-gray;
				.title{
					font-size: 26rpx;
				}
				.dsc{
					margin-left: 24rpx;
					font-size: 20rpx;
					color: $main-gray-deep;
				}
			}
			.item{
				width: 750rpx;
				padding: 20rpx 30rpx;
				background-color: #f9f9f9;
				display: flex;
				.pic{
					width:160rpx;
					height:160rpx;
					flex-shrink: 0;
				}
				.right{
					flex-grow: 1;
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;
					.title{
						font-size: 26rpx;
					}
					.code{
						font-size: 24rpx;
						color: $main-gray-deep;
						margin-top: 10rpx;
					}
					.rightBottom{
						margin-top: 40rpx;
						display: flex;
						justify-content: space-between;
						.text{
							font-size: 20rpx;
						}
					}
				}
			}
			.bottomTop{
				width:690rpx;
				height: 84rpx;
				padding: 0 30rpx;
				background-color: #fff;
				border-bottom: 1px solid #ccc;
				line-height: 84rpx;
				text-align: right;
				font-size: 26rpx;
			}
			.bottomBottom{
				width: 750rpx;
				height: 105rpx;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.go{
					padding: 10rpx 20rpx;
					color:#0089af;
					border: 1px solid #0089af;
					font-size: 20rpx;
					margin-right: 20rpx;
					border-radius: 20rpx;
				}
			}
		}
		.invoiceFrame{
			padding: 0 30rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 90rpx;
			margin-top: 20rpx;
			.title{
				font-size: 26rpx;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
			}
		}
		.idFrame{
			padding: 10rpx 30rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.row{
				font-size: 26rpx;
				line-height: 50rpx;
				.id{
					font-size: 24rpx;
					color: $main-gray-deep;
					font-weight: bold;
				}
			}
		}
		.priceFrame{
			padding: 10rpx 30rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.row{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.text{
					font-size: 26rpx;
					line-height: 50rpx;
				}
				.blue{
					color: $main-hl;
				}
			}
			.bottom{
				width: 100%;
				border-top:1px solid #ddd;
			}
		}
		.bottomFrame{
			padding: 10rpx 30rpx;
			width: 750rpx;
			background-color: #fff;
			position: fixed;
			bottom:0;
			left: 0;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.go{
				padding: 20rpx 30rpx;
				border: 1px solid #ddd;
				font-size: 24rpx;
				border-radius: 30rpx;
			}
		}
	}
	
</style>