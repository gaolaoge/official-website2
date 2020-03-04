<template>
  <div class="wrapper">
    <full-page :options="options">
      <div class="section">
        {{ pageNum }}
      </div>
      <div class="section active">
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
                      {{ item }}
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
                    <img src="" alt="">
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
            "tomato",
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
            largeTit: 'about sense',
            miniTit: '关于影视协会',
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
      footerM
    },
    methods: {
      afterLoad(anchorLink,index){
        this.pageNum = index.index
      }
    },
    computed: {
      bgi(){
        return this.navActive == 2 ? require('@/assets/bg_us.png') : ''
      },
      help(){
        if(this.navActive == 2 && this.pageNum == 1){
          this.$store.commit('changeInTheEnd', true)
        }else{
          this.$store.commit('changeInTheEnd', false)
        }
        return this.navActive + this.pageNum
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
        .contentBase {
          width: 1040px;
          height: 500px;
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
                  }
                  p {
                    font-size:18px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:25px;
                    letter-spacing:1px;
                    margin-bottom: 40px;
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
</style>

