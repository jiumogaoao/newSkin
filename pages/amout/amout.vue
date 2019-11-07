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
				<view class="title">年度购买额度</view>
				<view class="dsc">根据海关规定，跨境电子商务零售进口个人年度交易限值人民币26000元，即一个自然年内个人所有跨境电商平台的总购货额，超过限额时订单将被退 单，海关已开通“跨境电子商务年度个人额度查询平台”，可登录查询总额及明细。</view>
				<view class="button">点击查询</view>
				<view class="amoutListTitle">如新海外购年度交易总额查询</view>
				<view class="noMessage">您尚未成功购买过商品，没有可以查询的交易金额</view>
			</view>
			
		</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
							<image class="back" :src="imgPath+'back.png'" @click="back"></image>
							年度购买额度
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
			this.$store.dispatch('rootST/changeMyPage', 'amout')
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
		.dsc{
			font-size: 14px;
			    line-height: 22px;
			    letter-spacing: 1px;
			    color: #808080;
		}
		.button{
			    margin: 40px 0 0;
			    width: 140px;
			    height: 34px;
			    background-color: #008ab0;
			    border-radius: 17px;
			    font-size: 14px;
			    letter-spacing: 1px;
			    color: #ffffff;
			    text-align: center;
			    line-height: 34px;
		}
		.amoutListTitle{
			margin: 70px 0 0;
			    font-size: 14px;
			    color: #333333;
			    letter-spacing: 1px;
			    line-height: 45px;
			    font-weight: 600;
			    border-bottom: 1px solid #F5F5F5;
		}
		.noMessage{
			    font-size: 12px;
			    letter-spacing: 1px;
			    color: #333333;
			    text-align: center;
			    line-height: 95px;
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
