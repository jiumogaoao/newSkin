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
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
							<image class="back" :src="imgPath+'back.png'" @click="back"></image>
							消息中心
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
