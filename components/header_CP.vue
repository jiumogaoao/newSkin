<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<view class="headerCPFrame" v-if="destop">
			<view class="headerCP">
				<image :src="imgPath+'indexLogo.jpg'" id="logo"></image>
				<view class="right">
					<view class="top">
						<view class="topLeft">
							<view class="place"><image :src="imgPath+'indexLandmarkIcon.png'" id="place"></image>上海</view>
							<view class="nav1">产品目录</view>
							<view class="nav1">加入事业</view>
							<view class="nav1">店铺查询</view>
						</view>
						<view class="topRight">
							<image :src="imgPath+'indexSearchIcon.png'" id="search"></image>
							<image :src="imgPath+'indexUserIcon.png'" id="user"></image>
							<div class="goShoppingCar">购物车</div>
						</view>
					</view>
					<view class="bottom">
						<view class="nav2">首页</view>
						<view class="nav2">王牌ageLOC</view>
						<view class="nav2">护肤</view>
						<view class="nav2">身体护理</view>
						<view class="nav2">彩妆</view>
						<view class="nav2">营养补充</view>
						<view class="nav2">新闻中心</view>
						<view class="nav2">品牌故事</view>
					</view>
				</view>
				<view class="nav2ChildFrame">
					<view class="nav2Child">
						<view class="secondNav">
							<view class="secondNavName">二级目录</view>
							<view class="thirdNav">三级目录</view>
						</view>
						<view class="secondNav">
							<view class="secondNavName">二级目录</view>
							<view class="thirdNav">三级目录</view>
						</view>
						<view class="secondNav">
							<view class="secondNavName">二级目录</view>
							<view class="thirdNav">三级目录</view>
						</view>
						<view class="secondNav">
							<view class="secondNavName">二级目录</view>
							<view class="thirdNav">三级目录</view>
						</view>
					</view>
					<view class="showAll">查看所有商品></view>
				</view>
				
			</view>
			
		</view>
		<!-- #endif -->
		<view class="headerCP" v-if="!destop">
			<view class="item hl">
				<image class="icon" :src="imgPath+'tab-home-current.png'"></image>
				<view class="title">首页</view>
			</view>
			<view class="item">
				<image class="icon" :src="imgPath+'tab-cate.png'"></image>
				<view class="title">产品目录</view>
			</view>
			<view class="item">
				<image class="icon" :src="imgPath+'tab-cart.png'"></image>
				<view class="title">购物车</view>
			</view>
			<view class="item">
				<image class="icon" :src="imgPath+'tab-my.png'"></image>
				<view class="title">个人中心</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destopCP{
		.headerCPFrame{
			position: fixed;
			top:0;
			left:0;
			width:100%;
			background-color: #fff;
			z-index:3;
		}
		.headerCP{
			width:1200px;
			height:130px;
			display: flex;
			justify-content:space-between;
			align-items: center;
			margin: auto;
			position: relative;
		}
		#logo{
			width: 112px;
			height:30px;
			flex-shrink: 0;
		}
		.right{
			width:990px;
			display: flex;
			flex-direction: column;
			align-items: end;
		}
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-shrink: 0;
			width:100%;
		}
		.topLeft{
			display: flex;
			align-items: center;
			flex-shrink: 0;
		}
		.nav1{
			color:#999;
			font-size: 12px;
			width:120px;
			height:18px;
			line-height: 18px;
			text-align: center;
			border-right:1px solid #999;
		}
		.place{
			font-size: 12px;
			color:#999;
			display: flex;
			align-items: center;
		}
		#place{
			width:15px;
			height:17px;
			margin-right: 10px;
		}
		.topRight{
			display: flex;
			justify-content: end;
			align-items: center;
			flex-shrink: 0;
		}
		#search{
			width:20px;
			height:20px;
			margin-right: 20px;
		}
		#user{
			width:19px;
			height:21px;
			margin-right: 80px;
		}
		.goShoppingCar{
			width:144px;
			height:32px;
			background-color: #008AB0;
			color:#fff;
			font-size: 12px;
			text-align: center;
			line-height: 32px;
		}
		.bottom{
			display: flex;
			width:100%;
			margin-top: 35px;
			position: relative;
		}
		.nav2{
			flex-grow: 1;
			font-size: 12px;
			color:#212529;
		}
		.nav2ChildFrame{
			width:100%;
			position: absolute;
			top:110px;
			left:0px;
			display: none;
		}
		.nav2Child{
			width:100%;
			display: flex;
		}
		.secondNav{
			margin-right: 60px;
		}
		.secondNavName{
			font-size: 16px;
			color:#333;
		}
		.thirdNav{
			font-size: 12px;
			color:#4a4a4a;
		}
		.showAll{
			font-size: 12px;
			text-align: center;
		}
	}
	/* #endif */
	.phoneCP{
		.headerCP{
			width:750rpx;
			height:50rpx;
			background-color: #fff;
			border-top:1px solid rgba(255, 255, 255, 0.33);
			z-index: 3;
			position: fixed;
			bottom:0;
			left:0;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.icon{
					width:27rpx;
					height:24rpx;
				}
				.title{
					font-size: 10rpx;
					line-height: 12rpx;
					color:rgb(192, 196, 204)
				}
			}
			.hl{
				.title{
					color:rgb(4, 144, 183)
				}
			}
		}
	}
</style>
