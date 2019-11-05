<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="top">
			<view class="topLeft">
				<image class="noticeIcon" :src="imgPath+'order-check.png'"></image>
				<view class="noticeTitle" >填写并核对订单信息</view>
			</view>
			<view class="flow">
				<view class="flowNumber hl">1</view>
				<view class="flowName hl">提交订单</view>
				<view class="flowLine"></view>
				<view class="flowNumber">2</view>
				<view class="flowName">支付</view>
				<view class="flowLine"></view>
				<view class="flowNumber">3</view>
				<view class="flowName">完成</view>
			</view>
		</view>
		<view class="orderFrame">
			<view class="title">配送方式</view>
			<view class="radioGroup">
				<view class="radioItem"><radioCP style="margin-right:10px;"></radioCP> 普通快递</view>
			</view>
			<view class="line"></view>
			<view class="frame">
				<view class="title">收货人信息</view>
				<view class="blue">新增收获地址</view>
			</view>
			<view class="place">
				<view class="placeName">张天爱</view>
				<view class="placeItem" style="width:26%">139****1848</view>
				<view class="placeItem" style="width:35%">山西省-太原市-小店区十里铺村</view>
				<view class="placeItem" style="width:20%">默认地址</view>
				<view class="placeItem" style="width:5%">编辑</view>
				<view class="placeItem" style="width:5%">删除</view>
			</view>
			<view class="showPlace">收起地址</view>
			<view class="line"></view>
			<view class="frame">
				<view class="title">配送方式<span class="blue">（购买人信息必须与支付人实名信息一致）</span></view>
				<view class="blue">新增购买人</view>
			</view>
			<view class="buyer">
				<view class="buyerInfo">张天爱 440102********4817</view>
				<view class="blue">修改</view>
			</view>
			<view class="line"></view>
			<view class="title">产品明细</view>
			<view class="tableFrame">
				<table class="table" style="margin-top: 39px;">
								  	<thead style="background-color: #f5f5f5;">
								    <tr>
								      	<th scope="col">产品</th>
								      	<th scope="col">单价</th>
								      	<th scope="col">数量</th>
								      	<th scope="col">小计</th>
								    </tr>
								  	</thead>
								  	<tbody>
								  							<tr class="item">
									    	<td class="inner">
												<div class="item-pic">
													<img src="http://www.tegou100.com/attachment/images/1/2019/09/uk4qBqifizYppQBnsfsOFetqpZ1En1.jpg"  class="pic">
												</div>
												<div class="item-info">
													<div class="item-basic-info">
														<a target="_blank" class="item-title">ageLOC焕新系列-日霜 25ml</a>
														<div class="item-props">
															<p class="sku-line" style="margin-bottom: 12px;">产品编号：29003900</p>
															<p class="sku-line">规格：30ml</p>
														</div>
													</div>
												</div>
									    	</td>
									    	<td class="inner">
									    		<em class="retail-price" data-price="140.00">零售价：￥425.00</em>
									    		<em class="taxes-price">预计税费：￥38.67</em>
									    	</td>
									    	<td class="inner">
									    		<em class="numbers">X1</em>
									    	</td>
									    	<td class="inner">
									    		<em class="sum-price">￥425</em>
									    	</td>
									    </tr>				  		
								  						</tbody>
								</table>
			</view>
			<view class="line"></view>
			<view class="title">以满足活动条件</view>
			<view class="couponTagbar">
				<view class="couponTag hl">可使用优惠券（0）</view>
				<view class="couponTag">不可使用优惠券（1）</view>
			</view>
			<view class="couponFrame">
				<couponCP/>
				<couponCP/>
				<couponCP/>
			</view>
			<view class="line"></view>
			<view class="bottomFrame">
				<view class="bottomItem">产品总金额：￥425.00</view>
				<view class="bottomItem">促销优惠：-￥425.00</view>
				<view class="bottomItem">运费：￥425.00</view>
				<view class="bottomItem">税费<image class="info" :src="imgPath+'conOrderQa.png'"></image>：￥425.00</view>
				<view class="bottomItem">现金优惠：-￥425.00</view>
				<view class="bottomItem">应付总额 （含运费）：<block class="blue">￥425.00</block></view>
				<view class="bottomItem big">产品总金额：￥425.00</view>
				<view class="bottomItem"><checkBoxCP style="margin-right: 10px;"/>购买如新海外购商品需同意<block class="blue">《用户购买须知》</block></view>
			</view>
			<view class="buttonFrame">
				<view class="cancel">取消</view>
				<view class="submit">确认订单</view>
			</view>
		</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
				<image src="https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/back.png" class="back"/>
				订单确认
			</view>
			<view class="place">
				<image class="address" src="https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/place.png"></image>
				<view class="center">
					<view class="title">里里 153****2656</view>
					<view class="detail">收货地址：广东潮州潮安县沙爹激动啊师大暨大</view>
				</view>
				<image class="deg" src="https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/jiantou-r.png"></image>
			</view>
			<view class="list">
				<view class="titleFrame">产品信息</view>
				<view class="product">
					<image class="pic" src="https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
					<view class="right">
						<view class="title">丝昂去渍牙膏（暂未非直销产品）</view>
						<view class="code">产品编号 29003817</view>
						<view class="bottom">
							<view class="price">零售顾客价￥60.00</view>
							<view class="count">X1</view>
						</view>
					</view>
					
				</view>
			</view>
			<view class="invoiceFrame">
				<view class="text">发票</view>
				<view class="text">个人></view>
			</view>
			<view class="totalFrame">
				<view class="row">
					<view class="title">产品数量</view>
					<view class="number">1</view>
				</view>
				<view class="row">
					<view class="title">运费</view>
					<view class="number">￥15.00</view>
				</view>
				<view class="row">
					<view class="title">产品总金额</view>
					<view class="number">￥60.00</view>
				</view>
			</view>
			<view class="bottomFrame">
				<view class="title">应付总额（含运费）</view>
				<view class="price">￥75.00</view>
				<view class="go" @click="go('/pages/myOrder/myOrder')">确认订单</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	import checkBoxCP from "@/components/checkBox_CP.vue"
	import radioCP from "@/components/radio_CP.vue"
	import couponCP from "@/components/coupon_CP.vue"
	export default {
		mixins: [allPage,needLogon],
		components:{checkBoxCP,radioCP,couponCP},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/table.scss';
	/* #ifdef H5 */
	.destop{
		.band{
		width:100%;
		height:130px;
	}
	.top{
		width: 1200px;
		margin: auto;
		height: 80px;
		background-color: #f3f8fb;
		margin-bottom: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	.topLeft{
		display: flex;
		align-items: center;
		margin-left: 20px;
	}
	.noticeIcon{
		width: 22px;
		height:22px;
		margin-right: 5px;
	}
	.noticeTitle{
		font-size: 14px;
		    color: #333333;
	}
	.flow{
		display: flex;
		align-items: center;
		margin-right: 5px;
	}
	.flowNumber{
		color: #fff;
		    background-color: #baced5;
		    border: 1px solid #e5e5e5;
		    width: 24px;
		    height: 24px;
		    font-size: 16px;
		    line-height: 24px;
		    display: inline-block;
		    text-align: center;
		    border-radius: 12px;
		    font-style: normal;
			margin-right: 5px;
	}
	.flowNumber.hl{
		background-color: #0089af;
		border: 1px solid #0089af;
	}
	.flowName{
		font-size: 14px;
		margin-right: 15px;
	}
	.flowName.hl{
		color:#0089af;
	}
	.flowLine{
		width:55px;
		height:2px;
		background-color: #dee2e6;
		margin-right: 15px;
	}
	.orderFrame{
		width:1160px;
		margin: auto;
		padding: 20px 19px 29px 19px;
		border: 1px solid #f5f5f5;
	}
	.title{
		font-size: 14px;
		font-weight: bold;
		color: #333333;
		margin-bottom: 20px;
	}
	.radioGroup{
		display: flex;
		margin-bottom: 20px;
	}
	.radioItem{
		display: flex;
		margin-right: 20px;
	}
	.line{
		width:100%;
		height:1px;
		background-color: #f5f5f5;
		margin-bottom: 20px;
	}
	.frame{
		display: flex;
		width:100%;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.frame .title{
		margin-bottom: 0;
	}
	.blue{
		color: #008ab0;
		font-size: 14px;
		cursor: pointer;
	}
	.place{
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.placeName{
		    color: #008ab0;
		    font-size: 14px;
		    border: 1px solid #008ab0;
		    height: 26px;
		    line-height: 26px;
		    border-radius: 13px;
		    display: inline-block;
		    padding: 0 20px;
	}
	.placeItem{
		font-size: 14px;
		    color: #333333;
		    cursor: pointer;
			text-align: center;
	}
	.showPlace{
		cursor: pointer;
	}
	.buyer{
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.buyerInfo{
		    font-size: 14px;
		    width: 270px;
		    height: 38px;
		    line-height: 38px;
		    background-color: #f6f7f7;
		    color: #333333;
		    padding-left: 20px;
			margin-right: 20px;
	}
	.pic{
		width:136px;
		height:136px;
	}
	.retail-price{
		margin-top: 0;
	}
	.sum-price{
		margin-top: 0;
	}
	.table{
		margin-bottom: 20px;
	}
	.couponTagbar{
		display: flex;
	}
	.couponTag{
		font-size: 14px;
		width:152px;
		height:35px;
		line-height: 35px;
		text-align: center;
		    color: #808080;
		    border: 0px;
		    border-radius: 0px;
	}
	.couponTag.hl{
		background-color: #f7f7f7;
		    color: #008ab0;
		    font-size: 14px;
	}
	.couponFrame{
		height: auto;
		    background-color: #f7f7f7;
		    padding: 20px;
		    display: -webkit-flex;
		    -webkit-flex-wrap: wrap;
		    display: flex;
		    flex-wrap: wrap;
		    align-content: flex-start;
	}
	.bottomFrame{
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		padding-top: 20px;
	}
	.bottomItem{
		    font-size: 14px;
		    line-height: 30px;
		    margin: 0px;
		    color: #333333;
			display: flex;
			align-items: center;
	}
	.info{
		width:16px;
		height:16px;
	}
	.buttonFrame{
		margin-top: 20px;
		display: flex;
		justify-content: flex-end;
	}
	.cancel{
		width: 130px;
		    height: 40px;
		    border-radius: 20px;
		    font-size: 14px;
			background-color: #fff;
			    border: 1px solid #808080;
			    color: #808080;
				text-align: center;
				line-height:40px;
				margin-right: 10px;
	}
	.submit{
		width: 130px;
		    height: 40px;
		    border-radius: 20px;
		    font-size: 14px;
			background-color: #008ab0;
			    border: 1px solid #008ab0;
			    color: #fff;
				text-align: center;
				line-height:40px;
	}
	}
	/* #endif */
	page{
		background: #f1f1f1
	}
	.phone{
		.head{
			width:750rpx;
			height:80rpx;
			border-bottom: 1px solid #ddd;
			position: relative;
			line-height: 80rpx;
			font-size: 16rpx;
			background-color: #fff;
			text-align: center;
			.back{
				position:absolute;
				top:20rpx;
				left:20rpx;
				width:24rpx;
				height:42rpx;
			}
		}
		.place{
			width: 690rpx;
			padding: 30rpx;
			display: flex;
			justify-content:space-between;
			align-items: center;
			background-color: #fff;
			.address{
				width:32rpx;
				height:44rpx;
				flex-shrink: 0;
			}
			.center{
				flex-grow: 1;
				margin-left: 20rpx;
				margin-right: 20rpx;
				.title{
					font-size: 40rpx;
					color: #333;
				}
				.detail{
					font-size: 30rpx;
					color: gray;
					margin-top: 10rpx;
				}
			}
			.deg{
				width:16rpx;
				height:26rpx;
			}
		}
		.list{
			width:750rpx;
			margin-top: 20rpx;
			background-color: #fff;
			.titleFrame{
				height: 86rpx;
				width:100%;
				text-indent: 30rpx;
				font-size: 40rpx;
				line-height: 86rpx;
				border-bottom: 1px solid #ddd;
			}
			.product{
				padding: 20rpx 30rpx;
				display: flex;
				align-items: center;
				.pic{
					width:160rpx;
					height:194rpx;
					flex-shrink: 0;
				}
				.right{
					flex-grow: 1;
					.title{
						font-size: 40rpx;
						color: #333;
					}
					.code{
						font-size: 20rpx;
						color: gray;
						margin-top: 10rpx;
					}
					.bottom{
						margin-top: 20rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.price,.count{
							font-size: 40rpx;
							color: #333;
						}
					}
				}
			}
		}
		.invoiceFrame{
			padding: 0 30rpx;
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			margin-top: 20rpx;
			.text{
				font-size: 40rpx;
				color: #333;
			}
		}
		.totalFrame{
			margin-top: 20rpx;
			background: #fff;
			padding: 20rpx 30rpx 0 30rpx;
			width:690rpx;
			.row{
				padding-bottom: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 30rpx;
					color: #333333;
				}
				.number{
					font-size: 30rpx;
				}
			}
		}
		.bottomFrame{
			padding: 0 30rpx;
			height: 100rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			position: fixed;
			left: 0;
			bottom:0;
			width: 690rpx;
			background: #fff;
			.title{
				font-size: 20rpx;
				color: #333;
			}
			.price{
				font-size: 20rpx;
				color: #0089af;
				margin: 0 10rpx;
			}
			.go{
				font-size: 20rpx;
				padding: 20rpx 30rpx;
				background-color: #0089af;
				color: #fff;
				border-radius: 30rpx;
			}
		}
	}
	
</style>
