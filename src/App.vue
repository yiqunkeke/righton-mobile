<template>
  <div id="app">
    <MyHeader/>
    <div class="wrap">
      <router-view/>
      <copyright/>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from 'components/public/header/index.vue'
import MyFooter from 'components/public/footer/index.vue'
import copyright from 'components/copyright'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    copyright
  }
}
</script>

<style scoped lang="stylus">
@import '~css/varibles.styl'
.wrap {
  margin-top $headerHeight 
  margin-bottom $footerHeight
}
</style>
