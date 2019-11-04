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
					<view class="title">售后服务查询</view>
					<view class="head">
						<view class="headItem first" style="width:56%">产品</view>
						<view class="headItem" style="width:12%">退款金额</view>
						<view class="headItem" style="width:12%">申请数量</view>
						<view class="headItem" style="width:10%">状态</view>
						<view class="headItem" style="width:10%">操作</view>
					</view>
					<view class="head">
						<view class="headItem first">服务单号：CBER0000022</view>
					</view>
					<view class="listFrame">
						<view class="list">
							<view class="listItem" style="width:56%">
								<view class="product">
									<image :src="imgPath+'NF80clypcwPftxY6LKp6TH0phSx3wy.jpg'" class="productImg"></image>
									<view class="infoFrame">
										<view class="productTitle">如新华贸骨骼配方</view>
										<view class="info">产品编号：01003331</view>
										<view class="info">规格：180粒</view>
									</view>
								</view>
							</view>
							<view class="listItem" style="width:12%">￥3401.01</view>
							<view class="listItem" style="width:12%">X2</view>
							<view class="listItem" style="width:10%">
								<view class="state">退货完成</view>
								<view class="blue">服务单详情</view>
							</view>
							<view class="listItem" style="width:10%">
			
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady"></block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon,mine],
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'afterSale')
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
		width:1200px;
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
	.product{
		width:100%;
		height: 142px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.productImg{
		width:142px;
		height: 142px;
		flex-shrink: 0;
	}
	.count{
		width:16%;
		text-align: center;
		flex-shrink: 0;
	}
	.infoFrame{
		flex-grow: 1;
		margin-left: 10px;
	}
	.productTitle{
		    padding: 20px 0 10px;
		    margin: 0;
		    font-size: 16px;
		    color: #333;
		    line-height: 25px;
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
		    line-height: 170px;
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
	.phone{}
</style>