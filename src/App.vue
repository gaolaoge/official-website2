<template>
  <div id="app">
    <headerM class="header_" :u="u"/>
    <mouseIcon />
    <router-view @getFooterInfo="getFooterInfo"
                 @getEndSection="getEndSection"></router-view>
  </div>
</template>

<script>
  import headerM from '@/components/header/index'
  import mouseIcon from '@/components/mouseIcon'
  import '@/assets/font.css'
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
    mouseIcon
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

}
</style>
