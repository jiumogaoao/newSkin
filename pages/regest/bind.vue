<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<view class="head">
				<view class="left">
					<image class="logo" :src="imgPath+'indexLogo.jpg'"></image>
					<view class="welcome">欢迎注册</view>
				</view>
				<view class="back">返回首页</view>
			</view>
			<view class="center">
				<view class="row">
					<view class="label">CN号*</view>
					<view class="inputFrame">
						<input class="input" v-model="id"/><view class="error" v-if="idError">{{idError}}</view>
					</view>
				</view>
				<view class="row">
					<view class="label">CN号密码*</view>
					<view class="inputFrame">
						<input class="input" v-model="password"/><view class="error" v-if="passwordError">{{passwordError}}</view>
					</view>
				</view>
				<view class="agreeFrame">
					<chechBoxCP :checked="agree" @click="toggleAgree"/>
					<view class="text">绑定如新CN号需同意</view>
					<view class="blue">《如新海外购推广商申请书》</view>
				</view>
				<view class="buttonFrame">
					<view class="cancel" @click="go('/pages/index/index')">取消</view>
					<view class="submit" @click="bind">绑定</view>
				</view>
			</view>
			
			<footerCP/>
			</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
				<view class="navBar">
					<view class="left">
						<image class="back" :src="imgPath+'back.png'" @click="back()"></image>
					</view>
					<view class="center">
						推广商申请
					</view>
					<view class="right" @click="go('/pages/index/index')">
						跳过
					</view>
				</view>
				<view style="width:100%;height: 55px;"></view>
				<view class="listFrame">
					<view class="list">
						<input class="input" placeholder="请输入CN号" v-model="id"/>
					</view>
					<view class="list">
						<input class="input" placeholder="请输入CN号密码" v-model="password"/>
						<image class="eye" :src="imgPath+'yanjing.png'"></image>
					</view>
				</view>
				<view class="ruleFrame">
					<chechBoxCP :checked="agree" @click="toggleAgree"/>
					<view class="text">绑定CN号需同意</view>
					<view class="blue">《如新海外购推广商申请书》</view>
				</view>
				<view class="logon" @click="bind">绑定</view>
		</block>
	</view>
