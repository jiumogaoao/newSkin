<template>
	<view>
		<headerCP/>
		<view class="band"></view>
		<view class="shelf">
			<view class="shelfTitleFrame">
				<image src="/static/indexLeaf.jpg" class="shelfTitleBG"></image>
				<view class="shelfTitle">彩妆系列</view>
				<view class="shelfTitleLine"></view>
			</view>
			<view class="shelfProductList">
				
			</view>
		</view>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.band{
		width:100%;
		height:200px;
	}
	.shelf{
		width:1200px;
		margin: auto;
	}
	.shelfTitleFrame{
		position:relative;
		margin: auto;
		width: 240px;
		margin-top: 45px;
	}
	.shelfTitleBG{
		width:215px;
		height:144px;
		position: absolute;
		top: -53px;
		left: 24px;
	}
	.shelfTitle{
		font-size: 32px;
		color:#212529;
		position: relative;
		z-index: 3;
	}
	.shelfTitleLine{
		width:40px;
		height:8px;
		background-color: #77C4D6;
		position: absolute;
		top: 60px;
		left: 40px;
	}
</style>
