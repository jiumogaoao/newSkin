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
				<text slot="center">服务单详情</text>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="topFrame">
				<view class="state">待审核</view>
			</view>
			<view class="stateFrame">
				<view class="title">售后处理进度</view>
				<view class="stateList">
					<view class="left">
						<view class="point"><view class="line"></view></view>
						<view class="infoFrame">
							<view class="title">申请已提交，请等待审核~</view>
							<view class="dsc">2019-05-03 15:23:26</view>
						</view>
					</view>
					<view class="nuskinIcon" @click="go('/pages/afterSale/serveState')">&#xe636;</view>
				</view>
			</view>
			<view class="list">
				<view class="top">
					<view class="title">商品信息</view>
				</view>
				<view class="item">
					<image class="pic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
					<view class="right">
						<view>
							<view class="title">如新新动轻享套装（适用油性肌肤）</view>
							<view class="code">产品编号 29139479</view>
							<view class="code">规格：粉红 100ml*2</view>
						</view>
						<view class="rightBottom">
							<view class="text">￥1,775.00</view>
							<view class="text">X1</view>
						</view>
					</view>
				</view>
			</view>
			<view class="priceFrame">
				<view class="row">
					<view class="text">服务单号</view>
					<view class="text">CBER9999999999</view>
				</view>
				<view class="row">
					<view class="text">申请时间</view>
					<view class="text">2019-06-03 13:36:56</view>
				</view>
				<view class="row">
					<view class="text">服务类型</view>
					<view class="text">退货</view>
				</view>
				<view class="row">
					<view class="text">申请数量</view>
					<view class="text">1</view>
				</view>
				<view class="row">
					<view class="text">最大退款金额</view>
					<view class="text">￥140.00</view>
				</view>
			</view>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="bottomFrame">
				<view class="go">取消申请</view>
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
		.stateFrame{
			width: 100%;
			background-color: #fff;
			padding: 30rpx;
			.title{
				font-size: 26rpx;
			}
			.stateList{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				.left{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.point{
						width:20rpx;
						height: 20rpx;
						background-color: $main-hl;
						border-radius: 20rpx;
						margin-right: 20rpx;
						position: relative;
						.line{
							width:2px;
							height:55rpx;
							background-color:$main-gray;
							position: absolute;
							top:20rpx;
							left: 8rpx;
						}
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
		.priceFrame{
			padding: 10rpx 30rpx;
			background-color: #fff;
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