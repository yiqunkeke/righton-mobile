<template>
    <transition name="fade">
        <div class="wrapper" v-show="visible">
            <div class="menuWrapper">
                <div class="clearfix">
                    <i class="close" @click="hide"></i>
                </div>
                <ul class="menuList">
                    <li v-for="(item, index) in menu" 
                        v-if="!item.hidden"
                        :key="index">
                        <dl>
                            <dt @click="toggle(item)">
                                <span @click="handleClick(item.path)">
                                    {{ item.meta.title }}
                                </span>
                            </dt>
                            <template v-if="item.children && subVisible">
                                <dd v-for="(it, idx) in item.children" 
                                    v-if="!it.hidden"
                                    :key="idx">
                                    <span @click="handleClick(it.path)">
                                        {{it.meta.title}}
                                    </span>
                                </dd>
                            </template>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>   
    </transition>    
</template>

<script>
import popupMixin from 'js/mixins/popup'
export default {
   name: 'headerMenu',
   mixins: [popupMixin],
   props: {
       menu: {
           type: Array,
           default: () => {
               return []
           }
       }
   },
   data(){
       return {
           subVisible: false
       }
   },
   methods: {
       toggle(item){
           if(item.children && item.children.length > 1) {
            //    this.subVisible = !this.subVisible
           }
       },
       // 跳转
       handleClick(path) {
           if(path){
               this.$router.push({ path })
           } else {
               return false
           }
           this.hide()
       }
   }
}
</script>

<style scoped lang="stylus">
@import '~css/header/menu.styl'
</style>
