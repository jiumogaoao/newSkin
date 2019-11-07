<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
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
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
							<image class="back" :src="imgPath+'back.png'" @click="back"></image>
							我的优惠券
						</view>
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
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destop{
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