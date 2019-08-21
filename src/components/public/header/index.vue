<template>
   <div class="headerWrap">
       <h1></h1>
       <div class="menu" @click="showMenu"></div>
   </div>
</template>

<script>
export default {
   name: 'myHeader',
   data() {
       return {
           menu: [
               {
                   title: '关于睿昂'
               },
               {
                   title: '产品与研发',
                   children: [
                       '诊断试剂',
                       '科研试剂',
                       '检测服务',
                       '应用示例'
                   ]
               },
               {
                   title: '睿昂子公司'
               },
               {
                   title: '新闻中心'
               },
               {
                   title: '联系我们'
               },
               {
                   title: '允限销'
               }
           ]
       }
   },
   methods: {
       showMenu() {
           this.headerMenuComp = this.headerMenuComp || this.$createHeaderMenu({
               $props: {
                   menu: 'menu'
               }
           })
           this.headerMenuComp.show()
       }
   }
}
</script>

<style scoped lang="stylus">
@import '~css/header/index.styl'
</style>
