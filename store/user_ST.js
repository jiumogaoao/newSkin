import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  userName:''
  },
  mutations: {
  	  clear(state, data){
  		  state.userName = '';
  	  },
	  logon(state, data){
		  state.userName = data.userName
		  uni.navigateBack()
	  }
  },
  actions:{
  	  clear(context,data){
  		  context.commit("clear");
  	  },
	  logon(context,data){
		  data.userName='1111'
		  context.commit("logon",data);
	  }
  }
}