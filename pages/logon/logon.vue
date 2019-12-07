<template>
	<view :class="destop?'destop':'phone'">
		<!-- #ifdef H5 -->
		<block  v-if="destop && initReady">
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<view class="head">
				<view class="left">
					<image class="logo" :src="imgPath+'indexLogo.jpg'"></image>
					<view class="welcome">欢迎登录</view>
				</view>
				<view class="back" @click="go('/pages/index/index')">返回首页</view>
			</view>
			<view class="center">
				<view class="logonFrame">
					<view class="tabbarFrame">
						<view :class="{item:1,hl:logOnType==0}" @click="changeType(0)">手机验证码登录</view>
						<view :class="{item:1,hl:logOnType==1}" @click="changeType(1)">账号登录</view>
					</view>
					<view class="frame" v-if="logOnType==0">
						<view class="row" key="1">
							<image class="icon" :src="imgPath+'login-form-mine.png'"></image><input class="input" v-model="userName"/><view class="error" v-if="userNameError">{{userNameError}}</view>
						</view>
						<view class="row" key="2">
							<input class="input" v-model="picCode"/><image class="picCode" :src="picCodeIMGByPhone"></image><view class="blue" @click="updatePicCode">换一张</view><view class="error" v-if="picCodeError">{{picCodeError}}</view>
						</view>
						<view class="row" key="3">
							<image class="icon" :src="imgPath+'login-form-lock.png'"></image><input class="input" v-model="code"/>
							<view class="getPhoneCode" v-if="nextTime">{{nextTime}}后可继续获取</view>
							<view class="getPhoneCode" @click="getSMSCode" v-else>获取验证码</view>
							<view class="error" v-if="codeError">{{codeError}}</view>
						</view>
					</view>
					<view class="frame" v-else>
						<view class="row" key="4">
							<image class="icon" :src="imgPath+'login-form-mine.png'"></image><input class="input" v-model="userName"/><view class="error" v-if="userNameError">{{userNameError}}</view>
						</view>
						<view class="row" key="5">
							<image class="icon" :src="imgPath+'login-form-lock.png'"></image><input class="input" v-model="password"/><view class="error" v-if="passwordError">{{passwordError}}</view>
						</view>
						<view class="row" key="6">
							<input class="input" v-model="picCode"/><image class="picCode" :src="picCodeIMG"></image><view class="blue" @click="updatePicCode">换一张</view><view class="error" v-if="picCodeError">{{picCodeError}}</view>
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
						<view class="blue" @click="goRegest">立即注册</view>
					</view>
				</view>
			</view>
			<footerCP/>
			<modalCP 
			v-if="showRegestPop"
			title='隐私协议'
								confirmText='同意'
								cancelText='拒绝'
								@cancel="closePop"
								@submit="go('/pages/regest/regest')"
			>
			<view class="p">如新用户注册协议、如新隐私政策、如新优惠顾客/星级顾客注册申请书</view>
			
			<view class="p">在您注册成为如新（中国）日用保健品有限公司（以下简称如新）用户及或优惠顾客/星级顾客的过程中，您需要完成如新的注册流程并通过点击同意的形式在线签署《如新用户注册协议》、《如新隐私政策》和《如新优惠顾客/星级顾客注册申请书》，本隐私政策明确了我们的产品与/或服务所收集、使用及共享个人信息的类型方式和用途。请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）</view>
			
			<view class="p">【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</view>
			
			<view class="p">1、与您约定免除或限制责任的条款；</view>
			
			<view class="p">2、与您约定法律适用和管辖的条款；</view>
			
			<view class="p">3、其他以粗体下划线标识的重要条款。</view>
			
			<view class="p">【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的产品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；</view>
			</modalCP>
			</view>
		</block>
		<!-- #endif -->
		<block  v-if="!destop && initReady">
			<view class="top">
				<view class="head">
					<image class="back" :src="imgPath+'zuojiantou.png'" @click="backForLogon"></image>
				</view>
				<image class="logo" :src="imgPath+'de4406c8.logo2.png'"></image>
				<view class="tagBar">
					<view :class="{item:1,hl:logOnType==0}">
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
					<input class="input" placeholder="请输入手机号码" placeholder-class="placeholder" v-model="userName"/>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入图形验证码" placeholder-class="placeholder" v-model="picCode"/>
					<image class="picCode" :src="picCodeIMGByPhone"></image>
					<view class="blue" @click="updatePicCode">换一张</view>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入手机验证码" placeholder-class="placeholder" v-model="code"/>
					<view class="getCode" v-if="nextTime">{{nextTime}}后可继续获取</view>
					<view class="getCode" @click="getSMSCode" v-else>获取验证码</view>
				</view>
			</view>
			<view class="listFrame" v-else>
				<view class="list">
					<input class="input" placeholder="请输入手机号码/账号" placeholder-class="placeholder" v-model="userName"/>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入密码" placeholder-class="placeholder" v-model="password" password="!showPassword"/>
					<view class="eye nuskinIcon" @click="togglePassword">{{showPassword?'&#xe726;':'&#xe724;'}}</view>
				</view>
				<view class="list">
					<input class="input" placeholder="请输入图形验证码" placeholder-class="placeholder" v-model="picCode"/>
					<image class="picCode" :src="picCodeIMG"></image>
					<view class="blue" @click="updatePicCode">换一张</view>
				</view>
			</view>
			<view class="logon" @click="logon">登录</view>
			<view class="blueFrame">
				<view class="text" @click="goRegest">立即注册</view>
				<view class="text" @click="go('/pages/logon/reset')">忘记密码？</view>
			</view>
			<view class="thirdPath">
				<view class="line"></view>
				<view class="title">其他方式登录</view>
				<view class="line"></view>
			</view>
			<view class="iconFrame">
				<image class="icon" :src="imgPath+'wx2.png'" @click="go('/pages/logon/authorization')"></image>
