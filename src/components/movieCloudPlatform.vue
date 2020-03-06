<template>
  <div class="wrapper">
    <full-page :options="options">
      <div class="section active">
        <div class="sectionBase">
          <videoMoudle />
        </div>
      </div>
      <div class="section">
        <div class="sectionBase">
          <div class="img">
            <img src="@/assets/computerPic.png" alt="">
          </div>
          <div class="info">
            <h5 class="title">
              {{ info.title }}
            </h5>
            <div class="cont">
              <p class="con" v-for="(item,index) in info.content" :key="index">
                {{ item }}
              </p>
            </div>
            <div class="addPerson">
              <ul>
                <li v-for="(item,index) in info.imgList" :key="index">
                  <img :src="item.imgUrl" alt="">
                </li>
              </ul>
              <img src="@/icons/addBtn.png" alt="" class="addMoreBtn">
              <span class="addMoreText">
                {{ info.addMoreText }}
              </span>
            </div>
            <div class="btn">
              <div class="btn_"></div>
              <div class="btnM"></div>
              <div class="btnT">
                <img src="@/icons/svg/p.svg" alt="" class="p playIcon">
                {{ info.btnText }}
              </div>
            </div>
          </div>
          <div class="itemList">
            <ul class="l">
              <li v-for="item,index in itemList"
                  :key="item.indexNum"
                  @click="popNum = index"
                  class="item">
                <h6>
                  {{ item.indexNum }}
                </h6>
                <p class="title">
                  {{ item.title }}
                </p>
              </li>
            </ul>
            <!--弹窗-->
            <ul class="popUps" @click="popNum = null">
              <li class="lii one" v-show="popNum == 0">
                <img src="@/assets/movieOne.png" alt="" class="bananaImg">
                <ul class="k">
                  <li v-for="item,index in itemOne" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <h6>
                      {{ item.title }}
                    </h6>
                    <p class="dire">
                      {{ item.dire }}
                    </p>
                  </li>
                </ul>
                <h5 class="largeTit">
                  {{ itemOneLargeTit }}
                  <img src="@/icons/vcx.png" alt="" class="bv">
                </h5>
                <p class="dir">
                  {{ itemOneMiniTit }}
                </p>
                <div class="a">
                  <h6>
                    {{ itemList[0]['indexNum'] }}
                  </h6>
                  <p class="title">
                    {{ itemList[0]['title'] }}
                  </p>
                </div>
              </li>
              <li class="lii two" v-show="popNum == 1" >
                <img src="@/assets/fg.png" alt="" class="bananaImg">
                <div class="info2">
                  <h6 class="miniTit">
                    {{ itemTwo.miniTit }}
                  </h6>
                  <h5 class="largeTit">
                    {{ itemTwo.largeTit }}
                  </h5>
                  <div class="cont">
                    {{ itemTwo.cont }}
                  </div>
                  <div class="switchItem">
                    <img src="@/icons/btnOrange.png" alt="">
                    <span>1/4</span>
                    <img src="@/icons/btnOrange.png" alt="">
                  </div>
                  <div class="btn">
                    <img src="@/icons/play.png" alt="">
                    {{ itemTwo.btnText }}
                  </div>
                  <p class="new">
                    <img src="@/icons/svg/o.svg" alt="">
                    {{ itemTwo.new }}
                  </p>
                </div>
                <div class="voice">
                  <ul>
                    <li v-for="item,index in itemTwo.u"
                        :key="index"
                        class="r">
                      <img src="@/icons/firI.png"
                           alt=""
                           class="q">
                      <img src="@/icons/secI.png"
                           alt=""
                           class="w">
                      <div class="uu">
                        <img :src="item.imgUrl"
                             alt=""
                             class="user">
                        <span class="name">
                        {{ item.name }}
                      </span>
                      </div>
                      <p class="cont">
                        {{ item.cont }}
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <footerM class="footer_"/>
      </div>
    </full-page>
  </div>
</template>

