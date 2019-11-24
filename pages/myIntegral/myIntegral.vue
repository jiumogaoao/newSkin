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
				<view class="title">我的积分</view>
				<view class="blue">积分规则></view>
				<view class="totalList">
					<view class="total">
						<view class="integral">0</view>
						<view class="dsc">我的积分</view>
						<view class="button">去积分购物</view>
					</view>
					<view class="total">
						<view class="integral">0</view>
						<view class="dsc red">即将失效的积分</view>
						<view class="button">查看更多</view>
					</view>
				</view>
				<view class="subTitle">积分记录</view>
				<view class="head">
					<view class="headItem first" style="width:40%">详细</view>
					<view class="headItem" style="width:30%">收入/支出</view>
					<view class="headItem" style="width:30%">时间</view>
				</view>
				<view class="listFrame">
					<view class="list">
						<view class="listItem" style="width:40%">买了东西</view>
						<view class="listItem" style="width:30%">￥0.00</view>
						<view class="listItem" style="width:30%">2019年10月29日</view>
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
				<text slot="center">服务单详情</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="top">
				<view class="left">
					<view class="title">999</view>
					<view class="dsc">积分余额</view>
				</view>
				<view class="button" @click="go('/pages/shelf/integralMall')">积分购物</view>
			</view>
			<view class="center">
				<view class="left">
					<view class="title">即将失效积分：3300</view>
					<view class="dsc">失效时间：2019.09.09</view>
				</view>
				<view class="nuskinIcon" @click="go('/pages/myIntegral/integralDetail')">&#xe636;</view>
			</view>
			<view class="listTitle">积分记录 <text class="nuskinIcon">&#xe65d;</text></view>
			<view class="list">
				<view class="left">
					<view class="title">调整积分</view>
					<view class="dsc">2019-06-05 12:36:56</view>
				</view>
				<view class="right">+1500</view>
			</view>
			<view class="list">
				<view class="left">
					<view class="title">调整积分</view>
					<view class="dsc">2019-06-05 12:36:56</view>
				</view>
				<view class="right">+1500</view>
			</view>
			<view class="list">
				<view class="left">
					<view class="title">调整积分</view>
					<view class="dsc">2019-06-05 12:36:56</view>
				</view>
				<view class="right">+1500</view>
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
			this.$store.dispatch('rootST/changeMyPage', 'myIntegral')
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
		text-align: right;
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
			margin-top: 28px;
	}
	.totalList{
		display: flex;
		justify-content: space-between;
	}
	.total{
		width: 500px;
		    height: 200px;
		    background-color: #f8f8f8;
		    padding-top: 40px;
		    padding-bottom: 38px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
	}
	.integral{
		color: #333333;
		    font-size: 26px;
		    line-height: 26px;
		    text-align: center;
		    margin-bottom: 14px;
	}
	.dsc{
		font-size: 14px;
		line-height: 14px;
		color: #333333;
		text-align: center;
	}
	.dsc.red{
		color: #f03a3a;
	}
	}
	/* #endif */
	page{
		background-color: $main-gray-background;
	}
	.phone{
			width:750rpx;
			.top{
				width:750rpx;
				height:200rpx;
				background-image: linear-gradient(to top right, #23a7da, #34b5b9);
				padding:30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 35rpx;
					color: #fff;
				}
				.dsc{
					font-size: 22rpx;
					color: #fff;
					margin-top: 15rpx;
				}
				.button{
					width:158rpx;
					height:48rpx;
					line-height: 46rpx;
					text-align: center;
					border: 1px solid #fff;
					color: #fff;
					font-size: 22rpx;
					border-radius: 48rpx;
				}
			}
			.center{
				width:100%;
				height: 156rpx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				.title{
					font-size: 26rpx;
				}
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
					margin-top: 20rpx;
				}
				.nuskinIcon{
					font-size: 24rpx;
					color: $main-gray-deep;
				}
			}
			.listTitle{
				width:100%;
				padding: 30rpx;
				background-color: #fff;
				margin-top: 20rpx;
				border-bottom: 1px solid $main-gray;
				display: flex;
				align-items: center;
				height: 100rpx;
				font-size: 26rpx;
			}
			.list{
				width:100%;
				padding: 30rpx;
				background-color: #fff;
				border-bottom: 1px solid $main-gray;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 150rpx;
				.title{
					font-size: 26rpx;
				}
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
					margin-top: 20rpx;
				}
			}
		}
	
</style>
