<template>
  <div class="login">
      <cube-input v-model="username" type="text" placeholder="请输入用户名"></cube-input>
      <cube-input v-model="password" type="password" placeholder="请输入密码" :eye="eye"></cube-input>
      <cube-button @click="handleLogin">登录</cube-button>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
    name: "Login",
    data() {
        return {
            username: null,
            password: null,
            eye: true
        }
    },
    methods: {
        async handleLogin() {
            const res = await login(this.username, this.password);
            // eslint-disable-next-line no-console
            console.log(res);
        }
    }
}
</script>

<style scoped lang="stylus">
@import '~css/login/index.styl'
</style>