<script>
  import footerM from '@/components/footer/index'
  import videoMoudle from '@/components/videoSection'
  export default {
    name: 'movieCloudPlatform',
    data(){
      return {
        options: {
          licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
          scrollOverflow: true,
          scrollBar: false,
          scrollingSpeed: 500,
          recordHistory: false,
          menu: '#menu',
          // navigation: true,
          // navigationPosition: 'right',
          anchors: [
            "/movieCloudPlatform",
            "/movieCloudPlatform"
          ],
          animateAnchor: true,
          sectionsColor: [
            "#fff",
            "#fff"
          ]
        },
        info: {
          title: 'CHINA MOVIE CLOUD',
          content: [
            `中宣部中国电影科学技术研究所作为中国电影行业唯一的国家级电影科研机构，
             在新时代承载着以自主创新支撑中国电影高质量发展的使命和担当。
             适应技术演进趋势和产业发展需求，
             中国电影科研所率先提出构建国家电影云制作服务平台，
             基于云计算平台提供数字电影分布式跨地域远程协同制作服务，
             为国产精品电影持续有效推出创建协作机制和支撑平台。`,
            `通过创建“强强联合、优势互补、协同创新”的电影制作新模式，
             形成制作合力，
             进而有效克服国内制作机构“小而散”发展瓶颈，
             并为实现国际素材交换提供安全性和互操作保障。`
          ],
          imgList: [
            {
              imgUrl: require('@/assets/person1.png')
            },
            {
              imgUrl: require('@/assets/person2.png')
            },
            {
              imgUrl: require('@/assets/person3.png')
            }
          ],
          addMoreText: '加入平台成为尊贵用户！',
          btnText: '进入平台'
        },
        itemList: [
          {
            indexNum: '01',
            title: '云平台管理系统'
          },
          {
            indexNum: '02',
            title: '渲染农场'
          },
          {
            indexNum: '03',
            title: '云桌面'
          }
        ],
        itemOne: [
          {
            imgUrl: require('@/icons/listOne.png'),
            title: '远程协作',
            dire: '采用云管理系统从未如此简单很好很简单'
          },
          {
            imgUrl: require('@/icons/listTwo.png'),
            title: '远程协作',
            dire: '采用云管理系统从未如此简单很好很简单'
          },
          {
            imgUrl: require('@/icons/listThree.png'),
            title: '远程协作',
            dire: '采用云管理系统从未如此简单很好很简单'
          },{
            imgUrl: require('@/icons/listFour.png'),
            title: '远程协作',
            dire: '采用云管理系统从未如此简单很好很简单'
          }

        ],
        itemOneLargeTit: '我们来为您的管理加持',
        itemOneMiniTit: '采用云管理系统从未如此简单',
        popNum: null,
        itemTwo: {
          miniTit: 'Users Voice',
          largeTit: '用户的心声',
          cont: `我公司通过高性能服务器集群的算力整合开发,
                 对复杂渲染任务实施分解和并行加速，
                 助力用户在有限时间内以可控成本实现影片视觉目标。`,
          btnText: '成为用户',
          new: '立即注册并充值可享超值限时优惠哦～',
          u: [
            {
              imgUrl: require('@/assets/user1.png'),
              name: 'user1',
              cont: `速度更快性价比高；
                     系统操作合理人性化；
                     云储存；
                     可同时兼容多个版本的系统软件，
                     支持主流三维软件。`
            },
            {
              imgUrl: require('@/assets/user2.png'),
              name: 'user2',
              cont: `实时浏览；
                     系统稳定；
                     数据安全；
                     并且可以享受免费测试，
                     确定项目使用时间；
                     和一对一技术服务，
                     第一时间解决问题。`
            },
            {
              imgUrl: require('@/assets/user1.png'),
              name: 'user3',
              cont: `速度更快性价比高；
                     系统操作合理人性化；
                     云储存；
                     可同时兼容多个版本的系统软件，
                     支持主流三维软件。`
            },
            {
              imgUrl: require('@/assets/user2.png'),
              name: 'user4',
              cont: `速度更快性价比高；
                     系统操作合理人性化；
                     云储存；
                     可同时兼容多个版本的系统软件，
                     支持主流三维软件。`
            },
          ]
        }
      }
    },
    components: {
      footerM,
      videoMoudle
    },
    methods: {
      onLeave(){

      },
      afterLoad(){

      }
    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    .section {
      .sectionBase {
        box-sizing: border-box;
        padding-top: 120px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .img {
          width: 50%;
        }
        .info {
          width: 50%;
          padding-right: calc(50% - 700px);
          padding-left: 40px;
          box-sizing: border-box;
          .title {
            font-family:Arial-Black,Arial;
            margin-top: 30px;
            font-size:36px;
            font-weight:900;
            color:rgba(18,18,18,1);
            line-height:72px;
          }
          .cont {
            font-size:16px;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:32px;
            p:nth-of-type(1) {
              margin-bottom: 10px;
            }
          }
          .addPerson {
            margin-top: 57px;
            ul {
              display: inline-block;
              li {
                list-style: none;
                display: inline-block;
                img {
                  width: 42px;
                  margin-right: -7px;
                }
              }
            }
            .addMoreBtn {
              display: inline-block;
              width: 42px;
              padding: 0px 5px 0px 16px;
              cursor: pointer;
            }
            .addMoreText {
              font-size:14px;
              font-family:PingFangSC-Regular,PingFang SC;
              font-weight:400;
              color:rgba(51,51,51,0.6);
              vertical-align: top;
              line-height:42px;
            }
          }
          .btn {
            position: relative;
            margin-top: 29px;
            z-index: 2;
            width: 171px;
            height: 65px;
            cursor: pointer;
            .btn_ {
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: rgba(18,18,18,1);
              width: 171px;
              height: 65px;
            }
            .btnM {
              position: absolute;
              top: 0px;
              left: 0px;
              background: rgba(247,237,92,1);
              width: 171px;
              height: 65px;
              transition: all 0.3s;
            }
            .btnT {
              position: absolute;
              top: 0px;
              left: 0px;
              width: 171px;
              height: 65px;
              font-size: 18px;
              font-weight: 600;
              color: rgba(51,51,51,1);
              line-height: 65px;
              text-align: center;
              transition: all 0.6s;
              .p {
                width: 14px;
                vertical-align: middle;
              }
            }
            &:hover {
              .btnM {
                top: 10px;
                left: 10px;
              }
              .btnT {
                top: 10px;
                left: 10px;
              }
            }
          }
        }
        .itemList {
          width: 100%;
          height: calc(100vh - 120px - 540px - 50px);
          .l {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            .item {
              list-style: none;
              width: 200px;
              text-align: center;
              cursor: pointer;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              color:rgba(51,51,51,1);
              transition: all 0.2s;
              h6 {
                position: relative;
                font-size:60px;
                font-family:TypelaboNStd;
                font-weight:400;
                line-height:1.6em;
                transform: rotateY(0deg);
                transition: all 1.0s;
                &::after {
                  content: '';
                  width: 200px;
                  height: 1px;
                  background-color: rgba(51, 51, 51, 1);
                  position: absolute;
                  top: 52px;
                  left: 0px;
                }
              }
              .title {
                font-size:18px;
                line-height:25px;
              }
              &:hover {
                color: rgba(247, 237, 92, 1);
                h6 {
                  transform: rotateY(360deg);
                  &::after {
                    background-color: rgba(247, 237, 92, 1);
                  }
                }
              }
            }
          }
          .popUps {
            position: fixed;
            top: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            z-index: 11;
            background-color: rgba(255,255,255,0.9);
            .lii {
              list-style: none;
              position: relative;
              top: 100px;
              width: 1920px;
              height: 100vh;
              &.one {
                .bananaImg {
                  position: absolute;
                }
                .k {
                  position: relative;
                  display: flex;
                  justify-content: space-around;
                  width: 1000px;
                  margin: 0px auto;
                  li {
                    text-align: center;
                    width: 156px;
                    list-style: none;
                    color: rgba(256,256,256,1);
                    img {
                      width: 40px;
                      margin: 80px auto 10px;
                    }
                    h6 {
                      font-size:16px;
                      font-weight:500;
                      color:rgba(255,255,255,1);
                      margin-bottom: 10px;
                    }
                    .dire {
                      font-size:12px;
                      font-weight:400;
                      color:rgba(255,255,255,0.6);
                    }
                  }
                }
                .largeTit {
                  top: 200px;
                  position: relative;
                  text-align: center;
                  font-size:42px;
                  font-weight:500;
                  color:rgba(255,255,255,1);
                  line-height:59px;
                  .bv {
                    width: 30px;
                    cursor: pointer;
                    margin-left: 10px;
                  }
                }
                .dir {
                  position: relative;
                  top: 230px;
                  font-size:18px;
                  font-weight:400;
                  color:rgba(255,255,255,0.8);
                  line-height:25px;
                  text-align: center;
                }
                .a {
                  position: relative;
                  top: 44vh;
                  /*bottom: 0px;*/
                  margin: 0px auto;
                  width: 200px;
                  text-align: center;
                  cursor: pointer;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  color:rgba(51,51,51,1);
                  transition: all 0.2s;
                  h6 {
                    position: relative;
                    font-size:60px;
                    font-family:TypelaboNStd;
                    font-weight:400;
                    line-height:1.6em;
                    transform: rotateY(0deg);
                    transition: all 1.0s;
                    &::after {
                      content: '';
                      width: 200px;
                      height: 1px;
                      background-color: rgba(51, 51, 51, 1);
                      position: absolute;
                      top: 52px;
                      left: 0px;
                    }
                  }
                  .title {
                    font-size:18px;
                    line-height:25px;
                  }
                  &:hover {
                    h6 {
                      transform: rotateY(360deg);
                    }
                  }
                }
              }
              &.two {
                .bananaImg {
                  position: absolute;
                  width: 1920px;
                }
                .info2 {
                  position: absolute;
                  top: 120px;
                  left: 280px;
                  width: 300px;
                  .miniTit {
                    font-size:20px;
                    font-family:Arial-BoldMT,Arial;
                    font-weight:normal;
                    color:rgba(255,255,255,0.29);
                    line-height:23px;
                    letter-spacing:1px;
                    margin-bottom: 20px;
                  }
                  .largeTit {
                    font-size:36px;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    color:rgba(255,255,255,1);
                    line-height:50px;
                    margin-bottom: 20px;
                  }
                  .cont {
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,0.8);
                    line-height:28px;
                    margin-bottom: 40px;
                  }
                  .switchItem {
                    margin-bottom: 60px;
                    img {
                      width: 30px;
                      cursor: pointer;
                      &:nth-of-type(1) {
                        transform: rotate(180deg);
                      }
                    }
                    span {
                      display: inline-block;
                      vertical-align: top;
                      font-weight:600;
                      color:rgba(255,255,255,1);
                      padding: 0px 4px;
                    }
                  }
                  .btn {
                    width:153px;
                    height:42px;
                    background:rgba(51,51,51,1);
                    text-align: center;
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:42px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    img {
                      width: 9px;
                    }
                  }
                  .new {
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,0.49);
                    line-height:28px;
                    img {
                      width: 16px;
                      vertical-align: middle;
                      opacity: 0.6;
                    }
                  }
                }
                .voice {
                  position: absolute;
                  top: 160px;
                  left: 683px;
                  ul {
                    width: 2500px;
                    li {
                      position: relative;
                      display: inline-block;
                      list-style: none;
                      width:510px;
                      height:240px;
                      background:rgba(255,255,255,1);
                      border-radius:15px;
                      border:4px solid rgba(51,51,51,0.05);
                      margin-right: 60px;
                      .q,
                      .w {
                        position: absolute;
                        width: 29px;
                      }
                      .q {
                        left: 20px;
                        top: -16px;
                      }
                      .w {
                        right: 20px;
                        bottom: -16px;
                      }
                      .uu {
                        display: inline-block;
                        width: 80px;
                        text-align: center;
                        margin: 60px 0px 0px 50px;
                        .user {
                          width: 80px;
                        }
                        .name {
                          font-size:13px;
                          font-weight:300;
                          color:rgba(51,51,51,1);
                          line-height:18px;
                        }
                      }
                      .cont {
                        display: inline-block;
                        width: 280px;
                        vertical-align: top;
                        margin: 60px 0px 0px 50px;
                        font-size:16px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:30px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .footer_ {
        position: absolute;
        bottom: 0px;
      }
    }
  }
</style>
