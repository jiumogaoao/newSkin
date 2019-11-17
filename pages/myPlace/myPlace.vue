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
					<view class="title">收货地址</view>
					<view class="frame">
						<view class="button">+新增收货地址</view>
						<view class="dsc">您已创建0个收货地址，最多可创建50个</view>
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
				<text slot="center">收货地址</text>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>

				<view class="point">
					<view class="top">
						<view class="name">里里</view>
						<view class="tel">153****2656</view>
					</view>
					<view class="place">所在地区：广东潮州潮安县沙爹激动啊师大暨大</view>
					<view class="bottom">
						<view class="left">
							<radioCP @click="back"/>
							<view class="text">默认地址</view>
						</view>
						<view class="right">
							<view class="button" @click="go('/pages/myPlace/newPlace')">编辑</view>
							<view class="button">删除</view>
						</view>
					</view>
				</view>

			<view class="newFrame">
				<view class="button" @click="go('/pages/myPlace/newPlace')">新建地址</view>
			</view>
		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	import radioCP from "@/components/radio_CP.vue"
	export default {
		mixins: [allPage,needLogon,mine],
		components:{radioCP},
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myPlace')
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
	.frame{
		display: flex;
		align-items: center;
		.button{
				width:140px;
				height:34px;
				background-color: #008ab0;
				line-height: 34px;
				border-radius: 34px;
				font-size: 14px;
				margin-right: 40px;
				color:#fff;
				text-align: center;
		}
		.dsc{
			font-size: 14px;
			color: #333;
		}
	}
	
	}
	/* #endif */
	page{background-color: $main-gray-background;}
	.phone{
			display: flex;
			align-items: center;
			flex-direction: column;
			width:750rpx;
			.point{
				width: 750rpx;
				padding: 0 30rpx;
				background-color: #fff;
				margin-bottom: 20rpx;
				.top{
					width: 100%;
					height: 80rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.name{
						font-size: 26rpx;
					}
					.tel{
						font-size: 24rpx;
					}
				}
				.place{
					font-size: 24rpx;
					color: $main-gray-deep;
					margin-top: 20rpx;
					margin-bottom: 42rpx;
				}
				.bottom{
					width: 100%;
					height: 98rpx;
					border-top:1px solid $main-gray;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						display: flex;
						align-items: center;
						.text{
							margin-left: 20rpx;
							color: $main-gray-deep;
						}
					}
					.right{
						display: flex;
						align-items: center;
						.button{
							font-size: 24rpx;
							color: $main-gray-deep;
							margin-left: 94rpx;
						}
					}
				}
			}
			.newFrame{
				width: 750rpx;
				height: 120rpx;
				background-color: #fff;
				border-top:1px solid $main-gray;
				display: flex;
				align-items: center;
				justify-content: center;
				position: fixed;
				bottom:0;
				left: 0;
				.button{
					width:692rpx;
					height: 79rpx;
					background-color: $main-hl;
					color: #fff;
					text-align: center;
					line-height: 79rpx;
					font-size: 28rpx;
					border-radius: 79rpx;
				}
			}
		}
</style>
