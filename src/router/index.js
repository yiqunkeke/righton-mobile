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
    }
]

export default new Router({
    routes: constantRouterMap,
    scrollBehavior() {
        return { x:0, y: 0}
    }
})