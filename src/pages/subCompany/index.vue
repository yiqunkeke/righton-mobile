<template>
    <div>
        <h1 class="banner">
            <p>睿昂子公司<br/>RIGHTON SUBSIDIARY<br/><em>源奇生物  |  苏州云泰  |  百泰基因</em></p>
        </h1>
        <cube-tab-bar v-model="selectedLabel"
                      :data="tabLabels"
                      @change="changeTab">
        </cube-tab-bar>
        <cube-slide ref="slide"
                    :loop="loop"
                    :auto-play="autoPlay"
                    :show-dots="showDots"
                    :options="slideOptions"
                    :initial-index="initalIndex"
                    @change="changePage">
                    <cube-slide-item>
                        <h1>
                            <img src="../../assets/img/subCompany/yuanqi.gif" alt="源奇生物"/>
                        </h1>
                        <p>
                            上海源奇生物医药科技有限公司成立于2010年1月。是致力于个体化分子诊断试剂产品的研发、生产、销售，及检测服务。
                            精准医疗分子诊断试剂是企业的发展方向，研发和规模化生产具有国际先进水平的个体化用药基因突变和基因表达检测试剂盒，
                            为临床医生对患者的诊疗提供一体化解决方案，使患者及时得到个体化诊断及合理化治疗。目前企业研发产品近百种，
                            拥有符合国家食品药品监督管理局(CFDA)体外诊断试剂生产体系要求的洁净厂房近1000平米，并有四大类成熟产品完成研发下线，
                            已通过CFDA的审核，获得产品注册证。
                        </p>
                        <div class="website">
                            www.yqbiomed.com
                        </div>
                    </cube-slide-item>
                    <cube-slide-item>
                        <h1>
                            <img src="../../assets/img/subCompany/yuntai.gif" alt="云泰生物"/>
                        </h1>
                        <p>
                            苏州云泰生物医药科技有限公司成立于2013年1月，是上海睿昂基因科技股份有限公司全资子公司。
                            位于苏州纳米工业园内，拥有符合国家食品药品监督管理局(CFDA)体外诊断试剂生产体系要求的洁净厂房近1000平米。
                            是一家集生产、研发、销售为一体的高新技术企业。
                        </p>
                    </cube-slide-item>
                    <cube-slide-item>
                        <h1>
                            <img src="../../assets/img/subCompany/baitai.gif" alt="百泰基因"/>
                        </h1>
                        <p>
                            武汉百泰生物技术有限公司是上海睿昂基因科技股份有限公司的全资子公司，位于武汉东湖高新技术开发区光谷生物城内，
                            主营业务涵盖分子生物技术，是一家研发、生产、销售，是集科、工、贸为一体的高新技术企业。
                            研发和规模化生产具有国际先进水平的个体化用药基因突变和基因表达检测试剂盒，
                            为临床医生对患者的诊疗提供一体化解决方案，目前企业研发产品近百种，
                            拥有符合国家食品药品监督管理局(CFDA)体外诊断试剂生产体系要求的洁净厂房近1000平米，
                            已通过有24个产品获得CFDA产品注册证。
                        </p>
                        <div class="website">
                            www.biotgene.com
                        </div>
                    </cube-slide-item>
        </cube-slide>
        <copyright/>  
    </div>
</template>

<script>
import copyright from 'components/copyright'

export default {
   name: 'about',
   components:{
       copyright
   },
   data() {
       return {
            // tab-bar
            selectedLabel: '源奇生物',
            tabLabels: [
                {
                    label: '源奇生物'
                }, 
                {
                    label: '云泰生物'
                },
                {
                    label: '百泰基因'
                }
            ],
            // slide
            loop: false,
            autoPlay: false,
            showDots: false,
            initalIndex: 0,
            slideOptions: {
                listenScroll: true,
                probeType: 3,
                /* lock y-direction when scrolling horizontally and  vertically at the same time */
                directionLockThreshold: 0
            },
            imgOptions: {
                stopPropagation: true,
                directionLockThreshold: 0
            },
            progress: [
                {
                    url: '/',
                    // image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    image: require('img/about/progress01.gif')
                },
                {
                    url: '/',
                    image: require('img/about/progress02.gif')
                },
                {
                    url: '/',
                    image: require('img/about/progress03.gif')
                },
                {
                    url: '/',
                    image: require('img/about/progress04.gif')
                },
                {
                    url: '/',
                    image: require('img/about/progress05.gif')
                },
                {
                    url: '/',
                    image: require('img/about/progress06.gif')
                },
                {
                    url: '/',
                    image: require('img/about/progress07.gif')
                },
                {
                    url: '/',
                    image: require('img/about/progress08.gif')
                }
            ],
            honor: [
                {
                    url: '/',
                    // image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                    image: require('img/about/honor01.jpg'),
                    desc:'2016年 上海科技孵化企业创新奖'
                },
                {
                    url: '/',
                    image: require('img/about/honor02.jpg'),
                    desc: '2017年 中国创业企业新苗榜100强'
                },
                {
                    url: '/',
                    image: require('img/about/honor03.jpg'),
                    desc: '2016年 未来医疗100强'
                },
                {
                    url: '/',
                    image: require('img/about/honor04.jpg'),
                    desc: '2017年 未来医疗100强'
                },
                {
                    url: '/',
                    image: require('img/about/honor05.jpg'),
                    desc: '2016年 奉贤区四新经济示范企业'
                },
                {
                    url: '/',
                    image: require('img/about/honor06.jpg'),
                    desc: '2016年 第五届中国创新创业大赛企业组优胜奖'
                },
                {
                    url: '/',
                    image: require('img/about/honor07.jpg'),
                    desc: '2017年 奉贤区科技小巨人企业称号'
                },
                {
                    url: '/',
                    image: require('img/about/honor08.jpg'),
                    desc: '2017年 上海市“专精特新”中小企业'
                }
            ]
       }
   },
   methods: {
       // tab改变
       changeTab(current) {
           this.initalIndex = this.tabLabels.findIndex( item => item.label == current)
       },
       // slide改变
       changePage (current) {
          this.selectedLabel = this.tabLabels[current].label
       }
   }
}
</script>

<style lang="stylus">
@import '~css/subCompany/index.styl'
</style>