</template>
<script>
	import allPage from "@/mixin/allPage"
	import chechBoxCP from "@/components/checkBox_CP.vue"
	export default {
		mixins: [allPage],
		components:{chechBoxCP},
		data() {
					return {
						id:"",
						password:"",
						agree:false,
						idError:'',
						passwordError:''
					};
				},
		methods:{
			toggleAgree(){
				this.agree = !this.agree
			},
			idCheck(){
				if(!this.id.length){
					if(this.destop){
						this.idError = '请输入CN号'
					}else{
						uni.showToast({
						    title: '请输入CN号',
							icon:'none',
						    duration: 1000
						});
					}
					return false;
				}else{
					return true;
				}
			},
			passwordCheck(){
				if(!this.password.length){
					if(this.destop){
						this.passwordError = '请输入CN号密码'
					}else{
						uni.showToast({
						    title: '请输入CN号密码',
							icon:'none',
						    duration: 1000
						});
					}
					return false;
				}else{
					return true;
				}
			},
			bind(){
				if(!this.agree){return}
				if(this.idCheck()&&this.passwordCheck()){
					
					this.go('/pages/index/index')
				}
			}
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
				.head{
					@include frame-width;
					height:100px;
					margin: auto;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #dee2e6;
					.left{
						display: flex;
						align-items: center;
						.logo{
							width: 110px;
							height:31px;
						}
						.welcome{
							font-size: 24px;
							margin-left: 100px;
						}
					}
					.back{
						font-size: 14px;
						color: #999999;
						margin-right: 10px;
					}
				}
				.center{
					width: 500px;
					margin: auto;
					.row{
						margin-top: 70px;
						width: 100%;
						position: relative;
						.error{
									position: absolute;
									top:72px;
									left: 0;
									color: red;
								}
						.label{
							font-size: 14px;
							color: #000;
							margin-bottom: 5px;
						}
						.inputFrame{
							width: 100%;
							height:50px;
							display: flex;
							align-items: center;
							.input{
								height: 48px;
								color: #495057;
								background-color: #fff;
								border: 1px solid #ced4da;
								border-radius: 3px;
								flex-grow: 1;
							}
							.picCode{
								width:136px;
								height:46px;
								margin: 0 20px;
							}
							.blue{
								color: #007bff;
								font-size: 14px;
							}
							.getCode{
								    width: 140px;
								    height: 48px;
								    border: 1px solid #008ab0;
								    border-radius: 35px;
								    background: #fff;
								    color: #008ab0;
									margin-left: 20px;
									line-height: 48px;
									text-align: center;
							}
						}
					}
					.agreeFrame{
						display: flex;
						margin-top: 40px;
						align-items: center;
						.text{
							    font-size: 14px;
							    color: #000;
								margin-left: 10px;
						}
						.blue{
							margin-left: 10px;
							font-size: 14px;
							color: #37b0ca;
						}
					}
					.buttonFrame{
						display: flex;
						align-items: center;
						margin-top: 40px;
						.cancel{
							background-color: #fff;
							    color: #008ab0;
							    border: 1px solid #008ab0;
								width: 150px;
								    height: 50px;
								    border-radius: 30px;
								    font-size: 16px;
									margin-right: 30px;
									line-height: 50px;
									text-align: center;
						}
						.submit{
							background-color: #008ab0;
							    color: #fff;
							    border: 1px solid #008ab0;
								width: 150px;
								    height: 50px;
								    border-radius: 30px;
								    font-size: 16px;
									line-height: 50px;
									text-align: center;
						}
					}
				}
				}
				/* #endif */
				.phone{
					display: flex;
					align-items: center;
					flex-direction: column;
					.blue{
						color: #008ab0;
						    font-size: 21rpx;
					}
					.navBar{
						width:750rpx;
						height:113rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						position: fixed;
						top:0;
						left:0;
						background-color: #fff;
						z-index: 3;
						.left{
							width:200rpx;
							display: flex;
							align-items: center;
							padding-left: 30rpx;
							.back{
								width:42rpx;
								height:42rpx;
							}
						}
						.center{
							flex-grow: 1;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 33rpx;
						}
						.right{
							display: flex;
							align-items: center;
							width:200rpx;
							justify-content: flex-end;
							padding-right: 30rpx;
							font-size: 28rpx;
						}
					}
					.listFrame{
						width:100%;
						padding: 113rpx 30rpx 0 30rpx;
						.referrer{
							font-size: 24rpx;
						}
						.list{
							width:100%;
							height: 86rpx;
							padding-top: 20rpx;
							border-bottom: 1px solid #eaeaea;
							display: flex;
							align-items: center;
							.placeholder{
								color: #878787;
								font-size: 25rpx;
							}
							.input{
								height: 100%;
								background: none;
								border: 0;
								flex-grow:1 ;
								font-size: 25rpx;
							}
							.picCode{
								width:146rpx;
								height:62rpx;
								margin: 0 20rpx;
								position: relative;
								top:-10rpx
							}
							.getCode{
								font-size: 26rpx;
								    color: #fff;
									background-color: #3a3a3a;
								    padding: 17rpx 22rpx;
								    border-radius: 36rpx;
									position: relative;
									top:-10rpx
							}
							.eye{
								width:40rpx;
								height:40rpx;
							}
							.blue{
								font-size: 26rpx;
								color: #7d7d7d;
								position: relative;
								top:-10rpx
							}
						}
					}
					.dsc{
						width:690rpx;
						margin-top: 37rpx;
						font-size: 20rpx;
						    color: #ababab;
					}
					.logon{
						width: 690rpx;
						    height: 80rpx;
						    line-height: 80rpx;
						    border-radius: 80rpx;
							margin-top: 40rpx;
						    background: #038eb7;
						    color: #fff;
							text-align: center;
						    font-size: 28rpx;
					}
					.ruleFrame{
						width: 690rpx;
						display: flex;
						align-items: center;
						margin-top: 70rpx;
						.text{
							font-size: 26rpx;
							    color: #666;
								margin: 0 10rpx;
						}
					}
					}
		</style>