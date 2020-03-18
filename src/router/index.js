import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
    {
        path: '/login',
        name: 'Login',
        component: resolve => {
            require(['pages/login/index'], resolve)
        },
        meta: { title: '登录' }
    },
    {
        path: '/',
        name: 'Home',
        hidden: true,
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
    },
    {
        path: '/subCompany',
        name: 'subCompany',
        component: resolve => {
            require(['pages/subCompany/index'], resolve)
        },
        meta: { title: '睿昂子公司' }
    },
    {
        path: '/news',
        name: 'news',
        component: resolve => {
            require(['pages/news/index'], resolve)
        },
        meta: { title: '新闻中心' }
    },
    {
        path: '/news/detail',
        name: 'newsDetail',
        hidden: true,
        component: resolve => {
            require(['pages/news/detail'], resolve)
        },
        meta: { title: '新闻详情' }
    },
    {
        path: '/diagnosis',
        name: 'diagnosis',
        component: resolve => {
            require(['pages/diagnosis/index'], resolve)
        },
        meta: { title: '诊断试剂' }
    },
    {
        path: '/diagnosis/detail',
        name: 'diagnosisDetail',
        hidden: true,
        component: resolve => {
            require(['pages/diagnosis/detail'], resolve)
        },
        meta: { title: '诊断试剂详情' }
    }
]

export default new Router({
    routes: constantRouterMap,
    mode: "history", // 必须设置
    scrollBehavior() {
        return { x:0, y: 0}
    }
})