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
				<text slot="center">推广商申请</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="list">
				<input placeholder="请输入CN号"/>
			</view>
			<view class="list">
				<input placeholder="请输入CN号密码"/>
				<view class="nuskinIcon">&#xe724;</view>
			</view>
			<view class="dsc"><text class="nuskinIcon">&#xe71c;</text> 绑定CN号需同意<text class="nuskinIcon blue">《如新海外购推广商申请书》</text></view>
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
			width: 750rpx;
			display: flex;
			height: 96rpx;
			padding: 0 30rpx;
			background-color: #fff;
			border-bottom: 1px solid $main-gray;
			display: flex;
			align-items: center;
			input{
				flex-grow: 1;
			}
			.nuskinIcon{
				font-size: 40rpx;
				color: $main-hl;
			}
		}
		.dsc{
			font-size: 24rpx;
			color: $main-gray-deep;
			margin-top: 40rpx;
			width: 750rpx;
			padding: 0 30rpx;
			.nuskinIcon{
				color: $main-hl;
				font-size: 40rpx;
			}
			.blue{
				color: $main-hl;
				font-size: 24rpx;
			}
		}
	}
	
</style>