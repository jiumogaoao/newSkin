import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  shelf:[
		  {name:'',id:''}
	  ],
	  sort:[
		  {name:'',key:0}
	  ],
	  product:[
		  {
			  follow:false,
			  img:'',
			  band:'',
			  name:'',
			  taxes:'',
			  price:'',
			  pId:''
		  }
	  ]
  },
  mutations: {
	  clear(state, data){
		  Vue.set(state,'shelf',[])
		  Vue.set(state,'sort',[])
		  Vue.set(state,'product',[])
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