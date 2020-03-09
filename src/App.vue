<template>
  <div id="app">
    <headerM class="header_" :u="u"/>
    <mouseIcon />
    <router-view @getFooterInfo="getFooterInfo"
                 @getEndSection="getEndSection"
                 @mousewheel.prevent></router-view>
    <joinUs class="joinUs" v-show="joinUsM"/>
    <articleM class="articleM" v-show="articleM"/>
  </div>
</template>

<script>
  import headerM from '@/components/header/index'
  import mouseIcon from '@/components/mouseIcon'
  import joinUs from '@/components/joinUs'
  import articleM from '@/components/article'
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
    articleM
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
    ...mapState(['joinUsM','articleM']),
    u(){
      return this.footerInfo && this.endSection
    }
  }
}
</script>

<style lang="less">
#app {
  position: relative;
  .header_ {
    position: absolute;
    z-index: 1;
    top: 0px;
  }
  /*.joinUs {*/
    /*position: absolute;*/
    /*top: 0px;*/
  /*}*/

}
</style>
