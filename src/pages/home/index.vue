<template>
    <div class="home">
        <div class="banner">
            <h1>睿翼精准 昂扬未来</h1>
            <p>更好的帮助客户服务于患者</p>
        </div>
        <div class="about">
            <h1>关于睿昂</h1>
            <p>上海睿昂基因科技股份有限公司（原上海睿昂生物科技有限公司）成立于2014年，是致力于临床分子诊断与生物医药科技研发、生产、销售和服务的高科技集团公司。旗下拥有三家生产型企业：上海源奇生物医药科技有限公司、苏州云泰生物医药科技有限公司和武汉百泰基因工程有限公司，同时入资了美国创研型分子诊断仪器公司Akonni Biosystems。目前业务涉及血病肿瘤、实体瘤、心脑血管疾病、传染性疾病的检测。
                <br/>
                <br/>
                在集团创始人睿昂生物集团CEO熊慧女士的带领下，睿昂人艰苦奋斗、努力拼搏，让更多的患者享受负担得起的个体化诊疗服务！让患者可以得益于用得起的精准医疗，将是睿昂过去、现在以及将来一直坚守的信念！
            </p>
        </div>
        <div class="diagnosis">
            <h1>诊断试剂</h1>
            <p>目前已有28个产品获得SDFA医疗器械III类注册证，10个产品获得SFDA医疗器械I类注册证，近300项分子检测项目在研发过程中。</p>
        </div>
        <div class="diagnosis scientific">
            <h1>科研试剂</h1>
            <p>研发平台有荧光PCR、一代测序、二代测序、数字PCR、NanoString数字分子条形码技术、荧光原位杂交法（FISH）、流式技术和微流控芯片技术。</p>
        </div>
        <ul class="news">
            <li>
                <div class="time">
                    <strong>16</strong>
                    <span>2019-04</span>
                </div>
                <div class="title">
                    <h1>睿昂基因联手Cytek 强势进驻流式细胞检测领域</h1>
                    <p>造血与淋巴组织肿瘤的精准诊疗离...</p>
                </div>
            </li>
            <li>
                <div class="time">
                    <strong>16</strong>
                    <span>2019-04</span>
                </div>
                <div class="title">
                    <h1>【睿昂基因】第二届血液肿瘤精准诊疗技术研讨会热点回顾（上海站）</h1>
                    <p>三月的上海，桃花灼灼， 杨柳依依...</p>
                </div>
            </li>
        </ul>
        <ul class="news notice">
            <li>
                <div class="time">
                    <strong>16</strong>
                    <span>2019-04</span>
                </div>
                <div class="title">
                    <h1>公示</h1>
                    <p>因公司发展需要，经工商局及相关机构核实登记，“上海睿昂生物技术有限公司”名称变更</p>
                </div>
            </li>
        </ul>
        <copyright/>        
    </div>
</template>

<script>
import copyright from 'components/copyright'
export default {
   name: 'home',
   components:{
       copyright
   }
}
</script>

<style scoped lang="stylus">
@import '~css/home/index.styl'
</style>
