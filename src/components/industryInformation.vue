<template>
  <div class="wrapper">
    <full-page :options="options">
      <!--第一屏-->
      <div class="section active">
        <div class="sectionBase">
          <carouselMoudle />
        </div>
      </div>
      <!--第二屏-->
      <div class="section">
        <div class="sectionBase">
          <div class="box">
            <div class="searchBase">
              <div class="searchBtn">
                <img src="@/icons/searchIcon.png" alt="" class="icon-black">
                <img src="@/icons/searchIcon2.png" alt="" class="icon-white">
                <input type="text"
                       class="input"
                       v-model="inputVal"
                       placeholder="在此输入关键词，例：渲染农场">
                <img src="@/icons/joinIn-icon.png" alt="" class="searching" v-show="inputVal">
              </div>
            </div>
            <div class="newsList">
              <ul>
                <li v-for="(item,index) in newsList.list" :key="index">
                  <div class="img">
                    <img :src="item.imgUrl" alt="" class="liImg">
                    <div class="occlude">
                      <img src="@/icons/joinIn-icon.png" alt="" class="joinInImg"  @click="$store.commit('changeArticleM',true)">
                    </div>
                  </div>
                  <h6>
                    {{ item.title }}
                  </h6>
                  <p class="date">
                    {{ item.date }}
                  </p>
                </li>
              </ul>
            </div>
            <div class="paginationBase">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-size="8"
                layout="total, prev, pager, next"
                :total="164">
              </el-pagination>
            </div>
          </div>
        </div>
        <footerM class="footer_"/>
      </div>
    </full-page>
  </div>
</template>

