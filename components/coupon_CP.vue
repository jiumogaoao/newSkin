<template>
	<view class="couponCP">
		<view class="top">
			￥<span class="big">100</span> 满￥1000可用
		</view>
		<view class="bottom">
			<view class="title">满1000元立减100元</view>
			<view class="item">券编号：00000305</view>
			<view class="item">使用范围：全部产品可用</view>
			<view class="item">有效期：2019.10.21 - 2019.11.19</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.couponCP{
		width: 342px;
		    height: 198px;
		    border-radius: 10px;
		    background-color: #fff;
		    margin: 10px;
	}
	.top{
		width: 340px;
		    height: 86px;
		    border-top-right-radius: 8px;
		    border-top-left-radius: 8px;
		    background-color: #33a1c0;
		    position: relative;
		    line-height: 86px;
		    font-size: 16px;
		    color: #fff;
		    font-weight: bold;
		    text-align: center;
	}
	.big{
		font-size: 40px;
	}
	.bottom{
		padding: 11px 22px;
	}
	.title{
		font-size: 14px;
		    color: #000000;
			font-weight: bold;
	}
	.item{
		font-size: 14px;
		    color: #808080;
		    line-height: 22px;
	}
</style>
