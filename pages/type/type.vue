<template>
	<view :class="destop?'destop':'phone'">
		<block if="!destop">
			<view class="header">分类</view>
			<view class="frame">
				<view class="left">
					<view :class="{item:1,hl:i==nav}" v-for="(v,i) in secondNav" :key="i" @click="setNav(i)">{{v.nav}}</view>
				</view>
				<view class="right">
					<block v-for="(v,i) in secondNav[nav].child" :key="i">
						<view class="item">{{v.nav}}</view>
						<view class="childItem" v-for="(n,o) in v.child" :key="o" @click="go('/pages/shelf/shelf?id='+n.id)">{{n.nav}}</view>
					</block>
				</view>
			</view>
			<headerCP/>
		</block>
	</view>
</template>

<script>
	import allPage from "@/mixin/allPage"
	export default {
		mixins: [allPage],
		onShow: function() {
			this.$store.dispatch('rootST/changeFootNav', 'type')
		},
		data() {
			return {
				nav:0
			};
		},
		computed:{
			secondNav(){
				return this.$store.state.rootST.secondNav
			}
		},
		methods:{
			setNav(num){
				this.nav = num
			}
		}
	}
</script>

<style lang="scss" scoped>
	.phone{
		.header{
			width:750rpx;
			height:20rpx;
			line-height: 20rpx;
			text-align: center;
			position: fixed;
			top:0;
			left: 0;
			font-size: 16px;
			background-color: #fff;
		}
		.frame{
			position: fixed;
			top:20rpx;
			left:0;
			width:750rpx;
			bottom:50rpx;
			display: flex;
			justify-content: space-between;
			.left{
				width:240rpx;
				background-color: #f6f7f7;
				flex-shrink: 0;
				.item{
					width:240rpx;
					height: 110rpx;
					line-height: 110rpx;
					text-align: center;
					font-size: 28rpx;
				}
				.item.hl{
					background-color: #fff;
				}
			}
			.right{
				flex-grow: 1;
				background-color:#fff;
				.item{
					width: 100%;
					height: 78rpx;
					color: #303133;
					font-size: 28rpx;
					line-height: 78rpx;
					text-align: center;
					background-color: #ddd;
				}
				.childItem{
					width: 100%;
					height: 78rpx;
					color: #303133;
					font-size: 22rpx;
					line-height: 78rpx;
					text-align: center;
				}
			}
		}
	}
</style>
