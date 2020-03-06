<template>
  <div class="wrapper">
    <div class="b">
      <img src="@/assets/c.png" alt="" class="img">
    </div>
    <img src="@/icons/b.png" alt="" class="bb">
    <div class="t">
      <h5 class="largeTit specialEffects">
        {{ largeTitleOne }}
      </h5>
      <h5 class="largeTit specialEffects">
        {{ largeTitleTwo }}
      </h5>
      <h5 class="largeTit specialEffects">
        {{ largeTitleThree }}
      </h5>
      <span class="dire">
              {{ miniDirection }}
            </span>
      <h6 class="tit">
        {{ tit }}
      </h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data(){
      return {
        largeTitleOne: '强势打造',
        largeTitleTwo: '中国电影云平台',
        largeTitleThree: 'SENSE IS THE BEST!',
        miniDirection: 'SENSE is the best and strongest in this field',
        tit: 'THE COMPANY 2020',
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    max-width: 1920px;
    .b {
      position: relative;
      width: 1100px;
      height: 730px;
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 40px 0px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      .img {
        position: relative;
        z-index: 3;
        width: 1010px;
      }
    }
    .bb {
      position: absolute;
      top: 34vh;
      left: calc(50% - 100px);
      width: 400px;
      z-index: 2;
      opacity: 0.8;
    }
    .t {
      position: relative;
      z-index: 3;
      width: calc(100vw - 1100px);
      padding-left: 50px;
      .largeTit {
        font-size: 60px;
        font-weight: 600;
        color: rgba(51,51,51,1);
        line-height: 70px;
        text-stroke: 1px rgba(51,51,51,1);
        -webkit-text-stroke:1px rgba(51,51,51,1);
        &:nth-of-type(1) {
          letter-spacing: 2px;
        }
      }
      .dire {
        display: inline-block;
        color: rgba(51,51,51,0.79);
        font-size: 13px;
        font-family: ArialMT;
        line-height: 15px;
        letter-spacing: 1px;
        margin-top: 50px;
      }
      .tit {
        position: relative;
        margin-top: 15px;
        font-size: 14px;
        font-family:Arial-Black,Arial;
        font-weight:900;
        color:rgba(51,51,51,1);
        line-height:19px;
        text-indent: 1em;
        &::after {
          content: '';
          width: 18px;
          height: 4px;
          background-color: rgba(51,51,51,1);
          position: absolute;
          bottom: -4px;
          left: 0px;
          transition: all 0.6s;
        }
        &:hover {
          &::after {
            width: 140px;
          }
        }
      }
    }
  }
</style>
