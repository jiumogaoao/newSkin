import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  kid:"",
	  key:0,
	  pageNo:0,
	  pageSize:10,
	  sortArry:["综合排序","销售排序","人气排序","价格正序","价格倒序"],
	  shelf:[
		  {name:'',id:''}
	  ],
	  sort:[
		  {'name':'综合',id:0},
		  {'name':'销量',id:1},
		  {'name':'人气',id:2},
		  {'name':'价格',id:3}
	  ],
	  product:[
		  {
			  follow:false,
			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
			  band:'王牌ageLOC',
			  name:'商品标题',
			  taxes:'100',
			  price:'100',
			  pId:'1'
		  },
		  {
		  			  follow:false,
		  			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  			  band:'王牌ageLOC',
		  			  name:'商品标题',
		  			  taxes:'100',
		  			  price:'100',
		  			  pId:'1'
		  },
		  {
		  			  follow:false,
		  			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  			  band:'王牌ageLOC',
		  			  name:'商品标题',
		  			  taxes:'100',
		  			  price:'100',
		  			  pId:'2'
		  },
		  {
		  			  follow:false,
		  			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  			  band:'王牌ageLOC',
		  			  name:'商品标题',
		  			  taxes:'100',
		  			  price:'100',
		  			  pId:'3'
		  },
		  {
		  			  follow:false,
		  			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  			  band:'王牌ageLOC',
		  			  name:'商品标题',
		  			  taxes:'100',
		  			  price:'100',
		  			  pId:'4'
		  },
		  {
		  			  follow:false,
		  			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',
		  			  band:'王牌ageLOC',
		  			  name:'商品标题',
		  			  taxes:'100',
		  			  price:'100',
		  			  pId:'5'
		  }
	  ]
  },
  mutations: {
	 update(state, data){
		 state.key = data.key
		 state.pageNo = 1
		 Vue.set(state,'product',data.product)
	 },
	 push(state, data){
		 state.pageNo += 1
		 Vue.set(state,'product',data.product)
	 },
	 setId(state, data){
		 state.kid = data
	 }
  },
  actions:{
	  update(context,data){
		  postFetch("product-shelf",{kid:context.state.kid,key:context.state.sortArry[data.key],pageNo:0,pageSize:context.state.pageSize},false,callback(res){
			res.key = data.key
		  	context.commit("update",res);
		  })
	  },
	  push(context,data){
		  postFetch("product-shelf",{kid:context.state.kid,key:context.state.sortArry[context.state.key],pageNo:context.state.pageNo,pageSize:context.state.pageSize},false,callback(res){
		  	context.commit("push",res);
		  })
	  },
	  setId(context, data){
	  		context.commit("setId",data);
	  }
  }
 }