<script>
  import footerM from '@/components/footer/index'
  import { TweenLite,TimelineMax,Expo } from 'gsap'
  import carouselMoudle from '@/components/carousel'
  export default {
    name: 'industryInformation',
    data () {
      return {
        options: {
          licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
          onLeave: this.onLeave,
          afterLoad: this.afterLoad,
          scrollOverflow: true,
          scrollBar: false,
          scrollingSpeed: 500,
          recordHistory: false,
          menu: '#menu',
          anchors: [
            'industryInformation',
            'industryInformation'
          ],
          animateAnchor: true,
          sectionsColor: [
            "#fff",
            "#fff"
          ]
        },
        newsList: {
          list: [
            {
              imgUrl: require('@/assets/m1.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
            {
              imgUrl: require('@/assets/m2.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
            {
              imgUrl: require('@/assets/m3.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
            {
              imgUrl: require('@/assets/m4.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
            {
              imgUrl: require('@/assets/m1.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
            {
              imgUrl: require('@/assets/m2.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
            {
              imgUrl: require('@/assets/m3.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
            {
              imgUrl: require('@/assets/m4.png'),
              title: '豆瓣8.9分的电影！动作戏不掺任何水分',
              date: '2020 02/25 11:58'
            },
          ]
        },
        currentPage4: 1,
        inputVal: ''
      }
    },
    components: {
      footerM,
      carouselMoudle
    },
    methods: {
      onLeave(anchorLink,index){

      },
      afterLoad(anchorLink,index){

      },
      //style
      marginL(){
        return {
          marginLeft: this.infoMoveNum * 420
        }
      },
      //开关footer
      changeS(e){
        this.footerInfo = e
        this.$emit('getFooterInfo',e)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      // 第四屏Title
      function move() {
        let box = document.querySelector(".text-box");
        let dt = document.querySelectorAll(".dot");
        window.addEventListener("mousemove", function (e) {
          for (let i = 0; i < dt.length; i++) {
            //圆灯相对于 容器的坐标位置
            let x = e.pageX - box.offsetLeft - dt[i].offsetWidth / 2;
            let y = e.pageY - box.offsetTop - dt[i].offsetHeight / 2;
            TweenLite.to(dt[i], i + 0.2, {
              x: x,
              y: y
            });
          }
        });
      }
      move()
      //title下降特效
      this.fM = class specialT {
        constructor(qClassN,nClassN){
          this.nClassN = nClassN
          this.S = document.querySelectorAll(qClassN)
          this.F = new TimelineMax()
          this.navOpenTL = new TimelineMax()
          this.initialF(this.S,nClassN)
        }
        initialF(domList,classN){
          [...domList].forEach(curr_ => {
            let word = curr_.innerHTML.trim().split(' '),
              newTxt = ''
            this.navOpenTL.set( curr_, { opacity: 1 })
            for(let i = 0;i < word.length; i ++){
              newTxt += `<div class="word" style="position:relative;display:inline-block;">`
              for(let j = 0;j < word[i].length; j ++){
                newTxt += `<div class="${classN}" style="position:relative;display:inline-block;">${word[i][j]}</div>`
              }
              newTxt += `</div> `
            }
            curr_.innerHTML = newTxt
          })
          this.firG()
        }
        firG(){
          this.F.staggerFrom(`.${this.nClassN}`, 0.8, { y: -12, ease: Expo.easeOut }, 0.03)
        }
      }
      new this.fM('.specialEffects','moveC')
    },
    created() {
      //
    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    position: relative;
    .footer_ {
      position: absolute;
      bottom: 0px;
    }
    .section {
      position: relative;
      .sectionBase {
        height: 100vh;
        width: 100vw;
        max-width: 1920px;
        margin: 0px auto;
        display: flex;
        .box {
          width: 1530px;
          .searchBtn {
            position: relative;
            margin-top: 90px;
            width: 40px;
            height: 40px;
            background-color: rgba(247, 237, 92, 1);
            display: flex;
            align-items: center;
            transition: all 0.2s;
            overflow: hidden;
            img {
              margin: 10px;
              width: 20px;
              cursor: pointer;
              &.icon-white {
                display: none;
              }
              &.icon-black {
                display: inline-block;
              }
            }
            .input {
              width: 290px;
              height: 24px;
              background-color: transparent;
              border: 0px;
              border-bottom: 1px solid rgba(255, 255, 255, 1);
              color: rgba(255, 255, 255, 1);
              outline: none;
              &::-webkit-input-placeholder {
                color: rgba(255, 255, 255, 0.6);
              }
            }
            .searching {
              position: absolute;
              right: 22px;
              top: 0px;
              display: none;
            }
            &:hover {
              background-color: rgba(51,51,51,1);
              width: 365px;
              img {
                &.icon-white {
                  display: inline-block;
                }
                &.icon-black {
                  display: none;
                }
              }
              .searching {
                display: inline-block;
              }
            }
          }
          .newsList {
            margin-top: 40px;
            ul {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              li {
                list-style: none;
                /*margin-bottom: 40px;*/
                margin-bottom: 20px;
                .img {
                  position: relative;
                  width: 360px;
                  height: 220px;
                  margin-bottom: 20px;
                  .liImg {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 360px;
                    height: 220px;
                    cursor: pointer;
                    transition: all 0.2s;
                  }
                  .occlude {
                    position: absolute;
                    z-index: -1;
                    top: 0px;
                    left: 0px;
                    width: 360px;
                    height: 220px;
                    background-color: rgba(0,0,0,0.4);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: all 0.2s;
                    .joinInImg {
                      width: 40px;
                      transition: all 0.2s;
                      &:hover {
                        width: 60px;
                      }
                    }
                  }
                  &:hover {
                    .liImg {
                      top: -19px;
                      left: -33px;
                      width: 422px;
                      height: 258px;
                    }
                    .occlude {
                      z-index: 2 ;
                      display: flex;
                      top: -19px;
                      left: -33px;
                      width: 422px;
                      height: 258px;
                    }
                  }
                }
                h6 {
                  font-size:18px;
                  font-weight:500;
                  color:rgba(51,51,51,1);
                  line-height:28px;
                  margin-bottom: 5px;
                  cursor: pointer;
                }
                .date {
                  font-size:12px;
                  font-weight:400;
                  color:rgba(51,51,51,1);
                  line-height:17px;
                }
              }
            }
          }
          .paginationBase {
            text-align: center;
            margin-top: 12px;
          }
        }
      }
      &:nth-of-type(2) {
        .sectionBase {
          justify-content: space-around;
        }
      }
      .footer_ {
        position: absolute;
        bottom: 0px;
      }
    }
  }
  /deep/.el-pagination__total {
    position: absolute;
    left: 62vw;
  }
  /deep/.el-pager {
    li {
      min-width: 28px;
      margin: 0px 4px;
      &:hover {
        background-color: rgba(247,237,92,0.2);
        color: #303133;
      }
      &.active {
        color: #fff;
        background-color: rgba(247,237,92,1);
        border-radius: 50%;
      }
    }

  }
</style>
