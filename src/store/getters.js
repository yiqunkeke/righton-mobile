const getters = {
    token: state => state.user.token,
    roles: state => state.user.roles,
    user: state => state.user.user,
    addRouters: state => state.permission.addRouters,
    routers: state => state.permission.routers
}

export default getters;