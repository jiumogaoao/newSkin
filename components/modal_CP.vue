<template>
	<view class="popCP">
		<view class="popFrame" :style="{width:width||'300rpx',height:height||'300rpx',padding:padding||'30rpx'}">
			<view class="title" v-if="title">{{title}}</view>
			<view class="mainFrame">
				<slot></slot>
			</view>
			<view class="buttonFrame">
				<view class="confirm" v-if="confirmText" @click="confirm">{{confirmText}}</view>
				<view class="cancel" v-if="cancelText" @click="cancel">{{cancelText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["title","width","height","padding","confirmText","cancelText"],
		data() {
			return {
				
			};
		},
		methods:{
			confirm(){
				this.$emit('confirm')
			},
			cancel(){
				this.$emit('cancel')
			}
		}
	}
</script>

<style lang="scss">
	.popCP{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		.popFrame{
			background-color: #fff;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			.title{
				width: 100%;
				height: 40px;
				font-size: 14px;
				line-height: 40px;
				font-weight: bold;
				flex-shrink: 0;
			}
			.mainFrame{
				width:100%;
				overflow: auto;
				flex-grow: 1;
			}
			.buttonFrame{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-shrink: 0;
				.cancel{
					width:150px;
					height: 50px;
					border-radius: 50px;
					line-height: 48px;
					border: 1px solid $main-gray;
					font-size: 14px;
					text-align: center;
					color: $main-gray-deep;
				}
				.confirm{
					width:150px;
					height: 50px;
					border-radius: 50px;
					line-height: 50px;
					font-size: 14px;
					text-align: center;
					background-color: #008aaf;
					color: #fff;
				}
			}
		}
	}
</style>
