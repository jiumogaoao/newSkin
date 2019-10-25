import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  follow:false,
	  img:[''],
	  band:'',
	  name:'',
	  taxes:0,
	  freight:0,
	  oldPrice:0,
	  price:0,
	  pId:'',
	  activity:[{type:0,option:[name:'',key:0]}],
	  logistics:[{name:'',key:0}],
	  capacity:[{name:'',key:0}],
	  stock:0,
	  detail:'',
	  Notification:''
  },
  mutations: {
	  clear(state, data){

	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
	  }
  }
 }