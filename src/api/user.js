import request from "@/utils/request";

export function login(username, password) {
    var params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    return request({
      url: "/api/v2/login",
      method: "post",
      data: params
    });
}