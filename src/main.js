import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'

import 'css/reset.css'
import 'css/border.css'
import './create-api' // 注册createAPI模块

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
