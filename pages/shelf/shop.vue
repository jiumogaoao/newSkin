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
		</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="navBar">
				<view class="left">
					<image class="back" :src="imgPath+'back.png'" @click="back()"></image>
					<image class="notice" :src="imgPath+'xinxi2.0.png'" @click="go('/pages/myNotice/myNotice')"></image>
				</view>
				<view class="center">
					店铺名称或XX品牌专区
				</view>
				<view class="right" @click="go('/pages/login/login')">
					<image class="shoppingCar" :src="imgPath+'tab-cart-current.png'" @click="go('/pages/shoppingCar/shoppingCar')"></image>
					<image class="list" :src="imgPath+'menu01.png'" @click="sideShow()"></image>
				</view>
			</view>
			<image class="bigPic" :src="imgPath+'IpMMLTJCOmjYB0M3Tj5LxtpBTOBb5w.jpg'"/>
			<view class="dsc">如新新动机是NU SKIN首创二合一肌肤保养系统。一次护理，即享更深层净化及促进肌肤更新双重功效。早晚各一次，让您享受活力满满的面部按摩，日复一日，肌肤由内而外焕发透亮光采。</view>
			<tabbarCP :list="sort" :hl="hl" @change="change"/>
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
		.bigPic{
			width: 750rpx;
			height: 400rpx;
			padding-top: 113rpx;
		}
		.dsc{
			padding: 30rpx;
		}
		.productList{
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;
			margin-top: 90rpx;
		}
	}
	
</style>
