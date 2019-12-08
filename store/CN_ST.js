import Vue from 'vue'
import {postFetch} from "@/util/request_UT.js"
export default {
  namespaced:true,
  state: {
	  binded:false
  },
  mutations: {
	setInfo(state, data){
		
	},
  },
  actions:{
	async getInfo(context,data){
		let res = await postFetch('Rx-GetCnByMobile',{mobile:this.state.userST.phone},true)
		if(res.data.resultCode==1){
			
		}
	}
  }
}