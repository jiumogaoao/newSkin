<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef  -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
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
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">我的收藏</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="list">
				<productCP/>
				<productCP/>
				<productCP/>
				<productCP/>
				<productCP/>
				<productCP/>
				<productCP/>
				<productCP/>
			</view>
		</block>
		
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
	.productList{
		width:100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	}
	/* #endif */
	.phone{
			width:750rpx;
			.list{
				background-color: #fff;
				width: 750rpx;
				padding: 30rpx;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
			}
		}
	
</style>

