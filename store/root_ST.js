import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  initReady:false,
	  destop:false,
	  place:'',
	  logo:'',
	  topNav:[{nav:'',url:''}],
	  secondNav:[{nav:'',child:[{nav:'',child:[{nav:'',id:''}]}]}]
  },
  mutations: {
	  clear(state, data){
		  state.initReady = false;
	  },
	  initReady(state, data){
		  state.initReady = true;
	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
	  },
	  initReady(context,data){
		  context.commit("initReady");
	  }
  }
 }