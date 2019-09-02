<template>
   <div class="headerWrap">
       <router-link tag="h1" to="/"></router-link>
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
                   title: '关于睿昂',
                   path: '/about'
               },
               {
                   title: '产品与研发',
                   children: [
                       {
                           title: '诊断试剂',
                           path:'/diagnosis'
                       },
                       {
                           title: '科研试剂',
                           path: '/scientific'
                       },
                       {
                           title: '检测服务',
                           path: '/test'
                       },
                       {
                           title: '应用示例',
                           path: '/example'
                       }
                   ]
               },
               {
                   title: '睿昂子公司',
                   path: '/subCompany'
               },
               {
                   title: '新闻中心',
                   path: '/news'
               },
               {
                   title: '联系我们',
                   path: 'contact'
               },
               {
                   title: '允限销',
                   path: 'sale'
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
