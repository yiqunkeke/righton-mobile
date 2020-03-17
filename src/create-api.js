import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderMenu from 'components/public/header/menu'
import Toast from 'components/Toast'

// 声明组件以API式调用
createAPI(Vue, HeaderMenu) // 调用---> this.$createHeaderMenu
createAPI(Vue, Toast)