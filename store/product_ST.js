import Vue from 'vue'
import {postFetch} from "@/util/request_UT.js"
export default {
  namespaced:true,
  state: {
	  attribute:"",
	  brand:"",
	  capacity:[],
	  details:"",
	  follow:false,
	  img:[],
	  name:"",
	  pid:"",
	  price:0,
	  promotions:[],
	  property:"",
	  subtitle:"",
	  supplier:"",
	  weight:0,
	  property_id:""
  },
  mutations: {
	  clear(state, data){

	  },
	  init(state, data){
		  state.attribute = data.attribute
		  state.brand = data.brand
		  Vue.set(state,"capacity",data.capacity)
		  state.details = data.details
		  state.follow = data.follow
		  Vue.set(state,"img",data.img)
		state.name = data.name
		  state.pid = data.pid
		  state.price = data.price
		  Vue.set(state,"promotions",data.promotions)
		  state.property = data.property
		  state.subtitle = data.subtitle
		  state.supplier = data.supplier
		  state.weight = data.weight
		  state.property_id = data.capacity[0].property_id
	  },
	  setProperty(state, data){
		  state.property_id = data
	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
	  },
	  init(context,data){
		  postFetch("product-detail",{pid:data},false,function(res){
			  context.commit("init",res.data)
			  // console.log("product-detail",res)
		  })
	  },
	  setProperty(context,data){
		  context.commit("setProperty",data)
	  }
  }
 }