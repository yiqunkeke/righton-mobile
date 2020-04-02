import router from './index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/token';
import store from '@/store';
import { Toast } from 'cube-ui';

const whiteList = ['/login']; // 不重定向白名单

router.beforeEach((to, from, next) => {
    NProgress.start();
    if(getToken()) {
        if(to.path === '/login') {
            next();
            NProgress.done();
        } else {
            let roleArray = store.getters.roles;
            if(roleArray && roleArray.length === 0) {
                store.dispatch('getUserInfo')
                .then( res => {
                    console.log('用户信息', res);
                    let roles = res.data.roles;
                    store.dispatch('GenerateRoutes', roles)
                    .then(() => {
                        router.addRoutes(store.getters.addRouters);
                    });
                    next({...to, replace: true});
                })
                .catch(err => {
                    Toast.$create({
                        time: 1000,
                        txt: `${err.errorMessage}`,
                        type: 'error'
                    }).show();
                    next('/login');
                });
            } else {
                next();
            }
        }
    } else {
        if(whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});
