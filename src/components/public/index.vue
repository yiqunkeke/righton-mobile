<template>
  <div>
        <MyHeader/>
        <div class="wrap">
        <cube-scroll ref="scroll">
            <router-view/>
        </cube-scroll>
        </div>
        <img src="../../assets/img/top.svg" alt="返回顶部" class="top" @click="handleTop"/>
        <MyFooter/>
  </div>
</template>

<script>
import MyHeader from 'components/public/header/index.vue'
import MyFooter from 'components/public/footer/index.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  methods: {
    handleTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
    }
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
.top {
    position fixed
    bottom 1.84rem
    right 0.2rem
    width 0.5rem
    height 0.5rem
    z-index 2
  }
</style>
