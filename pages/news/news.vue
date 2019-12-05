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
			 	<view class="bigTitle">美容贴士<view class="line"></view></view>
			 	<view class="frame">
			 		<view class="pointS2">
						
			 			 <video id="myVideo" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			 			                     enable-danmu danmu-btn controls></video>
			 			<view class="title">维多利亚的秘密</view>
			 			<view class="button">了解更多</view>
			 		</view>
			 		<view class="pointS2">
			 			<video id="myVideo" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			 			                    enable-danmu danmu-btn controls></video>
			 			<view class="title">维多利亚的秘密</view>
			 			<view class="button">了解更多</view>
			 		</view>
			 		<view class="pointS2">
			 			<video id="myVideo" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			 			                    enable-danmu danmu-btn controls></video>
			 			<view class="title">维多利亚的秘密</view>
			 			<view class="button">了解更多</view>
			 		</view>
			 	</view>
			 </view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
				<image class="back" :src="imgPath+'back.png'" @click="back"></image>
				新闻中心
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
				font-size: 35px;
				text-align: center;
				font-weight: bold;
				position: relative;
			}
		}
	}
	/* #endif */
	.phone{
		display: flex;
		align-items: center;
		flex-direction: column;
		width:750rpx;
		.head{
			width:100%;
			text-align: center;
			    font-size: 40rpx;
			padding-top: 34rpx;
			position: relative;
			.back{
				width:32rpx;
				height:32rpx;
				position:absolute;
				left:20rpx;
			}
		}
	}
	
</style>
