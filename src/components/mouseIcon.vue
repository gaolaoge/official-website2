<template>
  <div class="wrapper">
    <!--<div class="m" :style="[styleF()]"></div>-->
    <img src="@/icons/svg/circle.svg" alt="" class="m" :style="[styleF()]">
    {{ x }}
    {{ y }}
  </div>
</template>

<script>
  export default {
    name: 'mouseIcon',
    data(){
      return {
        x: 0,
        y: 0,
        d: true
      }
    },
    methods: {
      styleF(){
        return {
          top: this.y - 30 + 'px',
          left: this.x - 30 + 'px'
        }
      }
    },
    mounted() {
      document.onmousemove = event => {
        if(this.d){
          this.d = !this.d
          this.x = event.clientX
          this.y = event.clientY
          setTimeout(() => {
            this.d = !this.d
          },30)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .m {
    position: absolute;
    z-index: 999;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /*border: 2px solid tomato;*/
    transition: all 0.3s;
    user-select: none;
  }
</style>
