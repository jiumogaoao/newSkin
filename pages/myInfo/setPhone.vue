<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">修改手机号</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="info">修改手机号，您可以通过新手机号进行登录，旧手机号将作废不可以登录</view>
			<view class="frame">
				<view class="list">
					<view class="title">新手机号</view>
					<input placeholder="输入新手机号"/>
				</view>
				<view class="list">
					<view class="title">短信验证码</view>
					<input placeholder="输入新手机号"/>
					<view class="getCode">获取验证码</view>
				</view>
			</view>
			<view class="button" @click="back()">提交</view>
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
		}
		
	}
	/* #endif */
	page{background-color: $main-gray-background;}
	.phone{
		width:750rpx;
		.info{
			width:100%;
			padding: 30rpx;
			font-size: 24rpx;
			color: $main-gray-deep;
		}
		.frame{
			width:100%;
			padding: 0 30rpx;
			margin-top: 20rpx;
			background-color: #fff;
			.list{
				width:100%;
				height: 96rpx;
				border-bottom: 1px solid $main-gray;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.title{
					font-size: 26rpx;
					width:200rpx;
					flex-shrink: 0;
				}
				input{
					flex-grow: 1;
				}
				.getCode{
					font-size: 24rpx;
					color: $main-hl;
				}
			}
		}
		.button{
			width:669rpx;
			height: 80rpx;
			border-radius: 80rpx;
			background-color: $main-hl;
			color: #fff;
			font-size: 26rpx;
			text-align: center;
			line-height: 80rpx;
			margin: auto;
			margin-top: 38rpx;
		}
	}
	
</style>