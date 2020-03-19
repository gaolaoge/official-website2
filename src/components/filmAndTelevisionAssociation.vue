<template>
  <div class="wrapper">
    <full-page :options="options">
      <div class="section active">
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
                  <!--头像-->
                  <img :src="item.imgUrl"
                       alt=""
                       class="img"
                       :key="index"
                       v-for="item,index in page.pageTwo.users"
                       v-show="++index == page.pageTwo.index_">
                </div>
                <div class="right">
                  <h6 class="label">
                    {{ page.pageTwo.label }}
                  </h6>
                  <!--简介-->
                  <h5 class="information"
                      :key="index"
                      v-for="item,index in page.pageTwo.users"
                      v-show="++index == page.pageTwo.index_">
                    <span class="name">
                      {{ item.name }}
                    </span>
                    <span class="tit">
                      {{ item.tit }}
                    </span>
                  </h5>
                  <div class="con"
                       :key="index"
                       v-for="item,index in page.pageTwo.users"
                       v-show="++index == page.pageTwo.index_">
                    {{ item.con }}
                  </div>
                  <div class="btnGroup">
                    <span class="btn">
                      <img src="@/icons/path.png"
                           alt=""
                           :class="[{'done': page.pageTwo.index_ == 1}]"
                           @click="sliderItem('left')">
                    </span>
                    <span class="bv">
                      {{ page.pageTwo.index_ }}
                      /
                      {{ page.pageTwo.users.length }}
                    </span>
                    <span class="btn">
                      <img src="@/icons/path.png"
                           alt=""
                           :class="[{'done': page.pageTwo.index_ == page.pageTwo.users.length}]"
                           @click="sliderItem('right')">
                    </span>
                  </div>
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
  export default {
    name: 'filmAndTelevisionAssociation',
    data(){
      return {
        options: {
          licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
          scrollOverflow: true,
          scrollBar: false,
          scrollingSpeed: 500,
          recordHistory: false,
          menu: '#menu',
          anchors: [
            "/filmAndTelevisionAssociation",
            "/filmAndTelevisionAssociation"
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
            name: '关于影视协会'
          },
          {
            name: '影视协会成员'
          }
        ],
        navActive: 0,
        page: {
          pageOne: {
            largeTit: 'Introduction',
            miniTit: '关于影视协会',
            labelOne: '关于影视协会',
            labelTwo: '影视协会简介',
            con: [
              `影视协会以“协作、创新、发展”为主要目标；
               以 “搭建平台、打造精品、提供服务、协作发展”为工作思路。
               打造专业化、
               规范化、
               国际化中国电影云平台，
               输出中国电影制作标准。`
            ],
            imgUrl: require('@/assets/pic_.png')
          },
          pageTwo: {
            largeTit: 'Core member',
            miniTit: '协会主要成员',
            label: 'Core member',
            users: [
              {
                imgUrl: require('@/assets/w2.png'),
                name: '于洁',
                tit: '影视协会理事',
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
                imgUrl: require('@/assets/w2.png'),
                name: '于洁2',
                tit: '影视协会理事2',
                con: `本园区项目为政府重点招商引进项目，
                  入驻企业可享受税收优惠、
                  房屋补贴、
                  人才补贴等优惠政策；
                  并且中国电影云平台落地商业区，
                  将大大降低企业的使用成本、
                  提高传输速度、
                  技术团队支持随时完善客户需求2。`
              }
            ],
            index_: 1
          }
        }
      }
    },
    components: {
      footerM
    },
    methods: {
      sliderItem(dire){
        switch(dire){
          case 'left':
            if(this.page.pageTwo.index_ == 1) return false
            this.page.pageTwo.index_ --
            break
          case 'right':
            if(this.page.pageTwo.index_ == this.page.pageTwo.users.length) return false
            this.page.pageTwo.index_ ++
            break
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
                &:nth-of-type(1)::after,
                &:nth-of-type(2)::after {
                  width: 152px;
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
              &:nth-of-type(1) {
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
                  .btnGroup {

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
                  flex-basis: 40%;
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
                    width:280px;
                    height:350px;
                  }
                }
                .right {
                  width: 640px;
                  .label {
                    margin-top: 173px;
                    margin-bottom: 30px;
                    font-size:16px;
                    font-family:ArialMT;
                    color:rgba(51,51,51,0.6);
                    line-height:18px;
                    text-transform: uppercase;
                  }
                  .information {
                    margin-bottom: 20px;
                    .name {
                      font-size:22px;
                      font-weight:600;
                      color:rgba(51,51,51,1);
                      line-height:30px;
                    }
                    .tit {
                      margin-left: 20px;
                      display: inline-block;
                      background:rgba(247,237,92,1);
                      font-size:16px;
                      font-weight:400;
                      color:rgba(51,51,51,1);
                      line-height:30px;
                      padding: 0px 20px;
                    }
                  }
                  .con {
                    font-size:16px;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:32px;
                  }
                  .btnGroup {
                    margin-top: 77px;
                    text-align: right;
                    .btn {
                      img {
                        width: 30px;
                        cursor: pointer;
                        &.done {
                          opacity: 0.6;
                          cursor: initial;
                        }
                      }
                      &:nth-of-type(1){
                        img {
                          transform: rotate(180deg);
                        }
                      }
                    }
                    .bv {
                      vertical-align: super;
                      padding: 0px 6px;
                    }
                  }
                }
              }
            }
          }
        }
        &.itemThree {
          background-image: require('@/assets/bg_us.png');
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
                &:nth-of-type(1) {
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
                    /*margin-left: 40px;*/
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
                &:nth-of-type(1)  {
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
                      width: 28vw;
                      padding-right: 20px;
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
                &:nth-of-type(1)  {
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
                &:nth-of-type(1)  {
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
                  flex-direction: column;
                  padding: 0px 24px;
                  box-sizing: border-box;
                  .right {
                    width: 100%;
                    .label {
                      margin-top: 20px;
                    }
                    .btnGroup {
                      margin-top: 0px;
                      .toLeft,
                      .toRight {
                        img {
                          width: 34px;
                        }
                      }
                    }
                  }
                  .left {
                    margin-top: 20px;
                    width: 100%;
                    .miniTit {
                      margin-bottom: 20px;
                    }
                    .largeTit {
                      font-size: 24px;
                      margin-bottom: 0px;
                    }
                    .img {
                      display: block;
                      margin: 0px auto;
                      width: 30vw;
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
                &:nth-of-type(1)  {
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

              }
            }

          }
        }
      }
    }
  }
</style>

