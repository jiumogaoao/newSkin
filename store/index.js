import Vue from 'vue'
import Vuex from 'vuex'
import rootST from './root_ST'
import indexST from './indexShow_ST'
import userST from './user_ST'
import shelfST from './shelf_ST'
import shoppingCarST from './shoppingCar_ST'
import followST from './follow_ST'
import historyST from './history_ST'
import productST from './product_ST'
import newsST from './news_ST'
import CNST from './CN_ST'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		testvuex:false
	},
	modules: {
		rootST,
		indexST,
		userST,
		shelfST,
		shoppingCarST,
		followST,
		historyST,
		productST,
		newsST,
		CNST
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state){
			state.testvuex = true
		},
		setTestFalse(state){
			state.testvuex = false
		}
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	},
	plugins:[createPersistedState('localStorage')]
})

export default store
