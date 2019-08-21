import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

import 'css/reset.css'
import 'css/border.css'
import './create-api' // 注册createAPI模块

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
