import axios from "axios";

const service = axios.create({
    baseURL: process.env.baseURL,
    timeout: 180000
});

//请求拦截
service.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        Promise.reject(err);
    }
)

// 响应拦截
service.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err)
    }
)

export default service;