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
  import '@/assets/font.css'
  export default {
    name: 'Carousel',
    data(){
      return {
        largeTitleOne: '——中国电影云平台',
        largeTitleTwo: '为艺术保驾护航',
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
    font-family: PingFang-SC-Semibold,PingFangSCRegular;
    .b {
      flex-grow: 0;
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
      flex-grow: 1;
      position: relative;
      z-index: 3;
      width: calc(100vw - 1100px);
      padding-left: 50px;
      .largeTit {
        font-size: 60px;
        font-weight: 500;
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
  @media screen and (max-width: 1919px){
    .wrapper {
      .b {
        width: 60%;
        .img {
          width: 96%;
        }
      }
    }
  }
  @media screen and (max-width: 1300px){
    .wrapper {
      justify-content: left;
      .b {
        width: 100%;
        height: 690px;
        .img {
          left: 2%;
        }
      }
      .bb {
        z-index: 3;
        top: 31vh;
        left: 11%;
      }
      .t {
        position: absolute;
        width: 80%;
        .largeTit,
        .dire,
        .tit {
          text-shadow: 0px 0px 4px rgba(256,256,256,0.9);
        }
      }
    }
  }
  @media screen and (max-width: 810px){
    .wrapper {
      display: block;

      .b {
        width: 100%;
        height: auto;
        margin-bottom: 22px;
        .img {
          left: 2%;
          padding: 20px 0px;
        }
      }
      .bb {
        display: none;
      }
      .t {
        position: absolute;
        width: 80%;
        .largeTit {
          font-size: 40px;
          line-height: 58px;
        }
        .dire {
          margin-top: 26px;
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    .wrapper {
      .b {
        margin-top: 10vh;
      }
    }
  }
  @media screen and (max-width: 510px) {
    .wrapper {
      .b {
        margin-top: 18vh;
        margin-bottom: 6vh;
      }
      .t {
        .largeTit {
          font-size: 28px;
          line-height: 40px;
        }
      }
    }
  }
</style>
