<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
		<headerCP/>
		<view class="band"></view>
		<view class="shelf" v-for="(v,i) in shelf" :key="i">
			<view class="shelfTitleFrame">
				<image :src="imgPath+'indexLeaf.jpg'" class="shelfTitleBG"></image>
				<view class="shelfTitle">{{v.title}}</view>
				<view class="shelfTitleLine"></view>
			</view>
			<view class="shelfProductList">
				<productSimpleCP v-for="(n,o) in v.prouduct" @follow="follow(n.pId)" @click="go('/pages/detail/detail?id='+n.pId)" :key="n.pId" :follow="n.follow" :img="n.img" :name="n.name" :price="n.price" :pId="n.pId"/>
			</view>
		</view>
		<view class="joinFrame">
			<view class="joinCenterFrame">
				<view class="joinTitle">加入如新</view>
				<view class="joinButton" @click="go('/pages/join/join')">加入我们</view>
			</view>
		</view>
		<view class="titleFrame">
			<view class="title">新闻中心</view>
			<view class="titleLine"></view>
		</view>
		<view class="newsFrame">
			<view class="newsCenterFrame">
				<view class="newsItem" v-for="(v,i) in news" :key="i" @click="go('/pages/newsDetail/newsDetail?id='+sid)">
					<image class="newsImage" :src="v.img"></image>
					<view class="newsTitle">{{name}}</view>
					<view class="newsDesc">{{dsc}}</view>
				</view>
			</view>
			<view class="more" @click="go('/pages/news/news')">查看更多</view>
		</view>
		<view class="titleFrame">
			<view class="title">品牌故事</view>
			<view class="titleLine"></view>
		</view>
		<view class="storyFrame">
			<view class="storyItem" v-for="(v,i) in story" :key="v.sid">
				<image class="storyImg" :src="v.img"></image>
				<view class="storyBottom">
					<view class="storyTitle">{{v.name}}</view>
					<view class="storyMore" @click="go('/pages/storyDetail/storyDetail?id='+sid)">了解更多</view>
				</view>
			</view>
		</view>
		<view class="more" @click="go('/pages/story/story')">查看更多</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="navBar">
				<view class="left">
					<image class="notice" :src="imgPath+'xinxi2.0.png'" @click="go('/pages/myNotice/myNotice')"></image>
				</view>
				<view class="right">
					<image class="shoppingCar" :src="imgPath+'tab-cart-current.png'" @click="go('/pages/shoppingCar/shoppingCar')"></image>
					<image class="navList" :src="imgPath+'menu01.png'" @click="sideShow()"></image>
				</view>
			</view>
			<view class="banner">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				                        <swiper-item v-for="(v,i) in banner" @click="go('/pages/detail/detail?id='+v.id)" :key="i">
				                            <image :src="v.url" class="item"></image>
				                        </swiper-item>
				</swiper>
			</view>
			<view class="doubleFrame">
				<view class="item" @click="go('/pages/myOrder/myOrder')">
					<image class="icon" :src="imgPath+'xsk89KqkppQud34p8xbXm4pKhqPbHh.png'"></images>
					<view class="title">我的订单</view>
				</view>
				<view class="item" @click="go('/pages/myFollow/myFollow')">
					<image class="icon" :src="imgPath+'c6.png'"></images>
					<view class="title">我的收藏</view>
				</view>
			</view>
			<block v-for="(v,i) in shelf" :key="i">
				<image class="bigTitle" :src="imgPath+'rxph.png'"></image>
				<view class="productList">
					<productSimpleCP style="margin-top:30rpx;" v-for="(n,o) in v.prouduct"  @click="go('/pages/detail/detail?id='+n.pId)" :key="n.pId" :follow="n.follow" :img="n.img" :name="n.name" :price="n.price" :pId="n.pId"/>
				</view>
				<image class="ad" :src="imgPath+'ad1.png'"/>
			</block>
			<image class="smallTitle" :src="imgPath+'index_news.png'"></image>
			<view class="news" v-for="(v,i) in news" :key="v.nId" @click="go('/pages/newDetail/newDetail')">
				<image class="img" :src="v.img"></image>
				<view class="title">{{v.name}}</view>
				<view class="dsc">{{v.dsc}}</view>
			</view>
			<view class="more" @click="go('/pages/news/news')">查看更多</view>
			<view class="joinFrame">
				<view class="title">加入如新</view>
				<view class="button" @click="go('/pages/join/join')">立即加入</view>
			</view>
			<image class="smallTitle" :src="imgPath+'index_pp.png'"></image>
			<view class="storyList">
				<scroll-view scroll-x="true" class="scroll-X">
					<view class="scrollFrame">
						<view class="item" v-for="(v,i) in story">
							<image class="pic" :src="v.img"></image>
							<view class="subTitle">品牌故事</view>
							<view class="title">{{v.name}}</view>
							<view class="knowMore" @click="go('/pages/storyDetail/storyDetail')">了解更多>></view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="more" @click="go('/pages/story/story')">查看更多</view>
			<footerCP/>
			<view style="width:750rpx;height:50rpx;"></view>
			<headerCP/>
			<view :class="{sideNav:1,open:showSide}">
				<view class="searchFrame">
					<input class="search"/>
					<image class="searchButton" :src="imgPath+'sousuo.png'"></image>
				</view>
				<view class="navList">
					<view class="item" @click="go('/pages/story/story')">
						<view class="title">关于我们</view>
						<image class="deg" :src="imgPath+'jiantou-r.png'"></image>
					</view>
					<view class="item" @click="go('/pages/news/news')">
						<view class="title">新闻中心</view>
						<image class="deg" :src="imgPath+'jiantou-r.png'"></image>
					</view>
					<view class="item" @click="go('/pages/afterSale/afterSale')">
						<view class="title">售后中心</view>
						<image class="deg" :src="imgPath+'jiantou-r.png'"></image>
					</view>
					<view class="item">
						<view class="title">联系我们</view>
						<image class="deg" :src="imgPath+'jiantou-r.png'"></image>
					</view>
					<view class="item" @click="go('/pages/help/help')">
						<view class="title">帮助中心</view>
						<image class="deg" :src="imgPath+'jiantou-r.png'"></image>
					</view>
					<view class="item" @click="go('/pages/index/index')">
						<view class="title">官网主页</view>
						<image class="deg" :src="imgPath+'jiantou-r.png'"></image>
					</view>
				</view>
				<view class="logon" @click="go('/pages/logon/logon')">
					<image class="icon" :src="imgPath+'touxiangs.png'"></image>
					<view class="title">注册|登录</view>
				</view>
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
		onShow: function() {
			this.$store.dispatch('rootST/changeFootNav', 'index')
		},
		data() {
			return {
				showSide:false
			};
		},
		methods:{
			sideShow(){
				this.showSide = !this.showSide
			},
			follow(id){
				
			}
		},
		computed:{
			banner(){
				return this.$store.state.indexST.banner
			},
			shelf(){
				return this.$store.state.indexST.shelf
			},
			news(){
				return this.$store.state.indexST.news
			},
			story(){
				return this.$store.state.indexST.story
			}
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
			margin-top: 60px;
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
		.smallTitle{
			width:298rpx;
			height: 58rpx;
			margin: auto;
			margin-top: 40rpx;
		}
		.news{
			width:690rpx;
			height:493rpx;
			border: 1px solid #f0e9de;
			margin: auto;
			margin-top:40rpx;
			.img{
				width:690rpx;
				height:360rpx;
			}
			.title{
				padding: 0 30rpx;
				    color: #191919;
				    font-size: 28rpx;
				    line-height: 60rpx;
				    font-weight: 600;
			}
			.dsc{
				padding: 10rpx 30rpx;
				    font-size: 24rpx;
				    color: grey;
			}
		}
		.more{
			width: 180rpx;
			    height: 50rpx;
			    background: #008ab0;
			    color: #fff;
			    text-align: center;
			    font-size: 32rpx;
			    line-height: 50rpx;
			    border-radius: 5rpx;
			    margin: 0rpx 285rpx;
				margin-top:40rpx;
		}
		.joinFrame{
			width:750rpx;
			height: 420rpx;
			background-image: url($oss-phone+'jiaru.png');
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 40rpx;
			background-repeat: no-repeat;
			background-size: cover;
			.title{
				    text-align: center;
				    color: #4d4d4d;
				    font-size: 40px;
			}
			.button{
				width: 180px;
				    height: 50px;
				    background: #008ab0;
				    color: #fff;
				    text-align: center;
				    font-size: 32px;
				    line-height: 50px;
				    border-radius: 5px;
					margin-top: 40rpx;
			}
		}
		.storyList{
			border-radius: 6rpx;
			    padding-top: 40rpx;
			    padding-left: 30rpx;
			    padding-right: 30rpx;
			    padding-bottom: 40rpx;
			    background: #fff;
			    -webkit-box-shadow: 1rpx 1rpx 5rpx rgba(0,0,0,.2);
			    box-shadow: 1rpx 1rpx 5rpx rgba(0,0,0,.2);
			    position: relative;
			    z-index: 1;
			.scroll-X{
				width:100%;
				height:100%;
				.scrollFrame{
					height: 100%;
					display: flex;
					flex-wrap: nowrap;
					.item{
						width: 490rpx;
						    height: 580rpx;
						    margin-right: 30rpx;
						    font-size: 26rpx;
						    color: #303133;
						    line-height: 1.8;
						    border: 1px solid #f0e9de;
							flex-shrink: 0;
						.pic{
							width: 490rpx;
							    height: 320rpx;
							    border-radius: 6rpx;
						}
						.subTitle{
							color: #191919;
							    font-size: 26px;
							    padding: 0px 20px;
								margin-top: 40rpx;
						}
						.title{
							color: #191919;
							    font-size: 30px;
							    padding: 0 20px;
							    font-weight: 600;
								margin-top: 20rpx;
						}
						.knowMore{
							padding: 0 20px;
							    color: #008ab0;
							    font-size: 26px;
								margin-top: 40rpx;
						}
					}
				}
			}
		}
		.sideNav{
			position: fixed;
			top:62rpx;
			left:750rpx;
			right:0;
			bottom:0;
			overflow: hidden;
			background-color: #fff;
			z-index: 3;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.searchFrame{
				width:100%;
				height:130rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-shrink: 0;
				.search{
					width: 571rpx;
					    height: 70rpx;
					    font-size: 30rpx;
					    background: #f6f7f7;
					    padding: 0 20rpx;
					    border-radius: 15rpx;
				}
				.searchButton{
					width:34rpx;
					height:34rpx;
					margin-left: 40rpx;
				}
			}
			.navList{
				width: 100%;
				flex-grow: 1;
				.item{
					height: 100rpx;
					width:100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.title{
						font-size: 30px;
						color: #323232;
						margin-left: 20rpx;
					}
					.deg{
						width:30rpx;
						height:30rpx;
						margin-right: 20rpx;
					}
				}
			}
			.logon{
				width: 690rpx;
				    height: 70rpx;
				    background: #008ab0;
				    color: #fff;
				    text-align: center;
				    line-height: 70rpx;
				    border-radius: 15rpx;
					flex-shrink: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 20rpx;
				.icon{
					width:40rpx;
					height:40rpx;
				}
				.title{
					font-size: 28px;
					color: #fff;
					margin-left: 20rpx;
				}
			}
		}
		.sideNav.open{
			left:0;
		}
	}
</style>
