<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">

		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">消息详情</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="title">敌方还有30s抵达战场，准备战斗！！</view>
			<view class="subFrame">
				<view class="type">活动通知</view>
				<view class="date">2019.04.12 12:36:53</view>
			</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
			<view class="text">很长很长一句话</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	import checkBoxCP from "@/components/checkBox_CP.vue"
	export default {
		mixins: [allPage,needLogon,mine],
		components:{checkBoxCP},
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myNotice')
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

	}
	/* #endif */
	page{
		background-color: #fff;
	}
	.phone{
			width:750rpx;
			.title{
				width: 750rpx;
				padding: 0 30rpx;
				font-size: 33rpx;
				margin-top: 55rpx;
			}
			.subFrame{
				width: 750rpx;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 22rpx;
				margin-bottom: 48rpx;
				.type{
					height:48rpx;
					width: 146rpx;
					align-items: center;
					line-height: 46rpx;
					color: $main-hl;
					border: 1px solid $main-hl;
					border-radius: 48rpx;
					text-align: center;
				}
				.date{
					font-size: 20rpx;
					color: $main-gray-deep;
				}
			}
			.text{
				font-size: 24rpx;
				line-height: 1.5;
				padding: 0 30rpx;
			}
		}
	
</style>
