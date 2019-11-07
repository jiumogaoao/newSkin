<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
			<view class="title">帮助中心</view>
			<view class="info">帮助中心</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
				<image class="back" :src="imgPath+'back.png'" @click="back"></image>
				帮助中心
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
		.band{
		width:100%;
		height:130px;
		}
		.title{
			font-size: 36px;
			    width: 100%;
			    text-align: center;
			    line-height: 1.3;
			    color: #008ab0;
			    margin: 20px auto 55px;
		}
		.info{
			@include frame-width;
			margin: auto;
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
