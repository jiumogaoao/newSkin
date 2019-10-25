import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  banner:[{url:'',id:''}],
	  shelf:[{title:'',prouduct:[{follow:false},img:'',name:'',price:0,pId:'']}],
	  joinImg:'',
	  news:[
		  {img:'',
		  name:'',
		  dsc:'',
		  nId:''}
	  ],
	  story:[
		  {
			  img:'',
			  name:'',
			  sId:''
		  }
	  ]
  },
  mutations: {
	  clear(state, data){
		  Vue.set(state,'banner',[])
		  Vue.set(state,'shelf',[])
		  state.joinImg=''
		  Vue.set(state,'news',[])
		  Vue.set(state,'story',[])
	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
	  }
  }
 }