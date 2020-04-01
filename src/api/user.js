import request from '@/utils/request';

// 用户登录
export function login(username, password) {
    var params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return request({
      url: '/api/v2/login',
      method: 'post',
      data: params
    });
}

// 获取用户信息
export function userInfo() {
  return request({
    url: '/api/v2/user/info',
    method: 'get',
  })
}
