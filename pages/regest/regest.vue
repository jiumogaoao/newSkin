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
				<view class="back" @click="back">返回首页</view>
			</view>
			<view class="center">
				<view class="row">
					<view class="label">手机号码<text style="color:red;">*</text></view>
					<view class="inputFrame">
						<view class="inputSubFrame">
							<input class="input" placeholder="请输入手机号" v-model="phone" @change="checkPhoneRegested"/>
							<view class="error" v-if="phoneError">{{phoneError}}</view>
						</view>
						<view class="nuskinIcon" v-if="phoneOnly==1">&#xe6f5;</view>
						<view class="nuskinIcon" v-if="phoneOnly==2">&#xe600;</view>
					</view>
				</view>
				<view class="row">
					<view class="label">验证<text style="color:red;">*</text></view>
					<view class="inputFrame">
						<view class="inputSubFrame">
							<input class="input" v-model="code" placeholder="验证码"/>
							<view class="error" v-if="codeError">{{codeError}}</view>
						</view>
						<image class="picCode" :src="picCodeIMG"></image>
						<view class="blue" @click="updatePicCode()">换一张</view>
					</view>
				</view>
				<view class="row">
					<view class="label">手机短信验证码<text style="color:red;">*</text></view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input" v-model="phoneCode"  placeholder="请输入手机验证码"/>
						<view class="error" v-if="phoneCodeError">{{phoneCodeError}}</view>
						</view>
						<view class="getCode" v-if="nextTime">{{nextTime}}后可继续获取</view>
						<view class="getCode" @click="getCode" v-else>获取验证码</view>
					</view>
				</view>
				<view class="row">
					<view class="label">设置密码<text style="color:red;">*</text></view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input" v-model="password" placeholder="密码长度须为6-20位,可包含字母/数字和符号"/>
						<view class="error" v-if="passwordError">{{passwordError}}</view>
						</view>
					</view>
				</view>
				<view class="row">
					<view class="label">确认密码<text style="color:red;">*</text></view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input" v-model="password2" placeholder="请再次确认密码"/>
						<view class="error" v-if="password2Error">{{password2Error}}</view>
						</view>
					</view>
				</view>
				<view class="agreeFrame">
					<chechBoxCP :checked="agree" @click="toggleAgree"/>
					<view class="text">已阅读并同意</view>
					<view class="blue">《如新海外购用户协议》</view>
					<view class="error" v-if="agreeError">{{agreeError}}</view>
				</view>
				<view class="buttonFrame">
					<view class="cancel" @click="back">取消</view>
					<view class="submit" @click="regest">提交</view>
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
						注册
					</view>
					<view class="right" @click="go('/pages/logon/logon?page=pages/regest/regest')">
						登录
					</view>
				</view>
				<view style="width:100%;height: 55px;"></view>
				<view class="listFrame">
					<!-- <view class="referrer" v-if="referrer">您的推荐人是{{referrer}}（{{referrerPhone}}）</view> -->
					<view class="list">
						<input class="input" placeholder="请输入手机号码" v-model="phone" @change="checkPhoneRegested"/>
						<view class="nuskinIcon" v-if="phoneOnly==1">&#xe6f5;</view>
						<view class="nuskinIcon" v-if="phoneOnly==2">&#xe600;</view>
					</view>
					<view class="list">
						<input class="input" placeholder="请输入图形验证码" v-model="code"/>
						<image class="picCode" :src="picCodeIMG"></image>
						<view class="blue" @click="updatePicCode()">换一张</view>
					</view>
					<view class="list">
						<input class="input" placeholder="请输入手机验证码" v-model="phoneCode"/>
						<view class="getCode" v-if="nextTime">{{nextTime}}后可继续获取</view>
						<view class="getCode" @click="getCode" v-else>获取验证码</view>
					</view>
					<view class="list">
						<input class="input" placeholder="请设置密码,6~20位数" v-model="password" :password="!showPassword1"/>
						<view class="eye nuskinIcon" @click="togglePassword(1)">{{showPassword1?'&#xe726;':'&#xe724;'}}</view>
					</view>
					<view class="list">
						<input class="input" placeholder="请再次确认密码" v-model="password2" :password="!showPassword2"/>
						<view class="eye nuskinIcon" @click="togglePassword(2)">{{showPassword2?'&#xe726;':'&#xe724;'}}</view>
					</view>
				</view>
				<!-- <view class="dsc">密码长度须为6-20非纯数字，可包含字母、数字或下划线('_')中的至少2个类别</view> -->
				<view class="ruleFrame">
					<chechBoxCP :checked="agree" @click="toggleAgree"/>
					<view class="text">已阅读并同意</view>
					<view class="blue">《如新海外购用户协议》</view>
				</view>
				<view class="logon" @click="regest">注册</view>
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
						referrer:'王**',
						referrerPhone:'135****5636',
						phone:'',
						code:'',
						phoneCode:'',
						password:'',
						password2:'',
						agree:false,
						phoneError:'',
						codeError:'',
						phoneCodeError:'',
						passwordError:'',
						password2Error:'',
						nextTime:0,
						agreeError:'',
						phoneOnly:0,
						showPassword1:false,
						showPassword2:false
					};
				},
				methods:{
					togglePassword(num){
						this['showPassword'+num] = !this['showPassword'+num]
					},
					checkPhoneRegested(){
						let _this = this
						this.$store.dispatch('rootST/checkPhoneHaveRegest',{"account":this.phone,"callback":function(error){
							if(error){
								_this.phoneOnly=2
							}else{
								_this.phoneOnly=1
							}
						}})
					},
					agreeCheck(){
						if(!this.agree){
							if(this.destop){
								this.agreeError = '请勾选同意'
							}else{
								uni.showToast({
								    title: '请勾选同意',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else{
							this.agreeError=''
							return true;
						}
					},
					phoneCheck(){
						if(!this.phone.length){
							if(this.destop){
								this.phoneError = '请输入手机号'
							}else{
								uni.showToast({
								    title: '请输入手机号',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else if(!(/^1[3456789]\d{9}$/.test(this.phone))){
							if(this.destop){
								this.phoneError = '请输入正确的手机号'
							}else{
								uni.showToast({
								    title: '请输入正确的手机号',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else{
							this.phoneError = ''
							return true;
						}
					},
					codeCheck(){
						if(!this.code.length){
							if(this.destop){
								this.codeError = '请输入图片验证码！'
							}else{
								uni.showToast({
								    title: '请输入图片验证码！',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else{
							this.codeError = ''
							return true;
						}
					},
					phoneCodeCheck(){
						if(!this.phoneCode.length){
							if(this.destop){
								this.phoneCodeError = '请输入短信验证码！'
							}else{
								uni.showToast({
								    title: '请输入短信验证码！',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else{
							this.phoneCodeError = ''
							return true;
						}
					},
					passwordCheck(){
						if(!this.password.length){
							if(this.destop){
								this.passwordError = '请输入密码！'
							}else{
								uni.showToast({
								    title: '请输入密码！',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else if(/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/.test(this.password)){
							if(this.destop){
								this.passwordError = '密码格式不正确！'
							}else{
								uni.showToast({
								    title: '密码格式不正确！',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else if(this.password.length<6 || this.password.length>20){
							if(this.destop){
								this.passwordError = '密码长度必须为6-20位，可包含字母数字和符号！'
							}else{
								uni.showToast({
								    title: '密码长度必须为6-20位，可包含字母数字和符号！',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else{
							this.passwordError = ''
							return true;
						}
					},
					password2Check(){
						if(!this.password2.length){
							if(this.destop){
								this.password2Error = '请输入确认密码！'
							}else{
								uni.showToast({
								    title: '请输入确认密码！',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else if(this.password != this.password2){
							if(this.destop){
								this.password2Error = '两次输入的密码不一致！'
							}else{
								uni.showToast({
								    title: '两次输入的密码不一致！',
									icon:'none',
								    duration: 1000
								});
							}
							return false;
						}else{
							this.password2Error = ''
							return true;
						}
					},
					regest(){
						let _this = this;
						if(this.agreeCheck()&&this.phoneCheck()&&this.phoneCodeCheck()&&this.passwordCheck()&&this.password2Check()){
							this.$store.dispatch("rootST/regest",{account:this.phone,password:this.password,code:this.phoneCode,callback:function(error){
								if(error){
									uni.showToast({
										title:error,
										icon:'none'
									})
									return;
								}
								_this.$store.dispatch('userST/logon', {phone:_this.phone})
								_this.go('/pages/regest/bind')
							}})
						}
					},
					updatePicCode(){
						this.$store.dispatch('rootST/updateRegestPicCode',this.phone||1)
					},
					toggleAgree(){
						this.agree=!this.agree
					},
					updateNextTime(){
						this.nextTime = 60;
						let _this = this;
						let s = setInterval(function(){
							if(_this.nextTime >= 1){
								_this.nextTime--;
							}else{
								clearInterval(s)
							}
						},1000)
					},
					getCode(){
						console.log(this.nextTime)
						if(this.nextTime){return}
						let _this=this;
						if(this.phoneCheck()&&this.codeCheck()){
							this.$store.dispatch("rootST/getPhoneCode",{
								tel:this.phone,
								code:this.code,
								callback(){
									_this.updateNextTime()
								}
							})
						}
					}
				},
				computed:{
					picCodeIMG(){
						try{
							return 'data:image/jpeg;base64,'+this.$store.state.rootST.regestPicCode.data.captcha
						}catch(e){
							return ''
						}
					}
				},
				onShow(){
					this.updatePicCode()
				},
				watch:{
					phone(val){
						this.updatePicCode()
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