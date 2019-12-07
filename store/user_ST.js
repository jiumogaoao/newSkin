import Vue from 'vue'
import {postFetch} from "@/util/request_UT.js"
export default {
  namespaced:true,
  state: {
	  phone:'',
	  nick_name: "",
	  qq: "",
	  qr_code: "",
	  user_account: "",
	  wx: "",
	  user_buyed:[
		  // {
			 //  band: "关注产品苹果Apple"
			 //  follow: true
			 //  img: "https://s.cn/pimg0.png"
			 //  name: "Ipad 4 mini"
			 //  pid: "FK7895900KF2324"
			 //  price: 888.5
			 //  taxes: 131.5
		  // }
	  ],
	  user_follow:[
		  // {
			 //  band: "苹果Apple"
			 //  img: "https://s.cn/pimg0.png"
			 //  name: "Ipad 4 mini"
			 //  pid: "FK7895900KF2324"
			 //  price: 888.5
			 //  taxes: 131.5
		  // }
	  ]
  },
  mutations: {
  	  clear(state, data){
  		  state.phone = '';
  	  },
	  logon(state, data){
		  state.phone = data.phone
		  state.nick_name = data.nick_name
		  state.qq = data.qq
		  state.qr_code = data.qr_code
		  state.user_account = data.user_account
		  state.wx = data.wx
	  },
	  setAddressList(state, data){
		  
	  },
	  setBuyedList(state, data){
		  
	  },
	  setFollowList(state, data){
		  
	  }
  },
  actions:{
  	  clear(context,data){
  		  context.commit("clear");
  	  },
	  logon(context,data){
		  postFetch('Mine-Info',{},true,function(res){
			  console.log("获取用户信息",res)
			  if(res.data.status==1){
				  res.data.user_info.phone = res.data.user_info.tel
				  context.commit("logon",res.data.user_info);
			  }else{
				  uni.showToast({
				  	title:res.data.message,
					icon:'none'
				  })
			  }
		  })
		  postFetch('Mine-Address',{pageNo:1,pageSize:10},true,function(res){
			  console.log("获取地址信息",res)
			  if(res.data.status==1){
			  				  context.commit("setAddressList",res.data.user_address);
			  }else{
			  				  uni.showToast({
			  				  	title:res.data.message,
			  					icon:'none'
			  				  })
			  }
		  })
		  postFetch('Miner-Buyed',{pageNo:1,pageSize:10},true,function(res){
			  console.log("获取购买信息",res)
			  if(res.data.status==1){
			  				  context.commit("setBuyedList",res.data.user_buyed);
			  }else{
			  				  uni.showToast({
			  				  	title:res.data.message,
			  					icon:'none'
			  				  })
			  }
		  })
		  postFetch('Mine-Follow',{pageNo:1,pageSize:10},true,function(res){
			  console.log("获取关注信息",res)
			  if(res.data.status==1){
			  				  context.commit("setFollowList",res.data.user_follow);
			  }else{
			  				  uni.showToast({
			  				  	title:res.data.message,
			  					icon:'none'
			  				  })
			  }
		  })
		  
	  }
  }
}