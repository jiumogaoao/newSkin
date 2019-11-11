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
						<view :class="{item:1,hl:logOnType==0}" @click="changeType(0)">手机验证码登录</view>
						<view :class="{item:1,hl:logOnType==1}" @click="changeType(1)">账号登录</view>
					</view>
					<view class="frame" v-if="logOnType==0">
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
					<view class="frame" v-else>
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
					<view class="logon" @click="logon">登录</view>
					<view class="thirdPathLogonFrame">
						<view class="left">
							<view class="title">社交账号登录</view>
							<image class="icon" :src="imgPath+'login-wechat.png'"></image>
							<image class="icon" :src="imgPath+'login-qq.png'"></image>
						</view>
						<view class="blue" @click="go('/pages/regest/regest')">立即注册</view>
					</view>
				</view>
			</view>
			<footerCP/>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="top">
				<view class="head">
					<image class="back" :src="imgPath+'zuojiantou.png'" @click="back"></image>
				</view>
				<image class="logo" :src="imgPath+'de4406c8.logo2.png'"></image>
				<view class="tagBar">
					<view :class="{item:1,hl:logOnType==0}" @click="changeType(0)">
						<view class="name">手机验证码登录</view>
						<image class="deg" :src="imgPath+'upDeg.png'"></image>
					</view>
					<view :class="{item:1,hl:logOnType==1}" @click="changeType(1)">
						<view class="name">账号登录</view>
						<image class="deg" :src="imgPath+'upDeg.png'"></image>
					</view>
				</view>
			</view>
			<view class="listFrame" v-if="logOnType==0">
				<view class="list">
					<input class="input" placeholder="请输入手机号码" placeholder-class="placeholder"/>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入图形验证码" placeholder-class="placeholder"/>
					<image class="picCode" :src="imgPath+'verificationCode.png'"></image>
					<view class="blue">换一张</view>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入手机验证码" placeholder-class="placeholder"/>
					<view class="getCode">获取验证码</view>
				</view>
			</view>
			<view class="listFrame" v-else>
				<view class="list">
					<input class="input" placeholder="请输入手机号码/账号" placeholder-class="placeholder"/>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入密码" placeholder-class="placeholder"/>
					<image class="eye" :src="imgPath+'yanjing.png'"></image>
				</view>
			</view>
			<view class="logon" @click="logon">登录</view>
			<view class="blueFrame">
				<view class="text" @click="go('/pages/regest/regest')">立即注册</view>
				<view class="text">忘记密码？</view>
			</view>
			<view class="thirdPath">
				<view class="line"></view>
				<view class="title">其他方式登录</view>
				<view class="line"></view>
			</view>
			<view class="iconFrame">
				<image class="icon" :src="imgPath+'wx2.png'"></image>
				<image class="icon" :src="imgPath+'wb2.png'"></image>
				<image class="icon" :src="imgPath+'qq2.png'"></image>
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
						logOnType:0
					};
				},
		methods:{
			changeType(type){
				this.logOnType = type
			},
			logon(){
				this.$store.dispatch('userST/logon', {})
			}
		}
			}
		</script>
		
		<style lang="scss" scoped>
			/* #ifdef H5 */
			.destop{
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
					@include frame-width;
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
							height: 420rpx;
							    width: 750rpx;
								background: linear-gradient(-45deg,#5cc2cc,#0573b2);
							    position: relative;
							.head{
								width:100%;
								text-align: center;
								padding-top: 34rpx;
								position: relative;
								.back{
									width:41rpx;
									height:41rpx;
									position:absolute;
									left:34rpx;
								}
							}
							.logo{
								width:348rpx;
								height:98rpx;
								margin: auto;
								margin-top: 126rpx;
							}
							.tagBar{
								width: 422rpx;
								margin: auto;
								margin-top: 96rpx;
								display: flex;
								justify-content: space-between;
								.item{
									display: flex;
									flex-direction: column;
									justify-content: space-between;
									align-items: center;
									height:67rpx;
									.name{
										color: #fff;
										font-size: 30rpx;
									}
									.deg{
										width:36rpx;
										height:21rpx;
										display: none;
									}
								}
								.hl{
									.deg{
										display: block;
									}
								}
							}
						}
						.listFrame{
							width:100%;
							padding: 30rpx 30rpx;
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
						.blueFrame{
							width: 690rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 67rpx;
							.text{
								font-size: 22rpx;
								color: #383838;
							}
						}
						.thirdPath{
							width: 576rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 153rpx;
							.line{
								flex-grow: 1;
								height:1px;
								background-color: #e1e1e1;
							}
							.title{
								font-size: 24rpx;
								margin: 0 10rpx;
								flex-shrink: 0;
								color: #2a8c93;
							}
						}
						.iconFrame{
							width:400rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-top: 50rpx;
							.icon{
								width:80rpx;
								height:80rpx;
							}
						}
					}
		</style>