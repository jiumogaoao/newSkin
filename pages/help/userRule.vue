<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<navBarCP>
				<view class="nuskinIcon navBarBack" slot="left" @click="back">&#xe63d;</view>
				<text slot="center">如新海外购用户注册协议</text>
			</navBarCP>
			<view style="width:100%;height: 55px;"></view>
			<view class="list">
				<view class="title">如新用户注册协议》</view>
				
				<view class="dsc">本协议是您与如新网站（简称本站，网址：https://china.nuskin.com/）所有者（以下简称为如新）之间就如新网站服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击同意并继续按钮后，本协议即构成对双方有约束力的法律文件。</view>
				
				<view class="dsc">第1条 本站服务条款的确认和接纳</view>
				
				<view class="dsc">1.1本站的各项电子服务的所有权和运作权归如新所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。</view>
				
				<view class="dsc">1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。</view>
				
				<view class="dsc">1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。</view>
				
				<view class="dsc">1.4本协议项下的用户是指在如新网站注册的零售顾客、优惠顾客、星级顾客或及拥有如新账号并另行与如新签订合同的如新事业经营伙伴（包括但不限于如新直销员，如新销售员工，如新准经销商、如新经销商等）。</view>
				
				<view class="dsc">1.5如新保留依据中华人民共和国之法律允许的范围内独自</view>

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
		}
		
	}
	/* #endif */
	page{background-color: $main-gray-background;}
	.phone{
		.list{
			width: 750rpx;
			padding: 30rpx;
			.titel{
				font-size: 26rpx;
			}
			.dsc{
				font-size: 24rpx;
				color: $main-gray-deep;
				margin-top: 20rpx;
				line-height: 1.3;
			}
			
		}
	}
	
</style>
