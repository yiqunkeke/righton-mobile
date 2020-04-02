import axios from 'axios';
import { Toast } from 'cube-ui';
import { getToken } from '@/utils/token';

const service = axios.create({
    baseURL: process.env.baseURL,
    timeout: 180000
});

//请求拦截
service.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${getToken()}`;
        // 设置loading效果
        Toast.$create({
            type: 'loading'
        }).show();
        return config;
    },
    err => {
        Promise.reject(err);
    }
);

// 响应拦截
service.interceptors.response.use(
    res => {
        Toast.$create().hide();
        return res;
    },
    err => {
        let { status, data } = err.response;
        switch (status) {
            case 401:
                Toast.$create({
                    time: 1000,
                    txt: `${data.errorMessage}`,
                    type: 'error'
                }).show();
        }
        return Promise.reject(err);
    }
);

export default service;
