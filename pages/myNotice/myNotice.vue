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
				<view class="head">
					<checkBoxCP class="checkBox"/><view class="text">全选</view><view class="readed">标记为已读</view>
				</view>
				<view class="list">
					<checkBoxCP class="checkBox"/>
					<view class="messageFrame">
						<view class="left">
							<view class="top">
								<view class="messageTitle">订单已提交，等待支付</view>
								<view class="messageDetail">如新華茂骨骼配方 180粒; 美国如新华茂儿童如沛营养素 咀嚼片(新配方) 90粒;</view>
							</view>
							<view class="date">2019.10.25 13:45:57</view>
						</view>
						<view class="right">
							<view class="button">订单跟踪</view>
							<view class="blue">查看详情</view>
						</view>
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
				<text slot="center">消息中心</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="list" @click="go('/pages/myNotice/noticeDetail')">
				<view class="top">
					<view class="type">订单跟踪</view>
					<view class="date">2019.04.12 12:36:53</view>
				</view>
				<view class="bigTitle">订单已提交，等待支付</view>
				<view class="bottom">
					<view class="left">
						<view class="title">清如新盈透三校保护系列系列【礼盒版】</view>
						<view class="subTitle">产品编号：123212</view>
						<view class="dsc">订单编号：CBE1234567</view>
					</view>
					<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
				</view>
			</view>
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
			margin-bottom: 10px;
	}
	.checkBox{
		margin-left: 10px;
		margin-right: 20px;
	}
	.text{
		margin-right: 60px;
	}
	.readed{
		    width: 100px;
		    height: 32px;
		    border-radius: 4px;
		    border: 1px solid #d6d6d6;
		    text-align: center;
		    line-height: 32px;
		    cursor: pointer;
	}
	.list{
		display: flex;
		align-items: center;
		margin-top: 20px;
	}
	.messageFrame{
		padding: 15px 0 0 15px;
		    vertical-align: middle;
		    width: 900px;
		    height: 105px;
		    background-color: #f7f7f7;
			display: flex;
			align-items: center;
			justify-content: space-between;
	}
	.left{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.messageTitle{
		font-size: 14px;
		    letter-spacing: 1px;
		    color: #333333;
		    line-height: 25px;
	}
	.messageDetail{
		    font-size: 12px;
		    letter-spacing: 1px;
		    color: #333333;
		    line-height: 25px;
			text-overflow: ellipsis;
			    white-space: nowrap;
			    overflow: hidden;
			    width: 700px;
	}
	.date{
		font-size: 12px;
		    letter-spacing: 1px;
		    color: #808080;
		    line-height: 35px;
	}
	.right{
		display: flex;
		justify-content: center;
		align-items: center;
		width:170px;
		flex-direction: column;
	}
	}
	/* #endif */
	page{
		background-color: $main-gray-background;
	}
	.phone{
			width:750rpx;
			.list{
				width: 750rpx;
				padding: 30rpx;
				background-color: #fff;
				margin-top: 20rpx;
				.top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.type{
						width:146rpx;
						height: 48rpx;
						border: 1px solid $main-hl;
						border-radius: 48rpx;
						color: $main-hl;
						font-size: 24rpx;
						text-align: center;
						line-height: 46rpx;
					}
					.date{
						font-size: 22rpx;
						color: $main-gray-deep;
					}
				}
				.bigTitle{
					font-size: 26rpx;
					margin-top: 35rpx;
				}
				.bottom{
					display: flex;
					justify-content: space-between;
					margin-top: 30rpx;
					.left{
						.title{
							font-size: 24rpx;
						}
						.subTitle{
							font-size: 22rpx;
							margin-top: 15rpx;
							color: $main-gray-deep;
						}
						.dsc{
							font-size: 22rpx;
							margin-top: 38rpx;
							color: $main-gray-deep;
						}
					}
					image{
						width: 150rpx;
						height:150rpx;
						border: 1px solid $main-gray;
					}
				}
			}
		}
	
</style>
