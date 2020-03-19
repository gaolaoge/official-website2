<template>
  <div class="wrapper">
    <full-page :options="options">
      <div class="section active">
        <div class="sectionBase">
          <carouselMoudle />
        </div>
      </div>
      <div class="section">
        <div class="sectionBase" :style="{backgroundImage: 'url(' + bgi + ')'}">

          <div class="joinUs">
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
          <div class="miniNav" :class="[{'black': inTheEnd}]">
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
                  <div class="label">
                    {{ page.pageTwo.labelOne }}
                    <br>
                    {{ page.pageTwo.labelTwo }}
                  </div>
                  <div class="con">
                    <p v-for="(item,index) in page.pageTwo.con" :key="index">
                      <span v-html="item"></span>
                    </p>
                  </div>
                </div>
                <div class="right">
                  <img :src="page.pageTwo.imgUrl" alt="" class="img">
                </div>
              </li>
              <li v-show="navActive == 2">
                <article class="f">
                  <h5 class="largeTit">
                    {{ page.pageThree.largeTit }}
                  </h5>
                  <span class="vx">
                    {{ page.pageThree.wx }}
                    <img src="@/assets/mm.png" alt="" class="m1 mm">
                  </span>
                  <span class="wb">
                    {{ page.pageThree.wb }}
                    <img src="@/assets/mm.png" alt="" class="m2 mm">
                  </span>
                </article>
                <article class="s">
                  <label for="name">
                    {{ page.pageThree.nameLabel }}
                  </label>
                  <p id="name">
                    {{ page.pageThree.name }}
                  </p>

                  <label for="email">
                    {{ page.pageThree.emailLabel }}
                  </label>
                  <p id="email">
                    {{ page.pageThree.email }}
                  </p>

                  <label for="phone">
                    {{ page.pageThree.phoneLabel }}
                  </label>
                  <p id="phone">
                    {{ page.pageThree.phone1 }}
                    <br>
                    {{ page.pageThree.phone2 }}
                  </p>
                </article>
                <article class="t">
                  <address>
                    {{ page.pageThree.address }}
                  </address>
                  <p class="mapEnter">
                    {{ page.pageThree.addressEnter }}
                    <img src="@/icons/joinIn-icon.png" alt="">
                  </p>
                </article>
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
  import carouselMoudle from '@/components/carousel'
  import { mapState } from 'vuex'
  export default {
    name: 'companyProfile',
    data(){
      return {
        options: {
          licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
          scrollOverflow: true,
          scrollBar: false,
          afterLoad: this.afterLoad,
          scrollingSpeed: 500,
          recordHistory: false,
          menu: '#menu',
          anchors: [
            "/companyProfile",
            "/companyProfile"
          ],
          animateAnchor: true,
          sectionsColor: [
            "#fff",
            "#fff"
          ]
        },
        btn: '加入我们！',
        navList: [
          {
            name: '公司介绍'
          },
          {
            name: '公司愿景'
          },
          {
            name: '联系我们'
          }
        ],
        navActive: 0,
        page: {
          pageOne: {
            largeTit: 'about company',
            miniTit: '关于公司',
            labelOne: '中国电影云基地',
            labelTwo: '政府重点招商引进项目',
            con: [
              `中宣部中国电影科学技术研究所授权青岛已臻化境影视科技有限公司，
               与青岛市即墨区人民政府联手打造的中国电影云基地，
               位于青岛市即墨区龙山街道，
               占地面积188亩，
               总建筑面积31.5万㎡。`,
              `打造集中国电影云平台研发中心、
               互动空间、
               高科技体验馆、
               电影元素商业街区、
               电影上下游产业办公用房、
               众创空间、
               孵化器、
               邻里关系为一体的产业园区。`
            ],
            imgUrl: require('@/assets/pic_.png')
          },
          pageTwo: {
            largeTit: 'prospect',
            miniTit: '盛世影云愿景',
            labelOne: '中国电影云基地',
            labelTwo: '政府重点招商引进项目',
            con: [
              `中国电影云平台是文化与科技完美融合的典型，
               通过线上的技术创新与线下建设、
               运营，
               平台的开发、
               运营经验数据将为制定中国的电影后期制作技术标准的提供有力支持。
               通过创建“强强联合、优势互补、协同创新”的电影制作新模式，
               形成制作合力，
               进而有效克服国内制作机构“小而散”发展瓶颈，
               并通过大数据的收集三年内实现中国电影后期制作标准化制定。
               并为实现国际素材交换提供安全性和互操作保障。`,
              `中国电影云基地以国家级文化和科技整合示范基地为目标，
               承载着将中国电影云平台重大科技成果转化为现实生产力的重大使命。
               在即墨区政府的大力支持下，
               通过建立专项基金、
               原创影视投入奖补、
               院线扶持、
               提供健全的办公和生活空间等举措，
               聚集影视策划公司、
               影视制作公司、
               视效公司、
               文化传播公司、
               影视服务公司、
               专业摄影棚制作公司以及金融、
               法律、
               专利等中介服务机构，
               打通影视制作、
               影视教学、
               后期软件开发全产业链，
               实现影视上下游产业的线下聚合，
               在即墨地区催生出一批有较强实力、
               竞争力、
               影响力和自主创新能力的影视相关企业。
               计划用两到三年的时间，
               培育出一批包括独角兽企业、
               瞪羚企业在内的大型文化、
               科技企业和企业集团。
               打造繁荣的影视产业生态。`
            ],
            imgUrl: require('@/assets/pic_.png')
          },
          pageThree: {
            largeTit: '准备好谈生意了吗？',
            wx: 'WeChat',
            wb: 'Sina Weibo',
            nameLabel: '企业名称',
            name: '青岛盛世影云影视科技有限公司',
            emailLabel: '企业邮箱',
            email: 'sense1010@163.com',
            phoneLabel: '企业电话',
            phone1: '0532-2313285',
            phone2: '18673782882',
            address: '山东省青岛市即墨区，经济开发区即发音乐共享空间3层',
            addressEnter: '在地图上查看'
          },
        },
        pageNum: 0
      }
    },
    components: {
      footerM,
      carouselMoudle
    },
    methods: {
      afterLoad(anchorLink,index){
        this.pageNum = index.index
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
    },
    computed: {
      ...mapState(['inTheEnd']),
      bgi(){
        if(this.navActive == 2 && this.pageNum == 1){
          this.$store.commit('changeInTheEnd', true)
        }else{
          this.$store.commit('changeInTheEnd', false)
        }

        return this.navActive == 2 ? require('@/assets/bg_us.png') : ''
      }
    },
    mounted() {
      // this.$store.commit('changeInTheEnd', true)
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
          display: none;
          position: relative;
          z-index: 999;
          top: 30px;
          /*display: flex;*/
          justify-content: center;
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
          top: 38vh;
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
                &::after {
                  width: 118px;
                }
              }
            }
          }
        }
        .miniNav {
          position: absolute;
          height: 40px;
          right: 16vw;
          top: 12vh;
          align-items: center;
          justify-content: space-between;
          width: 110px;
          display: none;
          &.black {
            color: #fff;
          }
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
          height: 78vh;
          ul {
            li {
              list-style: none;
              display: flex;
              justify-content: space-around;
              &:nth-of-type(1),
              &:nth-of-type(2) {
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
              &:nth-of-type(3) {
                .f {
                  width: 396px;
                  .largeTit {
                    font-size:66px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:92px;
                    margin-bottom: 80px;
                  }
                  .vx,
                  .wb {
                    position: relative;
                    font-size:18px;
                    color:rgba(255,255,255,1);
                    line-height:36px;
                    margin-right: 60px;
                    width: 100px;
                    cursor: pointer;
                    &::after {
                      content: '';
                      position: absolute;
                      bottom: -4px;
                      left: 0px;
                      width: 0px;
                      height: 2px;
                      background-color: rgba(255,255,255,0.8);
                      transition: all 0.2s;
                    }
                    .mm {
                      display: none;
                      width: 120px;
                      position: absolute;
                      top: 34px;
                      left: 0px;
                      z-index: 2;
                      box-shadow: 0px 0px 4px 1px rgba(256,256,256,0.6);
                      &.m1 {
                        left: -26px;
                      }
                      &.m2 {
                        left: -10px;
                      }
                    }
                    &:hover {
                      .mm {
                        display: inline-block;
                      }
                      &::after {
                        width: 100%;
                      }
                    }
                  }
                }
                .s {
                  width: 266px;
                  label {
                    font-size:16px;
                    font-weight:400;
                    color:rgba(255,255,255,0.5);
                    line-height:22px;
                    letter-spacing:4px;
                    margin-bottom: 5px;
                    display: inline-block;
                    width: 100%;
                  }
                  p {
                    position: relative;
                    display: inline-block;
                    font-size:18px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:25px;
                    letter-spacing:1px;
                    margin-bottom: 40px;
                    &::after {
                      content: '';
                      position: absolute;
                      left: 0px;
                      bottom: -4px;
                      height: 2px;
                      width: 0px;
                      background-color: rgba(256,256,256,1);
                      transition: width 0.2s;
                    }
                    &:hover {
                      &::after {
                        width: 100%;
                      }
                    }
                  }
                }
                .t {
                  width: 315px;
                  address {
                    font-size:20px;
                    font-weight:400;
                    color:rgba(255,255,255,0.5);
                    font-style: initial;
                    line-height:32px;
                    letter-spacing:1px;
                    margin-bottom: 20px;
                  }
                  .mapEnter {
                    font-size:16px;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:32px;
                    letter-spacing:5px;
                    img {
                      width: 22px;
                      cursor: pointer;
                      vertical-align: middle;
                    }
                  }
                }
              }
            }
          }
          &:nth-last-of-type(1) {
            width: 1240px;
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
          .contentBase {
            width: 70vw!important;
            ul {
              li {
                &:nth-of-type(1),
                &:nth-of-type(2){
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
                  .right {
                    flex-basis: 40%;
                  }
                }
                &:nth-of-type(3) {
                  .f {
                    width: 300px;
                    .largeTit {
                      font-size: 54px;
                    }
                  }
                  .s {
                    label {
                      font-size: 15px;
                    }
                    p {
                      font-size: 16px;
                    }
                  }
                  .t {
                    width: 285px;
                    address {
                      font-size: 18px;
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
                &:nth-of-type(2) {
                  .right {
                    img.img {
                      width: 34vw;
                      height: auto;
                    }
                  }
                }
                &:nth-of-type(3) {
                  .f {
                    width: 260px;
                    .largeTit {
                      font-size: 40px;
                    }
                    .vx {
                      margin-right: 20px;
                    }
                    .wb {
                      margin: 0px;
                    }
                  }
                  .s {
                    label {
                      font-size: 13px;
                    }
                    p {
                      font-size: 14px;
                    }
                  }
                  .t {
                    width: 260px;
                    address {
                      font-size: 16px;
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
                &:nth-of-type(2) {
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
                &:nth-of-type(3) {
                  flex-wrap: wrap;
                  justify-content: space-between;
                  .f {
                    width: 50%;
                    .largeTit {
                      font-size: 40px;
                    }
                    .vx {
                      margin-right: 20px;
                    }
                    .wb {
                      margin: 0px;
                    }
                  }
                  .s {
                    box-sizing: border-box;
                    padding-left: 20px;
                    width: 50%;
                    label {
                      font-size: 13px;
                    }
                    p {
                      font-size: 14px;
                    }
                  }
                  .t {
                    margin-top: 40px;
                    width: 100%;
                    address {
                      font-size: 16px;
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
                &:nth-of-type(2) {
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
                &:nth-of-type(3) {
                  flex-wrap: wrap;
                  justify-content: space-between;
                  .f {
                    width: 100%;
                    margin-bottom: 20px;
                    .largeTit {
                      font-size: 40px;
                      margin-bottom: 0px;
                    }
                    .vx {
                      margin-right: 20px;
                    }
                    .wb {
                      margin: 0px;
                    }
                  }
                  .s {
                    width: 100%;
                    padding-left: 0px;
                    p {
                      font-size: 14px;
                      margin-bottom: 14px;
                    }
                  }
                  .t {
                    margin-top: 40px;
                    width: 100%;
                    address {
                      font-size: 16px;
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
                &:nth-of-type(2) {
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
            margin: 60px 0px 0px 0px;
            ul {
              li {
                &:nth-of-type(1) {
                  .left {
                    .label {
                      margin: 16px 0px;
                    }
                  }
                }
                &:nth-of-type(3) {
                  flex-wrap: wrap;
                  justify-content: space-between;
                  .f {
                    margin-bottom: 20px;
                    .largeTit {
                      font-size: 28px;
                      line-height: 38px;
                    }
                  }
                  .s {
                    p {
                      font-size: 14px;
                      margin-bottom: 14px;
                    }
                  }
                  .t {
                    margin-top: 40px;
                    width: 100%;
                    address {
                      font-size: 16px;
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
</style>

