import Vue from 'vue'
import {postFetch} from "@/util/request_UT.js"
export default {
  namespaced:true,
  state: {
	  kid:"",
	  key:0,
	  pageNo:1,
	  pageSize:10,
	  shelf:[
		  // {name:'',id:''}
	  ],
	  sort:[
		  // {'name':'综合',key:0},
		  // {'name':'销量',key:1},
		  // {'name':'人气',key:2},
		  // {'name':'价格',key:3}
	  ],
	  product:[
		  // {
			 //  follow:false,
			 //  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
			 //  band:'王牌ageLOC',
			 //  name:'商品标题',
			 //  taxes:'100',
			 //  price:'100',
			 //  pId:'1'
		  // },
		  // {
		  // 			  follow:false,
		  // 			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  // 			  band:'王牌ageLOC',
		  // 			  name:'商品标题',
		  // 			  taxes:'100',
		  // 			  price:'100',
		  // 			  pId:'1'
		  // },
		  // {
		  // 			  follow:false,
		  // 			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  // 			  band:'王牌ageLOC',
		  // 			  name:'商品标题',
		  // 			  taxes:'100',
		  // 			  price:'100',
		  // 			  pId:'2'
		  // },
		  // {
		  // 			  follow:false,
		  // 			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  // 			  band:'王牌ageLOC',
		  // 			  name:'商品标题',
		  // 			  taxes:'100',
		  // 			  price:'100',
		  // 			  pId:'3'
		  // },
		  // {
		  // 			  follow:false,
		  // 			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  // 			  band:'王牌ageLOC',
		  // 			  name:'商品标题',
		  // 			  taxes:'100',
		  // 			  price:'100',
		  // 			  pId:'4'
		  // },
		  // {
		  // 			  follow:false,
		  // 			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  // 			  band:'王牌ageLOC',
		  // 			  name:'商品标题',
		  // 			  taxes:'100',
		  // 			  price:'100',
		  // 			  pId:'5'
		  // }
	  ]
  },
  mutations: {
	 update(state, data){
		 state.key = data.key
		 state.pageNo = 2
		 Vue.set(state,'product',data.product)
		 Vue.set(state,'shelf',data.shelf)
		 Vue.set(state,'sort',data.sort)
	 },
	 push(state, data){
		 state.pageNo += 1
		 Vue.set(state,'product',[...state.product,data.product])
	 },
	 setId(state, data){
		 state.kid = data
	 }
  },
  actions:{
	  update(context,data){
		  postFetch("product-shelf",{kid:context.state.kid,key:data.key,pageNo:1,pageSize:context.state.pageSize},false,function(res){
			res.data.key = data.key
		  	context.commit("update",res.data);
		  })
	  },
	  push(context,data){
		  postFetch("product-shelf",{kid:context.state.kid,key:context.state.key,pageNo:context.state.pageNo,pageSize:context.state.pageSize},false,function(res){
		  	context.commit("push",res.data);
		  })
	  },
	  setId(context, data){
	  		context.commit("setId",data);
	  }
  }
 }