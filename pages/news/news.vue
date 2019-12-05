<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
			<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="1000" :duration="500">
			                        <swiper-item>
			                            <image src="/static/20190506FreeShippingPCbanner.png"></image>
			                        </swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
			                    </swiper>
			<view class="list">
				<view class="bigTitle">精选文章<view class="line"></view></view>
				<view class="frame">
					<view class="point">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="text">维多利亚的秘密维多利亚的秘密维多利亚的秘密</view>
					</view>
					<view class="point">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="text">维多利亚的秘密维多利亚的秘密维多利亚的秘密</view>
					</view>
					<view class="point">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="text">维多利亚的秘密维多利亚的秘密维多利亚的秘密</view>
					</view>
					<view class="point">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="text">维多利亚的秘密维多利亚的秘密维多利亚的秘密</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="bigTitle">潮流趋势<view class="line"></view></view>
				<view class="frame">
					<view class="point2" style="background-color: url(/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg);">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
					<view class="point2">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
					<view class="point2">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
					<view class="point2">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="bigTitle">美容贴士<view class="line"></view></view>
				<view class="frame">
					<view class="pointS">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="button">了解更多</view>
					</view>
					<view class="pointS">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="button">了解更多</view>
					</view>
					<view class="pointS">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="button">了解更多</view>
					</view>
				</view>
			</view>
			 <view class="list">
			 	<view class="bigTitle">健康&美容<view class="line"></view></view>
			 	<view class="frame">
			 		<view class="pointS2">
						
			 			 <video class="video" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			 			                     enable-danmu danmu-btn controls></video>
			 			<view class="title">维多利亚的秘密</view>
			 		</view>
			 		<view class="pointS2">
			 			<video class="video" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			 			                    enable-danmu danmu-btn controls></video>
			 			<view class="title">维多利亚的秘密</view>
			 		</view>
			 		<view class="pointS2">
			 			<video class="video" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			 			                    enable-danmu danmu-btn controls></video>
			 			<view class="title">维多利亚的秘密</view>
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
				<text slot="center">新闻中心</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="1000" :duration="500">
			                        <swiper-item>
			                            <image src="/static/20190506FreeShippingPCbanner.png"></image>
			                        </swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
									<swiper-item>
									    <image src="/static/20190506FreeShippingPCbanner.png"></image>
									</swiper-item>
			                    </swiper>
			<view class="list">
				<view class="bigTitle">精选文章<view class="line"></view></view>
				<view class="frame">
					<view class="point">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="text">维多利亚的秘密维多利亚的秘密维多利亚的秘密</view>
					</view>
					<view class="point">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
						<view class="text">维多利亚的秘密维多利亚的秘密维多利亚的秘密</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="frame">
					<view class="point2" style="background-color: url(/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg);">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
					<view class="point2">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
					<view class="point2">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
					<view class="point2">
						<image src="/static/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg"></image>
						<view class="title">维多利亚的秘密</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="bigTitle">美容贴士<view class="line"></view></view>
				<swiper class="frame" :indicator-dots="true" :autoplay="false" :interval="1000" :duration="500">
				                        <swiper-item>
				                            <image src="/static/20190506FreeShippingPCbanner.png"></image>
				                        </swiper-item>
										<swiper-item>
										    <image src="/static/20190506FreeShippingPCbanner.png"></image>
										</swiper-item>
										<swiper-item>
										    <image src="/static/20190506FreeShippingPCbanner.png"></image>
										</swiper-item>
										<swiper-item>
										    <image src="/static/20190506FreeShippingPCbanner.png"></image>
										</swiper-item>
										<swiper-item>
										    <image src="/static/20190506FreeShippingPCbanner.png"></image>
										</swiper-item>
				                    </swiper>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
		components:{},
		data() {
			return {
			
			};
		},
		methods:{

		},
		computed:{
	
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
		.banner{
			width: 100%;
			height:600px;
			image{
				width: 100%;
				height:600px;
			}
		}
		.list{
			margin-top: 90px;
			.bigTitle{
				width:140px;
				height: 70px;
				font-size: 35px;
				text-align: center;
				font-weight: bold;
				position: relative;
				margin: auto;
				.line{
					width:40px;
					height:8px;
					background-color: $main-hl;
					margin: auto;
					position: absolute;
					bottom:0px;
					left: 50px;
				}
			}
			.frame{
				width: 1200px;
				margin: auto;
				margin-top: 70px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				.point{
					margin-top: 58px;
					width:580px;
					border: 1px solid $main-gray;
					padding-bottom: 53px;
					image{
						width:100%;
						height: 411px;
					}
					.title{
						font-size: 33px;
						font-weight: bold;
						color:$main-black;
						margin-top: 33px;
						margin-left: 40px;
					}
					.text{
						font-size: 14px;
						margin-top: 24px;
						color: $main-gray-deep;
						margin-left: 40px;
					}
				}
				.point2{
					width: 580px;
					height: 300px;
					position: relative;
					margin-top: 40px;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 100%;
						height: 100%;
						position: absolute;
						top:0;
						left: 0;
					}
					.title{
						font-size: 33px;
						font-weight: bold;
						padding: 26px 40px;
						color: #fff;
						position: relative;
						z-index: 3;
						background-color: rgba(0,0,0,0.3);
					}
				}
				.pointS{
					width: 380px;
					height: 500px;
					border: 1px solid $main-gray;
					image{
						width:100%;
						height: 300px;
					}
					.title{
						font-size: 20px;
						font-weight: bold;
						color:$main-black;
						margin-top: 30px;
						margin-left: 26px;
					}
					.button{
						width:250px;
						height: 50px;
						background-color: $main-hl;
						font-size: 17px;
						color: #fff;
						line-height: 50px;
						text-align: center;
						margin: auto;
						margin-top: 70px;
					}
				}
				.pointS2{
					width: 380px;
					height: 380px;
					.video{
						width: 100%;
						height: 303px;
					}
					.title{
						font-size: 20px;
						font-weight: bold;
						color:$main-black;
						margin-top: 30px;
					}
				}
			}
		}
	}
	/* #endif */
	.phone{
		background-color: #f1f1f1;
		.banner{
			width: 750rpx;
			height: 500rpx;
			image{
				width: 750rpx;
				height: 500rpx;
			}
		}
		.list{
			margin-top: 75rpx;
			width: 750rpx;
			padding: 0 30rpx;
		}
	}
	
</style>
