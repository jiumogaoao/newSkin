import Vue from 'vue'
import {postFetch} from "@/util/request_UT.js"
export default {
  namespaced:true,
  state: {
	  pageNo:1,
	  pageSize:10,
	  list:[]
  },
  mutations: {
	  clear(state, data){

	  },
	  setList(state, data){
		  state.property_id = data
	  }
  },
  actions:{
	  clear(context,data){
		  context.commit("clear");
	  },
	  async getList(context, data){
		  let res= await postFetch('News-List',{pageNo:context.state.pageNo,pageSize:context.state.pageSize},false)
			
	  }
  }
 }