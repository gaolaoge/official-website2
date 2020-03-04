<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <img src="@/icons/logo-black.png" alt="SENSE" title="SENSE" v-show="!inTheEnd">
        <img src="@/icons/logo-white.png" alt="SENSE" title="SENSE" v-show="inTheEnd">
      </div>
      <div class="navBase">
        <div class="miniLogo">
          <img src="@/icons/logo-mini-black.png" alt="" v-show="!btnIconActive && !inTheEnd">
          <img src="@/icons/logo-mini-white.png" alt="" v-show="btnIconActive || inTheEnd">
        </div>
        <div class="navBtn">
          <div class="btnIcon"
               :class="[{'active': btnIconActive, 'end': inTheEnd}]"
               @click="btnIconActive = !btnIconActive">
            <div class="f"></div>
            <div class="s"></div>
            <img src="@/icons/y.png" alt="" class="y">
          </div>

          <div class="navListBase" :class="[{'active': btnIconActive}]">
            <div class="ba">
              <img src="@/icons/logo-white.png" alt="" class="logo">
              <ul>
                <li v-for="(item,index) in navRouterList"
                    :key="index"
                    :class="[{'active': index == activeNum}]"
                    @click="$router.push(item.url)">
                    {{ item.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="service" :class="[{'end': inTheEnd}]">
      <span class="line"></span>
      <span class="tit">
        {{ service }}
      </span>
    </div>
    <div class="telephone" :class="[{'end': inTheEnd}]">
      <span class="line"></span>
      <span class="tit">
        {{ telephone }}
      </span>
    </div>
    <div class="contact">
      <img src="@/icons/wx.png" alt="" class="ic" v-show="!o">
      <img src="@/icons/wx-white.png" alt="" class="ic" v-show="o">
      <img src="@/assets/mm.png" alt="" class="mm">
    </div>
    <div class="contact2">
      <img src="@/icons/wb.png" alt="" class="ic" v-show="!o">
      <img src="@/icons/wb-white.png" alt="" class="ic" v-show="o">
      <img src="@/assets/mm.png" alt="" class="mm">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'h',
    data(){
      return {
        service: '在线咨询',
        telephone: '致电',
        btnIconActive: false,
        activeNum: 0,              //动态监听url
        navRouterList: [
          {
            text: '首页',
            url: '/'
          },
          {
            text: '中国电影云平台',
            url: '/movieCloudPlatform'
          },
          {
            text: '中国电影云基地',
            url: '/movieCloudBase'
          },
          {
            text: '影视协会',
            url: '/filmAndTelevisionAssociation'
          },
          {
            text: '行业资讯',
            url: '/industryInformation'
          },
          {
            text: '关于我们',
            url: '/companyProfile'
          },
        ]
      }
    },
    watch: {
      $route: {
        handler: function(val){
          switch(val.name) {
            case 'HelloWorld':
              this.activeNum = 0
              break
            case 'movieCloudPlatform':
              this.activeNum = 1
              break
            case 'movieCloudBase':
              this.activeNum = 2
              break
            case 'filmAndTelevisionAssociation':
              this.activeNum = 3
              break
            case 'industryInformation':
              this.activeNum = 4
              break
            case 'companyProfile':
              this.activeNum = 5
          }
        },
        deep: true,
        immediate: true
      },
      // u(val){
      //   if(val)
      //     this.$store.commit('changeInTheEnd',false)
      // }
    },
    props: {
      u: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      ...mapState(['inTheEnd']),
      o(){
        if(this.u){
          return false
        }
        return this.inTheEnd
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    width: 100vw;
    height: 104px;
    font-family:PingFangSC-Semibold,PingFang SC;
    header {
      position: relative;
      margin: 0px auto;
      padding: 30px 0px;
      width: 1720px;
      height: 100%;
      box-sizing: border-box;
      .logo {
        position: absolute;
        cursor: pointer;
      }
      .navBase {
        float: right;
        display: flex;
        align-items: center;
        height: 44px;
        vertical-align: middle;
        .miniLogo {
          position: relative;
          z-index: 9;
        }
        .navBtn {
          width: 45px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .btnIcon {
            position: relative;
            z-index: 9;
            height: 18px;
            width: 18px;
            cursor: pointer;
            .f,
            .s {
              z-index: 4;
              height: 3px;
              background-color:rgba(51,51,51,1);
              border-radius:2px;
              transition: all 0.2s;
            }
            .f {
              position: absolute;
              top: 4px;
              right: 0px;
              width: 18px;
            }
            .s {
              position: absolute;
              top: 12px;
              right: 0px;
              width: 10px;
            }
            .y {
              position: absolute;
              top: -5px;
              left: -5px;
              width: 32px;
            }
            &.active {
              .f,
              .s {
                background-color: rgba(256,256,256,1);
                width: 18px;
              }
              .f {
                transform: rotate(45deg);
                transform-origin: 6px 8px;
              }
              .s {
                transform: rotate(-45deg);
                transform-origin: 6px -4px;
              }
            }
            &.end {
              .f,
              .s {
                background-color: rgba(256,256,256,1);
              }
            }
          }
          .navListBase {
            position: absolute;
            z-index: 6;
            top: 0px;
            left: 100vw;
            width: 100vw;
            height: 100vh;
            background-image: repeating-linear-gradient(90deg, rgba(256,256,256,0.8) 0%,rgba(256,256,256,0.8) 60%, rgba(41, 41, 41, 1) 60%, rgba(41, 41, 41, 1) 100%);
            transition: all 0.2s;
            .ba {
              width: 40vw;
              height: 100vh;
              float: right;
              display: flex;
              flex-direction: column;
              align-items: center;
              .logo {
                margin-top: 180px;
              }
              ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 260px;
                li {
                  position: relative;
                  list-style: none;
                  font-size:20px;
                  font-weight:400;
                  color:rgba(255,255,255,1);
                  line-height:28px;
                  cursor: pointer;
                  line-height: 1em;
                  padding: 0px 4px;
                  margin: 15px 0px;
                  &.active {
                    border-bottom: 6px solid #f7ed5c;
                  }
                }
              }
            }
            &.active {
              left: calc(860px - 50vw);
            }
          }
        }
      }
    }
    .service,
    .telephone {
      position: fixed;
      top: 140px;
      right: 0px;
      width: 73px;
      cursor: pointer;
      .line {
        display: inline-block;
        width: 3px;
        height: 16px;
        background-color: rgba(51,51,51,1);
        border-radius: 2px;
        transition: all 0.2s;
      }
      .tit {
        padding-top: 10px;
        vertical-align: top;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 4px;
        color: rgba(51,51,51,1);
        writing-mode: vertical-rl;
      }
      &:hover {
        .line {
          height: 86px;
        }
      }
      &.end {
        .line {
          background-color: rgba(256,256,256,1);
        }
        .tit {
          color: rgba(256,256,256,1);
        }
      }
    }
    .telephone {
      top: 262px;
    }
    .contact,
    .contact2 {
      position: fixed;
      right: 51px;
      bottom: 152px;
      cursor: pointer;
      .ic {
        width: 22px;
      }
      .mm {
        position: absolute;
        right: 40px;
        top: -32px;
        width: 100px;
        display: none;
      }
      &:hover {
        .mm {
          display: inline-block;
        }
      }
    }
    .contact2 {
      bottom: 110px;
    }
  }
</style>
