<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<view class="headerCPFrame" v-if="destop">
			<view class="headerCP">
				<image :src="imgPath+'indexLogo.jpg'" id="logo"></image>
				<view class="right">
					<view class="top">
						<view class="topLeft">
							<view class="place"><image :src="imgPath+'indexLandmarkIcon.png'" id="place"></image>{{place}}</view>
							<view class="nav1" v-for="(v,i) in topNav" :key="'nav1'+i" @click="go(v.url)">{{v.nav}}</view>
						</view>
						<view class="topRight">
							<image :src="imgPath+'indexSearchIcon.png'" id="search"></image>
							<image :src="imgPath+'indexUserIcon.png'" id="user" @click="go('/pages/myOrder/myOrder')"></image>
							<div class="goShoppingCar" @click="go('/pages/shoppingCar/shoppingCar')">购物车</div>
						</view>
					</view>
					<view class="bottom">
						<view class="nav2" @click="go('/pages/index/index')">首页</view>
						<view class="nav2" v-for="(v,i) in secondNav" @mouseover="changeNavHl(i)">{{v.nav}}</view>
						<view class="nav2" @click="go('/pages/news/news')">新闻中心</view>
						<view class="nav2" @click="go('/pages/story/story')">品牌故事</view>
					</view>
				</view>
				<view class="nav2ChildFrame" v-if="navHl || navHl===0">
					<view class="nav2Child" v-if="secondNav[navHl].child">
						<view class="secondNav" v-for="(v,i) in secondNav[navHl].child">
							<view class="secondNavName">{{v.nav}}</view>
							<view class="thirdNav" v-if="v.child" v-for="(n,o) in v.child" @click="go('/pages/shelf/shelf?id='+n.id)">{{n.nav}}</view>
						</view>
					</view>
					<view class="showAll" @click="go('/pages/shelf/shelf')">查看所有商品></view>
				</view>
				
			</view>
			
		</view>
		<!-- #endif -->
		<view class="headerCP" v-if="!destop">
			<view class="item" @click="go('/pages/index/index')">
				<!-- <image class="icon" :src="footNav=='index'?(imgPath+'tab-home-current.png'):(imgPath+'tab-home.png')"></image> -->
				<view class="title">首页</view>
			</view>
			<view class="line"></view>
			<view class="item" @click="go('/pages/type/type')">
				<!-- <image class="icon" :src="footNav=='type'?(imgPath+'tab-cate-current.png'):(imgPath+'tab-cate.png')"></image> -->
				<view class="title">产品目录</view>
			</view>
			<view class="line"></view>
			<view class="item" @click="go('/pages/join/join')">
				<!-- <image class="icon" :src="footNav=='shoppingCar'?(imgPath+'tab-cart-current.png'):(imgPath+'tab-cart.png')"></image> -->
				<view class="title">加入如新</view>
			</view>
			<view class="line"></view>
			<view class="item" @click="go('/pages/mine/mine')">
				<!-- <image class="icon" :src="footNav=='mine'?(imgPath+'tab-my-current.png'):(imgPath+'tab-my.png')"></image> -->
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
				navHl:null
			};
		},
		methods:{
			changeNavHl(index){
				this.navHl = index;
			}
		},
		computed:{
			topNav(){
				return this.$store.state.rootST.topNav
			},
			secondNav(){
				return this.$store.state.rootST.secondNav
			},
			place(){
				return this.$store.state.rootST.place
			},
			footNav(){
				return this.$store.state.rootST.footNav
			}
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
			z-index:10;
		}
		.headerCP{
			@include frame-width;
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
			background-color: #fff;
			position: absolute;
			top:110px;
			left:0px;
			display: none;
			padding: 30px;
		}
		.headerCP:hover .nav2ChildFrame{
			display: block;
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
			line-height: 60px;
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
			height:85rpx;
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
				// .icon{
				// 	width:35rpx;
				// 	height:35rpx;
				// }
				.title{
					font-size: 23rpx;
					color:#999;
				}
			}
			.line{
				width: 1px;
				height: 10px;
				background-color: #999;
			}
			.hl{
				.title{
					color:rgb(4, 144, 183)
				}
			}
		}
	}
</style>
