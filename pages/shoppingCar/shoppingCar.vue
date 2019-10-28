<template>
	<view v-if="destop && initReady">
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
							    			<a class="submit-btn" style="cursor: pointer;color: #fff;" onclick="checkCart()">去结算</a>
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
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	import checkBoxCP from "@/components/checkBox_CP.vue"
	import productCP from "@/components/product_CP.vue"
	export default {
		mixins: [allPage],
		components:{
			checkBoxCP,
			productCP
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/table.scss';
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
		width: 1200px;
		margin: auto;
	}
	.tapBar{
		width:1200px;
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
		width:1200px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>
