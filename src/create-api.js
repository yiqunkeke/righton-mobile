import { createAPI } from 'cube-ui';
import Vue from 'vue';
import HeaderMenu from 'components/public/header/menu';

// 声明组件以API式调用
// 在.vue组件中调用方式：this.$createHeaderMenu
createAPI(Vue, HeaderMenu); 