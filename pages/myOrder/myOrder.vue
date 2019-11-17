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
				<view class="title">我的订单</view>
				<tabbarCP :list="[{id:0,name:'全部'},{id:1,name:'待付款'},{id:2,name:'已支付'},{id:3,name:'待发货'},{id:4,name:'已完成'}]" :hl="0"/>
				<view class="head">
					<view class="headItem first" style="width:46%">订单详情</view>
					<view class="headItem" style="width:10%">数量</view>
					<view class="headItem" style="width:12%">收货人</view>
					<view class="headItem" style="width:12%">金额</view>
					<view class="headItem" style="width:10%">状态</view>
					<view class="headItem" style="width:10%">操作</view>
				</view>
				<view class="listFrame">
					<view class="list">
						<view class="listItem" style="width:56%">
							<view class="product">
								<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="productImg"></image>
								<view class="infoFrame">
									<view class="productTitle">如新华贸骨骼配方</view>
									<view class="info">产品编号：01003331</view>
									<view class="info">规格：180粒</view>
								</view>
								<view class="count">x5</view>
							</view>
							<view class="product">
								<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="productImg"></image>
								<view class="infoFrame">
									<view class="productTitle">如新华贸骨骼配方</view>
									<view class="info">产品编号：01003331</view>
									<view class="info">规格：180粒</view>
								</view>
								<view class="count">x5</view>
							</view>
						</view>
						<view class="listItem" style="width:12%">收货人：张天爱</view>
						<view class="listItem" style="width:12%">￥2143.82</view>
						<view class="listItem" style="width:10%">
							<view class="state">待收货</view>
							<view class="blue">订单详情</view>
						</view>
						<view class="listItem" style="width:10%">
							<view class="button" style="margin: 0 auto 18px;">确认收货</view>
							<view class="button">查看物流</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
				<navBarCP>
					<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
					<view class="nuskinIcon navBarIcon" slot="left" @click="go('/pages/myNotice/myNotice')">&#xe63f;</view>
					<text slot="center">我的订单</text>
					<view class="nuskinIcon navBarIcon" slot="right" @click="go('/pages/search/search')">&#xe72f;</view>
				</navBarCP>
				<view style="width:100%;height: 114rpx;"></view>
			<tabbarCP class="tabbar" :list="[{id:0,name:'全部'},{id:1,name:'待付款'},{id:2,name:'已支付'},{id:3,name:'待发货'},{id:4,name:'已完成'}]" :hl="0"/>
			<view class="list" @click="go('/pages/orderDetail/orderDetail')">
				<view class="top">
					<view class="topTop">
						<view class="topLeft">
							<view class="tap">线上购物</view>
							<view class="date">2019-09-11 23:05:00</view>
						</view>
						<view class="blue">已取消</view>
					</view>
					<view class="topBottom">
						订单号：CN52919693
					</view>
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
				<view class="bottom">
					<view class="bottomTop">共1件商品 合计：￥1，775.00（含运费￥0.00）</view>
					<view class="bottomBottom">
						<view class="go">再次购买</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="top">
					<view class="topTop">
						<view class="topLeft">
							<view class="tap">线上购物</view>
							<view class="date">2019-09-11 23:05:00</view>
						</view>
						<view class="blue">已取消</view>
					</view>
					<view class="topBottom">
						订单号：CN52919693
					</view>
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
				<view class="bottom">
					<view class="bottomTop">共1件商品 合计：￥1，775.00（含运费￥0.00）</view>
					<view class="bottomBottom">
						<view class="go">再次购买</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="top">
					<view class="topTop">
						<view class="topLeft">
							<view class="tap">线上购物</view>
							<view class="date">2019-09-11 23:05:00</view>
						</view>
						<view class="blue">已取消</view>
					</view>
					<view class="topBottom">
						订单号：CN52919693
					</view>
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
				<view class="bottom">
					<view class="bottomTop">共1件商品 合计：￥1，775.00（含运费￥0.00）</view>
					<view class="bottomBottom">
						<view class="go">再次购买</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="top">
					<view class="topTop">
						<view class="topLeft">
							<view class="tap">线上购物</view>
							<view class="date">2019-09-11 23:05:00</view>
						</view>
						<view class="blue">已取消</view>
					</view>
					<view class="topBottom">
						订单号：CN52919693
					</view>
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
				<view class="bottom">
					<view class="bottomTop">共1件商品 合计：￥1，775.00（含运费￥0.00）</view>
					<view class="bottomBottom">
						<view class="go">再次购买</view>
					</view>
				</view>
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
			this.$store.dispatch('rootST/changeMyPage', 'myOrder')
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
		.head{
			    margin: 42px 0 28px;
			    display: flex;
			    height: 52px;
			    background-color: #f5f5f5;
			    border-radius: 2px;
				align-items: center;
		}
		.headItem{
			font-size: 14px;
			text-align: center;
		}
		.headItem.first{
			text-align:left;
			text-indent: 30px;
		}
		.listFrame{
			width:100%;
		}
		.list{
			display: flex;
			align-items: center;
			border: 1px solid #f5f5f5;
			border-left: 1px solid #f5f5f5;
		}
		.product{
			margin-top: -1px;
			width:100%;
			height: 142px;
			border: 1px solid #f5f5f5;
			border-bottom: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.productImg{
			width:142px;
			height: 142px;
			flex-shrink: 0;
		}
		.count{
			width:16%;
			text-align: center;
			flex-shrink: 0;
		}
		.infoFrame{
			flex-grow: 1;
			margin-left: 10px;
		}
		.productTitle{
			    padding: 20px 0 10px;
			    margin: 0;
			    font-size: 16px;
			    color: #333;
			    line-height: 25px;
		}
		.info{
			font-size: 14px;
			    line-height: 20px;
			    color: #808080;
		}
		.listItem{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			    font-size: 14px;
			    line-height: 170px;
			    letter-spacing: 1px;
		}
		.state{
			line-height: 40px;
			font-size: 14px;
			    text-align: center;
			    letter-spacing: 1px;
			    color: #808080;
		}
		.blue{
			color: #008ab0;
			font-size: 14px;
			letter-spacing: 1px;
		}
		.button{
			    width: 90px;
			    height: 28px;
			    background-color: #008ab0;
			    border-radius: 14px;
			    text-align: center;
			    line-height: 28px;
			    color: #fff;
			    cursor: pointer;
		}
	}
	/* #endif */
	.phone{
		background-color: #f1f1f1;
		.tabbar{
			background-color: #fff;
			margin-top: 20rpx;
		}
		.list{
			width:100%;
			background-color: #fff;
			margin-top: 20rpx;
			.top{
				padding: 0 30rpx;
				width: 750rpx;
				height: 162rpx;
				display: flex;
				justify-content: center;
				flex-direction: column;
				.topTop{
					display: flex;
					justify-content: space-between;
					.topLeft{
						display: flex;
						align-items: center;
						.tap{
							background: $main-gray;
							color: $main-gray-deep;
							font-size: 22rpx;
							width: 140rpx;
							height:48rpx;
							text-align: center;
							line-height: 48rpx;
							margin-right: 18rpx;
							border-radius: 48rpx;
						}
						.date{
							font-size: 23rpx;
						}
					}
					.blue{
						font-size: 24rpx;
						color:$main-hl;
					}
				}
				.topBottom{
					font-size: 24rpx;
					color:$main-gray-deep;
					margin-top: 18rpx;
				}
			}
			.item{
				width: 750rpx;
				height: 220rpx;
				padding: 30rpx;
				background-color: $main-gray-background;
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
						font-size: 26rpx;
					}
					.code{
						font-size: 21rpx;
						margin-top: 21rpx;
						color: $main-gray-deep;
					}
					.rightBottom{
						display: flex;
						justify-content: space-between;
						.text{
							font-size: 21rpx;
						}
					}
				}
			}
			.bottomTop{
				width:750rpx;
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
	}
	
</style>
