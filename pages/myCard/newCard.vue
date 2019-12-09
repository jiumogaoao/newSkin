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
				<view class="title">绑定银行卡</view>
				<view class="blue">温馨提示：请绑定您的常用银行卡，且身份证号与CN卡号的身份证需一致</view>
				<view class="inputList">
					<view class="point">
						<view class="label">银行卡号*</view>
						<input placeholder="请输入银行卡号"/>
						<view class="error">请输入银行卡号！</view>
					</view>
					<view class="point">
							<view class="label">开卡行*</view>
							<input placeholder="请输入开卡行"/>
							<view class="error">请输入开卡行！</view>
					</view>
					<view class="point">
							<view class="label">开卡人*</view>
							<input placeholder="请输入开卡人"/>
							<view class="error">请输入开卡人！</view>
					</view>
					<view class="point">
							<view class="label">身份证*</view>
							<input placeholder="请输入身份证"/>
							<view class="error">请输入身份证！</view>
					</view>
				</view>
				<view class="buttonFrame">
					<view class="button cancel" @click="back">取消</view>
					<view class="button" @click="back">绑定</view>
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
			<view class="button" @click="back">保存</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import needLogon from "@/mixin/needLogon"
	import mine from "@/mixin/mine"
	export default {
		mixins: [allPage,needLogon,mine],
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
				margin-bottom: 30px;
		}
		.blue{
			color: #008ab0;
			font-size: 14px;
			letter-spacing: 1px;
		}
		.inputList{
			margin-top: 50px;
			width:505px;
			.point{
				margin-bottom: 26px;
				position: relative;
				.label{
					font-size: 12px;
					color: $main-black;
				}
				input{
					width:500px;
					height:46px;
					border: 1px solid $main-gray;
					margin-top: 10px;
				}
				.error{
					position: absolute;
					bottom:-18px;
					right:0px;
					font-size: 12px;
					color: #ee6463;
				}
			}
		}
		.buttonFrame{
			display: flex;
			justify-content: flex-end;
			width:505px;
			.button{
				width:140px;
				height: 44px;
				border: 1px solid $main-hl;
				background-color: $main-hl;
				color: #fff;
				line-height: 42px;
				text-align: center;
				border-radius: 22px;
				font-size: 16px;
			}
			.button.cancel{
				border: 1px solid $main-gray;
				background-color: #fff;
				color: $main-gray-deep;
				margin-right: 40px;
			}
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