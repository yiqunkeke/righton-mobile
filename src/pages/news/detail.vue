<template>
    <div>
        <h1 class="banner">
            <p>新闻中心<br/>NEWS CENTER</p>
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
                        <h1 class="newsTitle">
                            睿昂基因联手Cytek<br/>强势进驻流式细胞检测领域
                        </h1>
                        <div class="newsAuthor">2019-04-16     部门     姓名</div>
                        <p class="newsPara">
                            造血与淋巴组织肿瘤的精准诊疗离不开多个检测平台（MICM）的结果整合，单纯依靠分子生物学层面的检测是远远不够。
                            为了更好、更全面的服务中国血液肿瘤患者，睿昂基因携手全球领先的全光谱流式细胞技术及衍生产品供应商：
                            Cytek Biosciences，围绕“多色流式技术”相关领域建立战略合作。
                            <br/><br/>
                            此次合作的达成，一方面将有助于睿昂基因完善现有的检测平台体系，填补免疫学检测技术的空白，
                            也标志着睿昂向着血液肿瘤MICM全平台布局的目标又迈进了一大步；随着“Aurora 高灵敏度全光谱流式细胞仪”引入中国，
                            双发后续将围绕全光谱流式细胞技术在临床上的应用开展更多角度、更高层次的项目合作，更好为中国血液肿瘤患者服务；
                            除此之外，双方还能够借助合作，实现数据、资源、市场的共享，更大程度发挥各自优势，实现协同发展。
                            双方高层坚信这次合作的成果，一定能为中国血液肿瘤患者带来福音。
                            <br/><br/>
                            <img src="../../assets/img/news/newsDetailImg01.jpg" alt="新闻图片"/>
                            <span class="imgDesc">睿昂、Cytek 双方代表出席签约仪式</span>
                            <img src="../../assets/img/news/newsDetailImg02.jpg" alt="新闻图片"/>
                            <span class="imgDesc">睿昂基因 熊慧 总经理致辞</span>
                            <img src="../../assets/img/news/newsDetailImg03.jpg" alt="新闻图片"/>
                            <span class="imgDesc">首都医科大学宣武医院 万岁桂 教授 代表临床医生 </span>
                        </p>
                        <h2 class="newsSecTitle">
                            关于 Cytek Biosciences
                        </h2>
                        <p class="newsPara">
                            Cytek Biosciences成立于1992年，总部位于美国加州，在上海、无锡分别设立研发中心和生产基地。
                            是目前全球领先的全光谱流式细胞技术及衍生产品供应商，专注于细胞免疫及流式细胞分析仪和配套解决方案，
                            是一家集开发、生产、销售与服务于一体的高新科技企业。产品遍布全球四大洲，超过10个国家。
                            Cytek Biosciences从2015年开始涉足全光谱流式细胞仪的研发，先后研制出Athena和Aurora流式细胞仪，
                            其中Athena于2019年3月获得NMPA批准，可用于临床检测。
                            <br/><br/>
                            <img src="../../assets/img/news/newsDetailImg04.jpg" alt="新闻图片"/>
                            <span class="imgDesc">Cytek Biosciences 公司大事件</span>
                            Aurora作为目前最先进的流式细胞仪之一，具备多项革命性的技术革新：
                            1）利用3激光器(405, 488, and 638nm) 最高可实现51通道，检测超过20种指标 (>20 Markers)；
                            2）优化体系兼容现有所有流式染料 (Fluorochromes)；3）通过整合每个激光下的接收模块获取的光谱信号，从而得到完整的全光谱信息；
                            4）在样本信号中通过光谱解析算法（Unmixing)计算每一个已知荧光素光谱的信号。Aurora全光谱流式细胞仪对于检测样本量少，
                            异常细胞比例低，细胞鉴别困难的检测项目具有较大优势，在儿童白血病的免疫分型、血液肿瘤的MRD监测中有较多的应用。
                            <br/><br/>
                            <img src="../../assets/img/news/newsDetailImg05.jpg" alt="新闻图片"/>
                            <br/><br/><br/>
                        </p>
                    </cube-slide-item>
                    <cube-slide-item>
                        2
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
            selectedLabel: '公司新闻',
            tabLabels: [
                {
                    label: '公司新闻'
                }, 
                {
                    label: '行业动态'
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
            }
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
@import '~css/news/index.styl'
</style>

