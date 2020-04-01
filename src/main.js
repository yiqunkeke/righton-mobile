import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import 'css/reset.css'
import 'css/border.css'
import 'css/global.css'
import './create-api' // 注册createAPI模块
import '@/router/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
