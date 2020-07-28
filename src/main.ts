import Vue from 'vue'
import Vuex from 'vuex';
import { Component } from 'vue-property-decorator'
import store from './store/index'
import VueRouter from 'vue-router'
import routes from './router/index'

import '@/style/APP.styl'

import App from './App.vue'

import '@/mixin/function';
// import './test'
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

Vue.use(VueRouter)
Vue.use(Vuex);
// Vue.config.productionTip = false
const routerPush: any = VueRouter.prototype.push
const routerReplace: any = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location: any): any {
  return routerPush.call(this, location).catch((error: any) => error)
}
VueRouter.prototype.replace = function replace(location: any): any {
  return routerReplace.call(this, location).catch((error: any) => error)
}
const router = new VueRouter(routes)
new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount('#app')
