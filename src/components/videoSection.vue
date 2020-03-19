<template>
  <div class="wrapper">
    <!--<video src="@/assets/NationalFilmCloud.mp4"-->
           <!--controls-->
           <!--poster="@/assets/videoFirst.png"-->
           <!--class="videoNm"></video>-->
    <el-carousel height="100vh">
      <el-carousel-item v-for="item,index in imgList" :key="index">
        <img :src="item.imgUrl" alt="">
        <div class="c">
          <h5>
            {{ item.largeTit }}
          </h5>
          <h6>
            {{ item.miniTitL }}
          </h6>
        </div>

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'videoMoudle',
    data(){
      return {
        imgList: [
          {
            imgUrl: require('@/assets/sliderImg-1.png'),
            largeTit: '一个融汇日常体验和公共礼仪的城市第三空间',
            miniTitL: 'A THIRD URBAN AREA TO COMBINE DAILY EXPERIENCES AND PUBLIC SPRIT'
          },
          {
            imgUrl: require('@/assets/sliderImg-2.png'),
            largeTit: '一个适应未来变化和尺度宜人的城市友好空间',
            miniTitL: 'A PEOPLE-FRIENDLY SPACE ADAPTS TO FUTURE CHANGES WITH PROPER SCALE'
          },
          {
            imgUrl: require('@/assets/sliderImg-3.png'),
            largeTit: '一个建构绿色共享和混合多样的城市公平空间',
            miniTitL: 'A BALANCED URBAN AREA TO FORM GREEN SHARE SYSTEM AND COMPLEXITY'
          }
        ]
      }
    },
    methods: {

    },
    mounted(){

    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    .videoNm {
      width: 90vw;
      height: 90vh;
      background-color: black;
      object-fit: cover;
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /deep/.el-carousel__indicators.el-carousel__indicators--horizontal {
    bottom: 50%;
    right: 10px;
    left: initial;
    transform: rotate(90deg) translateX(18px);
    .el-carousel__indicator.el-carousel__indicator--horizontal {
      vertical-align: middle;
      .el-carousel__button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        overflow: hidden;
        background-color: rgba(247, 237, 92, 1);
        margin: 0px 8px;
      }
      &.is-active {
        .el-carousel__button {
          width: 10px;
          height: 10px;
          filter: blur(1px);
        }
      }
    }

  }
  /deep/.el-carousel__item {
    img {
      margin-left: 50%;
      transform: translateX(-50%);
    }

  }
  .c {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    h5 {
      font-size: 40px;
      color: rgba(256,256,256,0.9);
      margin-bottom: 12px;
    }
    h6 {
      font-size: 26px;
      color: rgba(256,256,256,0.7);
      text-align: center;
    }
  }
  @media screen and (max-width: 1140px) {
    .c {
      h5 {
        font-size: 34px;
      }
      h6 {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .c {
      h5 {
        font-size: 30px;
      }
      h6 {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 680px) {
    .c {
      h5 {
        font-size: 22px;
      }
      h6 {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .c {
      h5 {
        font-size: 16px;
      }
      h6 {
        font-size: 12px;
      }
    }
  }
</style>
