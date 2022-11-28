/*
 * @Date: 2022-11-28 17:12:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-28 20:47:21
 * @Description: 这是****文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
