<template>
  <div>
    <h1 class="banner">
      <p>新闻中心<br>NEWS CENTER</p>
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
      <cube-slide-item>
        <ul class="news">
          <router-link
            tag="li"
            to="/news/detail"
          >
            <div class="time">
              <strong>16</strong>
              <span>2019-04</span>
            </div>
            <div class="title">
              <h1>睿昂基因联手Cytek 强势进驻流式细胞检测领域</h1>
              <p>造血与淋巴组织肿瘤的精准诊疗离...</p>
            </div>
          </router-link>
          <router-link
            tag="li"
            to="/news/detail"
          >
            <div class="time">
              <strong>16</strong>
              <span>2019-04</span>
            </div>
            <div class="title">
              <h1>【睿昂基因】第二届血液肿瘤精准诊疗技术研讨会热点回顾（上海站）</h1>
              <p>三月的上海，桃花灼灼， 杨柳依依...</p>
            </div>
          </router-link>
        </ul>
        <ul class="news notice">
          <router-link
            tag="li"
            to="/news/detail"
          >
            <div class="time">
              <strong>16</strong>
              <span>2019-04</span>
            </div>
            <div class="title">
              <h1>公示</h1>
              <p>因公司发展需要，经工商局及相关机构核实登记，“上海睿昂生物技术有限公司”名称变更</p>
            </div>
          </router-link>
        </ul>
        <pagination />
      </cube-slide-item>
      <cube-slide-item>
        <ul class="news">
          <router-link
            tag="li"
            to="/news/detail"
          >
            <div class="time">
              <strong>16</strong>
              <span>2019-04</span>
            </div>
            <div class="title">
              <h1>睿昂基因联手Cytek 强势进驻流式细胞检测领域</h1>
              <p>造血与淋巴组织肿瘤的精准诊疗离...</p>
            </div>
          </router-link>
          <router-link
            tag="li"
            to="/news/detail"
          >
            <div class="time">
              <strong>16</strong>
              <span>2019-04</span>
            </div>
            <div class="title">
              <h1>【睿昂基因】第二届血液肿瘤精准诊疗技术研讨会热点回顾（上海站）</h1>
              <p>三月的上海，桃花灼灼， 杨柳依依...</p>
            </div>
          </router-link>
        </ul>
        <ul class="news notice">
          <router-link
            tag="li"
            to="/news/detail"
          >
            <div class="time">
              <strong>16</strong>
              <span>2019-04</span>
            </div>
            <div class="title">
              <h1>公示</h1>
              <p>因公司发展需要，经工商局及相关机构核实登记，“上海睿昂生物技术有限公司”名称变更</p>
            </div>
          </router-link>
        </ul>
        <pagination />
      </cube-slide-item>
    </cube-slide>
    <copyright />  
  </div>
</template>

<script>
import copyright from 'components/copyright';
import pagination from 'components/pagination';

export default {
   name: 'About',
   components:{
       copyright,
       pagination
   },
   data () {
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
       };
   },
   methods: {
       // tab改变
       changeTab (current) {
           this.initalIndex = this.tabLabels.findIndex( item => item.label == current);
       },
       // slide改变
       changePage (current) {
          this.selectedLabel = this.tabLabels[current].label;
       }
   }
};
</script>

<style lang="stylus">
@import '~css/news/index.styl'
</style>

