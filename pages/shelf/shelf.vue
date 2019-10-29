<template>
	<view>
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="shelfTitle">ageLOC换新系列</view>
		<view class="optionFrame" style="margin-bottom: 18px;">
			<view class="optionTitle">系列</view>
			<view class="optionItem">ageLOC精油系列</view>
			<view class="optionItem hl">ageLOC焕新系列</view>
		</view>
		<view class="optionFrame">
			<view class="optionTitle">排序</view>
			<view class="optionItem hl">综合排序</view>
			<view class="optionItem">销售排序</view>
			<view class="optionItem">人气排序</view>
			<view class="optionItem">价格正序</view>
			<view class="optionItem">价格倒序</view>
		</view>
		<view class="productList">
			<productCP/>
			<productCP/>
			<productCP/>
			<productCP/>
			<productCP/>
			<productCP/>
			<productCP/>
			<productCP/>
		</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady"></block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import productCP from "@/components/product_CP.vue"
	export default {
		mixins: [allPage],
		components:{productCP},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.band{
		width:100%;
		height:130px;
	}
	.shelfTitle{
		margin-top: 29px;
		text-align: center;
		font-size: 30px;
		line-height: 30px;
		color: #333333;
		margin-bottom: 50px;
	}
	.optionFrame{
		width:1200px;
		background: #f5f5f5;
		overflow: hidden;
		margin: auto;
		display: flex;
		align-items: center;
		height: 52px;
	}
	.optionTitle{
		font-weight: 700!important;
		font-size: 14px;
		padding-left: 20px;
		margin-right: 60px;
	}
	.optionItem{
		font-size: 14px;
		padding: 0 20px;
	}
	.optionItem.hl{
		background-color: rgb(236, 236, 236);
		color: #37b0c9;
		height: 52px;
		line-height: 52px;
	}
	.productList{
		width: 1200px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 25px;
	}
</style>
