import { login, userInfo } from "api/user";
import md5 from "js-md5";
import {getToken, setToken, removeToken} from "@/utils/token";

const user = {
    state: {
        token: getToken(),
        roles: [],
        user: {}
    },
    mutations: {
        SET_TOKEN: (state, val) => {
            state.token = val;
        },
        SET_ROLES: (state, val) => {
            state.roles = val;
        },
        SET_USER: (state, val) => {
            state.user = val;
        }
    },
    actions: {
        // 用户登录
        Login(ctx, params) {
            let username = params.username;
            let password = params.password;
            password = md5(password);
            return new Promise((resolve, reject) => {
                login(username, password)
                .then(res => {
                    console.log(res);
                    let token = res.headers.authorization;
                    token = token.split(" ")[1];
                    setToken(token); // 将token种植到本地
                    ctx.commit("SET_TOKEN", token);  // 并写入store
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
            })
        },

        // 获取用户信息
        getUserInfo(ctx) {
          return new Promise((resolve, reject) => {
            userInfo()
            .then(res => {
                let roles = res.data.roles;
                if(roles && roles.length > 0) {
                    ctx.commit("SET_ROLES", roles);
                }
                ctx.commit("SET_USER", res.data);
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
          })  
        }

    }
}

export default user;