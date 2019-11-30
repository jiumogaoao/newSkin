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
	  updateRegestPicCode(state, data){
		  state.regestPicCode = data
	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
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
		  if(data.logOnType==1){
			  let logon= await postFetch("Login",{"username":data.userName,"password":data.password,code:data.picCode},false)
				if(logon.data.access_token){
					context.commit('setToken',logon.data)
					setToken(logon.data)
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
	  		  let picCode = await postFetch("user-registervercode",{"account":data},false)
	  		  context.commit('updateRegestPicCode',picCode)
	  }
  }
 }