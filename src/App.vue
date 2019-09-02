<template>
  <div id="app">
    <MyHeader/>
    <div class="wrap">
      <cube-scroll>
        <router-view/>
      </cube-scroll>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from 'components/public/header/index.vue'
import MyFooter from 'components/public/footer/index.vue'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style scoped lang="stylus">
@import '~css/varibles.styl'
.wrap {
  position absolute
  left 0
  right 0
  top $headerHeight
  bottom $footerHeight
}
</style>
