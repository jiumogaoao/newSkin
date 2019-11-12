<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="empty"></view>
		<breadcrumbsCP/>
		<view class="top">
			<view class="left">
				<image class="bigPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
				<view class="picFrame">
					<image class="degLeft" :src="imgPath+'feel3.png'"></image>
					<view class="picRollFrame">
						<view class="picRoll">
							<image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
							<image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
							<image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
							<image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
							<image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
							<image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
						</view>
					</view>
					<image class="degRight" :src="imgPath+'feel4.png'"></image>
				</view>
			</view>
			<view class="right">
				<view class="id">产品编号  29003880</view>
				<view class="chn">ageLOC焕新系列-晚霜</view>
				<view class="eng">ageLOC焕新系列-晚霜</view>
				<view class="band">王牌ageLOC</view>
				<view class="price">零售价：<block class="newPrice">￥510.00</block> <block class="oldPrice">￥0.00</block></view>
				<view class="frame">
					<view class="title">活动：</view>
					<view class="activeFrame">
						<view class="activeGroud">
							<view class="activeTitle">优惠券</view>
							<view class="activeItemList">
								<view class="activeItem">[下单立减10]</view>
								<view class="activeItem">[满1000打80折]</view>
								<view class="activeItem">[下单立减50]</view>
							</view>
						</view>
						<view class="activeGroud">
							<view class="activeTitle">满减</view>
							<view class="activeItemList">
								<view class="activeItem">每满2000减100，上不封顶</view>
							</view>
						</view>
					</view>
				</view>
				<view class="frame">
					<view class="title">税费：</view>
					<view class="text">预计：￥46.41</view>
				</view>
				<view class="frame">
					<view class="title">运费：</view>
					<view class="text">￥20.00</view>
				</view>
				<view class="frame">
					<view class="title">物流：</view>
					<view class="text">顺丰</view>
				</view>
				<view class="frame">
					<view class="title">容量：</view>
					<view class="radioFrame">
						<view class="radio">30ml<image class="choosed" :src="imgPath+'prop-selected.png'"></image></view>
						<view class="radio">30ml<image class="choosed" :src="imgPath+'prop-selected.png'"></image></view>
					</view>
				</view>
				<view class="frame">
					<view class="title">数量：</view>
					<view class="countFrame">
						<view class="add">+</view>
						<input class="input"/>
						<view class="sub">-</view>
					</view>
				</view>
				<view class="buttonFrame">
					<view class="addShoppingCart" @click="go('/pages/shoppingCar/shoppingCar')">加入购物车</view>
					<view class="iconButton"><image class="follow" :src="imgPath+'sellWellHIcon.png'"></image>加入收藏夹</view>
					<view class="iconButton"><image class="follow" :src="imgPath+'sharp.png'"></image>分享到</view>
				</view>
			</view>
		</view>
		<view class="bigTitle">商品详情</view>
		<view class="titleLine"></view>
		<view class="detailFrame">
			<view>让肌肤在夜晚沉浸于不断修护中！ageLOC晚霜具优质保湿效果，还能帮助改善幼纹皱纹并细腻毛孔。</view>
			<view>每日清晨醒来，肌肤柔软细腻，闪烁动人光泽。产品成分非常温和，能强化肌肤天然的晚间修护过程，让苏醒后的肌肤尽显年轻光彩！</view>
			<view>产品规格：30ml</view>
		</view>
		<view class="bigTitle">消费者告知书</view>
		<view class="titleLine"></view>
		<view class="notice">
			<view>尊敬的客户：</view>
			<view>您好！</view>
			<view>在您选购境外商品前，麻烦您仔细阅读此文，同意本文所告知内容后再进行下单购买：</view>
			<view>1. 本站商品均在海外销售，我们承诺正规渠道，100%正品保证。</view>
			<view>2. 您在本（如新海外购）网站上购买的境外商品为产地直销商品，仅限个人自用不得进行销售,商品本身可能无中文标签，您可以参考官网翻译。</view>
			<view>3. 您购买的境外商品适用的品质、健康、标识等项目适用标准或与我国标准有所不同，所以在使用过程中由此可能产生的危害或损失以及其他风险，将由您个人承担。</view>
			<view>4. 由于跨境电商的特殊性，如下单并付款后是【已付款，海关清关中】的状态后，系统会自动将订单推送到海外仓或者保税仓锁定库存，所以无法取消订单。只能等到商品被您签收后，进行退货申请。</view>
			<view>谢谢！</view>
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="top">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				                        <swiper-item>
				                            <image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
				                        </swiper-item>
				                        <swiper-item>
				                            <image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
				                        </swiper-item>
				                        <swiper-item>
				                            <image class="smallPic" :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'"></image>
				                        </swiper-item>
				</swiper>
				<view class="flew">
					<view class="name" style="padding-left: 20rpx;">产品编号：SKU111</view>
					<view class="name" style="padding-right: 20rpx;">推广奖励：<block class="blue">￥40.00</block></view>
				</view>
				<view class="title">agcLoC焕新系列-晚霜 30ml</view>
				<view class="title">agcLoC Transforming Night</view>
				<view class="price">零售价：<block class="block">￥100</block></view>
				<image class="follow" :src="imgPath+'shoucang.png'"></image>
			</view>
			<view class="middle">
				<view class="row">
					<view class="title">税费</view>
					<view class="text">￥46.41</view>
				</view>
				<view class="row">
					<view class="title">运费</view>
					<view class="text">满￥46.41免运费</view>
				</view>
				<view class="row">
					<view class="title">活动</view>
					<view class="activeList">
						<view class="group">
							<view class="groupName">[满减]</view>
							<view class="itemList">
								<view class="item">满1000减50</view>
								<view class="item">满2000减100</view>
							</view>
						</view>
						<view class="group">
							<view class="groupName">[优惠]</view>
							<view class="itemList">
								<view class="item">下单立减10</view>
								<view class="item">满1000打80折</view>
								<view class="item">下单立减50</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="skuFrame">
				<view class="left">
					<view class="title">规格</view>
					<view class="text">已选30ml</view>
					<view class="text">数量1</view>
				</view>
				<image class="rightDag" src=""></image>
			</view>
			<view class="info">
				<view class="titleFrame">
					<view class="line"></view>
					<view class="bigTitle">图文详情</view>
					<view class="line"></view>
				</view>
				<view class="detailFrame">
					<view item>
						<view class="point"></view>
						<view class="item">11111111111</view>
					</view>
					<view item>
						<view class="point"></view>
						<view class="item">11111111111</view>
					</view>
					<view item>
						<view class="point"></view>
						<view class="item">11111111111</view>
					</view>
				</view>
				<view class="titleFrame">
					<view class="line"></view>
					<view class="bigTitle">使用方法</view>
					<view class="line"></view>
				</view>
				<view class="useMessage">
					111111111111
				</view>
				<view class="titleFrame">
					<view class="line"></view>
					<view class="bigTitle">消费者告知书</view>
					<view class="line"></view>
				</view>
				<view class="noticeFrame">
					<view class="item">1111111111</view>
					<view class="item">1111111111</view>
					<view class="item">1111111111</view>
					<view class="item">1111111111</view>
				</view>
			</view>
			<view class="foot">
				<view class="iconFrame">
					<image class="icon" :src="imgPath+'share.png'"/>
				</view>
				<view class="iconFrame shop" @click="go('/pages/shelf/shelf')">
					<image class="icon" :src="imgPath+'tab-home-current.png'"/>
				</view>
				<view class="iconFrame" @click="go('/pages/shoppingCar/shoppingCar')">
					<image class="icon" :src="imgPath+'tab-cart-current.png'"/>
				</view>
				<view class="addCar">加入购物车</view>
				<view class="buy" @click="go('/pages/comfirm/comfirm')">立即购买</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
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
		.empty{
		width:100%;
		height:130px;
	}
	.top{
		@include frame-width;
		margin: auto;
		display: flex;
	}
	.left{
		width:580px;
		flex-shrink: 0;
	}
	.bigPic{
		width:580px;
		height:580px;
	}
	.picFrame{
		width: 580px;
		height:82px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.degLeft{
		width:9px;
		height:18px;
		margin-left: 10px;
	}
	.degRight{
		width:9px;
		height:18px;
		margin-right:10px;
	}
	.picRollFrame{
		width: 500px;
		height:82px;
		overflow: hidden;
		position: relative;
	}
	.picRoll{
		height:82px;
		display: flex;
		flex-wrap: nowrap;
		position: absolute;
		top:0;
		left:0;
		align-items: center;
	}
	.smallPic{
		width:78px;
		height:78px;
	}
	.right{
		flex-grow: 1;
	}
	.id{
		font-size: 16px;
		    color: #808080;
		    margin-bottom: 23px;
	}
	.chn{
		font-size: 20px;
		    line-height: 20px;
		    color: #333333;
	}
	.eng{
		font-size: 20px;
		    line-height: 60px;
		    color: #333333;
	}
	.band{
		font-size: 16px;
		    line-height: 16px;
		    color: #808080;
		    margin-bottom: 26px;
	}
	.price{
		font-size: 14px;
		    line-height: 14px;
		    color: #37b0c9;
			margin-bottom: 20px;
	}
	.newPrice{
		font-size: 20px;
		    line-height: 20px;
		    font-weight: bold;
		    color: #37b0c9;
		    float: left;
		    margin-right: 10px;
	}
	.oldPrice{
		color: #909399;
		    font-size: 20px;
		    line-height: 20px;
		    text-decoration: line-through;
	}
	.frame{
		display: flex;
	}
	.title{
		color: #808080;
		    font-size: 14px;
		    margin-right: 35px;
			line-height: 24px;
	}
	.countFrame{
		height:30px;
		border: 1px solid #333;
		border-radius: 5px;
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		.add,.sub{
			width:40px;
			height: 30px;
			line-height: 30px;
			text-align: center;
		}
		.input{
			width:40px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			border-right: 1px solid #ddd;
			border-left: 1px solid #ddd;
		}
	}
	.activeGroud{
		display: flex;
	}
	.activeTitle{
		color: #ff69b0;
		    font-size: 14px;
		    line-height: 19px;
		    border: 1px solid #ff69b0;
		    width: 58px;
		    height: 22px;
		    text-align: center;
		    border-radius: 11px;
		    display: inline-block;
			margin-right: 10px;
	}
	.activeItem{
		    font-size: 14px;
		    color: #333333;
			margin-bottom: 15px;
			line-height: 24px;
	}
	.text{
		font-size: 14px;
		    color: #333333;
			margin-bottom: 15px;
			line-height: 24px;
	}
	.buttonFrame{
		display: flex;
		align-items: center;
	}
	.addShoppingCart{
		    position: relative;
		    z-index: 55;
		    width: 190px;
		    height: 44px;
		    line-height: 44px;
		    font-size: 16px;
		    color: #ffffff;
		    text-align: center;
		    background-color: #018ab0;
		    cursor: pointer;
		    float: left;
		    margin-right: 78px;
	}
	.iconButton{
		display: flex;
		align-items: center;
	}
	.follow{
		width:70px;
		height:70px;
	}
	.bigTitle{
		font-size: 20px;
		    line-height: 54px;
		    font-weight: bold;
		    color: #333333;
		    text-align: center;
	}
	.titleLine{
		@include frame-width;
		height: 2px;
		background-color: #e6e6e6;
		margin: auto;
		margin-top: 20px;
	}
	.detailFrame,.notice{
		@include frame-width;
		margin: auto;
		margin-top: 20px;
	}
	.detailFrame{
	    color: rgb(127, 127, 127);
	    font-family: 微软雅黑,Microsoft YaHei;
	    font-size: 18px;
	}
	.detailFrame view,.notice view{
		line-height: 3;
	}
	.notice{
		font-size: 14px;
		    line-height: 28px;
		    color: #333333;
	}
	.radioFrame{
		display: flex;
		margin-bottom: 15px;
	}
	.radio{
		border: 1px solid #008ab0;
		position: relative;
		position: relative;
		padding: 5px 10px;
		border-radius: 3px;
		margin-right:10px;
	}
	.choosed{
		width:15px;
		height:16px;
		position:absolute;
		right:0;
		bottom:0;
	}
	.iconButton{
		margin-right:10px;
	}
	.follow{
		width:22px;
		height:22px;
		margin-right:10px;
	}
	}
	/* #endif */
	.phone{
		.top{
			width:750rpx;
			background-color: #fff;
			position: relative;
			.follow{
				position: absolute;
				top:40rpx;
				right:40rpx;
				width: 40rpx;
				height:40rpx;
			}
			.swiper{
				width:750rpx;
				height: 722rpx;
				.smallPic{
					width:100%;
					height:100%;
				}
			}
			.flew{
				width: 750rpx;
				display: flex;
				margin-top: 20rpx;
				justify-content: space-between;
				.name{
					    font-size: 26rpx;
					    color: #323232;
						.blue{
							color: #37b0c9;
						}
				}
			}
			.title{
				font-size: 32rpx;
				    color: #323232;
				    min-height: 40rpx;
				    line-height: 40rpx;
				    padding-top: 20rpx;
					padding-left: 20rpx;
			}
			.price{
				margin-top: 40rpx;
				font-size: 28px;
				padding-left: 20rpx;
				.block{
					color: #37b0c9;
				}
			}
		}
		.middle{
			background-color: #fff;
			width: 750rpx;
			margin-top: 20rpx;
			.row{
				margin-top: 20rpx;
				display: flex;
				.title{
					font-size: 26rpx;
					    color: grey;
						padding-left: 20rpx;
				}
				.text{
					font-size: 26rpx;
					color: #333;
					margin-left: 35rpx;
				}
				.activeList{
					margin-left: 35rpx;
					.group{
						display: flex;
						.groupName{
							font-size: 26rpx;
							color: #ffad43;
						}
						.itemList{
							margin-left: 20rpx;
							.item{
								font-size: 26rpx;
								    color: grey;
									margin-bottom: 10rpx;
							}
						}
					}
				}
			}
		}
		.skuFrame{
			margin-top: 20rpx;
			background-color: #fff;
			width:750rpx;
			height:115rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				margin-left: 20rpx;
				display: flex;
				.title{
					color: grey;
					font-size: 26px;
				}
				.text{
					font-size: 26px;
					color: #303133;
					margin-left: 20rpx;
				}
			}
			.rightDag{
				width:32rpx;
				height:32rpx;
				margin-right: 20rpx;
			}
		}
		.info{
			width: 100%;
			padding: 20rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.titleFrame{
				width:400rpx;
				margin: auto;
				margin-bottom: 60rpx;
				display: flex;
				align-items: center;
				.line{
					height:1px;
					flex-grow: 1;
					background-color: #ccc;
				}
				.bigTitle{
					font-size: 30px;
					    color: #333;
					margin: 0 20rpx;
					flex-shrink: 0;
				}
			}
			.detailFrame{
				width: 100%;
				margin-bottom: 100rpx;
				.item{
					display: flex;
					margin-bottom: 20rpx;
					.point{
						width:10rpx;
						height:10rpx;
						background-color: #000;
						border-radius: 10rpx;
					}
					.item{
						font-size: 37.5rpx;
						color: rgb(127, 127, 127);
					}
				}
			}
			.useMessage{
				font-size: 37.5rpx;
				color: rgb(127, 127, 127);
				margin-bottom: 60rpx;
			}
			.noticeFrame{
				padding-bottom: 110rpx;
				.item{
					line-height: 50rpx;
					font-size: 12px;
				}
			}
		}
		.foot{
			width:750rpx;
			height: 110rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			position: fixed;
			left:0;
			bottom:0;
			.iconFrame{
				height: 110rpx;
				width:100rpx;
				right:100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-shrink: 0;
				.icon{
					width:44rpx;
					height:44rpx;
				}
			}
			.shop{
				background-color: #f6f7f7;
			}
			.addCar{
				height: 110rpx;
				background: #37b0c9;
				line-height: 110rpx;
				text-align: center;
				font-size: 32rpx;
				color: #fff;
				flex-grow: 1;
			}
			.buy{
				height: 110rpx;
				background: #008ab0;
				line-height: 110rpx;
				text-align: center;
				font-size: 32rpx;
				color: #fff;
				flex-grow: 1;
			}
		}
	}
	
</style>
