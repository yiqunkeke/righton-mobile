<template>
    <div>
        <img src="../../assets/img/about/banner.jpg" alt="aboutUs" class="aboutBanner"/>
        <cube-sticky :pos="scrollY">
            <cube-sticky-ele>
                
            </cube-sticky-ele>
        </cube-sticky>    
    </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
          scrollY: 0,
       }
   },
}
</script>

<style lang="stylus">
@import '~css/about/index.styl'
</style>

