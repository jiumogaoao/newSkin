<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headerCP/>
		<view class="band"></view>
		<breadcrumbsCP/>
		<view class="search">
			<input class="searchInput"/>
			<image :src="imgPath+'search-blue.png'" class="searchIcon"></image>
		</view>
		<view class="tableFrame">
			<table class="table" style="margin-top: 39px;">
							  	<thead style="background-color: #f5f5f5;">
							    <tr>
							      	<th scope="col" style="padding: 0px;">
										<view class="checkBoxLabel">
											<checkBoxCP style="margin-right: 10px;"></checkBoxCP><view>选择</view>
										</view>
							      	</th>
							      	<th scope="col">产品</th>
							      	<th scope="col">单价</th>
							      	<th scope="col">数量</th>
							      	<th scope="col">小计</th>
							      	<th scope="col">操作</th>
							    </tr>
							  	</thead>
							  	<tbody>
													<tr class="bonded_area">
								      	<td scope="col" style="padding: 0;">
								      		<view class="checkBoxLabel">
								      			<checkBoxCP style="margin-right: 10px;"></checkBoxCP><view>选择</view>
								      		</view>
										</td>
								      	<td scope="col">广州南沙保税仓</td>
								      	<td scope="col" colspan="4">
											<a class="haicha" style="float: right;font-size: 14px;color: #ff69b0;">还差￥575&gt;</a>
											<a class="full-reduction" style="float: right;font-size: 14px;color: #333;margin-right: 60px;">满1000减50活动</a>
											<div class="hot-tag" style="float: right;">
																						<span>满减</span>
																				</div>
								      	</td>
								    </tr>
								    							<tr class="item">
									    	<td scope="col" class="item-chk" data-bondedwh="1">
									    								    			<checkBoxCP></checkBoxCP>
																	    	</td>
									    	<td class="inner">
												<div class="item-pic">
													<img src="http://www.tegou100.com/attachment/images/1/2019/09/uk4qBqifizYppQBnsfsOFetqpZ1En1.jpg" class="item-pic-img">
												</div>
												<div class="item-info">
													<div class="item-basic-info">
														<a href="/index/shop/productdetail/id/241.html" target="_blank" class="item-title">ageLOC焕新系列-日霜 25ml</a>
														<div class="item-props">
															<p class="sku-line" style="margin-bottom: 12px;">产品编号：29003900</p>
															<p class="sku-line">规格：30ml</p>
														</div>
													</div>
												</div>
									    	</td>
									    	<td class="inner">
									    		<em class="retail-price" data-price="425.00">零售价：￥425.00</em>
									    		<em class="taxes-price">预计税费：￥38.67</em>
									    	</td>
									    	<td class="inner">
									    		<view class="countButtom" data-id="786">
									    			<view class="countSub">-</view>
													<input class="countInput"/>
													<view class="countAdd">+</view>
									    		</view>
									    	</td>
									    	<td class="inner">
									    		<em class="sum-price">￥425.00</em>
									    	</td>
									    	<td class="inner">
												<a class="del" data-id="786" data-optionid="615">删除</a>
												<a class="collection" onclick="collection(this,241,1)" data-status="0" data-goodsid="241">收藏</a>
									    	</td>
									    </tr>
							    					    <tr class="float-bar-holder">
							    	<td scope="col" style="padding: 0;">
							    		<view class="checkBoxLabel">
							    			<checkBoxCP style="margin-right: 10px;"></checkBoxCP><view>选择</view>
							    		</view>
									</td>
							    	<td scope="col" colspan="5">
							    		<div class="operations">
							    			<div class="fleft">
							    				<a id="SelectedItemsCount">全选中1件</a>
							    				<a style="margin-left: 50px;margin-right: 17px;color: #008ab0;cursor: pointer;" id="bat_del_items">删除</a>
							    				<a style="cursor: pointer;" id="bat_add_collection">加入收藏</a>
							    			</div>
							    			<div class="fright">
							    				<!-- <a href="">消耗积分：900</a> -->
							    				<a id="totalPrice">总价：￥425.00</a>
							    			</div>
							    		</div>
							    		<div class="btn-area">
							    			<a class="submit-btn" style="cursor: pointer;color: #fff;" @click="go('/pages/comfirm/comfirm')">去结算</a>
							    		</div>
							    	</td>
							    </tr>
							  </tbody>
							</table>
		</view>
		<view class="tapBar">
			<view class="tap hl">我的收藏</view>
			<view class="tap">我买过的</view>
		</view>
		<view class="productList" v-if="tap==0">
			<productCP v-for="(v,i) in followList"
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
		<view class="productList" v-else>
			<productCP v-for="(v,i) in historyList"
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
			<view class="header">购物车</view>
			<view class="list" v-for="(v,i) in warehouse" :key="v.id">
				<view class="top">
					<view class="warehouse">
						<checkBoxCP class="checkBoxCP"/>
						<view class="name">{{v.name}}</view>
					</view>
					<view class="offerFrame" v-for="(n,o) in v.activity" :key="o">
						<view class="left">
							<view class="type">{{n.type?'满折':'满减'}}</view>
							<view class="message" v-for="(x,y) in n.option" :key="x.key">{{x.name}}</view>
						</view>
						<view class="right">还差￥940 ></view>
					</view>
				</view>
				<view class="product" v-for="(n,o) in v.list" :key="n.pId">
					<checkBoxCP class="checkBoxCP"/>
					<image class="productImg" :src="n.img"/>
					<view class="infoFrame">
						<view class="infoTop">
							<view class="title">{{n.name}}</view>
							<view class="id">产品编号：{{n.capacityKey}}</view>
							<view class="taxt">{{n.taxes?('含税￥'+n.taxes):'不含税'}}</view>
						</view>
						<view class="infoBottom">
							<view class="price">￥{{n.price}}</view>
							<view class="countFrame">
								<view class="sub">-</view>
								<input class="count" :value="n.count"/>
								<view class="add">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="tapBar">
				<view :class="{tap:1,hl:tap==0}">我的收藏 <view class="line" v-if="tap==0"></view></view>
				<view :class="{tap:1,hl:tap==1}">我买过的 <view class="line" v-if="tap==1"></view></view>
			</view>
			<view class="productList" v-if="tap==0">
				<productCP v-for="(v,i) in followList" 
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
			<view class="productList" v-else>
				<productCP v-for="(v,i) in historyList" 
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
			<view style="width:750rpx;height:200rpx;"></view>
			<view class="totalFrame">
				<view class="left">
					<checkBoxCP/>
					<view class="state">清空</view>
				</view>
				<view class="right">
					<view class="rightLeft">
						<view class="total">总价：<text class="blue">￥1000.00</text></view>
						<view class="discount">优惠：-100.00元</view>
					</view>
					<view class="go" @click="go('/pages/comfirm/comfirm')">去结算</view>
				</view>
			</view>
			<headerCP/>
		</block>
		
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import checkBoxCP from "@/components/checkBox_CP.vue"
	import productCP from "@/components/product_CP.vue"
	import needLogon from "@/mixin/needLogon"
	export default {
		mixins: [allPage,needLogon],
		onShow: function() {
			this.$store.dispatch('rootST/changeFootNav', 'shoppingCar')
		},
		components:{
			checkBoxCP,
			productCP
		},
		data() {
			return {
				tap:0
			};
		},
		computed:{
			warehouse(){return this.$store.state.shoppingCarST.warehouse},
			followList(){return this.$store.state.followST.list},
			historyList(){return this.$store.state.historyST.list}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/table.scss';
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
	.search{
		position: relative;
		width: 760px;
		margin: 0 auto;
		margin-bottom: 45px;
		height:52px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #cdcdcd;
		border-radius: 25px;
	}
	.searchInput{
		flex-flow: 1;
		border: none;
		background-color:transparent;
	}
	.searchIcon{
		width: 24px;
		height:24px;
		margin-right: 20px;
	}
	.tableFrame{
		@include frame-width;
		margin: auto;
	}
	.tapBar{
		@include frame-width;
		margin: auto;
		height: 64px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dee2e6;
	}
	.tap{
		font-size: 16px;
		padding: 0 20px;
		color: #333;
	}
	.tap.hl{
		color: #008ab0;
	}
	.productList{
		margin-top: 20px;
		@include frame-width;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	}
	/* #endif */
	.phone{
		    background: #f4f4f4;
			.header{
				width:100%;
				height:80rpx;
				background-color: #fff;
				line-height: 80rpx;
				text-align: center;
			}
			.list{
				width:750rpx;
				margin-top: 20rpx;
				background-color: #fff;
				.top{
					width:100%;
					.warehouse{
						width:100%;
						height: 90rpx;
						display: flex;
						align-items: center;
						.checkBoxCP{
							margin-left: 40rpx;
						}
						.name{
							margin-left: 10rpx;
							color: #333;
							    font-size: 28rpx;
							    line-height: 90rpx;
						}
					}
					.offerFrame{
						width:100%;
						height:80rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.left{
							display: flex;
							align-items: center;
							.type{
								color: #ffad43;
								    font-size: 26rpx;
								    border: 1px solid #ffad43;
								    padding: 2rpx 20rpx;
								    border-radius: 30rpx;
									margin-left: 40rpx;
							}
							.message{
								color: #333;
								    font-size: 28rpx;
								    padding-left: 20rpx;
							}
						}
						.right{
							margin-right: 40rpx;
							color: #ff69b0;
							    font-size: 28rpx;
						}
					}
				}
				.product{
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 250rpx;
					.checkBoxCP{
						margin-left: 40rpx;
						flex-shrink: 0;
					}
					.productImg{
						width:178rpx;
						height:178rpx;
						margin-left: 20rpx;
						flex-shrink: 0;
					}
					.infoFrame{
						flex-grow: 1;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.title{
							font-size: 30rpx;
							    color: #303133;
							    height: 40rpx;
							    line-height: 40rpx;
						}
						.id{
							font-size: 24rpx;
							    color: grey;
							    height: 40rpx;
							    line-height: 40rpx;
						}
						.taxt{
							color: #ff69b0;
							    width: 80rpx;
							    height: 38rpx;
							    border: 1px solid #ff69b0;
							    border-radius: 50rpx;
							    font-size: 25rpx;
							    text-align: center;
							    line-height: 36rpx;
							    margin-top: 20rpx;
						}
						.infoBottom{
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding-bottom: 20rpx;
							.price{
								    color: #37b0c9;
								    font-size: 32rpx;
							}
							.countFrame{
								display: flex;
								align-items: center;
								margin-right: 40rpx;
								.sub{
									background-color: #fff;
									    width: 60rpx;
									    height: 50rpx;
									    text-align: center;
									    padding: 0;
									    font-size: 30rpx;
									    border: 1px solid #ccc;
									border-right: none;
									    border-top-left-radius: 6rpx;
									    border-bottom-left-radius: 6rpx;
								}
								.count{
									background-color: #fff;
									    width: 60rpx;
									    height: 50rpx;
									    text-align: center;
									    padding: 0;
									    font-size: 30rpx;
									    border: 1px solid #ccc;
								}
								.add{
									background-color: #fff;
									    width: 60rpx;
									    height: 50rpx;
									    text-align: center;
									    padding: 0;
									    font-size: 30rpx;
									    border: 1px solid #ccc;
									border-left: none;
									    border-top-right-radius: 6rpx;
									    border-bottom-right-radius: 6rpx;
								}
							}
						}
					}
				}
			}
			.tapBar{
				margin-top: 20rpx;
				width:750rpx;
				height: 125px;
				    background: #fff;
				    padding-top: 30px;
				display: flex;
				align-items: center;
				.tap{
					width:50%;
					height: 125px;
					line-height: 125px;
					text-align: center;
					font-size: 28px;
					    color: #333;
					position: relative;
					.line{
						width:20%;
						height:6rpx;
						background-color: #37b0c9;
						position:absolute;
						left:40%;
						bottom:10rpx;
					}
				}
				.hl{
					color: #37b0c9;
				}
			}
			.productList{
				width: 750rpx;
				padding-top: 10rpx;
				background-color: #fff;
				display: flex;
				justify-content: space-evenly;
				flex-wrap: wrap;
			}
			.totalFrame{
				width:750rpx;
				height:100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: fixed;
				left: 0rpx;
				bottom: 110rpx;
				z-index: 95;
				background-color: rgba(255,255,255,0.9);
				.left{
					display: flex;
					align-items: center;
					margin-left: 20rpx;
					.state{
						margin-left: 10rpx;
					}
				}
				.right{
					display: flex;
					align-items: center;
					margin-right: 20rpx;
					.rightLeft{
						margin-right: 10rpx;
						.blue{color:#37b0c9}
						.discount{
							margin-top: 10rpx;
						}
					}
					.go{
						padding: 10rpx 20rpx;
						background-color: #37b0c9;
						color:#fff;
						border-radius: 20rpx;
					}
				}
			}
	}
	
</style>
