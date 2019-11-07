<template>
	<view :class="destop?'destop':'phone'">
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
			<productCP v-for="(v,i) in product"
			:key="v.pId" 
			:follow="v.follow" 
			:img="v.img" 
			:band="v.band" 
			:name="v.name" 
			:taxes="v.taxes" 
			:price="v.price" 
			:id="v.pId"
			@click="go('/pages/detail/detail?id='+v.pId)"/>
		</view>
		<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="head">
				<image class="back" :src="imgPath+'back.png'" @click="back"></image>
				商品列表
			</view>
			<tabbarCP style="margin-top:40rpx;" :list="sort" :hl="hl" @change="change"/>
			<view class="productList">
				<productCP v-for="(v,i) in product" 
				:key="v.pId" 
				:follow="v.follow" 
				:img="v.img" 
				:band="v.band" 
				:name="v.name" 
				:taxes="v.taxes" 
				:price="v.price" 
				:id="v.pId"
				@click="go('/pages/detail/detail?id='+v.pId)"/>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import productCP from "@/components/product_CP.vue"
	import tabbarCP from "@/components/tabbar_CP.vue"
	export default {
		mixins: [allPage],
		components:{productCP,tabbarCP},
		data() {
			return {
				hl:0
			};
		},
		methods:{
			change(num){
				this.hl = num;
			}
		},
		computed:{
			sort(){return this.$store.state.shelfST.sort},
			product(){return this.$store.state.shelfST.product}
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
		.shelfTitle{
			margin-top: 29px;
			text-align: center;
			font-size: 30px;
			line-height: 30px;
			color: #333333;
			margin-bottom: 50px;
		}
		.optionFrame{
			@include frame-width;
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
			@include frame-width;
			margin: auto;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 25px;
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
		.productList{
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;
			margin-top: 20rpx;
		}
	}
	
</style>
