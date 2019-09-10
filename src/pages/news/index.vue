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
                        1
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

