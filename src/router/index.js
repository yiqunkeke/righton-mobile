import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
    {
        path: '/',
        name: 'Home',
        component: resolve => {
            require(['pages/home/index'], resolve)
        },
        meta: { title: '首页' }
    },
    {
        path: '/about',
        name: 'About',
        component: resolve => {
            require(['pages/about/index'], resolve)
        },
        meta: { title: '关于睿昂' }
    },
    {
        path: '/contact',
        name: 'contact',
        component: resolve => {
            require(['pages/contact/index'], resolve)
        },
        meta: { title: '联系我们' }
    }
]

export default new Router({
    routes: constantRouterMap,
    mode: "history", // 必须设置
    scrollBehavior() {
        return { x:0, y: 0}
    }
})