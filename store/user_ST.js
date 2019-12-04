import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  phone:''
  },
  mutations: {
  	  clear(state, data){
  		  state.phone = '';
  	  },
	  logon(state, data){
		  state.phone = data.phone
	  }
  },
  actions:{
  	  clear(context,data){
  		  context.commit("clear");
  	  },
	  logon(context,data){
		  context.commit("logon",data);
	  }
  }
}