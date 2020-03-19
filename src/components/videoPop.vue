<template>
  <div class="video-wrapper">
    <video src="@/assets/NationalFilmCloud.mp4"
           class="mp4"
           poster="@/assets/timg2.jpg"
           :muted="vidPlayer.mutedV"
           @click="closeVid"
           ref="vid"></video>
    <!--关闭-->
    <img src="@/icons/icon_close2.png" alt="" class="closeBtn" @click="closeVidBase">
    <!--继续播放-->
    <div class="palyerBtnOtherBox" v-show="!playing">
      <img src="@/icons/playerBtn.png"
           alt=""
           class="palyerBtnOther"
           @click="playerVid">
    </div>
    <!--重新播放-->
    <div class="againVidBtnBox" v-show="vidDone">
      <img src="@/icons/svg/againVid.svg"
           alt=""
           class="againVidBtn"
           @click="vidAgain">
    </div>
    <div class="controlsBase" ref="VideoBase">
      <div class="controlsPlayBtn">
        <img src="@/icons/svg/pause.svg"
             alt=""
             v-show="playing"
             @click="closeVid">
        <img src="@/icons/svg/play.svg"
             alt=""
             v-show="!playing"
             @click="playerVid">
      </div>
      <el-tooltip class="item"
                  effect="dark"
                  :content="time()"
                  placement="top-end">
        <div class="controlsEd" :style="[nowWF()]" />
      </el-tooltip>
      <!--音量-->
      <div class="controlsVolumn">
        <div class="helpDom"></div>
        <div class="volumnConsole">
          <div class="v"
               @click="changeVolumn($event)"
               :style="[volumnF()]"></div>
        </div>
        <img src="@/icons/svg/volumn.svg"
             alt=""
             @click="changeVolumn($event,'muted')"
             v-show="!vidPlayer.mutedV">
        <img src="@/icons/svg/muted.svg"
             alt=""
             @click="changeVolumn($event,'open')"
             v-show="vidPlayer.mutedV">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'videoPop',
    data(){
      return {
        playing: false,
        vidDone: false,
        vidPlayer: {
          rAF: null,                  //播放器setInterVal
          nowW: 0,                    //当前进度条宽度
          timeOut: 0,                 //当前播放秒数
          vidSpeedS: 0,               //每秒速度
          mutedV: false,              //静音
          VolumnVNow: '100%',         //当前音量
          VolumnVLast: '100%'         //上一次音量
        },
      }
    },
    methods: {
      nowWF(){
        return {
          width: this.vidPlayer.nowW + 'px'
        }
      },
      volumnF(){
        return {
          background: 'repeating-linear-gradient(0deg , rgba(247,237,92,0.8),rgba(247,237,92,0.8) ' + this.vidPlayer.VolumnVNow + ', rgba(247, 244, 248, 0) ' + this.vidPlayer.VolumnVNow + ' , rgba(247, 244, 248, 0) 100%)'
        }
      },
      time(){
        let m = parseInt(parseInt(this.vidPlayer.timeOut) / 60) > 9 ? parseInt(parseInt(this.vidPlayer.timeOut) / 60) : '0' + parseInt(parseInt(this.vidPlayer.timeOut) / 60),
          s = parseInt(this.vidPlayer.timeOut) % 60 > 9 ? parseInt(this.vidPlayer.timeOut) % 60 : '0' + parseInt(this.vidPlayer.timeOut) % 60
        return m + ' : ' + s
      },
      //播放视频
      playerVid(){

        setTimeout(() => {
          this.$refs.vid.play()
          this.playing = true
          let n = this.$refs.vid.currentTime / this.$refs.vid.duration,
            allTime = this.$refs.vid.duration,
            totalW = parseInt(window.getComputedStyle(this.$refs.VideoBase).width) - 100
          this.vidPlayer.vidSpeedS = totalW / allTime
          this.vidPlayer.rAF = setInterval(() => {
            this.vidPlayer.timeOut ++
            this.vidPlayer.nowW = this.vidPlayer.timeOut * this.vidPlayer.vidSpeedS
          },1000)
          this.$refs.vid.addEventListener('ended',() => {
            clearTimeout(this.vidPlayer.rAF)
            this.vidDone = true
          })
        },100)

      },
      //暂停视频
      closeVid(){
        this.$refs.vid.pause()
        this.playing = false
        clearTimeout(this.vidPlayer.rAF)
      },
      //关闭视频
      closeVidBase(done){
        this.closeVid()
        // this.vidPlayer.timeOut = 0
        // this.vidPlayer.nowW = 0
        // this.vidPlayer.mutedV = false
        this.$store.commit('changeVideoM',false)
      },
      // 重播
      vidAgain(){
        this.vidDone = false
        this.vidPlayer.timeOut = 0
        this.vidPlayer.nowW = 0
        this.$refs.vid.currentTime = 0
        this.playerVid()
      },
      //调节音量
      changeVolumn(event,val){
        if(val){
          switch(val){
            case 'muted':
              this.vidPlayer.VolumnVLast = this.vidPlayer.VolumnVNow
              this.vidPlayer.mutedV = true
              this.vidPlayer.VolumnVNow = '0%'
              break
            case 'open':
              this.vidPlayer.mutedV = false
              this.vidPlayer.VolumnVNow = this.vidPlayer.VolumnVLast
          }
          return false
        }
        this.vidPlayer.VolumnVLast = this.vidPlayer.VolumnVNow
        this.vidPlayer.VolumnVNow = parseInt( (100 - event.offsetY) / 10 ) + 1 + '0%'
        this.$refs.vid.volume = Number(this.vidPlayer.VolumnVNow == '100%' ? '1.0' : '0.' + this.vidPlayer.VolumnVNow[0])
      },
    },
    created(){
      // this.playerVid()
    }
  }
