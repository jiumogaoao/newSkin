<template>
	<view class="headerCPFrame">
		<view class="headerCP">
			<image src="/static/indexLogo.jpg" id="logo"></image>
			<view class="right">
				<view class="top">
					<view class="topLeft">
						<view class="place"><image src="/static/indexLandmarkIcon.png" id="place"></image>上海</view>
						<view class="nav1">产品目录</view>
						<view class="nav1">加入事业</view>
						<view class="nav1">店铺查询</view>
					</view>
					<view class="topRight">
						<image src="/static/indexSearchIcon.png" id="search"></image>
						<image src="/static/indexUserIcon.png" id="user"></image>
						<div class="goShoppingCar">购物车</div>
					</view>
				</view>
				<view class="bottom">
					<view class="nav2">首页</view>
					<view class="nav2">王牌ageLOC</view>
					<view class="nav2">护肤</view>
					<view class="nav2">身体护理</view>
					<view class="nav2">彩妆</view>
					<view class="nav2">营养补充</view>
					<view class="nav2">新闻中心</view>
					<view class="nav2">品牌故事</view>
				</view>
			</view>
			<view class="nav2ChildFrame">
				<view class="nav2Child">
					<view class="secondNav">
						<view class="secondNavName">二级目录</view>
						<view class="thirdNav">三级目录</view>
					</view>
					<view class="secondNav">
						<view class="secondNavName">二级目录</view>
						<view class="thirdNav">三级目录</view>
					</view>
					<view class="secondNav">
						<view class="secondNavName">二级目录</view>
						<view class="thirdNav">三级目录</view>
					</view>
					<view class="secondNav">
						<view class="secondNavName">二级目录</view>
						<view class="thirdNav">三级目录</view>
					</view>
				</view>
				<view class="showAll">查看所有商品></view>
			</view>
			
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
	.headerCPFrame{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		background-color: #fff;
		z-index:3;
	}
	.headerCP{
		width:1200px;
		height:130px;
		display: flex;
		justify-content:space-between;
		align-items: center;
		margin: auto;
		position: relative;
	}
	#logo{
		width: 112px;
		height:30px;
		flex-shrink: 0;
	}
	.right{
		width:990px;
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	.top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		width:100%;
	}
	.topLeft{
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}
	.nav1{
		color:#999;
		font-size: 12px;
		width:120px;
		height:18px;
		line-height: 18px;
		text-align: center;
		border-right:1px solid #999;
	}
	.place{
		font-size: 12px;
		color:#999;
		display: flex;
		align-items: center;
	}
	#place{
		width:15px;
		height:17px;
		margin-right: 10px;
	}
	.topRight{
		display: flex;
		justify-content: end;
		align-items: center;
		flex-shrink: 0;
	}
	#search{
		width:20px;
		height:20px;
		margin-right: 20px;
	}
	#user{
		width:19px;
		height:21px;
		margin-right: 80px;
	}
	.goShoppingCar{
		width:144px;
		height:32px;
		background-color: #008AB0;
		color:#fff;
		font-size: 12px;
		text-align: center;
		line-height: 32px;
	}
	.bottom{
		display: flex;
		width:100%;
		margin-top: 35px;
		position: relative;
	}
	.nav2{
		flex-grow: 1;
		font-size: 12px;
		color:#212529;
	}
	.nav2ChildFrame{
		width:100%;
		position: absolute;
		top:110px;
		left:0px;
		display: none;
	}
	.nav2Child{
		width:100%;
		display: flex;
	}
	.secondNav{
		margin-right: 60px;
	}
	.secondNavName{
		font-size: 16px;
		color:#333;
	}
	.thirdNav{
		font-size: 12px;
		color:#4a4a4a;
	}
	.showAll{
		font-size: 12px;
		text-align: center;
	}
</style>
