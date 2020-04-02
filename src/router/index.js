import Vue from 'vue';
import Router from 'vue-router';
import Layout from 'components/public';
import { aboutRouter } from './modules/about'; // 关于睿昂
import { contactRouter } from './modules/contact';  // 联系我们
import { newsRouter } from './modules/news'; // 新闻中心
import { subCompanyRouter } from './modules/subCompany'; // 睿昂子公司
import { productRouter } from './modules/product'; // 产品与研发

Vue.use(Router);

export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        meta: { title: '首页' },
        children: [
            {
                path: '',
                name: 'Home',
                hidden: true,
                component: resolve => {
                    require(['pages/home/index'], resolve);
                },
                meta: { title: '首页' }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: resolve => {
            require(['pages/login/index'], resolve);
        },
        meta: { title: '登录' }
    }
];

export const asyncRouterMap = [
    aboutRouter,
    contactRouter,
    newsRouter,
    subCompanyRouter,
    productRouter
];

export default new Router({
    routes: constantRouterMap,
    mode: 'history', // 必须设置
    scrollBehavior () {
        return { x:0, y: 0};
    }
});