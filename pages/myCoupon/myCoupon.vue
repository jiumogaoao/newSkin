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
				<view class="title">我的优惠券</view>
				<tabbarCP :list="[{id:0,name:'未使用（0）'},{id:1,name:'已使用（0）'},{id:2,name:'已失效（0）'}]" :hl="0"/>
				<view class="couponFrame">
					<couponCP/>
					<couponCP/>
					<couponCP/>
					<couponCP/>
					<couponCP/>
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
				<text slot="center">优惠券</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<tabbarCP class="tabbarCP" :list="l" :hl="0"></tabbarCP>
			<couponCP :type="2"/>
			<couponCP :type="2"/>
			<couponCP :type="2"/>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	import couponCP from "@/components/coupon_CP.vue"
	export default {
		mixins: [allPage,needLogon,mine],
		components:{couponCP},
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myCoupon')
		},
		data() {
			return {
				l:[{id:0,name:"未使用"},{id:1,name:"已使用"},{id:2,name:"已失效"}]
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
	.couponFrame{
		padding: 30px 9px 40px;
		background: #f7f7f7;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	}
	/* #endif */
	.phone{
			display: flex;
			align-items: center;
			flex-direction: column;
			width:750rpx;
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