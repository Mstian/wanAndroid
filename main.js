import Vue from 'vue'
import App from './App'
import tools from './common/js/common.js'
import ajaxJs from './common/ajax.js'
import urls from './common/js/requesturl.js'
import loadMore from './components/uni-load-more/uni-load-more.vue'
import store from './store'
Vue.component("uniLoadMore",loadMore)//上拉加载更多组件使用场景较多，因此全局注册

Vue.prototype.$ajax = ajaxJs.ajaxJs
Vue.prototype.$tools = tools
Vue.prototype.$urls = urls; //nvue不能使用此类公共方法

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
