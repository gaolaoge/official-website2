<template>
  <div class="wrapper">
    <full-page :options="options">
      <div class="section">

      </div>
      <div class="section active">
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
            <ul>
              <li v-for="item in itemList"
                  :key="item.indexNum"
                  class="item">
                <h6>
                  {{ item.indexNum }}
                </h6>
                <p class="title">
                  {{ item.title }}
                </p>
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
        ]
      }
    },
    components: {
      footerM
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
          ul {
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
        }
      }
      .footer_ {
        position: absolute;
        bottom: 0px;
      }
    }
  }
</style>
