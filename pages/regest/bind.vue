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
				<view class="notice">温馨提示：绑定成功后可获得分享激励。一个CN卡号只能绑定一个CBE账号。CN卡号一旦绑定通过客服才能解绑。</view>
				<view class="row">
					<view class="label">CN号<text style="color:red;">*</text></view>
					<view class="inputFrame">
						<view class="inputSubFrame">
							<input class="input" v-model="id" @change="idCheck" placeholder="请输入CN号"/><view class="error" v-if="idError">{{idError}}</view>
						</view>
						<view class="nuskinIcon" v-if="idOnly==1">&#xe6f5;</view>
						<view class="nuskinIcon" v-if="idOnly==2">&#xe600;</view>
					</view>
					
				</view>
				<view class="row">
					<view class="label">CN号密码<text style="color:red;">*</text></view>
					<view class="inputFrame">
						<view class="inputSubFrame">
						<input class="input" v-model="password" @change="passwordCheck" placeholder="请输入密码"/><view class="error" v-if="passwordError">{{passwordError}}</view>
						</view>
					</view>
				</view>
				<view class="name" v-if="name">{{name}}</view>
				<view class="nameError" v-if="nameError">{{nameError}}</view>
				<view class="agreeFrame">
					<chechBoxCP :checked="agree" @click="toggleAgree"/>
					<view class="text">绑定如新CN号需同意</view>
					<view class="blue">《如新海外购推广商申请书》</view>
					<view class="error" v-if="agreeError">{{agreeError}}</view>
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
						<input class="input" placeholder="请输入CN号" v-model="id" @change="idCheck"/>
						<view class="nuskinIcon" v-if="idOnly==1">&#xe6f5;</view>
						<view class="nuskinIcon" v-if="idOnly==2">&#xe600;</view>
					</view>
					<view class="list">
						<input class="input" placeholder="请输入CN号密码" v-model="password" @change="passwordCheck"/>
						<image class="eye" :src="imgPath+'yanjing.png'"></image>
					</view>
				</view>
				<view class="name" v-if="name">{{name}}</view>
				<view class="nameError" v-if="nameError">{{nameError}}</view>
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
						passwordError:'',
						agreeError:'',
						name:'',
						nameError:'',
						accoundID:'',
						idOnly:0
					};
				},
		methods:{
			checkCNRegested(){
				let _this = this
				this.$store.dispatch('rootST/checkCNHaveRegest',{"bindno":this.id,"callback":function(error){
					if(error){
						_this.idOnly=2
					}else{
						_this.idOnly=1
					}
				}})
			},
			toggleAgree(){
				this.agree = !this.agree
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
			idCheck(){
				this.checkCNRegested()
				if(!this.id.length){
						this.idError = '请输入CN号'
					if(!this.destop){
						uni.showToast({
						    title: '请输入CN号',
							icon:'none',
						    duration: 1000
						});
					}
					return false;
				}else{
					this.idError = ''
					return true;
				}
			},
			passwordCheck(){
				let _this=this;
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
					this.passwordError = ''
					if(!this.passwordError && !this.idError){
						this.$store.dispatch('rootST/verifyBind',{"userName":this.id,"password":this.password,"callback":function(res,error){
							if(error){
								_this.nameError=error;
								if(!_this.destop){
									uni.showToast({
										title:error,
										icon:'none'
									})
								}
								return;
							}else{
								_this.nameError='';
								_this.name = res.realName;
								_this.accoundID = res.accountId;
							}
						}})
					}
					return true;
				}
			},
			bind(){
				let _this=this;
				if(this.agreeCheck()&&this.idCheck()&&this.passwordCheck()&&!this.nameError&&this.id){
					console.log('bind')
					this.$store.dispatch('rootST/bind',{distId:this.id,"callback":function(error){
						if(error){
							uni.showToast({
								title:error,
								icon:'none'
							})
							return;
						}
						uni.showToast({
							title:'绑定成功',
							icon:'none'
						})
						_this.go('/pages/index/index')
					}})
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
					margin-top: 121px;
					.notice{
						color: $main-hl;
						font-size: 15px;
						line-height: 1.3;
						margin-bottom: 38px;
					}
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
								width: 40rpx;
								height: 40rpx;
								// font-size: 40rpx;
								// font-weight: bold;
								// color: $main-hl;
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
						margin-top: 70rpx;
						.text{
							font-size: 26rpx;
							    color: #666;
								margin: 0 10rpx;
						}
					}
					}
		</style>