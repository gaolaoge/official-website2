<template>
  <div class="wrapper">
    <full-page :options="options">
      <div class="section">

      </div>
      <div class="section active">
        <div class="sectionBase">
          <div class="joinUs">
            <div class="btn">
              {{ btn }}
            </div>
          </div>
          <div class="navBase">
            <ul>
              <li v-for="(item,index) in navList" :key="index" :class="[{'active': index == navActive}]">
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
                    {{ page.pageOne.con }}
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
                  <h5 class="largeTit">
                    {{ page.pageTwo.tit }}
                  </h5>
                  <div class="con">
                    {{ page.pageTwo.con }}
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
            "tomato",
            "#fff"
          ]
        },
        btn: '加入我们！',
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
            labelTwo: '政府重点招商引进项目',
            con: `中宣部中国电影科学技术研究所授权青岛已臻化境影视科技有限公司，
                  与青岛市即墨区人民政府联手打造的中国电影云基地，
                  位于青岛市即墨区龙山街道，
                  占地面积188亩，
                  总建筑面积31.5万㎡。
                  打造集中国电影云平台研发中心、
                  互动空间、
                  高科技体验馆、
                  电影元素商业街区、
                  电影上下游产业办公用房、
                  众创空间、
                  孵化器、
                  邻里关系为一体的产业园区。`,
            imgUrl: require('@/assets/pic_.png')
          },
          pageTwo: {
            largeTit: 'advantage',
            miniTit: '我们的优势',
            imgUrl: '',
            label: 'advantage',
            tit: '政府重点招商引进项目',
            con: `本园区项目为政府重点招商引进项目，
                  入驻企业可享受税收优惠、
                  房屋补贴、
                  人才补贴等优惠政策；
                  并且中国电影云平台落地商业区，
                  将大大降低企业的使用成本、
                  提高传输速度、
                  技术团队支持随时完善客户需求。`
          }
        }
      }
    },
    components: {
      footerM
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
        .contentBase {
          width: 1040px;
          height: 500px;
          box-shadow: 0px 0px 4px 0px tomato;
          ul {
            li {
              list-style: none;
              display: flex;
              justify-content: space-around;
              &:nth-of-type(1) {
                .left {
                  flex-basis: 50%;
                  .largeTit {
                    font-size:36px;
                    font-weight:normal;
                    color:rgba(51,51,51,1);
                    line-height:42px;
                    margin-bottom: 10px;
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
                  .label {
                    margin-top: 173px;
                    margin-bottom: 30px;
                    font-size:16px;
                    font-family:ArialMT;
                    color:rgba(51,51,51,0.6);
                    line-height:18px;
                    text-transform: uppercase;
                  }
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
              &:nth-of-type(3) {

              }
              &:nth-of-type(4) {

              }
              &:nth-of-type(5) {

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
