<template>
  <div>
    <div class="desc">
      <h1>诊断试剂</h1>
      <p>
        总介绍睿昂试剂产品由睿昂主导，旗下分公司研制，及其优势。
        总介绍睿昂试剂产品由睿昂主导，旗下分公司研制，及其优势。
        总介绍睿昂试剂产品由睿昂主导，旗下分公司研制，及其优势。
        总介绍睿昂试剂产品由睿昂主导，旗下分公司研制，及其优势。
        总介绍睿昂试剂产品由睿昂主导，旗下分公司研制，及其优势。
      </p>
      <cube-select
        v-model="value"
        :options="options"
      />
    </div>
    <ul class="list">
      <router-link
        tag="li"
        to="/diagnosis/detail"
      >
        白血病相关融合基因检测试剂盒
      </router-link>
      <router-link
        tag="li"
        to="/diagnosis/detail"
      >
        人EGFR基因突变检测试剂盒
      </router-link>
      <router-link
        tag="li"
        to="/diagnosis/detail"
      >
        人K-ras和B-raf基因突变检测试剂盒
      </router-link>
    </ul>
    <copyright />  
  </div>
</template>

<script>
import copyright from 'components/copyright';
export default {
   name: 'Diagnosis',
   components: {
       copyright
   },
   data () {
       return {
           value: 'FISH',
           options: ['FISH', 'PCR毛细管电泳法', '数字PCR法', 'Sanger法', 'NGS', '抽提试剂']
       };
   },
};
</script>

<style lang="stylus">
@import '~css/diagnosis/index.styl'
</style>