</script>

<style lang="less" scoped>
  @popWidth: 84vw;
  .video-wrapper {
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .mp4 {
      width: @popWidth;
      height: 90vh;
      cursor: pointer;
      background-color: rgba(0,0,0,0.8);
    }
    .palyerBtnOtherBox,
    .againVidBtnBox {
      position: absolute;
      width: @popWidth;
      height: 90vh;
      background-color: rgba(0,0,0,0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      .palyerBtnOther,
      .againVidBtn {
        width: 120px;
        cursor: pointer;
      }
    }
    .controlsBase {
      position: absolute;
      z-index: 99;
      bottom: 5vh;
      width: @popWidth;
      height: 40px;
      background-color: rgba(247, 237, 92, 0.3);
      .controlsPlayBtn,
      .controlsVolumn {
        position: relative;
        float: left;
        width: 50px;
        height: 100%;
        background-color: rgba(255,106,115,1);
        display: flex;
        justify-content: center;
        align-items: center;
        .helpDom {
          position: absolute;
          bottom: 36px;
          background-color: rgba(0,0,0,0);
          width: 30px;
          height: 10px;
          display: none;
        }
        .volumnConsole {
          position: absolute;
          bottom: 46px;
          width: 30px;
          height: 120px;
          background-color: rgba(0,0,0,0.4);
          cursor: pointer;
          border-radius: 3px;
          box-shadow: 0px 0px 4px 0px rgba(256,256,256,0.24);
          display: none;
          //音量
          .v {
            position: absolute;
            top: 10px;
            left: 11px;
            z-index: 9;
            width: 8px;
            height: 100px;
            border-radius: 3px;
          }
          &::after {
            content: '';
            position: absolute;
            top: 10px;
            left: 11px;
            width: 8px;
            height: 100px;
            background-color: rgba(247,237,92,0.26);
            border-radius: 4px;
            box-shadow: 0px 0px 4px 0px rgba(256,256,256,0.34);
          }
        }
        img {
          width: 20px;
          cursor: pointer;
        }
      }
      .controlsVolumn {
        float: right;
        background-color: rgba(247,237,92,1);
        &:hover {
          .volumnConsole,
          .helpDom {
            display: block;
          }
        }
      }
      .controlsEd {
        display: inline-block;
        height: 100%;
        max-width: calc(100% - 100px);
        overflow: hidden;
        background-color: rgba(247,237,92,0.8);
        font-size: 14px;
      }
    }
    .closeBtn {
      position: absolute;
      cursor: pointer;
      right: calc(8vw - 60px);
      top: 5vh;
    }
  }
</style>
