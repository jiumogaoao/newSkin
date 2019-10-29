<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
		<headerCP/>
		<view class="band"></view>
		<view class="shelf">
			<view class="shelfTitleFrame">
				<image :src="imgPath+'indexLeaf.jpg'" class="shelfTitleBG"></image>
				<view class="shelfTitle">彩妆系列</view>
				<view class="shelfTitleLine"></view>
			</view>
			<view class="shelfProductList">
				<productSimpleCP/>
				<productSimpleCP/>
				<productSimpleCP/>
				<productSimpleCP/>
			</view>
		</view>
		<view class="joinFrame">
			<view class="joinCenterFrame">
				<view class="joinTitle">加入如新</view>
				<view class="joinButton">加入我们</view>
			</view>
		</view>
		<view class="titleFrame">
			<view class="title">新闻中心</view>
			<view class="titleLine"></view>
		</view>
		<view class="newsFrame">
			<view class="newsCenterFrame">
				<view class="newsItem">
					<image class="newsImage" :src="imgPath+'BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg'"></image>
					<view class="newsTitle">如新海外购上线了</view>
					<view class="newsDesc">“勿忘初心，自我革新，砥砺前行”</view>
				</view>
				<view class="newsItem">
					<image class="newsImage" :src="imgPath+'BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg'"></image>
					<view class="newsTitle">如新海外购上线了</view>
					<view class="newsDesc">“勿忘初心，自我革新，砥砺前行”</view>
				</view>
			</view>
			<view class="more">查看更多</view>
		</view>
		<view class="titleFrame">
			<view class="title">品牌故事</view>
			<view class="titleLine"></view>
		</view>
		<view class="storyFrame">
			<view class="storyItem">
				<image class="storyImg" :src="imgPath+'IpMMLTJCOmjYB0M3Tj5LxtpBTOBb5w.jpg'"></image>
				<view class="storyBottom">
					<view class="storyTitle">ageLoc王牌</view>
					<view class="storyMore">了解更多</view>
				</view>
			</view>
			<view class="storyItem">
				<image class="storyImg" :src="imgPath+'nPeSlwW7K11t331317eT3k7byTgGGe.jpg'"></image>
				<view class="storyBottom">
					<view class="storyTitle">Nu Skin的诞生</view>
					<view class="storyMore">了解更多</view>
				</view>
			</view>
		</view>
		<view class="more">查看更多</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="navBar">
				<view class="left">
					<image class="notice" :src="imgPath+'xinxi2.0.png'"></image>
				</view>
				<view class="right">
					<image class="shoppingCar" :src="imgPath+'tab-cart-current.png'"></image>
					<image class="navList" :src="imgPath+'menu01.png'"></image>
				</view>
			</view>
			<view class="banner">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				                        <swiper-item>
				                            <image :src="imgPath+'EYMk7dC8827epCIeeAkWyYEej5l20Z.jpg'" class="item"></image>
				                        </swiper-item>
				                        <swiper-item>
				                            <image :src="imgPath+'EYMk7dC8827epCIeeAkWyYEej5l20Z.jpg'" class="item"></image>
				                        </swiper-item>
				</swiper>
			</view>
			<view class="doubleFrame">
				<view class="item">
					<image class="icon" :src="imgPath+'xsk89KqkppQud34p8xbXm4pKhqPbHh.png'"></images>
					<view class="title">我的订单</view>
				</view>
				<view class="item">
					<image class="icon" :src="imgPath+'c6.png'"></images>
					<view class="title">我的收藏</view>
				</view>
			</view>
			<image class="bigTitle" :src="imgPath+'rxph.png'"></image>
			<view class="productList">
				<productSimpleCP style="margin-top:30rpx;"/>
				<productSimpleCP style="margin-top:30rpx;"/>
				<productSimpleCP style="margin-top:30rpx;"/>
				<productSimpleCP style="margin-top:30rpx;"/>
			</view>
			<image class="ad" :src="imgPath+'ad1.png'"/>
			<view class="productList">
				<productSimpleCP style="margin-top:30rpx;"/>
			</view>
			<image class="ad" :src="imgPath+'ad1.png'"/>
			<view class="productList">
				<productSimpleCP style="margin-top:30rpx;"/>
			</view>
			
		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import productSimpleCP from "@/components/productSimple_CP.vue"
	export default {
		mixins: [allPage],
		components:{productSimpleCP},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destop{
		.band{
			width:100%;
			height:200px;
		}
		.shelf{
			width:1200px;
			margin: auto;
		}
		.shelfTitleFrame{
			position:relative;
			margin: auto;
			width: 240px;
			margin-top: 45px;
			margin-bottom: 80px;
		}
		.shelfTitleBG{
			width:215px;
			height:144px;
			position: absolute;
			top: -53px;
			left: 24px;
		}
		.shelfTitle{
			font-size: 32px;
			color:#212529;
			position: relative;
			z-index: 3;
		}
		.shelfTitleLine{
			width:40px;
			height:8px;
			background-color: #77C4D6;
			position: absolute;
			top: 60px;
			left: 40px;
		}
		.shelfProductList{
			display: flex;
			justify-content: space-between;
		}
		.joinFrame{
			width: 100%;
			height: 500px;
			margin-top: 103px;
			position: relative;
			background-image: url($oss-destop+'indexBackImg.jpg');
			margin-bottom: 100px;
		}
		.joinCenterFrame{
			width: 1200px;
			margin: 0 auto;
			position: relative;
		}
		.joinTitle{
			font-size: 40px;
			font-weight: 550;
			letter-spacing: 5px;
			position: absolute;
			top: 130px;
			left: 365px;
		}
		.joinButton{
			position: absolute;
			color: #ffffff;
			background: #008AB0;
			height: 40px;
			line-height: 40px;
			width: 170px;
			display: block;
			text-align: center;
			top: 228px;
			left: 365px;
			font-size: 12px;
		}
		.titleFrame{
			width: 1200px;
			margin: auto;
			margin-bottom: 39px;
		}
		.title{
			text-align: center;
			font-size: 30px;
			line-height: 36px;
		}
		.titleLine{
			width: 40px;
			height: 8px;
			background: #77C4D6;
			margin: auto;
			margin-top: 20px;
		}
		.newsFrame{
			    width: 100%;
			    background-image: url($oss-destop+'indexBackImg_02.jpg');
			    background-size: 100% 100%;
			    height: 684px;
			    background-position: left 15px;
			    background-repeat: no-repeat;
		}
		.newsCenterFrame{
			    width: 1200px;
			    margin: 0 auto !important;
			    margin-top: 65px;
			    display: flex;
			    justify-content: space-between;
		}
		.more{
			width: 250px;
			    height: 50px;
			    line-height: 50px;
			    margin: 65px auto 0;
			    background: #008AB0;
			    color: #ffffff;
			    text-align: center;
			    cursor: pointer;
				font-size: 12px;
		}
		.newsItem{
			padding-bottom: 25px;
			    width: 578px;
			    background: #ffffff;
			    border: 1px solid #f0e9de;
			    cursor: pointer;
		}
		.newsImage{
			width: 578px;
			height:372px;
		}
		.newsTitle{
			margin-top: 30px;
			padding-left: 40px;
			font-size: 20px;
		}
		.newsDesc{
			    margin-top: 25px;
			    padding-left: 40px;
			    font-size: 15px;
			    color: #9A9A9A;
		}
		.storyFrame{
			width: 1200px;
			margin: auto;
			display: flex;
			justify-content: space-between;
			margin-top: 55px;
		}
		.storyItem{
			width: 378px;
			height: auto;
		}
		.storyImg{
			width:378px;
			height:151px;
		}
		.storyBottom{
			padding: 15px 50px 35px 23px;
			border: 1px solid #F0E9DE;
		}
		.storyTitle{
			font-size: 20px;
			    font-weight: bold;
			    letter-spacing: 2px;
			    color: #2f2728;
			    line-height: 30px;
		}
		.storyMore{
			    font-size: 14px;
			    letter-spacing: 1px;
			    color: #333333;
			    cursor: pointer;
				text-decoration: underline;
				margin-top:20px;
		}
	}
	/* #endif */
	.phone{
		.navBar{
			width:750rpx;
			height:62rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			top:0;
			left:0;
			background-color: #fff;
			z-index: 3;
			.notice{
				width:42rpx;
				height:42rpx;
				margin-left: 20rpx;
			}
			.right{
				display: flex;
				align-items: center;
				.shoppingCar{
					width:42rpx;
					height:42rpx;
					margin-right: 20rpx;
				}
				.navList{
					width:42rpx;
					height:42rpx;
					margin-right: 20rpx;
				}
			}
		}
		.banner{
			width:750rpx;
			height:400rpx;
			padding-top: 62rpx;
			.swiper{
				width:100%;
				height:100%;
				.item{
					width:100%;
					height:100%;
				}
			}
		}
		.doubleFrame{
			width:750rpx;
			height:253rpx;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.icon{
					width:68rpx;
					height:68rpx;
				}
				.title{
					font-size: 32rpx;
					margin-top: 20rpx;
					font-weight: bold;
				}
			}
		}
		.bigTitle{
				width:750rpx;
				height:95rpx;
		}
		.productList{
			width:750rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.ad{
			width:750rpx;
			height:340rpx;
			margin-top: 40rpx;
			margin-bottom: 20rpx;
		}
	}
</style>
