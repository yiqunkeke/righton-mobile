<template>
  <div>
    <h1 class="aboutBanner">
      <p>关于睿昂<br>about righton</p>
    </h1>
    <cube-tab-bar
      v-model="selectedLabel"
      :data="tabLabels"
      @change="changeTab"
    />
    <cube-slide
      ref="slide"
      :loop="loop"
      :auto-play="autoPlay"
      :show-dots="showDots"
      :options="slideOptions"
      :initial-index="initalIndex"
      @change="changePage"
    >
      <cube-slide-item class="about">
        <h1>关于睿昂</h1>
        <p>
          上海睿昂基因科技股份有限公司（原上海睿昂生物科技有限公司）成立于2014年，
          是致力于临床分子诊断与生物医药科技研发、生产、销售和服务的高科技集团公司。
          旗下拥有三家生产型企业：上海源奇生物医药科技有限公司、苏州云泰生物医药科技有限公司和武汉百泰基因工程有限公司，
          同时入资了美国创研型分子诊断仪器公司Akonni Biosystems。目前业务涉及血病肿瘤、实体瘤、心脑血管疾病、传染性疾病的检测。
          <br><br>
          在集团创始人睿昂生物集团CEO熊慧女士的带领下，睿昂人艰苦奋斗、努力拼搏，让更多的患者享受负担得起的个体化诊疗服务！
          让患者可以得益于用得起的精准医疗，将是睿昂过去、现在以及将来一直坚守的信念！
        </p>
      </cube-slide-item>
      <cube-slide-item>
        <h1>睿昂历程</h1>
        <cube-slide
          :options="imgOptions"
          :show-dots="showDots"
          :auto-play="autoPlay"
          :loop="loop"
          :data="progress"
          class="progress"
        />    
      </cube-slide-item>
      <cube-slide-item>
        <h1>睿昂荣誉</h1>
        <cube-slide
          :options="imgOptions"
          :auto-play="autoPlay"
          :loop="loop"
          :data="honor"
          class="progress"
        >
          <cube-slide-item
            v-for="(item, index) in honor"
            :key="index"
          >
            <a href="#">
              <img :src="item.image">
              <p>{{ item.desc }}</p>
            </a>
          </cube-slide-item>
          <template
            slot="dots"
            slot-scope="props"
          >
            <span
              v-for="(it, idx) in props.dots"
              :key="idx"
              :class="{active: props.current === idx}"
              class="myDot"
            />
          </template>
        </cube-slide>  
      </cube-slide-item>
    </cube-slide>
    <copyright />  
  </div>
</template>

<script>
import copyright from 'components/copyright'

export default {
   name: 'About',
   components:{
       copyright
   },
   data() {
       return {
            // tab-bar
            selectedLabel: '关于睿昂',
            tabLabels: [
                {
                    label: '关于睿昂'
                }, 
                {
                    label: '睿昂历程'
                },
                {
                    label: '睿昂荣誉'
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
@import '~css/about/index.styl'
</style>

