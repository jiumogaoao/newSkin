<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">优惠券</text>
				<view class="navBarText" slot="right">使用说明</view>
			</navBarCP>
			<view style="width:100%;height: 114rpx;"></view>
			<tabbarCP class="tabbarCP" :list="l" :hl="0"></tabbarCP>
			<couponCP :type="1"/>
			<couponCP :type="1"/>
			<couponCP :type="1"/>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	import tabbarCP from "@/components/tabbar_CP.vue"
	import couponCP from "@/components/coupon_CP.vue"
	export default {
		mixins: [allPage,needLogon],
		components:{tabbarCP,couponCP},
		data() {
			return {
				l:[{id:0,name:"可用优惠券"},{id:1,name:"不可用优惠券"}]
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
	}
	/* #endif */
	page{
		background: $main-gray-background;
	}
	.phone{
		.top{
			padding: 30rpx;
			display: flex;
			align-items: center;
			.nuskinIcon{
				font-size: 50rpx;
			}
			.text{
				margin-left: 20rpx;
			}
		}
		.list{
			width:750rpx;
			background-color: #fff;
			margin-top: 20rpx;
			.point{
				width: 100%;
				height: 88rpx;
				border-bottom: 1px solid $main-gray;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 24rpx;
					flex-shrink: 0;
				}
				input{
					font-size: 26rpx;
					flex-grow: 1;
					text-align: right;
				}
				.placeholder{
					color: $main-gray-deep;
					font-size: 26rpx;
				}
			}
		}
		.button{
			width: 500rpx;
			height: 82rpx;
			text-align: center;
			line-height: 82rpx;
			margin: auto;
			margin-top: 100rpx;
			background-color: $main-hl;
			color: #fff;
			font-size: 30rpx;
			border-radius: 82rpx;
		}
	}
	
</style>
