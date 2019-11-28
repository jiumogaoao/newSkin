<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="shelfTitle">ageLOC换新系列</view>
		<view class="optionFrame" style="margin-bottom: 18px;">
			<view class="optionTitle">系列</view>
			<view class="optionItem" v-for="(v) in shelf" :key="v.id">{{v.name}}</view>
		</view>
		<view class="optionFrame">
			<view class="optionTitle">排序</view>
			<view :class="{optionItem:1,hl:v.key==key}" v-for="(v,i) in sort" :key="'sort'+i" @click="update(v.key)">{{v.name}}</view>
		</view>
		<view class="productList">
			<productCP v-for="(v) in product"
			:key="v.pId" 
			:follow="v.follow" 
			:img="v.img" 
			:band="v.band" 
			:name="v.name" 
			:taxes="v.taxes" 
			:price="v.price" 
			:id="v.pId"
			@f="f"
			@c="go('/pages/detail/detail?id='+v.pId)"/>
		</view>
		<footerCP/>
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarIcon" slot="left" @click="go('/pages/myNotice/myNotice')">&#xe63f;</view>
				<text slot="center">清洁</text>
				<view class="nuskinIcon navBarIcon" slot="right" @click="go('/pages/shoppingCar/shoppingCar')">&#xe6d5;</view>
				<view class="nuskinIcon navBarIcon" slot="right" @click="sideShow()">&#xe656;</view>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<tabbarCP class="tabbarCP" :list="sort" :hl="key" @change="update"/>
			<view class="productList">
				<productCP v-for="(v) in product" 
				:key="v.pId" 
				:follow="v.follow" 
				:img="v.img" 
				:band="v.band" 
				:name="v.name" 
				:taxes="v.taxes" 
				:price="v.price" 
				:id="v.pId"
				@f="f"			
				@c="go('/pages/detail/detail?id='+v.pId)"/>
			</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import productCP from "@/components/product_CP.vue"
	import tabbarCP from "@/components/tabbar_CP.vue"
	import {postFetch} from "@/util/request_UT.js"
	export default {
		mixins: [allPage],
		components:{productCP,tabbarCP},
		data() {
			return {

			};
		},
		methods:{
			f(){
				alert(f)
			},
			update(key){
				this.$store.dispatch("shelfST/update",{key:key})
			},
			push(){
				this.$store.dispatch("shelfST/push")
			}
		},
		computed:{
			kid(){return this.$store.state.shelfST.kid},
			key(){return this.$store.state.shelfST.key},
			pageNo(){return this.$store.state.shelfST.pageNo},
			pageSize(){return this.$store.state.shelfST.pageSize},
			sort(){return this.$store.state.shelfST.sort},
			product(){return this.$store.state.shelfST.product},
			shelf(){return this.$store.state.shelfST.shelf}
		},
		onLoad(props){
			this.$store.dispatch("shelfST/setId",props.id)
			this.$store.dispatch("shelfST/update",{key:0})
		},
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
		flex-shrink: 0;
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
			flex-shrink: 0;
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
		.navBar{
			width:750rpx;
			height:113rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			top:0;
			left:0;
			background-color: #fff;
			z-index: 3;
			.left{
				width:200rpx;
				display: flex;
				align-items: center;
				image{
					width:42rpx;
					height:42rpx;
					margin-left: 20rpx;
				}
			}
			.center{
				flex-grow: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 33rpx;
			}
			.right{
				display: flex;
				align-items: center;
				width:200rpx;
				justify-content: flex-end;
				image{
					width:42rpx;
					height:42rpx;
					margin-right: 20rpx;
				}
			}
		}
		.tabbarCP{
			// padding-top: 112rpx;
		}
		.productList{
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;
			margin-top: 40rpx;
		}
	}
	
</style>
