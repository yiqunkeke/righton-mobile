const TokenKey = 'User-Token';

export function getToken() {
    return window.sessionStorage.getItem(TokenKey);
}

export function setToken(tokenVal) {
    return window.sessionStorage.setItem(TokenKey, tokenVal);
}

export function removeToken() {
    return window.sessionStorage.removeItem(TokenKey);
}
