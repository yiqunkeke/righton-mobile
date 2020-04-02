<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="wrapper"
    >
      <div class="menuWrapper">
        <div class="clearfix">
          <i
            class="close"
            @click="hide"
          />
        </div>
        <ul class="menuList">
          <li
            v-for="(item, index) in menu" 
            :key="index"
          >
            <template v-if="item.children && !item.hidden">
              <dl>
                <!-- 只有一个子路由 -->
                <router-link
                  v-if="item.children.length === 1 &&
                    !item.children[0].children &&
                    !item.children[0].hidden"
                  :key="item.children[0].name"
                  :to="item.path + '/' + item.children[0].path"
                >
                  <dt>
                    <span v-if="item.children[0].meta && item.children[0].meta.title">
                      {{ item.children[0].meta.title }}
                    </span>
                  </dt>
                </router-link>
                <!-- 有多个子路由 -->
                <template v-if="item.children && item.children.length > 1">
                  <!-- 一级菜单 -->
                  <dt>
                    <span v-if="item.meta && item.meta.title">
                      {{ item.meta.title }}
                    </span>
                  </dt>
                  <!-- 二级菜单 -->
                  <dd
                    v-for="(child, idx) in item.children"
                    :key="idx"
                  >
                    <template v-if="!child.hidden">
                      <router-link :to="item.path + '/' + child.path">
                        <span v-if="child.meta && child.meta.title">
                          {{ child.meta.title }}
                        </span>
                      </router-link>
                    </template>
                  </dd>
                </template>
              </dl>
            </template>
            <!-- 如登录：无子路由 -->
            <template v-if="!item.children">
              <dl>
                <router-link :to="item.path">
                  <dt v-if="item.meta && item.meta.title">
                    {{ item.meta.title }}
                  </dt>
                </router-link>
              </dl>
            </template>
          </li>
        </ul>
      </div>
    </div>   
  </transition>    
</template>

<script>
import popupMixin from 'js/mixins/popup';
export default {
   name: 'HeaderMenu',
   mixins: [popupMixin],
   props: {
       menu: {
           type: Array,
           default: () => {
               return [];
           }
       }
   },
   data (){
       return {
           subVisible: false
       };
   },
   computed: {
       subMenuConditon () {
           return function (item) {
               if(item.children && item.children.length > 0) {
                   return item.children.some(route => route.hidden);
               } else {
                   return true;
               }
           };
       }
   },
   mounted () {
       console.log(this.menu);
   },
   methods: {
       toggle (item){
           console.log(item);
           if(item.children && item.children.length > 1) {
               this.subVisible = !this.subVisible;
           }
       },
       // 跳转
       handleClick (item) {
           let path = item.path;
           if(path){
               this.$router.push({ path });
           } else {
               return false;
           }
        //    this.hide()
       }
   }
};
</script>

<style scoped lang="stylus">
@import '~css/header/menu.styl'
</style>
