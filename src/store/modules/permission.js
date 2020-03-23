import {constantRouterMap, asyncRouterMap} from "@/router"

/** 判断路由是否有权限
 * 
 * @param {*} roles 用户信息角色数组
 * @param {*} route 当前路由
 */
function hasPermission(roles, route) {
    if(route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.indexOf(role) >= 0);
    } else {
        return true;
    }
}

// 比较asyncRouterMap 与 roles
function filterAsyncRouter(asyncRouterMap, roles) {
    return asyncRouterMap.filter(route => {
        if(hasPermission(roles, route)) {
            if(route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true;
        }
        return false;
    })
}


const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, val) => {
            state.addRouters = val;
            state.routers = constantRouterMap.concat(val);
        }
    },
    actions: {
        GenerateRoutes(ctx, roles) {
            return new Promise(resolve => {
                let accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
                ctx.commit("SET_ROUTERS", accessedRouters);
                resolve();
            })
        }
    }

}

export default permission;
