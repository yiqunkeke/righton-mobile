<template>
  <div class="footerWrap">
    <ul>
      <li
        v-for="(item, index) in menu" 
        :key="index"
        ref="tab"
        @click="handleClick(item, index)"
      >
        {{ item.title }}
      </li>
    </ul>
    <dl
      v-show="subMenuVisible"
      ref="subMenu"
    >
      <dd
        v-for="(it, idx) in subMenu"
        :key="idx"
      >
        {{ it.title }}
      </dd>
    </dl>
  </div>
</template>

<script>
import { ArrayIsEqual } from '@/utils'
export default {
   name: 'MyFooter',
   data() {
       return {
           subMenuVisible: false,
           subMenu: [
               {
                           title: 'AML急性髓系白血病'
                       },
                       {
                           title: 'CLL慢性淋巴细胞白血病'
                       },
                       {
                           title: 'MDS骨髓增生异常综合症'
                       }
           ],
           menu: [
               {
                   title: '血液肿瘤',
                   children: [
                       {
                           title: 'AML急性髓系白血病'
                       },
                       {
                           title: 'CLL慢性淋巴细胞白血病'
                       },
                       {
                           title: 'MDS骨髓增生异常综合症'
                       }
                   ]
               },
               {
                   title: '淋巴瘤',
                   children: []
               },
               {
                   title: '实体肿瘤',
                   children: [
                       {
                           title: '肠癌'
                       },
                       {
                           title: '肺癌'
                       },
                       {
                           title: '乳腺癌'
                       },
                       {
                           title: '宫颈癌'
                       },
                       {
                           title: '膀胱癌'
                       }
                   ]
               },
               {
                   title: '其它',
                   children: [
                       {
                           title: 'FISH'
                       },
                       {
                           title: '数字PCR法'
                       },
                       {
                           title: 'Sanger法'
                       },
                       {
                           title: 'NGS'
                       },
                       {
                           title: '抽提试剂'
                       }
                   ]
               }
           ]
       }
   },
   methods: {
       handleClick(item, index) {
           // 调整子菜单位置
           let left = this.$refs.tab[index].getBoundingClientRect().left
           let subMenu = this.$refs.subMenu
           subMenu.style.left = `${left}px`
           // 设置子菜单内容
           let isEqual = ArrayIsEqual(this.subMenu, item.children)
           if(isEqual) {
               this.subMenuVisible = !this.subMenuVisible
           } else {
               this.subMenu = item.children
               this.subMenuVisible = true
           }
       }
   }
}
</script>

<style scoped lang="stylus">
@import '~css/footer/index.styl'
</style>
