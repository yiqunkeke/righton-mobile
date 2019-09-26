<template>
    <div class="footerWrap">
        <ul>
            <li v-for="(item, index) in menu" 
                :key="index">
                {{item.title}}
            </li>
        </ul>
        <dl>
            <dd v-for="(it, idx) in test" :key="idx">
                {{it.title}}
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
   name: 'myFooter',
   data() {
       return {
           test: [
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
                   title: '淋巴瘤'
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
               }
           ]
       }
   },
   methods: {
       handleClick() {

       }
   }
}
</script>

<style scoped lang="stylus">
@import '~css/footer/index.styl'
</style>
