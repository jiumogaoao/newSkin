<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
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
						<input class="input"/>
					</view>
				</view>
				<view class="row">
					<view class="label">验证*</view>
					<view class="inputFrame">
						<input class="input"/>
						<image class="picCode" :src="imgPath+'verificationCode.png'"></image>
						<view class="blue">换一张</view>
					</view>
				</view>
				<view class="row">
					<view class="label">手机短信验证码*</view>
					<view class="inputFrame">
						<input class="input"/>
						<view class="getCode">获取验证码</view>
					</view>
				</view>
				<view class="row">
					<view class="label">设置密码*</view>
					<view class="inputFrame">
						<input class="input"/>
					</view>
				</view>
				<view class="row">
					<view class="label">确认密码*</view>
					<view class="inputFrame">
						<input class="input"/>
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
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
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
						
					};
				}
			}
		</script>
		
		<style lang="scss" scoped>
			/* #ifdef H5 */
			.destop{
				.head{
					width:1200px;
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
					}
		</style>