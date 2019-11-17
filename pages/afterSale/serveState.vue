<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">进度详情</text>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>
			<view class="bottomFrame">
				<view class="bottom">
					<view class="list hl">
						<view class="pointFrame">
							<view class="point"></view>
							<view class="line"></view>
						</view>
						<view class="info">
							<view class="title">清关完成，移交快递公司</view>
							<view class="dsc">2019-05-03 15:23:36</view>
						</view>
					</view>
					<view class="list">
						<view class="pointFrame">
							<view class="point"></view>
							<view class="line"></view>
						</view>
						<view class="info">
							<view class="title">清关完成，移交快递公司</view>
							<view class="dsc">2019-05-03 15:23:36</view>
						</view>
					</view>
					<view class="list last">
						<view class="pointFrame">
							<view class="point"></view>
							<view class="line"></view>
						</view>
						<view class="info">
							<view class="title">清关完成，移交快递公司</view>
							<view class="dsc">2019-05-03 15:23:36</view>
						</view>
					</view>
				</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import productCP from "@/components/product_CP.vue"
	import tabbarCP from "@/components/tabbar_CP.vue"
	export default {
		mixins: [allPage],
		components:{productCP,tabbarCP},
		data() {
			return {
				hl:0
			};
		},
		methods:{
			change(num){
				this.hl = num;
			}
		},
		computed:{
			sort(){return this.$store.state.shelfST.sort},
			product(){return this.$store.state.shelfST.product}
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
		
	}
	/* #endif */
	page{background-color: $main-gray-background;}
	.phone{
		display: flex;
		align-items: center;
		flex-direction: column;
		width:750rpx;
		.topFrame{
			width: 750rpx;
			background-color: #fff;
			padding: 30rpx;
			display: flex;
			align-items: center;
			margin-top: 20rpx;
			.nuskinIcon{
				font-size: 50rpx;
				margin-right: 20rpx;
			}
			.title{
				font-size: 26rpx;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
				margin-top: 20rpx;
			}
		}
		.bottomFrame{
			width: 750rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.top{
				width: 100%;
				padding: 30rpx;
				border-bottom: 1px solid $main-gray;
				border-top: 1px solid $main-gray;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 26rpx;
				}
			}
			.bottom{
				padding: 30rpx;
				.list{
					display: flex;
					align-items: center;
					margin-bottom: 100rpx;
					.pointFrame{
						position: relative;
						.point{
							width:20rpx;
							height: 20rpx;
							background-color: $main-gray-deep;
							border-radius: 20rpx;
						}
						.line{
							width: 2px;
							height:160rpx;
							position: absolute;
							left:8rpx;
							top:20rpx;
							background-color: $main-gray;
						}
					}
					.info{
						margin-left: 30rpx;
						.title{
							font-size: 26rpx;
						}
						.dsc{
							font-size: 24rpx;
							color: $main-gray-deep;
							margin-top: 20rpx;
						}
					}
				}
				.list.hl{
					.point{
						background-color: $main-hl;
					}
					.title{
						color: $main-hl;
					}
				}
				.list.last{
					.line{
						display: none;
					}
				}
			}
		}
	}
	
</style>
