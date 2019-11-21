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
				<text slot="center">绑定银行卡号</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view style="width:100%;height: 20rpx;"></view>
			<view class="list">
				<view class="title">银行卡号：</view><input placeholder="请输入银行卡号"/>
			</view>
			<view class="list">
				<view class="title">开卡行：</view><view class="dsc">请选择 <text class="nuskinIcon">&#xe636;</text></view>
			</view>
			<view class="list">
				<view class="title">开卡人：</view><input placeholder="请输入开卡人姓名"/>
			</view>
			<view class="list">
				<view class="title">身份证：</view><input placeholder="请输入开卡人身份证号码"/>
			</view>
			<view class="button">保存</view>
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
			justify-content: space-between;
			align-items: center;
			.title{
				font-size: 26rpx;
			}
			input{
				flex-grow: 1;
				text-align: right;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
			}
		}
		.button{
			width:400rpx;
			height: 80rpx;
			font-size: 30rpx;
			color: #fff;
			background-color: $main-hl;
			border-radius: 80rpx;
			margin: auto;
			margin-top: 40rpx;
			line-height: 80rpx;
			text-align: center;
		}
	}
	
</style>