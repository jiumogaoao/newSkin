import Vue from 'vue'
import {postFetch,setToken} from "@/util/request_UT.js"
export default {
  namespaced:true,
  state: {
	  initReady:false,
	  destop:false,
	  place:'上海',
	  logo:'',
	  topNav:[{nav:'产品目录',url:'/pages/index/index'},{nav:'加入事业',url:'/pages/join/join'},{nav:'店铺查询',url:'/pages/index/index'}],
	  secondNav:[
		  {nav:'王牌ageLOC',child:[{nav:'一级导航1',child:[{nav:'二级导航1',id:'1'}]}]},
		  {nav:'护肤',child:[{nav:'一级导航2',child:[{nav:'二级导航2',id:'2'}]}]},
		  {nav:'身体护理',child:[{nav:'一级导航3',child:[{nav:'二级导航3',id:'3'}]}]},
		  {nav:'彩妆',child:[{nav:'一级导航4',child:[{nav:'二级导航4',id:'4'}]}]},
		  {nav:'营养补充',child:[{nav:'一级导航5',child:[{nav:'二级导航5',id:'5'}]}]},
		  ],
	  myPage:'myOrder',
	  footNav:'index',
	  access_expired:'',
	  access_token:'',
	  refresh_expired:'',
	  refresh_token:'',
	  logonPicCode:'',
	  logonPicCodeByPhone:'',
	  regestPicCode:''
  },
  mutations: {
	  clear(state, data){
		  state.initReady = false;
		  state.destop = false;
	  },
	  initReady(state, data){
		  state.initReady = true;
	  },
	  destop(state, data){
		  state.destop = true;
	  },
	  changeMyPage(state, data){
		  state.myPage = data;
	  },
	  changeFootNav(state, data){
	  		  state.footNav = data;
	  },
	  setToken(state, data){
		  state.access_expired=data.access_expired
		  state.access_token=data.access_token
		  if(data.refresh_token){
			  state.refresh_expired=data.refresh_expired
			  state.refresh_token=data.refresh_token
		  }
	  },
	  updateLogonPicCode(state, data){
	  		  state.logonPicCode = data
	  },
	  updateLogonPicCodeByPhone(state, data){
		  state.logonPicCodeByPhone = data
	  },
	  updateRegestPicCode(state, data){
		  state.regestPicCode = data
	  },
	  logOut(state, data){
		  state.access_expired=''
		  state.access_token=''
		  state.refresh_expired=''
		  state.refresh_token=''
	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
	  },
	  logOut(context,data){
		  context.commit("logOut");
	  },
	  initReady(context,data){
		  context.commit("initReady");
	  },
	  destop(context,data){
		  context.commit("destop");
	  },
	  changeMyPage(context,data){
		  context.commit("changeMyPage",data);
	  },
	  changeFootNav(context,data){
	  		  context.commit("changeFootNav",data);
	  },
	  setToken(context,data){
		  context.commit("changeFootNav",data);
	  },
	  async logon(context,data){
		  let _this = this;
		  if(data.logOnType==1){
			  let logon= await postFetch("Login",{"username":data.userName,"password":data.password,code:data.picCode},false)
				if(logon.data.access_token){
					context.commit('setToken',logon.data)
					setToken(logon.data)
					_this.dispatch('userST/logon', {
						phone: data.userName
					})
					if(data.callback){
						data.callback(1)
					}
				}else{
					if(data.callback){
						data.callback(0,logon.data.message)
					}
				}
		  }else{
			  let logon= await postFetch("MobileLogin",{"tel":data.userName,code:data.code},false)
			  				if(logon.data.access_token){
			  					context.commit('setToken',logon.data)
			  					setToken(logon.data)
								_this.dispatch('userST/logon', {
									phone: data.userName
								})
			  					if(data.callback){
			  						data.callback(1)
			  					}
			  				}else{
			  					if(data.callback){
			  						data.callback(0,logon.data.message)
			  					}
			  				}
		  }
	  },
	  async updateLogonPicCode(context,data){
		  let picCode = await postFetch("auth-loginvercode",{"account":data},false)
		  context.commit('updateLogonPicCode',picCode)
	  },
	  async updateRegestPicCode(context,data){
	  		  let picCode = await postFetch("User-RegisterVerCode",{"account":data},false)
	  		  context.commit('updateRegestPicCode',picCode)
	  },
	  async updateLogonPicCodeByPhone(context,data){
	  		  let picCode = await postFetch("Auth-SmsVerCode",{"tel":data},false)
	  		  context.commit('updateLogonPicCodeByPhone',picCode)
	  },
	  async getPhoneCode(context,data){
		  let res = await postFetch("sendSmsForRegister",{tel:data.tel,code:data.code},false)
		  if(res.data.send_sms && data.callback){
			  data.callback(res)
		  }
	  },
	  async getLogonPhoneCode(context,data){
	  		  let res = await postFetch("sendSmsForLogin",{tel:data.tel,code:data.code},false)
	  		  if(res.data.send_sms && data.callback){
	  			  data.callback(res)
	  		  }
	  },
	  async regest(context,data){
		  let _this =this;
		  let res = await postFetch("Register",{"account":data.account,"password":data.password,"code":data.code},false)
		  if(res.data.access_token && data.callback){
			 context.commit('setToken',res.data)
			 setToken(res.data)
			 _this.dispatch('userST/logon', {
			 	phone: data.account
			 })
			  data.callback()
		  }else if(data.callback){
			  data.callback(res.data.message)
		  }
	  },
	  async verifyBind(context,data){
		  let res = await postFetch("Rx-VerifyCN",{"userName":data.userName,"password":data.password},true)
		  try{
			  if(res.data.data.data.type==2){
				  data.callback(res.data.data.data)
			  }else{
				  data.callback(null,"账号已绑定")
			  }
		  }catch(e){
			  data.callback(null,res.data.data.message)
		  }
		  			  
	  },
	  async bind(context,data){
	  		  let res = await postFetch("Rx-BindCN",{"cbeAccount":this.state.userST.phone,"distId":data.distId},true)
	  		  if(res.data.status==1){
				  data.callback()
			  }else{
				  data.callback(res.data.message)
			  }  			  
	  },
	  async checkPhoneHaveRegest(context,data){
		  let res = await postFetch("User-AccountExsit",{"account":data.account},false)
		  if(!res.data.exist_account){
		  				  data.callback()
		  }else{
		  				  data.callback(1)
		  }  	
	  },
	  async checkCNHaveRegest(context,data){
	  		  let res = await postFetch("User-CnExsit",{"bindno":data.bindno},true)
	  		  if(!res.data.exist_cn){
	  		  				  data.callback()
	  		  }else{
	  		  				  data.callback(1)
	  		  }  	
	  }
  }
 }