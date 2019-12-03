import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		userName:"",
	},
	mutations:{
		CHANGESERNAME(state,username){
			state.userName = username
		}
	},
	actions:{
		setUserName(context,username){
			context.commit("CHANGESERNAME",username)
		}
	}
})

export default store