import Vue from 'vue'
export default {
  namespaced:true,
  state: {
	  banner:[
		  {url:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/肌修Banner20191102MOB.jpg',id:'1'},
		  {url:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/肌修Banner20191102MOB.jpg',id:'2'},
		  {url:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/肌修Banner20191102MOB.jpg',id:'3'},
		  {url:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/肌修Banner20191102MOB.jpg',id:'4'},
		  {url:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/phone/肌修Banner20191102MOB.jpg',id:'5'}
		  ],
	  shelf:[
		  {title:'热销排行',
			prouduct:[
			  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'1'},
			  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'2'},
			  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'3'},
			  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'4'}
			]
		  },
		  {title:'彩妆系列',prouduct:[
		  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'5'},
		  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'6'},
		  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'7'},
		  {follow:false,img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/NF80clypcwPftxY6LKp6TH0phSx3wy.jpg',name:'灵韵冰晶炫感惑唇彩',price:10,pId:'8'}
		  ]},
		  ],
	  news:[
		  {img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/BFx00b0ptJs4P2Tw0b1OBB4vWYQqBp.jpg',
		  name:'如新海外购上线了',
		  dsc:'勿忘初心，自我革新，砥砺前行',
		  nId:'1'}
	  ],
	  story:[
		  {
			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/IpMMLTJCOmjYB0M3Tj5LxtpBTOBb5w.jpg',
			  name:'ageLoc王牌',
			  sId:'1'
		  },
		  {
		  			  img:'https://nuskindevelop.oss-cn-shenzhen.aliyuncs.com/destop/nPeSlwW7K11t331317eT3k7byTgGGe.jpg',
		  			  name:'Nu Skin的诞生',
		  			  sId:'2'
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