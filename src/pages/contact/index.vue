<template>
  <div>
    <h1 class="contactBanner">
      <p>联系我们<br>contact us</p>
    </h1>
    <div class="map" />
    <div class="address">
      <h2>上海睿昂基因科技股份有限公司</h2>
      <p>
        <em>注册地址：</em>上海市奉贤区金齐路868号4759室<br>
        <em>办公地址：</em>上海市奉贤区望园路2066弄5幢3层
      </p>
    </div>
    <div class="email">
      <p>
        <em>商务:</em> info@rightongene.com<br>
        <em>应聘:</em> hr-recruit@rightongene.com<br>
        <em>咨询:</em> 021-37199020
      </p>
      <img
        src="../../assets/img/contact/QRcode.jpg"
        alt="二维码"
      >
    </div>
    <dl class="subCompany">
      <dt>上海源奇生物医药科技有限公司</dt>
      <dd>
        上海市奉贤区汇丰北路699号4幢2楼<br>
        021-37196264
      </dd>
    </dl>
    <dl class="subCompany">
      <dt>苏州云泰生物医药科技有限公司</dt>
      <dd>
        苏州市工业园区金鸡大道99号苏州纳米城西北区2栋606、608室<br>
        0512-65869776
      </dd>
    </dl>
    <dl class="subCompany">
      <dt>武汉百泰基因工程有限公司</dt>
      <dd>
        武汉市东湖开发区高新大道666号<br>
        武汉国家生物产业基地B.C.D区研发楼B1栋<br>
        027-87970458
      </dd>
    </dl>
    <copyright />
  </div>
</template>

<script>
import copyright from 'components/copyright';
export default {
   name: 'Contact',
   components:{
       copyright
   },
   data () {
       return {};
   },
};
</script>

<style lang="stylus">
@import '~css/contact/index.styl'
</style>
