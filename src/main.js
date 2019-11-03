import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Somepage from './components/Somepage.vue'
import Articles from './components/Articles.vue'
import DummyBanner from './components/articlescomponents/DummyBanner.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

	{ path: '/', component: Home },
	{ path: '/some-page', component: Somepage },
	{ path: '/articles', component: Articles },
	{ path: '/dummy-banner', component: DummyBanner },
	{ path: '*', redirect: '/' }

]

const router = new VueRouter ({
	routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
