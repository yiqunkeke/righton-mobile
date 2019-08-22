<template>
   <ul class="footerWrap">
       <router-link to="/" tag="li">血液肿瘤</router-link>
       <router-link to="/" tag="li">淋巴瘤</router-link>
       <router-link to="/" tag="li">实体肿瘤</router-link>
       <router-link to="/" tag="li">其它</router-link>
   </ul>
</template>

<script>
export default {
   name: 'myFooter',
   data() {
       return {}
   },
}
</script>

<style scoped lang="stylus">
@import '~css/footer/index.styl'
</style>
