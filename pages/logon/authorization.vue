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
					<view class="label">手机号码*</view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input"/>
						</view>
					</view>
				</view>
				<view class="row">
					<view class="label">验证*</view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input"/>
						</view>
						<image class="picCode" :src="imgPath+'verificationCode.png'"></image>
						<view class="blue">换一张</view>
					</view>
				</view>
				<view class="row">
					<view class="label">手机短信验证码*</view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input"/>
						</view>
						<view class="getCode">获取验证码</view>
					</view>
				</view>
				<view class="row">
					<view class="label">设置密码*</view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input"/>
						</view>
					</view>
				</view>
				<view class="row">
					<view class="label">确认密码*</view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input"/>
						</view>
					</view>
				</view>
				<view class="agreeFrame">
					<chechBoxCP/>
					<view class="text">已阅读并同意</view>
					<view class="blue">《如新海外购用户协议》</view>
				</view>
				<view class="buttonFrame">
					<view class="cancel">取消</view>
					<view class="submit">提交</view>
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
						{{type?'登录':'手机验证登录'}}
					</view>
					<view class="right">
						
					</view>
				</view>
				<view style="width:100%;height: 55px;"></view>
				<view class="listFrame">
					<view class="welcome">欢迎登录，完成时将自动绑定微信 <text class="blue">AKIKEI</text></view>
					<block v-if="type">
						<view class="list">
							<input class="input" placeholder="请输入手机号/账号"/>
						</view>
						<view class="list">
							<input class="input" placeholder="输入密码"/>
							<view class="eye nuskinIcon" @click="togglePassword">{{showPassword?'&#xe726;':'&#xe724;'}}</view>
						</view>
					</block>
					<block v-else>
						<view class="list">
							<input class="input" placeholder="请输入手机号码"/>
						</view>
						<view class="list">
							<input class="input" placeholder="请输入图形验证码"/>
							<image class="picCode" :src="imgPath+'verificationCode.png'"></image>
							<view class="blue">换一张</view>
						</view>
						<view class="list">
							<input class="input" placeholder="请输入手机验证码"/>
							<view class="getCode">获取验证码</view>
						</view>
					</block>
				</view>
				<view class="blueFrame">
					<view class="text" @click="toggleType">{{type?'手机验证码登录':'账号密码登录'}}</view>
					<view class="text" @click="go('/pages/regest/regest')">去注册</view>
				</view>
				<view class="logon" @click="logon">登录</view>
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
						type:0,
						showPassword:false
					};
				},
				methods:{
					togglePassword(){
						this.showPassword = !this.showPassword
					},
					toggleType(){
						this.type = this.type?0:1
					},
					logon(){
						this.$store.dispatch('userST/logon', {})
						this.go('/pages/index/index')
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
					margin-top: 121px;
					.row{
						margin-bottom: 36px;
						width: 100%;
						position:relative;
						.error{
									position: absolute;
									top:57px;
									right: 0;
									font-size: 15px;
									color: red;
								}
						.label{
							font-size: 14px;
							color: #000;
							margin-bottom: 16px;
						}
						.inputFrame{
							width: 100%;
							height:50px;
							display: flex;
							align-items: center;
							.inputSubFrame{
								height:50px;
								flex-grow: 1;
								position: relative;
							}
							.input{
								height: 100%;
								width:100%;
								color: #495057;
								background-color: #fff;
								text-indent: 15px;
								border: 1px solid #ced4da;
								border-radius: 3px;
							}
							.picCode{
								width:140px;
								height:50px;
								margin: 0 20px;
								border: 1px solid $main-gray;
							}
							.blue{
								color: #007bff;
								font-size: 16px;
							}
							.getCode{
								    width: 140px;
								    height: 50px;
								    border: 1px solid #008ab0;
								    border-radius: 35px;
								    background: #fff;
								    color: #008ab0;
									font-size: 12px;
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
						position: relative;
						.error{
									position: absolute;
									top:30px;
									left: 0;
									color: red;
								}
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
						margin-top: 93px;
						.cancel{
							background-color: #fff;
							    color: #008ab0;
							    border: 1px solid #008ab0;
								width: 150px;
								    height: 50px;
								    border-radius: 30px;
								    font-size: 15px;
									margin-right: 50px;
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
								    font-size: 15px;
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
						padding: 10rpx 46rpx;
						height: 655rpx;
						.list{
							width:100%;
							height: 120rpx;
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
								width:130rpx;
								height:60rpx;
								margin: 0 20rpx;
								border: 1px solid $main-gray;
							}
							.getCode{
								font-size: 24rpx;
								    color: #fff;
									background-color: #3a3a3a;
								    padding: 15rpx 44rpx;
								    border-radius: 36rpx;
							}
							.eye{
								font-size: 40rpx;
								font-weight: bold;
								color: $main-hl;
							}
							.blue{
								font-size: 26rpx;
								color: $main-hl;
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
						    border-radius: 10rpx;
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
						margin-top: 42rpx;
						.text{
							font-size: 26rpx;
							    color: #666;
								margin: 0 10rpx;
						}
					}
					}
		</style>