<!-- 				<image class="icon" :src="imgPath+'wb2.png'" @click="go('/pages/logon/authorization')"></image> -->
				<image class="icon" :src="imgPath+'qq2.png'" @click="go('/pages/logon/authorization')"></image>
			</view>
		</block>
	</view>
</template>
<script>
	import allPage from "@/mixin/allPage"
	import modalCP from "@/components/modal_CP.vue"
	export default {
		mixins: [allPage],
		components:{modalCP},
		data() {
					return {
						logOnType:0,
						userName:'',
						password:'',
						picCode:'',
						code:'',
						userNameError:'',
						passwordError:'',
						picCodeError:'',
						codeError:'',
						showRegestPop:false,
						nextTime:0,
						backPage:'',
						showPassword:false
					};
				},
				onLoad(props){
					this.backPage='/'+props.page
				},
		methods:{
			togglePassword(){
				this.showPassword = !this.showPassword
			},
			updateNextTime(){
				this.nextTime = 60;
				let _this = this
				let s = setInterval(function(){
					if(_this.nextTime >= 1){
						_this.nextTime--;
					}else{
						clearInterval(s)
					}
				},1000)
			},
			getSMSCode(){
				let _this = this;
				this.$store.dispatch("rootST/getLogonPhoneCode",{tel:this.userName,code:this.picCode,callback:function(){
					_this.updateNextTime()
				}})
			},
			closePop(){
				this.showRegestPop =false
			},
			goRegest(){
				let _this=this
				if(this.destop){
					this.showRegestPop =true
				}else{
					uni.showModal({
									    title: '隐私协议',
										confirmText:'同意',
										cancelText:'拒绝',
									    content: '如新用户注册协议、如新隐私政策、如新优惠顾客/星级顾客注册申请书'+
					
					'在您注册成为如新（中国）日用保健品有限公司（以下简称如新）用户及或优惠顾客/星级顾客的过程中，您需要完成如新的注册流程并通过点击同意的形式在线签署《如新用户注册协议》、《如新隐私政策》和《如新优惠顾客/星级顾客注册申请书》，本隐私政策明确了我们的产品与/或服务所收集、使用及共享个人信息的类型方式和用途。请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：'+
					
					'【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：'+
					
					'1、与您约定免除或限制责任的条款；'+
					
					'2、与您约定法律适用和管辖的条款；'+
					
					'3、其他以粗体下划线标识的重要条款。'+
					
					'【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的产品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；',
									    success: function (res) {
									        if (res.confirm) {
									            _this.go('/pages/regest/regest')
									        } else if (res.cancel) {
									            console.log('用户点击取消');
									        }
									    }
									});
				}
				
			},
			userNameCheck(){
				if(!this.userName.length){
					if(this.destop){
						this.userNameError = this.logOnType?'请输入账号/手机号':'请输入手机号'
					}else{
						uni.showToast({
						    title: this.logOnType?'请输入账号/手机号':'请输入手机号',
							icon:'none',
						    duration: 1000
						});
					}
					return false;
				}else{
					return true
				}
			},
			passwordCheck(){
				if(!this.password.length){
					if(this.destop){
						this.passwordError = '请输入密码'
					}else{
						uni.showToast({
						    title: '请输入密码',
							icon:'none',
						    duration: 1000
						});
					}
					return false;
				}else{
					return true
				}
			},
			picCodeCheck(){
				if(!this.picCode.length){
					if(this.destop){
						this.picCodeError = '请输入图形验证码'
					}else{
						uni.showToast({
						    title: '请输入图形验证码',
							icon:'none',
						    duration: 1000
						});
					}
					return false;
				}else{
					return true
				}
			},
			codeCheck(){
				if(!this.code.length){
					if(this.destop){
						this.codeError = '请输入短信验证码'
					}else{
						uni.showToast({
						    title: '请输入短信验证码',
							icon:'none',
						    duration: 1000
						});
					}
					return false;
				}else{
					return true
				}
			},
			changeType(type){
				this.logOnType = type
			},
			logon(){
				let _this=this;
				if((this.logOnType==0&&this.userNameCheck()&&this.passwordCheck()&&this.codeCheck())||(this.logOnType==1&&this.userNameCheck()&&this.passwordCheck()&&this.picCodeCheck())){}
					this.$store.dispatch('rootST/logon', {
						logOnType:_this.logOnType,
						userName:_this.userName,
						password:_this.password,
						picCode:_this.picCode,
						code:_this.code,
						callback(res,err){
							if(res){
								_this.$store.dispatch('userST/logon', {})
								uni.navigateTo({
								    url: _this.backPage
								});
							}else{
								alert(err)
							}
						}
					})
			},
			updatePicCode(){
				if(this.logOnType){
					this.$store.dispatch('rootST/updateLogonPicCode',this.userName)
				}else{
					this.$store.dispatch('rootST/updateLogonPicCodeByPhone',this.userName)
				}
			},
			backForLogon(){
				let _this = this;
				uni.navigateTo({
				    url: _this.backPage
				});
			}
		},
		computed:{
			picCodeIMG(){
				try{
					return 'data:image/jpeg;base64,'+this.$store.state.rootST.logonPicCode.data.captcha
				}catch(e){
					return ''
				}
			},
			picCodeIMGByPhone(){
				try{
					return 'data:image/jpeg;base64,'+this.$store.state.rootST.logonPicCodeByPhone.data.captcha
				}catch(e){
					return ''
				}
			}
		},
		onShow(){
			this.updatePicCode()
		},
		watch:{
			userName(val){
				this.updatePicCode()
			}
		}
			}
		</script>
		
		<style lang="scss" scoped>
			/* #ifdef H5 */
			.destop{
				.p{
					line-height: 1.5;
					font-size: 16px;
				}
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
							width: 400px;
							padding: 0 30px;
							border: 1px solid #dee2e6;
							padding-bottom: 20px;
							.row{
								display: flex;
								margin-top: 20px;
								align-items: center;
								position: relative;
								.error{
									position: absolute;
									top:41px;
									left: 0;
									color: red;
								}
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
							margin-top: 30rpx;
							.icon{
								width:80rpx;
								height:80rpx;
							}
						}
					}
		</style>