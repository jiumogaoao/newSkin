<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef  -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">
			<mineNavCP/>
			<view class="info">
				<view class="title">我的收入</view>
				<view class="head">
					<view class="headItem first" style="width:16%">收入时间</view>
					<view class="headItem" style="width:14%">报筹</view>
					<view class="headItem" style="width:14%">报酬调整</view>
					<view class="headItem" style="width:14%">应发金额</view>
					<view class="headItem" style="width:14%">计税额</view>
					<view class="headItem" style="width:14%">总税额</view>
					<view class="headItem" style="width:14%">实发金额</view>
				</view>
				<view class="listFrame">
					<view class="list">
						<view class="listItem" style="width:16%">￥2019年9月</view>
						<view class="listItem" style="width:14%">￥0.00</view>
						<view class="listItem" style="width:14%">￥0.00</view>
						<view class="listItem" style="width:14%">￥0.00</view>
						<view class="listItem" style="width:14%">￥0.00</view>
						<view class="listItem" style="width:14%">￥0.00</view>
						<view class="listItem" style="width:14%">￥0.00</view>
					</view>
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
				<text slot="center">我的收入</text>
				<view class="navBarText" slot="right">说明</view>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="date">2019年5月</view>
			<view class="point">
				<view class="title">报筹：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">报筹调整：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">应发金额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">计税额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">总税额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">实发金额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="date">2019年5月</view>
			<view class="point">
				<view class="title">报筹：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">报筹调整：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">应发金额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">计税额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">总税额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
			<view class="point">
				<view class="title">实发金额：</view>
				<view class="dsc">￥1500.00</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon,mine],
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myIncome')
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
		.head{
			    margin: 42px 0 28px;
			    display: flex;
			    height: 52px;
			    background-color: #f5f5f5;
			    border-radius: 2px;
				align-items: center;
		}
		.headItem{
			font-size: 14px;
			text-align: center;
		}
		.headItem.first{
			text-align:left;
			text-indent: 30px;
		}
		.listFrame{
			width:100%;
		}
		.list{
			display: flex;
			align-items: center;
			border: 1px solid #f5f5f5;
			border-left: 1px solid #f5f5f5;
		}
		.info{
			font-size: 14px;
			    line-height: 20px;
			    color: #808080;
		}
		.listItem{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			    font-size: 14px;
			    line-height: 66px;
			    letter-spacing: 1px;
		}
		.state{
			line-height: 40px;
			font-size: 14px;
			    text-align: center;
			    letter-spacing: 1px;
			    color: #808080;
		}
		.blue{
			color: #008ab0;
			font-size: 14px;
			letter-spacing: 1px;
		}
		.button{
			    width: 90px;
			    height: 28px;
			    background-color: #008ab0;
			    border-radius: 14px;
			    text-align: center;
			    line-height: 28px;
			    color: #fff;
			    cursor: pointer;
		}
	}
	/* #endif */
	page{
		background-color: $main-gray-background;
	}
	.phone{
			width:750rpx;
			.date{
				width: 750rpx;
				padding: 30rpx;
				font-size: 26rpx;
				color: $main-hl;
			}
			.point{
				width:750rpx;
				height: 90rpx;
				background-color: #fff;
				padding: 0 30rpx;
				border-bottom: 1px solid $main-gray;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 26rpx;
				}
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
				}
			}
		}
</style>
