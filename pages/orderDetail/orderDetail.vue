<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">

			
		</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
				<img class="back" src="https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/back.png" @click="back"/>
				标题
			</view>
			<view class="topFrame">
				<view class="state">已取消</view>
				<view class="type">线上购物</view>
			</view>
			<view class="placeFrame">
				<image class="icon" src="https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/place.png"></image>
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
					<image class="pic" src="https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
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
				<view class="text">发票</view>
				<view class="text">个人</view>
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
			<view class="bottomFrame">
				<view class="go">再次购买</view>
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

	}
	/* #endif */
	.phone{
		.head{
			width:750rpx;
			height:110rpx;
			background-color: #fff;
			position: relative;
			text-align: center;
			line-height: 110rpx;
			font-size: 40rpx;
			.back{
					width:40rpx;
					height:42rpx;
					position:absolute;
					top:35rpx;
					left:20rpx;
			}
		}
		.topFrame{
			width:750rpx;
			height: 160rpx;
			background-image: url('https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/4d72aebd.detail.png');
			display: flex;
			align-items: center;
			justify-content: space-between;
			.state{
				font-size: 40rpx;
				color: #fff;
				margin-left: 30rpx;
			}
			.type{
				margin-right: 30rpx;
				padding: 10rpx 20rpx;
				font-size: 24rpx;
				color: #fff;
				background-image: linear-gradient(-135deg,#0573b2,#02c8d1);
				border-radius: 30rpx;
			}
		}
		.placeFrame{
			padding: 0 30rpx;
			width:690rpx;
			background-color: #fff;
			height: 164rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.icon{
				width:32rpx;
				height:44rpx;
				flex-shrink: 0;
			}
			.right{
				flex-grow: 1;
				margin-left: 30rpx;
				.title{
					font-size: 30rpx;
					color: #333;
				}
				.dsc{
					font-size: 26rpx;
					color: gray;
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
				width: 690rpx;
				height: 90rpx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #ddd;
				.title{
					font-size: 30rpx;
					color: #333;
				}
				.dsc{
					margin-left: 30rpx;
					font-size: 20rpx;
					color: gray;
				}
			}
			.item{
				width: 690rpx;
				height: 180rpx;
				padding: 20rpx 30rpx;
				background-color: #f9f9f9;
				display: flex;
				align-items: center;
				.pic{
					width:160rpx;
					height:160rpx;
					flex-shrink: 0;
				}
				.right{
					flex-grow: 1;
					margin-left: 20rpx;
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					height:160rpx;
					.title{
						font-size: 30rpx;
					}
					.code{
						font-size: 20rpx;
						margin-top: 10rpx;
					}
					.rightBottom{
						display: flex;
						justify-content: space-between;
						.text{
							font-size: 26rpx;
							color: #333;
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
			.text{
				font-size: 26rpx;
				color: #333;
			}
		}
		.idFrame{
			padding: 10rpx 30rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.row{
				font-size: 24rpx;
				color: #333;
				line-height: 50rpx;
				.id{
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
					font-size: 24rpx;
					color: #333;
					line-height: 50rpx;
				}
				.blue{
					color: rgb(0, 137, 175);
				}
			}
			.bottom{
				width: 100%;
				border-top:1px solid #ddd;
			}
		}
		.bottomFrame{
			padding: 10rpx 30rpx;
			width: 690rpx;
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