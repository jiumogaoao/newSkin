<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
				<headerCP/>
				<view class="band"></view>
				<view class="nuskinIcon back" @click="back()">&#xe600;</view>
				<view class="inputFrame">
					<view class="nuskinIcon hl">&#xe72f;</view>
					<input/>
					<view class="nuskinIcon">&#xe94f;</view>
				</view>
				<view class="showAllFrame" v-if="showAll">
					<view class="count">搜索“a”找到38个结果</view>
					<tabbarCP :list="l" hl="0" class="tabbarCP"/>
					<view class="productList">
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
						<productCP/>
					</view>
				</view>
				<view class="resultFrame" v-else>
					<view class="title">相关产品</view>
					<view class="productList">
						<view class="product">
							<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
							<view class="right">
								<view class="subTitle">ageLOC TR90</view>
								<view class="title">ageLOC TR90 匀致胶囊</view>
								<view class="price">零售顾客价 ￥1625</view>
							</view>
						</view>
						<view class="product">
							<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
							<view class="right">
								<view class="subTitle">ageLOC TR90</view>
								<view class="title">ageLOC TR90 匀致胶囊</view>
								<view class="price">零售顾客价 ￥1625</view>
							</view>
						</view>
						<view class="product">
							<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
							<view class="right">
								<view class="subTitle">ageLOC TR90</view>
								<view class="title">ageLOC TR90 匀致胶囊</view>
								<view class="price">零售顾客价 ￥1625</view>
							</view>
						</view>
					</view>
					<view class="showAll" @click="next()">查看所有结果</view>
				</view>
				<view class="frame">
					<view class="title">热门关键词</view>
					<view class="optionFrame">
						<view class="dsc">ageloc</view>
						<view class="dsc">ageloc</view>
						<view class="dsc">ageloc</view>
					</view>
				</view>
				<view class="frame">
					<view class="title">搜索历史</view>
					<view class="optionFrame">
						<view class="dsc">a</view>
					</view>
				</view>
				<view style="width: 100%;height:100px"></view>
			</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="top">
				<view class="inputFrame">
					<view class="nuskinIcon">&#xe72f;</view>
					<input/>
				</view>
				<view class="nuskinIcon close" @click="back">&#xe600;</view>
			</view>
			<view style="width:100%;height: 147rpx;"></view>
			<view class="titleFrame">相关产品</view>
			<view class="product">
				<image src="/static/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg"></image>
				<view class="right">
					<view class="dsc">5000元-9999元</view>
					<view class="title">ageLoc Galvanic Spa家庭套装</view>
					<view class="price">零售顾客价 ￥10000</view>
				</view>
			</view>
			<view class="titleFrame">相关文章</view>
			<view class="news">如新现身云栖大会，用“社交+云”重新定义直销</view>
			<view class="news">如新现身云栖大会，用“社交+云”重新定义直销</view>
			<view class="news">如新现身云栖大会，用“社交+云”重新定义直销</view>
			<view class="button">查看所有结果</view>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import tabbarCP from "@/components/tabbar_CP.vue"
	import productCP from "@/components/product_CP.vue"
	export default {
		mixins: [allPage],
		components:{tabbarCP,productCP},
		data() {
			return {
				l:[
					{id:0,name:'产品 (38)'},
					{id:1,name:'文章 (0)'}
				],
				showAll:0
			};
		},
		methods:{
			next(){
				this.showAll=1
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.destop{
		.content{
		display: flex;
		align-items: center;
		flex-direction: column;
		transform-origin: left top;
		}
		.band{
			width:100%;
			height:130px;
			flex-shrink: 0;
		}
		.back{
			width: 1200px;
			text-align: right;
			margin-top: 54px;
			font-size: 12px;
			color: $main-gray-deep;
		}
		.inputFrame{
			width:750px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid $main-gray;
			margin-top: 28px;
			.nuskinIcon{
				font-size: 16px;
			}
			.nuskinIcon.hl{
				color: $main-hl;
			}
			input{
				height: 100%;
				flex-grow: 1;
			}
		}
		.showAllFrame{
			width: 1200px;
			margin: auto;
			margin-top: 100px;
			.title{
				font-size: 16px;
				font-weight: bold;
			}
			.tabbarCP{
				margin-top: 30px;
			}
			.productList{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				margin-top: 30px;
			}
		}
		.resultFrame{
			width: 1200px;
			margin: auto;
			margin-top: 100px;
			.title{
				font-size: 16px;
				font-weight: bold;
			}
			.productList{
				width: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.product{
					margin-top: 18px;
					width:328px;
					height: 122px;
					display: flex;
					image{
						width:122px;
						height:122px;
						border: 1px solid $main-gray;
					}
					.right{
						margin-left: 20px;
						.subTitle{
							font-size: 10px;
							color: $main-gray-deep;
							margin-top: 7px;
						}
						.title{
							margin-top: 14px;
							font-size: 14px;
							font-weight: bold;
							height: 54px;
						}
					}
				}
			}
			.showAll{
				width:200px;
				height:40px;
				background-color: $main-hl;
				color: #fff;
				line-height: 40px;
				text-align: center;
				margin: auto;
				margin-top: 45px;
			}
		}
		.frame{
			width:1200px;
			margin: auto;
			margin-top: 50px;
			.title{
							margin-top: 14px;
							font-size: 14px;
							font-weight: bold;
						}
			.optionFrame{
				margin-top: 30px;
				.dsc{
					font-size: 12px;
					color: $main-gray-deep;
					line-height: 1.5;
				}
			}
			
		}
	}
	/* #endif */
	page{
		background-color: $main-gray-background;
	}
	.phone{
		.top{
			width:750rpx;
			height: 147rpx;
			padding: 0 30rpx;
			display: flex;
			align-items: center;
			position: fixed;
			top:0;
			left: 0;
			background-color: #fff;
			.inputFrame{
				width:526rpx;
				height: 82rpx;
				background-color: $main-gray-background;
				display: flex;
				align-items: center;
				border-radius: 5rpx;
				.nuskinIcon{
					color: $main-hl;
					font-size: 40rpx;
					margin-left: 16rpx;
					flex-shrink: 0;
				}
				input{
					flex-grow: 1;
				}
			}
			.close{
				margin-left: 46rpx;
				font-size: 40rpx;
				color: $main-gray-deep;
			}
		}
		.titleFrame{
			width:750rpx;
			padding: 30rpx;
			background-color: #fff;
			font-size: 26rpx;
		}
		.product{
			width:750rpx;
			height: 250rpx;
			background-color: #fff;
			padding: 30rpx;
			display: flex;
			align-items: center;
			image{
				width:208rpx;
				height: 208rpx;
				border: 1px solid $main-gray;
				flex-shrink: 0;
			}
			.right{
				margin-left: 30rpx;
				height: 208rpx;
				flex-flow: 1;
				.dsc{
					font-size: 24rpx;
					color: $main-gray-deep;
				}
				.title{
					font-size: 26rpx;
					margin-top: 35rpx;
				}
				.price{
					font-size: 24rpx;
					color: $main-hl;
					margin-top: 28rpx;
				}
			}
		}
		.news{
			width: 100%;
			padding: 30rpx;
			background-color: #fff;
			font-size: 24rpx;
			color: $main-gray-deep;
		}
		.button{
			width:300rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			color: #fff;
			background-color: $main-hl;
			font-size: 30rpx;
			margin: auto;
			margin-top: 80rpx;
		}
	}
</style>
