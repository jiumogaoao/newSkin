<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="head">
				<view class="left">
					<image class="logo" :src="imgPath+'indexLogo.jpg'"></image>
					<view class="welcome">欢迎登录</view>
				</view>
				<view class="back">返回首页</view>
			</view>
			<view class="center">
				<view class="logonFrame">
					<view class="tabbarFrame">
						<view class="item hl">手机验证码登录</view>
						<view class="item">账号登录</view>
					</view>
					<view class="frame">
						<view class="row">
							<image class="icon" :src="imgPath+'login-form-mine.png'"></image><input class="input"/>
						</view>
						<view class="row">
							<input class="input"/><image class="picCode" :src="imgPath+'verificationCode.png'"></image><view class="blue">换一张</view>
						</view>
						<view class="row">
							<image class="icon" :src="imgPath+'login-form-lock.png'"></image><input class="input"/><view class="getPhoneCode">获取验证码</view>
						</view>
					</view>
					<view class="frame">
						<view class="row">
							<image class="icon" :src="imgPath+'login-form-mine.png'"></image><input class="input"/>
						</view>
						<view class="row">
							<image class="icon" :src="imgPath+'login-form-lock.png'"></image><input class="input"/>
						</view>
						<view class="row">
							<input class="input"/><image class="picCode" :src="imgPath+'verificationCode.png'"></image><view class="blue">换一张</view>
						</view>
					</view>
					<view class="forget">忘记密码</view>
					<view class="logon">登录</view>
					<view class="thirdPathLogonFrame">
						<view class="left">
							<view class="title">社交账号登录</view>
							<image class="icon" :src="imgPath+'login-wechat.png'"></image>
							<image class="icon" :src="imgPath+'login-qq.png'"></image>
						</view>
						<view class="blue">立即注册</view>
					</view>
				</view>
			</view>
			<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="top">
				<view class="head">
					<image class="back" :src="imgPath+'zuojiantou.png'"></image>
					登录
				</view>
				<image class="logo" :src="imgPath+'logo.png'"></image>
				<view class="tagBar">
					<view class="item hl">
						<view class="name">手机验证码登录</view>
						<image class="deg" :src="imgPath+'upDeg.png'"></image>
					</view>
					<view class="item">
						<view class="name">账号登录</view>
						<image class="deg" :src="imgPath+'upDeg.png'"></image>
					</view>
				</view>
			</view>
			<view class="listFrame">
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
			</view>
			<view class="listFrame">
				<view class="list">
					<input class="input" placeholder="请输入手机号码/账号"/>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入密码"/>
					<image class="eye" :src="imgPath+'yanjing.png'"></image>
				</view>
			</view>
			<view class="logon">登录</view>
			<view class="blueFrame">
				<view class="blue">立即注册</view>
				<view class="blue">忘记密码？</view>
			</view>
			<view class="thirdPath">
				<view class="line"></view>
				<view class="title">其他方式登录</view>
				<view class="line"></view>
			</view>
			<view class="iconFrame">
				<image class="icon" :src="imgPath+'wechat.png'"></image>
				<image class="icon" :src="imgPath+'qq.png'"></image>
			</view>
		</block>
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
					width: 1200px;
					margin: auto;
					margin-top: 40px;
					display: flex;
					justify-content: flex-end;
					.logonFrame{
						width:400px;
						.tabbarFrame{
							width:100%;
							height:60px;
							display: flex;
							.item{
								width:50%;
								height: 60px;
								line-height: 60px;
								text-align: center;
								font-size: 16px;
								color: #000;
								background-color: #dee2e6;
							}
							.hl{
								background-color: #fff;
							}
						}
						.frame{
							width: 340px;
							padding: 0 30px;
							border: 1px solid #dee2e6;
							padding-bottom: 20px;
							.row{
								display: flex;
								margin-top: 20px;
								align-items: center;
								.icon{
									width: 48px;
									height: 38px;
									border: 1px solid #ced4da;
									border-right: 0;
									flex-shrink: 0;
								}
								.input{
									height: 38px;
									    color: #495057;
									    background-color: #fff;
									    background-clip: padding-box;
									    border: 1px solid #ced4da;
									    border-radius: 0 3px 3px 0;
									flex-grow: 1;
								}
								.picCode{
									width:98px;
									height:38px;
									flex-shrink: 0;
									margin-left: 10px;
									margin-right: 10px;
								}
								.blue{
									font-size: 12px;
									    color: #007bff;
										flex-shrink: 0;
								}
								.getPhoneCode{
									width: 98px;
									    height: 38px;
										line-height: 38px;
										text-align: center;
									    border: 1px solid #008ab0;
									    border-radius: 35px;
									    background: #fff;
									    color: #008ab0;
									    font-size: 12px;
										margin-left: 20px;
								}
							}
						}
						.forget{
							font-size: 14px;
							color: #6c757d;
							text-align: right;
							width:100%;
							line-height: 20px;
						}
						.logon{
							width: 100%;
							    height: 40px;
							    border-radius: 35px;
							    background-color: #008ab0;
								color: #fff;
								line-height: 40px;
								text-align: center;
								margin-top: 10px;
						}
						.thirdPathLogonFrame{
							width:100%;
							height:52px;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 10px;
							.left{
								display: flex;
								align-items: center;
								.title{
									margin-right: 22px;
									    font-size: 14px;
										margin-left: 30px;
								}
								.icon{
									width:30px;
									height:30px;
									margin-right: 22px;
								}
							}
							.blue{
								color: #008ab0;
								    font-size: 14px;
									margin-right: 30px;
							}
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
						.top{
							height: 370rpx;
							    width: 750rpx;
							    background-color: #0490b7;
								
							    background: url($oss-phone+'login_bg.png') 50%;
							    position: relative;
							.head{
								width:100%;
								text-align: center;
								    color: #fff;
								    font-size: 40rpx;
								padding-top: 34rpx;
								position: relative;
								.back{
									width:32rpx;
									height:32rpx;
									position:absolute;
									left:20rpx;
								}
							}
							.logo{
								width:110rpx;
								height:35rpx;
								margin: auto;
								margin-top: 131rpx;
							}
							.tagBar{
								width: 80%;
								margin: auto;
								margin-top: 40rpx;
								display: flex;
								justify-content: space-between;
								.item{
									display: flex;
									flex-direction: column;
									justify-content: space-between;
									align-items: center;
									height:90rpx;
									.name{
										color: #d7f8ff;
										font-size: 30rpx;
									}
									.deg{
										width:25rpx;
										height:13rpx;
										display: none;
									}
								}
								.hl{
									.name{
										color: #fff;
										font-weight: 600;
									}
									.deg{
										display: block;
									}
								}
							}
						}
						.listFrame{
							width:690rpx;
							margin: auto;
							margin-top: 40rpx;
							.list{
								width:100%;
								height: 100rpx;
								border-bottom: 1px solid #eaeaea;
								display: flex;
								align-items: center;
								.input{
									height: 100%;
									background: none;
									border: 0;
									flex-grow:1 ;
									font-size: 30px;
								}
								.picCode{
									width:70rpx;
									height:30rpx;
									margin: 0 20rpx;
								}
								.getCode{
									font-size: 30rpx;
									    color: #008ab0;
									    border: 1rpx solid #008ab0;
									    padding: 5rpx 21rpx;
									    border-radius: 36rpx;
								}
								.eye{
									width:40rpx;
									height:40rpx;
								}
							}
						}
						.logon{
							width: 690rpx;
							    height: 76rpx;
							    line-height: 76rpx;
							    border-radius: 70rpx;
							    margin-top: 21rpx;
							    background: #008ab0;
							    color: #fff;
								text-align: center;
							    font-size: 32rpx;
						}
						.blueFrame{
							width: 690rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 20rpx;
						}
						.thirdPath{
							width: 690rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 60rpx;
							.line{
								flex-grow: 1;
								height:1;
								background-color: #e6e6e6;
							}
							.title{
								font-size: 32px;
								margin: 0 10rpx;
								flex-shrink: 0;
							}
						}
						.iconFrame{
							width:250rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 40rpx;
							.icon{
								width:70rpx;
								height:70rpx;
							}
						}
					}
		</style>