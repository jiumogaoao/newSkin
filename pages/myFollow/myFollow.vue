<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef  -->
		<block  v-if="destop && initReady">
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
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady"></block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import mine from "@/mixin/mine"
	import needLogon from "@/mixin/needLogon"
	import productCP from "@/components/product_CP.vue"
	export default {
		mixins: [allPage,needLogon,mine],
		components:{productCP},
		onShow: function() {
			this.$store.dispatch('rootST/changeMyPage', 'myFollow')
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
	.productList{
		width:100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	}
	/* #endif */
	.phone{}
	
</style>

