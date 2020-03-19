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
          <div class="joinUs" @click="$store.commit('changeJoinUsM',true)">
            <div class="btn">
              {{ btn }}
            </div>
          </div>
          <div class="navBase">
            <ul>
              <li v-for="(item,index) in navList"
                  :key="index"
                  :class="[{'active': index == navActive}]"
                  @click="navActive = index">
                <span>
                  {{ item.name }}
                </span>
              </li>
            </ul>
          </div>
          <div class="miniNav">
            <span class="toLeft" @click="move('toLeft')">
              <img src="@/icons/path.png" alt="" :class="[{'done': navActive == 0}]">
            </span>
            {{ navActive + 1 }}
            /
            {{ navList.length }}
            <span @click="move('toRight')">
              <img src="@/icons/path.png" alt="" :class="[{'done': navActive == navList.length - 1}]">
            </span>
          </div>
          <div class="contentBase">
            <ul>
              <li v-show="navActive == 0">
                <div class="left">
                  <h5 class="largeTit">
                    {{ page.pageOne.largeTit }}
                  </h5>
                  <h6 class="miniTit">
                    {{ page.pageOne.miniTit }}
                  </h6>
                  <div class="label">
                    {{ page.pageOne.labelOne }}
                    <br>
                    {{ page.pageOne.labelTwo }}
                  </div>
                  <div class="con">
                    <p v-for="(item,index) in page.pageOne.con" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
                <div class="right">
                  <img :src="page.pageOne.imgUrl" alt="" class="img">
                </div>
              </li>
              <li v-show="navActive == 1">
                <div class="left">
                  <h5 class="largeTit">
                    {{ page.pageTwo.largeTit }}
                  </h5>
                  <h6 class="miniTit">
                    {{ page.pageTwo.miniTit }}
                  </h6>
                  <img :src="page.pageTwo.imgUrl" alt="" class="img">
                </div>
                <div class="right">
                  <h6 class="label">
                    {{ page.pageTwo.label }}
                  </h6>
                  <div class="advantage">
                    <ul :style="[ulMarginLeft()]">
                      <li v-for="item,index in page.pageTwo.list" :key="index">
                        <h5 class="largeTit">
                          {{ item.tit }}
                        </h5>
                        <div class="con">
                          {{ item.con }}
                        </div>
                      </li>
                    </ul>
                    <div class="btnGroup">
                      <span class="toLeft"
                            :class="[{'end': page.pageTwo.listIndex == 1}]"
                            @click="turningAgain('left')">
                        <img src="@/icons/path.png" alt="">
                      </span>
                      {{ page.pageTwo.listIndex }}
                      /
                      {{ page.pageTwo.list.length }}
                      <span class="toRight"
                            :class="[{'end': page.pageTwo.listIndex == page.pageTwo.list.length}]"
                            @click="turningAgain('right')">
                        <img src="@/icons/path.png" alt="">
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li v-show="navActive == 2">
                <div class="left">
                  <h5 class="largeTit">
                    {{ page.pageThree.largeTit }}
                  </h5>
                  <h6 class="miniTit">
                    {{ page.pageThree.miniTit }}
                  </h6>
                  <div class="label">
                    {{ page.pageThree.labelOne }}
                    <br>
                    {{ page.pageThree.labelTwo }}
                  </div>
                  <div class="con">
                    <p v-for="(item,index) in page.pageThree.con" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
                <div class="right">
                  <img :src="page.pageThree.imgUrl" alt="" class="img">
                </div>
              </li>
              <li v-show="navActive == 3">
                <div class="left">
                  <h5 class="largeTit">
                    {{ page.pageFour.largeTit }}
                  </h5>
                  <h6 class="miniTit">
                    {{ page.pageFour.miniTit }}
                  </h6>
                  <div class="label">
                    {{ page.pageFour.labelOne }}
                    <br>
                    {{ page.pageFour.labelTwo }}
                  </div>
                  <div class="con">
                    <p v-for="(item,index) in page.pageFour.con" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
                <div class="right">
                  <img :src="page.pageFour.imgUrl" alt="" class="img">
                </div>
              </li>
              <li v-show="navActive == 4">
                <div class="left">
                  <h5 class="largeTit">
                    {{ page.pageFive.largeTit }}
                  </h5>
                  <h6 class="miniTit">
                    {{ page.pageFive.miniTit }}
                  </h6>
                  <div class="label">
                    <span class="miniMiniTit" :class="[{'miniMiniTitActive': page.pageFive.miniMiniTitActive == 1}]">
                      <img src="@/icons/svg/arrow.svg" alt="" class="arrow">
                      {{ page.pageFive.labelOne }}
                    </span>
                    <br>
                    <span class="miniMiniTit" :class="[{'miniMiniTitActive': page.pageFive.miniMiniTitActive == 2}]">
                      {{ page.pageFive.labelTwo }}
                    </span>
                  </div>
                  <div class="con">
                    <p v-for="(item,index) in page.pageFive.con" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div>
                <div class="right">
                  <img :src="page.pageFive.imgUrl" alt="" class="img">
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
    name: 'movieCloudBase',
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
          anchors: ["/movieCloudBase","/movieCloudBase"],
          animateAnchor: true,
          sectionsColor: [
            "#fff",
            "#fff"
          ]
        },
        navList: [
          {
            name: '目标及定位'
          },
          {
            name: '我们的优势'
          },
          {
            name: '园区现状'
          },
          {
            name: '剧组接待'
          },
          {
            name: '文化产业孵化器'
          }
        ],
        navActive: 0,
        page: {
          pageOne: {
            largeTit: 'Goals positioning',
            miniTit: '目标及定位',
            labelOne: '中国电影云基地',
            labelTwo: '中国官方唯一指定影视后期制作基地',
            con: [
              `中国电影云基地是中宣部中国电影科学技术研究所授权青岛已臻化境影视科技有限公司，
               与青岛市即墨区人民政府联手打造的集中国电影云平台研发中心、
               互动空间、
               高科技体验馆、
               电影元素商业街区、
               电影上下游产业办公用房、
               众创空间、
               孵化器、
               邻里关系为一体的产业园区。
               总投资约35亿元，
               总用地面积260亩。`
            ],
            imgUrl: require('@/assets/pic_.png')
          },
          pageTwo: {
            largeTit: 'advantage',
            miniTit: '我们的优势',
            imgUrl: require('@/assets/r.png'),
            label: 'advantage',
            list: [
              {
                tit: '政策支持',
                con: `本园区项目为政府重点招商引进项目，
                      入驻企业可享受税收优惠、
                      房屋补贴、
                      人才补贴等优惠政策；
                      并且中国电影云平台落地商业区，
                      将大大降低企业的使用成本、
                      提高传输速度、
                      技术团队支持随时完善客户需求。`
              },
              {
                tit: '园区配套设施',
                con: `园区基础配套、
                      生活配套、
                      工商税务、
                      法律财务、
                      知识产权服务、
                      人力资源服务、
                      管理咨询服务、
                      投融资服务等多种咨询辅导代办服务。`
              },
              {
                tit: '资源共享',
                con: `打破现在行业“小而散”的特点，
                      产业聚集，
                      为上下游企业提供资源，
                      资源不外流，
                      形成产业化、
                      规模化。
                      通过通讯、
                      网络等公共设施实现资源共享，
                      资源互补，
                      让资源得到最大效率的利用，
                      使企业共同进步。`
              },
              {
                tit: '入驻扶持',
                con: `特色增值服务体系，
                      助力企业高速成长。
                      聘请技术专家、
                      教授、
                      学术带头人为名誉顾问，
                      对企业研发中心的困难进行点对点帮扶，
                      定期举办园区企业技术、
                      管理专题讲座和培训。
                      孵化器及加速器，
                      入驻企业不仅享受产业园的资源和政策同时能享受孵化器多有的功能及政策优势。`
              }
              ,
              {
                tit: '区位优势',
                con: `随着城市经济的不断发展，
                      园区发展需通过构建高效的组织架构、
                      产业链条、
                      服务集群，
                      来提升园区的运营效率，
                      从而增强园区的价值优势，
                      打造及集政策优惠，
                      产业聚集，
                      人才聚集为一体的高端科技产业园区。`
              }
            ],
            listIndex: 1
          },
          pageThree: {
            largeTit: 'Park status',
            miniTit: '园区现状',
            labelOne: '中国电影云基地',
            labelTwo: '中国官方唯一指定影视后期制作基地',
            con: [
              `中国电影云基地现在开发建设阶段，
               预计2022年前完成，
               现已面向影视企业、
               科技企业及金融、
               法律等服务机构招商，
               针对不同类型、
               不同发展阶段的企业采取不同的服务方式，
               包括产业孵化、
               商业合作等。`
            ],
            imgUrl: require('@/assets/pic_.png')
          },
          pageFour: {
            largeTit: 'Park status',
            miniTit: '园区现状',
            labelOne: '中国电影云基地',
            labelTwo: '中国电影云基地接待安排',
            con: [
              `中国电影云基地正在加快构建具有活力的影视发展生态，
               以电影工业化流程为基础，
               不断聚拢和完善电影产业链条，
               在不断完善硬件实力之外，
               为剧组来访提供配套服务和产业、
               补贴政策等日臻优化的“软”环境，
               吸引着越来越多影视产业链相关企业、
               人才到来，
               让新型工业化影视基地核心竞争力逐步显现。`
            ],
            imgUrl: require('@/assets/pic_.png')
          },
          pageFive: {
            largeTit: 'Incubator',
            miniTit: '文化产业孵化器',
            labelOne: '孵化器介绍',
            labelTwo: '盛世影云孵化器',
            con: [
              `产业孵化是一种新型的社会经济组织，
               我们孵化器职能是可以提供研发、
               生产、
               经营的场地，
               通讯、
               网络与办公等方面的共享设施，
               并进行系统的培训与咨询，
               还具有政策、
               融资、
               法律和市场推广等方面的支持，
               可以大大降低创业企业的创业风险和创业成本，
               提高企业的成活率和成功率。
               中国电影云基地为新生企业提供良好的创业环境和条件的同时，
               还联合政府发布一系列扶持政策和优惠，
               帮助创业者把发明和成果尽快形成商品进入市场，
               提供综合服务，
               帮助新兴的小企业迅速长大形成规模，
               为社会培养成功的企业和企业家。`
            ],
            imgUrl: require('@/assets/pic_.png'),
            miniMiniTitActive: 1
          }
        },
        btn: '加入我们！'
      }
    },
    components: {
      footerM,
      videoMoudle
    },
    methods: {
      turningAgain(dir){
        switch(dir){
          case 'left':
            if(this.page.pageTwo.listIndex == 1)
              return false
            this.page.pageTwo.listIndex --
            break
          case 'right':
            if(this.page.pageTwo.listIndex == this.page.pageTwo.list.length)
              return false
            this.page.pageTwo.listIndex ++
            break
        }
      },
      ulMarginLeft(){
        return {
          'margin-left': (this.page.pageTwo.listIndex - 1) * -100 + '%'
        }
      },
      move(dir){
        switch(dir) {
          case 'toLeft':
            if(this.navActive == 0) return false
            this.navActive --
            break
          case 'toRight':
            if(this.navActive == this.navList.length - 1) return false
            this.navActive ++
            break
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    .section {
      position: relative;
      .sectionBase {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        .joinUs {
          position: absolute;
          top: 100px;
          display: flex;
          justify-content: center;
          cursor: pointer;
          .btn {
            width:177px;
            height:57px;
            line-height: 57px;
            text-align: center;
            background:linear-gradient(180deg,rgba(255,100,80,1) 0%,rgba(255,57,43,1) 100%);
            box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2);
            border-radius:29px;
            font-weight:400;
            color:rgba(255,255,255,1);
            letter-spacing:1px;
            cursor: pointer;
          }
        }
        .navBase {
          position: absolute;
          left: 0px;
          top: 50vh;
          transform: translateY(-50%);
          ul {
            padding-left: 50px;
            li {
              list-style: none;
              position: relative;
              font-size:16px;
              color:rgba(51,51,51,1);
              line-height:22px;
              margin-bottom: 52px;
              opacity: 0.4;
              cursor: pointer;
              span {
                position: relative;
                z-index: 2;
              }
              &::after {
                content: '';
                position: absolute;
                top: 0px;
                left: -50px;
                z-index: 1;
                width: 42px;
                height: 21px;
                background-color: rgba(247, 237, 92, 1);
                transition: width 0.3s;
              }
              &:nth-last-of-type(1) {
                margin-bottom: 0px;
              }
              &:hover,
              &.active {
                opacity: 1;
                font-weight:600;
                &:nth-of-type(1)::after,
                &:nth-of-type(2)::after {
                  width: 132px;
                }
                &:nth-of-type(3)::after,
                &:nth-of-type(4)::after {
                  width: 116px;
                }
                &:nth-of-type(5)::after {
                  width: 165px;
                }
              }
            }
          }
        }
        .miniNav {
          position: absolute;
          height: 40px;
          right: 10vw;
          top: 10vh;
          align-items: center;
          justify-content: space-between;
          width: 110px;
          display: none;
          span {
            vertical-align: middle;
            img {
              width: 28px;
              cursor: pointer;
              &.done {
                opacity: 0.4;
                cursor: initial;
              }
            }
            &.toLeft {
              img {
                transform: rotate(180deg);
              }
            }
          }
        }
        .contentBase {
          width: 1040px;
          height: 500px;
          ul {
            li {
              list-style: none;
              display: flex;
              justify-content: space-around;
              &:nth-of-type(1),
              &:nth-of-type(3),
              &:nth-of-type(4),
              &:nth-of-type(5) {
                .left {
                  flex-basis: 50%;
                  padding-right: 60px;
                  .largeTit {
                    font-size:36px;
                    font-weight:normal;
                    color:rgba(51,51,51,1);
                    line-height:42px;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                  }
                  .miniTit {
                    font-size:18px;
                    font-weight:600;
                    color:rgba(51,51,51,1);
                    line-height:25px;
                    letter-spacing:2px;
                    margin-bottom: 60px;
                  }
                  .label {
                    font-size:20px;
                    font-weight:600;
                    color:rgba(51,51,51,1);
                    line-height:34px;
                    padding: 10px 20px;
                    border-left: 4px solid rgba(51, 51, 51, 1);
                    margin-bottom: 32px;
                  }
                  .con {
                    font-size:16px;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:32px;
                  }
                }
                .right {
                  flex-basis: 50%;
                  img {
                    margin-top: 140px;
                    width:520px;
                    height:350px;
                    background:rgba(216,216,216,1);
                    border-radius:5px;
                  }
                }
              }
              &:nth-of-type(2) {
                .left {
                  flex-basis: 50%;
                  .largeTit {
                    font-size:36px;
                    font-weight:normal;
                    color:rgba(51,51,51,1);
                    line-height:42px;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                  }
                  .miniTit {
                    font-size:18px;
                    font-weight:600;
                    color:rgba(51,51,51,1);
                    line-height:25px;
                    letter-spacing:2px;
                    margin-bottom: 62px;
                  }
                  img {
                    width:520px;
                    height:350px;
                  }
                }
                .right {
                  flex-basis: 50%;
                  margin-left: 100px;
                  position: relative;
                  .label {
                    margin-top: 173px;
                    margin-bottom: 30px;
                    font-size:16px;
                    font-family:ArialMT;
                    color:rgba(51,51,51,0.6);
                    line-height:18px;
                    text-transform: uppercase;
                  }
                  .advantage {
                    overflow: hidden;
                    ul {
                      width: 520%;
                      margin-left: 0px;
                      transition: margin 0.2s;
                      li {
                        display: inline-block;
                        vertical-align: top;
                        .largeTit {
                          font-size:22px;
                          font-weight:600;
                          color:rgba(51,51,51,1);
                          line-height:30px;
                          margin-bottom: 20px;
                        }
                        .con {
                          width: 420px;
                          font-size:16px;
                          font-weight:400;
                          color:rgba(51,51,51,1);
                          line-height:32px;
                        }
                      }
                    }
                    .btnGroup {
                      position: absolute;
                      bottom: 0px;
                      right: 0px;
                      .toLeft,
                      .toRight {
                        vertical-align: middle;
                        padding: 0px 8px;
                        cursor:pointer;
                        img {
                          width: 40px;
                        }
                        &.end {
                          cursor: initial;
                          opacity: 0.6;
                        }
                      }
                      .toLeft {
                        img {
                          transform: rotate(180deg);
                        }

                      }
                    }
                  }
                }
              }
              &:nth-of-type(5) {
                .left {
                  .miniMiniTit {
                    color:rgba(51,51,51,0.2);
                    font-weight: 600;
                    cursor: pointer;
                    padding-left: 20px;
                    margin-left: -20px;
                    &.miniMiniTitActive {
                      position: relative;
                      z-index: 1;
                      font-weight:600;
                      color:rgba(51,51,51,1);
                      background-color: rgba(247, 237, 92, 1);
                    }
                  }
                  .arrow {
                    position: absolute;
                    left: -4px;
                    top: 3px;
                    width: 14px;
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
  @media screen and (max-width: 1400px) {
    .wrapper {
      .section {
        .sectionBase {
          div.contentBase {
            width: 70vw;
            ul {
              li {
                &:nth-of-type(1),
                &:nth-of-type(3),
                &:nth-of-type(4),
                &:nth-of-type(5) {
                  .left {
                    padding-right: 20px;
                    .largeTit {
                      font-size: 30px;
                      margin-bottom: 4px;
                    }
                    .miniTit {
                      font-size: 17px;
                    }
                    .label {
                      font-size: 17px;
                    }
                    .con {
                      font-size: 14px;
                    }
                  }
                }
                &:nth-of-type(2) {
                  .right {
                    margin-left: 40px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1230px) {
    .wrapper {
      .section {
        .sectionBase {
          .joinUs {
            .btn {
              width: 120px;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
            }
          }
          .navBase {
            ul {
              padding-left: 20px;
              li {
                font-size: 14px;
              }
            }
          }
          div.contentBase {
            width: 70vw;
            ul {
              li {
                &:nth-of-type(1),
                &:nth-of-type(3),
                &:nth-of-type(4),
                &:nth-of-type(5) {
                  .right {
                    img.img {
                      width: 34vw;
                      height: auto;
                    }
                  }
                }
                &:nth-of-type(2) {
                  .right {
                    .label {
                      margin-top: 140px;
                    }
                    .advantage {
                      width: 34vw;
                      ul {
                        width: 550%;
                        li {
                          h5.largeTit {
                          }
                          .con {
                            width: 34vw;
                          }
                        }
                      }
                      .btnGroup {
                        bottom: -40px;
                      }
                    }
                  }
                  .left {
                    .img {
                      width: 34vw;
                      height: auto;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 960px) {
    .wrapper {
      .section {
        .sectionBase {
          .joinUs {
            top: 80px;
          }
          div.contentBase {
            width: 74vw;
            height: 70vh;
            ul {
              li {
                &:nth-of-type(1),
                &:nth-of-type(3),
                &:nth-of-type(4),
                &:nth-of-type(5) {
                  flex-wrap: wrap;
                  flex-direction: column;
                  .left {
                    .miniTit {
                      margin-bottom: 16px;
                    }
                    .label {
                      margin-bottom: 16px;
                    }
                  }
                  .right {
                    img.img {
                      width: auto;
                      margin: 20px auto;
                      display: block;
                    }
                  }
                }
                &:nth-of-type(2) {
                  .right {
                    margin-left: 0px;
                    .advantage {

                    }
                  }
                  .left {
                    .img {
                      width: 35vw;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 826px) {
    .wrapper {
      .section {
        .sectionBase {
          div.contentBase {
            width: 80vw;
            margin-left: 60px;
            ul {
              li {
                &:nth-of-type(1),
                &:nth-of-type(3),
                &:nth-of-type(4),
                &:nth-of-type(5) {
                  .left {
                    .largeTit {
                      font-size: 24px;
                      line-height: 30px;
                    }
                    .miniTit {
                      margin-bottom: 4px;
                    }
                    .label {
                      margin-bottom: 4px;
                    }
                  }
                }
                &:nth-of-type(2) {
                  flex-direction: column-reverse;
                  padding: 0px 24px;
                  box-sizing: border-box;
                  .right {
                    width: 100%;
                    .label {
                      margin-top: 20px;
                    }
                    .advantage {
                      width: 100%;
                      ul {
                        width: 500%;
                        li {
                          width: 20%;
                          .con {
                            width: 100%;
                          }
                        }
                      }
                      .btnGroup {
                        .toLeft,
                        .toRight {
                          img {
                            width: 34px;
                          }
                        }
                      }
                    }
                  }
                  .left {
                    margin-top: 20px;
                    width: 100%;
                    .miniTit {
                      display: none;
                    }
                    .largeTit {
                      display: none;
                    }
                    .img {
                      display: block;
                      margin: 40px auto 0px;
                      width: 54vw;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .wrapper {
      .section {
        .sectionBase {
          .navBase {
            ul {
              padding-left: 8px;
              li {
                font-size: 14px;
              }
            }
          }
          div.contentBase {
            width: 70vw;
            margin-left: 42px;
            ul {
              li {
                &:nth-of-type(1),
                &:nth-of-type(3),
                &:nth-of-type(4),
                &:nth-of-type(5) {
                  .left {
                    width: 100%;
                    .largeTit {
                      font-size: 20px;
                      line-height: 24px;
                    }
                    .label {
                      padding: 4px 14px;
                      line-height: 28px;
                      font-size: 15px;
                    }
                    .con {
                      font-size: 13px;
                      line-height: 26px;
                    }
                  }
                  .right {
                    width: 100%;
                    img.img {
                      width: 100%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 540px) {
    .wrapper {
      .section {
        .sectionBase {
          .joinUs {
            left: 10vw;
          }
          .navBase {
            display: none;
          }
          .miniNav {
            display: flex;


          }
          div.contentBase {
            width: 82vw;
            margin: 0px;
          }
        }
      }
    }
  }
</style>
