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
				<view class="title">售后服务查询</view>
				<tabbarCP  :list="[{id:0,name:'分享注册'},{id:1,name:'分享产品'},{id:2,name:'分享订单'}]" :hl="0"/>
				<view class="head">
					<view class="headItem first blue">累计注册人数：0</view>
				</view>
				<view class="listFrame">
					<view class="list">
						<view class="listItem" style="width:50%">姓名</view>
						<view class="listItem" style="width:25%">注册手机号</view>
						<view class="listItem" style="width:25%">注册时间</view>
					</view>
				</view>
			</view>
			
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
							<image class="back" :src="imgPath+'back.png'" @click="back"></image>
							我的分享
						</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,mine,needLogon],
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myShare')
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