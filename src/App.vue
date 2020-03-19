<template>
  <div id="app">
    <headerM class="header_" :u="u"/>
    <mouseIcon class="m"/>
    <router-view @getFooterInfo="getFooterInfo"
                 @getEndSection="getEndSection"
                 @mousewheel.prevent></router-view>
    <joinUs class="joinUs" v-show="joinUsM"/>
    <articleM class="articleM" v-show="articleM"/>
    <videoM class="videoM" v-show="videoM" />
  </div>
</template>

<script>
  import headerM from '@/components/header/index'
  import mouseIcon from '@/components/mouseIcon'
  import joinUs from '@/components/joinUs'
  import articleM from '@/components/article'
  import videoM from '@/components/videoPop'
  import '@/assets/font.css'
  import { mapState } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      footerInfo: false,
      endSection: false
    }
  },
  components: {
    headerM,
    mouseIcon,
    joinUs,
    articleM,
    videoM
  },
  methods: {
    getFooterInfo(e){
      this.footerInfo = e
    },
    getEndSection(e){
      this.endSection = e
    }
  },
  computed: {
    ...mapState(['joinUsM','articleM','videoM']),
    u(){
      return this.footerInfo && this.endSection
    }
  }
}
</script>

<style lang="less">
#app {
  position: relative;
  font-family: "Arial Bold";
  .header_ {
    position: absolute;
    z-index: 1;
    top: 0px;
  }
  /*.joinUs {*/
    /*position: absolute;*/
    /*top: 0px;*/
  /*}*/
  @media screen and (max-width: 998px) {
    .m {
      display: none;
    }
  }

}
</style>
