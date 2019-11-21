<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">

			
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">积分失效详情</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view style="width:100%;height: 20rpx;"></view>
			<view class="list">
				<view class="title">积分0</view>
				<view class="dsc">失效时间：2019-11-30</view>
			</view>
			<view class="list">
				<view class="title">积分0</view>
				<view class="dsc">失效时间：2019-11-30</view>
			</view>
			<view class="list">
				<view class="title">积分0</view>
				<view class="dsc">失效时间：2019-11-30</view>
			</view>
			<view class="list">
				<view class="title">积分0</view>
				<view class="dsc">失效时间：2019-11-30</view>
			</view>
			<view class="list">
				<view class="title">积分0</view>
				<view class="dsc">失效时间：2019-11-30</view>
			</view>
			<view class="list">
				<view class="title">积分0</view>
				<view class="dsc">失效时间：2019-11-30</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon],
		onShow: function() {
	
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{background-color: #f1f1f1;}
	/* #ifdef H5 */
	.destop{
		.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transform-origin: left top;
		}
	}
	/* #endif */
	page{
		background-color: $main-gray-background;
	}
	.phone{
		.list{
			width: 100%;
			height: 116rpx;
			padding: 0 30rpx;
			background-color: #fff;
			border-bottom: 1px solid $main-gray;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.title{
				font-size: 24rpx;
			}
			.dsc{
				font-size: 24rpx;
				margin-top: 20rpx;
				color: $main-hl;
			}
		}
	}
	
</style>