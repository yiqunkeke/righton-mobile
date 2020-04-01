<template>
  <div class="login">
    <cube-input
      v-model="username"
      type="text"
      placeholder="请输入用户名"
    />
    <cube-input
      v-model="password"
      type="password"
      placeholder="请输入密码"
      :eye="eye"
    />
    <cube-button @click="handleLogin">
      登录
    </cube-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data() {
        return {
            username: null,
            password: null,
            eye: false
        }
    },
    methods: {
        ...mapActions(['Login']),
        // 登录
        handleLogin() {
            this.Login({
                username: this.username,
                password: this.password
            })
            .then(() => {
                this.$router.push({
                    path: '/'
                })
            })
        }
    }
}
</script>

<style scoped lang="stylus">
@import '~css/login/index.styl'
</style>
