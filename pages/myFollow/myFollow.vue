<template>
	<view v-if="destop && initReady">
		<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="body">
			<mineNavCP/>
			<view class="info">
				<view class="title">我的收藏</view>
				<view class="productList">
					<productCP/>
					<productCP/>
					<productCP/>
					<productCP/>
					<productCP/>
					<productCP/>
				</view>
			</view>
			
		</view>
		<footerCP/>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import productCP from "@/components/product_CP.vue"
	export default {
		mixins: [allPage,mine],
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
	.productList{
		width:100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>

