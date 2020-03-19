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
          <div class="c">
            <div class="picBase">
              <!--<img src="@/assets/n.png" alt="" class="as">-->
              <div class="as">
                <img src="@/assets/personR.png" alt="" class="pers">
                <img src="@/assets/hairR.png" alt="" class="hair">
                <div class="text">
                  <h6 class="zh">
                    {{ cloud.tit.zh }}
                  </h6>
                  <h6 class="en">
                    {{ cloud.tit.en }}
                  </h6>
                </div>
              </div>
              <img src="@/icons/'.png" alt="" class="o">
              <img src="@/icons/right_.png" alt="" class="right_">
              <div class="textBord">
                <ul :class="cloud.cloudStatus">
                  <li v-for="(item,index) in cloud.textList" :key="index">
                    <p v-for="(item_,index_) in item.t" :key="index_">
                      {{ item_ }}
                    </p>
                    <div class="r">
                      {{ item.r }}
                    </div>
                    <div class="btnEnter">
                      {{ item.name }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="navList">
              <ul>
                <li v-for="item in cloud.navLink"
                    :key="item.text"
                    @click="cloudSwitch(item.name)">
                  <img :src="item.beforeIUrl" alt="" v-if="item.beforeIUrl" class="i">
                  <span>
                    {{ item.text }}
                  </span>
                  <img :src="item.afterIUrl"
                       alt=""
                       v-if="item.afterIUrl"
                       class="ii">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--第三屏-->
      <div class="section">
        <div class="sectionBase">
          <div class="thiItem">
            <h4>
              {{ base.tit }}
            </h4>
            <div class="itemList">
              <ul>
                <li v-for="(item,index) in base.items"
                    :key="index"
                    :class="[{'active': index == base.activeNum}]">
                  <h6 class="title" @click="base.activeNum = index">
                    {{ item.title }}
                  </h6>
                  <p class="content">
                    {{ item.content }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="thiVideo" @click="$store.commit('changeVideoM',true)">
            <video src="@/assets/NationalFilmCloud.mp4"
                   class="mp4"
                   poster="@/assets/timg2.jpg"></video>
            <div class="playerBtn">
              <img src="@/icons/playerBtn.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <!--第四屏-->
      <div class="section">
        <div class="sectionBase">
          <div class="mainBase">

            <div class="text-box title">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <svg height="0" width="0">
              <defs>
                <clipPath id="svgTextPath">
                  <text x="50" y="110">
                    {{ association.title1 }}
                  </text>
                  <text x="50" y="260">
                    {{ association.title2 }}
                  </text>
                  <text x="50" y="410">
                    {{ association.title3 }}
                  </text>
                </clipPath>
              </defs>
            </svg>

            <div class="more">
              <h6 class="miniTie">
                {{ association.moreMiniTitle }}
              </h6>
              <h5 class="moreTitle specialEffects4">
                {{ association.moreTitle }}
              </h5>
              <p class="dire">
                {{ association.moreDire }}
              </p>
              <div class="btn" @click="$router.push('/filmAndTelevisionAssociation')">
                <div class="btn_"></div>
                <div class="btnM"></div>
                <div class="btnT">
                  <img src="@/icons/svg/p.svg" alt="" class="p">
                  {{ association.moreBtn }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--第五屏-->
      <div class="section">
        <div class="sectionBase">
          <div class="adornmentRe"></div>
          <div class="carousel">
            <div class="label">
              {{ information.label }}
            </div>
            <h5 class="title">
              {{ information.titleEn }}
            </h5>
            <h5 class="title">
              {{ information.titleZh }}
            </h5>
            <div class="roundItem">
              <div class="pathIcon">
                <img src="@/icons/path.png" alt="" @click="move('left')" :class="[{ 'noClick': infoMoveNum == 0 }]">
                <img src="@/icons/path.png" alt="" @click="move('right')" :class="[{ 'noClick': infoMoveNum == 3 - information.itemList.length }]">
              </div>
              <ul :style="{marginLeft: infoMoveNum * 420 + 'px'}">
                <li v-for="(item,index) in information.itemList"
                    :key="index"
                    :class="[{ 'outItem': infoMoveNum < -index || -index < infoMoveNum - 2}]">
                  <img :src="item.imgUrl" alt="" class="img">
                  <h6 class="tit" :title="item.title">
                    {{ item.title }}
                  </h6>
                  <p class="date">
                    {{ item.date }}
                  </p>
                  <div class="btn" @click="$store.commit('changeArticleM',true)">
                    <div class="f">
                      <img src="@/icons/+.png" alt="" class="addIcon">
                      <span>
                      {{ item.btnT }}
                    </span>
                    </div>
                    <div class="s">
                      <img src="@/icons/+.png" alt="" class="addIcon">
                      <span>
                      {{ item.btnT }}
                    </span>
                    </div>

                  </div>
                </li>
              </ul>
            </div>
            <div class="btnGroup" @click="$router.push('/industryInformation')">
              <img src="@/icons/+yellow.png" alt="">
              <span class="text">
                <span class="f">
                  {{ information.btnF }}
                </span>
                <span class="s">
                  {{ information.btnS }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--第六屏-->
      <div class="section">
        <div class="sectionBase">
          <div class="base">
            <div class="adornmentRe2" :class="[{'showEndSection': endSection}]"></div>
            <div class="info">
              <div class="label">
                {{ info.label }}
              </div>
              <div class="tt">
                <div class="title specialEffects6">
                  {{ info.title1 }}
                </div>
                <div class="title specialEffects6">
                  {{ info.title2 }}
                </div>
              </div>
              <div class="btnJoin">
                <div class="f">
                  <img src="@/icons/+yellow.png" alt="" class="i">
                  <div class="join">
                    <div>
                      {{ info.join }}
                    </div>
                  </div>
                </div>

                <div class="s">
                  <img src="@/icons/+yellow.png" alt="" class="i">
                  <div class="join">
                    <div>
                      {{ info.join }}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="logoList" :class="[{'showEndSection': endSection}]">
              <img src="@/assets/logoList.png" alt="" class="l">
            </div>
          </div>
        </div>
        <footerM class="footer_" @changeS_="changeS"/>
      </div>
    </full-page>
  </div>
</template>

<script>
  import footerM from '@/components/footer/index'
  import carouselMoudle from '@/components/carousel'
  import { TweenLite,TimelineMax,Expo } from 'gsap'
  import '@/assets/common.css'
  import { getNewsList } from '@/api/api.js'
  import {
    computeDate,
    common
  } from '@/assets/common.js'


  export default {
  name: 'home',
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
          "homeM",
          "movieCloudM",
          "moviebaseM",
          "joinusM",
          "newM",
          "friendlyM"
        ],
        animateAnchor: true,
        sectionsColor: [
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "rgba(18,18,18,0.9)"
        ]
      },
      cloud: {
        navLink: [
          {
            beforeIUrl: require('@/icons/g.png'),
            text: '云管理系统',
            afterIUrl: null,
            name: 'systems'
          },
          {
            beforeIUrl: require('@/icons/j.png'),
            text: '渲染农场',
            afterIUrl: null,
            name: 'farm'
          },
          {
            beforeIUrl: require('@/icons/w.png'),
            text: '云桌面',
            afterIUrl: null,
            name: 'table'
          },
          {
            beforeIUrl: null,
            text: '了解更多',
            afterIUrl: require('@/icons/joinIn.png')
          },
        ],
        textList: [
          {
            name: '云管理系统',
            r: 'Management System Cloud',
            t: [
              `国家电影云制作服务平台，
               是基于云计算平台提供数字电影分布式跨地域远程协同制作服务，
               为国产精品电影持续有效推出创建协作机制和支撑平台。
               通过创建“强强联合、优势互补、协同创新”的电影制作新模式，
               形成制作合力，
               进而有效克服国内制作机构“小而散”发展瓶颈，
               并为实现国际素材交换提供安全性和互操作保障。`,
               `中宣部中国电影科学技术研究院作为中国电影行业唯一的国家级电影科研机构，
               在新时代承载着以自主创新支撑中国电影高质量发展的使命和担当，
               率先提出构建国家电影云制作服务平台。`
            ]
          },
          {
            name: '渲染农场',
            r: 'Management System Cloud',
            t: [
              `公司通过高性能服务器集群的算力整合开发,
               对复杂渲染任务实施分解和并行加速，
               助力用户在有限时间内以可控成本实现影片视觉目标。`
            ]
          },
          {
            name: '云桌面',
            r: 'Management System Cloud',
            t: [
              `云桌面，
               基于分布式云计算存储技术，
               集成互联网精华应用，
               依托高度加密算法，
               为互联网各个层次用户提供最简便、
               最丰富、
               最安全、
               最贴心的服务。
               使用户能够随时随地通过瘦终端访问高性能影视制作环境，
               为用户创造简单易用的即时制作体验`
            ]
          }
        ],
        cloudStatus: 'systems',
        tit: {
          zh: '中国电影云平台',
          en: 'CHINA MOVIE CLOUD'
        }
      },
      base: {
        tit: '中国电影云基地',
        items: [
          {
            title: '01 基地介绍',
            content: `中国电影云基地是集中国电影云研发中心、
                      互动空间、
                      高科技体验馆、
                      电影元素商业街区、
                      电影上下游产业办公用房、
                      众创空间、
                      孵化器、
                      邻里关系为一体的产业园区。
                      基地位于青岛市即墨区龙山街道，
                      紧邻创智新区政府、
                      市民广场、
                      音乐谷、
                      龙泉公园、
                      盟旺山公园等。
                      总投资约35亿元，
                      占地面积260亩，
                      地上建筑面积约31.5万平方米，
                      容积率2.5，
                      现在开发建设阶段，
                      预计2022年前完成。`
          },
          {
            title: '02 政策支持',
            content: `本园区项目为政府重点招商引进项目，
                      入驻企业可享受税收优惠、
                      房屋补贴、
                      人才补贴等优惠政策；
                      并且中国电影云平台落地商业区，
                      将大大降低企业的使用成本、
                      提高传输速度、
                      技术团队支持随时完善客户需求。`
          },
          {
            title: '03 园区配套设施',
            content: `园区基础配套、
                      生活配套、
                      工商税务、
                      法律财务、
                      知识产权服务、
                      人力资源服务、
                      管理咨询服务、
                      投融资服务等多种咨询辅导代办服务。`
          },
          {
            title: '04 资源共享',
            content: `打破现在行业“小而散”的特点，
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
            title: '05 入驻扶持',
            content: `特色增值服务体系，
                      助力企业高速成长。
                      聘请技术专家、
                      教授、
                      学术带头人为名誉顾问，
                      对企业研发中心的困难进行点对点帮扶，
                      定期举办园区企业技术、
                      管理专题讲座和培训。
                      随着城市经济的不断发展，
                      园区发展需通过构建高效的组织架构、
                      产业链条、
                      服务集群，
                      来提升园区的运营效率，
                      从而增强园区的价值优势，
                      打造及集政策优惠，
                      产业聚集，
                      人才聚集为一体的高端科技产业园区。`
          },
        ],
        activeNum: 0
      },
      association: {
        title1: 'COME',
        title2: 'JOIN',
        title3: 'US!',
        moreMiniTitle: 'MOVIE Association',
        moreTitle: `希望您了解 “影视协会”  并加入我们！`,
        moreDire: `影视协会以“协作、创新、发展”为主要目标；
                   以 “搭建平台、打造精品、提供服务、协作发展”为工作思路。
                   打造专业化、
                   规范化、
                   国际化中国电影云平台，
                   输出中国电影制作标准。`,
        moreBtn: '了解更多'
      },
      information: {
        label: 'Film and television deeds-',
        titleEn: 'Industry Information',
        titleZh: '行业资讯',
        itemList: [
          {
            imgUrl: require('@/assets/pic1.png'),
            title: '疫情原因，春节档电影下架，影视行业该如何应对？',
            date: '2020 02/25 11:58',
            btnT: '详情'
          },
          {
            imgUrl: require('@/assets/pic2.png'),
            title: '面对世界灾难，卡梅隆导演呼吁停止宰杀动物，以身作则，做一名素食主义者。',
            date: '2020 02/25 11:58',
            btnT: '详情'
          },
          {
            imgUrl: require('@/assets/pic3.png'),
            title: '2020年，网络电影“新机遇”？（疫情期间，网络电影崭露锋芒）',
            date: '2020 02/25 11:58',
            btnT: '详情'
          },
          {
            imgUrl: require('@/assets/pic4.png'),
            title: '预测：2020年度电影票房 冠军是特效影片。',
            date: '2020 02/25 11:58',
            btnT: '详情'
          },
          {
            imgUrl: require('@/assets/pic1.png'),
            title: '《哪吒》成功的背后带给影视行业带来哪些启示？',
            date: '2020 02/25 11:58',
            btnT: '详情'
          }
        ],
        btnF: '进入',
        btnS: '行业资讯'
      },
      info: {
        label: 'sense-',
        title1: '盛世影云',
        title2: '战略合作伙伴',
        join: '加入我们'
      },
      endSection: false,
      infoMoveNum: 0,
      fM: null,   //title波动
      form: {
        name: ''
      },
      // },
      footerInfo: false,
      firstBrowsing: {
        onePage: true,
        twoPage: true,
        threePage: true,
        fourPage: true,
        fivePage: true,
        sixPage: true
      }
    }
  },
  components: {
    footerM,
    carouselMoudle
  },
  methods: {
      onLeave(anchorLink,index){
        if(index.anchor != 'friendlyM'){
          this.$store.commit('changeInTheEnd',false)
          this.endSection = false
          this.$emit('getEndSection',false)
        }
        if(index.anchor == 'friendlyM'){
          if(this.firstBrowsing.sixPage){
            this.firstBrowsing.sixPage = false
            new common(this.$refs['btnnn'])
          }
        }else if(index.anchor == 'newM'){
          if(this.firstBrowsing.fivePage){
            this.firstBrowsing.fivePage = false
            this.$refs['btnn'].forEach(curr => {
              new common(curr)
            })
          }
        }
      },
      afterLoad(anchorLink,index){
        if(index.anchor == 'friendlyM') {
          this.$store.commit('changeInTheEnd', true)
          this.endSection = true
          this.$emit('getEndSection',true)
        }
      },

      // 第二屏 云平台文本轮播
      cloudSwitch(name){
        if(name){
          // 轮播
          this.cloud.cloudStatus = name
        }else {
          // 跳转
          this.$router.push('/movieCloudPlatform')
        }

      },
      // 第五屏 行业轮播
      move(dire){
        let amount = this.information.itemList.length
        if(dire == 'right'){
          //to left
          console.log('r')
          if(this.infoMoveNum == 3 - amount)
            return false
          this.infoMoveNum --
          console.log(this.infoMoveNum)
        }else{
          //to right
          if(this.infoMoveNum == 0)
            return false
          this.infoMoveNum ++
        }
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
      //挂载到vue上
  },
  created() {
    getNewsList({
      name: '',
      size: 8,
      page: 1,
      hide: 1
    })
      .then(data => {
        this.information.itemList = data.data.data.map(curr => {
          return {
            imgUrl: curr.first,
            title: curr.title,
            date: computeDate(curr.createtime),
            btnT: '详情'
          }
        })
      })
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
      justify-content: center;
      .sectionBase {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        max-width: 1920px;
        /*第二屏*/
        .c {
          height: 724px;
          width: 1420px;
          .picBase {
            position: relative;
            height: 600px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 40px 0px rgba(0,0,0,0.15);
            border-radius:5px;
            .as {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 710px;
              height: 600px;
              overflow: hidden;
              background-image: linear-gradient(to left, RGBA(255, 124, 128, 1),RGBA(252, 246, 103, 1));
              .hair {
                position: absolute;
                top: 40px;
                left: 0px;
                width: 400px;
              }
              .pers {
                position: absolute;
                bottom: 40px;
                right: 0px;
                width: 400px;
                z-index: 1;
              }
              .text {
                position: relative;
                z-index: 2;
                background-color: RGBA(248, 237, 92, 1);
                width: 310px;
                height: 100px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .zh {
                  font-size: 22px;
                  font-weight: bold;
                }
                .en {
                  font-size: 22px;
                  font-weight: 900;
                }
              }
            }
            .o {
              position: absolute;
              top: 110px;
              right: 612px;
              width: 18px;
            }
            .right_ {
              position: absolute;
              bottom: 80px;
              right: 100px;
              width: 50px;
              cursor: pointer;
            }
            .textBord {
              position: absolute;
              right: 100px;
              bottom: 140px;
              width: 502px;
              height: 340px;
              font-size:16px;
              font-weight:400;
              color:rgba(102,102,102,1);
              line-height:30px;
              overflow: hidden;
              ul {
                width: 1600px;
                margin-left: 0px;
                transition: all 0.3s ease-in-out;
                li {
                  list-style: none;
                  display: inline-block;
                  width: 502px;
                  margin-right: 20px;
                  vertical-align: top;
                  p:nth-of-type(1) {
                    margin-bottom: 10px;
                  }
                  .r {
                    margin-top: 32px;
                    font-size:16px;
                    font-weight:600;
                    color:rgba(102,102,102,1);
                  }
                  .btnEnter {
                    display: inline-block;
                    font-size:16px;
                    font-weight:600;
                    color:rgba(102,102,102,1);
                    line-height:30px;
                    margin-top: 2px;
                    border-bottom: 4px solid rgba(247,237,92,1);
                  }
                }
                &.systems {
                  margin-left: 0px;
                }
                &.farm {
                  margin-left: -522px;
                }
                &.table {
                  margin-left: -1044px;
                }
              }
            }
          }
          .navList {
            margin-top: 60px;
            ul {
              display: flex;
              justify-content: space-between;
              li {
                list-style: none;
                cursor: pointer;
                text-align: center;
                width: 360px;
                height: 64px;
                background:rgba(234,234,234,1);
                border-radius:2px;
                font-size:18px;
                font-weight:600;
                color:rgba(51,51,51,0.79);
                line-height:64px;
                margin-top: 0px;
                box-shadow:0px 8px 20px 0px rgba(0,0,0,0.0);
                transition: all 0.2s;
                &:nth-last-of-type(1) {
                  width: 190px;
                  background:rgba(247,237,92,1);
                }
                span {
                  vertical-align: top;
                }
                .i {
                  width: 20px;
                  margin: 0px 8px;
                  vertical-align: middle;
                }
                .ii {
                  width: 30px;
                  vertical-align: middle;
                }
                &:hover {
                  margin-top: -10px;
                  background:rgba(255,255,255,1);
                  box-shadow:0px 8px 20px 0px rgba(0,0,0,0.15);
                  &:nth-last-of-type(1) {
                    background:rgba(247,237,92,1);
                  }
                }
              }
            }
          }
        }
        /*第三屏*/
        .thiVideo {
          position: relative;
          width: 880px;
          height: 520px;
          background-color: black;
          box-shadow:0px 2px 40px 0px rgba(0,0,0,0.2);
          .mp4 {
            width: 100%;
            height: 100%;
          }
          .playerBtn {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            cursor: pointer;
            background-color: rgba(0,0,0,0.3);
            img {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
            }
          }
        }
        .thiItem {
          height: 520px;
          h4 {
            display: inline-block;
            vertical-align: top;
            font-size:30px;
            font-weight:600;
            color:rgba(51,51,51,0.49);
            line-height:42px;
          }
          .itemList {
            display: inline-block;
            width: 483px;
            margin: 8px 86px 0px 61px;
            ul {
              li {
                list-style: none;
                .title {
                  font-size:16px;
                  font-weight:400;
                  color:rgba(51,51,51,1);
                  line-height:22px;
                  cursor: pointer;
                  padding-left: 36px;
                  transition: all 0.2s;
                }
                .content {
                  height: 0px;
                  margin: 10px 0px;
                  font-size:14px;
                  font-weight:400;
                  color:rgba(51,51,51,0.49);
                  line-height:30px;
                  overflow: hidden;
                  padding-left: 36px;
                  transition: all 0.2s;
                }
                &.active {
                  .title {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 31px;
                    padding-left: 0px;
                  }
                  .content {
                    height: auto;
                    margin: 50px 0px;
                  }
                }
              }
            }
          }
        }
        /*第四屏*/
        .mainBase {
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 1518px;
          width: 92vw;
          height: 100%;
          background: repeating-linear-gradient(90deg , rgba(247, 244, 248, 1),rgba(247, 244, 248, 1) 119px , rgba(247, 244, 248, 0) 0 , rgba(247, 244, 248, 0) 238px);
          .title {
            font-family: uni-sans;
            width: 550px;
            height: 528px;
            font-size: 165px;
            line-height: 1.04em;
            font-weight: 600;
          }
          .more {
            width: 550px;
            height: 528px;
            .miniTie {
              position: relative;
              font-size:14px;
              font-family:ArialMT;
              color:rgba(48,48,48,1);
              line-height:16px;
              margin-bottom: 57px;
              &::before {
                content: '';
                position: absolute;
                left: 0px;
                top: -6px;
                width:20px;
                height:4px;
                background:rgba(51,51,51,1);
              }
              &::after {
                content: '';
                position: absolute;
                left: 0px;
                bottom: -5px;
                width:8px;
                height:2px;
                background:rgba(51,51,51,1);
              }
            }
            .moreTitle {
              font-size:36px;
              font-weight:600;
              color:rgba(48,48,48,1);
              line-height:50px;
              margin-bottom: 20px;
              width: 420px;
            }
            .dire {
              font-size:14px;
              font-weight:300;
              color:rgba(51,51,51,1);
              line-height:26px;
              margin-bottom: 80px;
            }
            .btn {
              position: relative;
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
        }
        /*第五屏*/
        .adornmentRe {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 618px;
          height: 600px;
          background-color: rgba(248, 246, 249, 1);
        }
        .carousel {
          position: relative;
          width: 1275px;
          height: 644px;
          top: 24vh;
          .label {
            width: 400px;
            font-size:14px;
            color:rgba(51,51,51,1);
            line-height:16px;
            letter-spacing:1px;
            transform: rotate(90deg);
            transform-origin: 0px 0px ;
          }
          .title {
            margin-left: 65px;
            font-size: 38px;
            font-weight: normal;
            color: rgba(51,51,51,1);
            line-height: 43px;
            letter-spacing: 1px;
            text-transform: uppercase;
            &:nth-of-type(2) {
              margin-bottom: 60px;
            }
          }
          .roundItem {
            position: relative;
            margin-left: 65px;
            .pathIcon {
              position: absolute;
              top: -80px;
              right: 10px;
              img {
                width: 50px;
                cursor: pointer;
                &:nth-of-type(1) {
                  margin-right: 20px;
                  transform: rotate(180deg);
                }
                &.noClick {
                  opacity: 0.4;
                  cursor: initial;
                }
              }
            }
            ul {
              width: 4000px;
              padding-left: 0px;
              font-size: 0px;
              margin-left: 0px;
              transition: all 0.2s;
              li {
                list-style: none;
                display: inline-block;
                margin-right: 60px;
                cursor: pointer;
                .img {
                  width: 360px;
                  height: 220px;
                }
                .tit {
                  width: 360px;
                  margin-top: 20px;
                  font-size:18px;
                  font-weight:500;
                  color:rgba(51,51,51,1);
                  line-height:28px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .date {
                  margin-top: 5px;
                  font-size:12px;
                  font-weight:400;
                  color:rgba(51,51,51,0.5);
                  line-height:17px;
                }
                .btn {
                  position: relative;
                  margin-top: 30px;
                  height: 22px;
                  width: 60px;
                  overflow: hidden;
                  font-size:14px;
                  font-weight:500;
                  color:rgba(51,51,51,1);
                  line-height:20px;
                  cursor: pointer;
                  &::after {
                    position: absolute;
                    left: 12px;
                    bottom: 0px;
                    content: '';
                    display: inline-block;
                    width:28px;
                    height:2px;
                    background:rgba(51,51,51,1);
                  }
                  &:hover {
                    .f {
                      margin-top: 0px;
                    }
                  }
                  .f {
                    transition: all 0.2s;
                    margin-top: -20px;
                  }
                  .addIcon {
                    width: 9px;
                  }
                }
                &.outItem {
                  opacity: 0.4;
                  .img,
                  .btn {
                    cursor: initial;
                  }
                }
              }
            }
          }
          .btnGroup {
            position: absolute;
            right: 168px;
            bottom: 0px;
            cursor: pointer;
            img {
              width: 16px;
            }
            .text {
              display: inline-block;
              font-size: 24px;
              font-weight:500;
              line-height:33px;
              .f {
                float: left;
                color: rgba(247, 237, 92, 1);
              }
              .s {
                color: rgba(51, 51, 51, 1);
              }
              &::after {
                position: absolute;
                left: 20px;
                bottom: -4px;
                content: '';
                display: inline-block;
                width:145px;
                height:3px;
                background:rgba(247,237,92,1);
              }
            }
          }
        }
        /*第六屏*/
        .base {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1440px;
          height: 100vh;
          margin: 0px auto;
          .adornmentRe2 {
            position: absolute;
            background-color: rgba(31, 28, 31, 1);
            height: 100vh;
            width: 930px;
            left: 40%;
            &::after {
              position: absolute;
              top:0px;
              left: 50%;
              transform: translateX(-50%);
              content: '';
              width: 540px;
              height: 0vh;
              transition: height 0.6s;
              background: repeating-linear-gradient(90deg , rgba(24, 21, 24, 1),rgba(24, 21, 24, 1) 110px , rgba(247, 244, 248, 0) 0 , rgba(247, 244, 248, 0) 220px);
            }
            &.showEndSection {
              &::after {
                height: 100vh;
              }
            }
          }
          .info {
            width: 591px;
            height: 640px;
            .label {
              width: 400px;
              font-size:12px;
              color:rgba(255,255,255,1);
              line-height:14px;
              transform-origin: 0px 0px;
              transform: rotate(90deg);
            }
            .tt {
              margin: 0px 0px 60px 40px;
              .title {
                font-size:50px;
                font-weight:600;
                color:rgba(255,255,255,1);
                &:nth-of-type(1) {
                  margin: -28px 0px 10px;
                }
              }
            }
            .btnJoin {
              position: relative;
              margin-left: 40px;
              cursor: pointer;
              height: 35px;
              width: 120px;
              overflow: hidden;
              .f,
              .s {
                transition: all 0.2s;
                .i {
                  width: 16px;
                }
                .join {
                  display: inline-block;
                  vertical-align: bottom;
                  font-size:24px;
                  font-weight:500;
                  color:rgba(247,237,92,1);
                }
              }
              .f {
                margin-top: -31px;
                .join {
                  font-weight: 600;
                }
              }
              &::after {
                position: absolute;
                left: 19px;
                bottom: 0px;
                content: '';
                display: inline-block;
                width:98px;
                height:3px;
                background:rgba(247,237,92,1);
              }
              &:hover {
                .f {
                  margin-top: 0px;
                }
              }
            }
          }
          .logoList {
            position: relative;
            top: -100vh;
            z-index: 2;
            width: 591px;
            height: 0px;
            opacity: 0;
            transition: top 1.4s,
            height 1.4s,
            opacity 0.2s;
            .l {
              float: right;
              width: 540px;
              height: 0px;
            }
            &.showEndSection {
              top: 0px;
              opacity: 1;
              height: 640px;
              .l {
                height: 640px;
              }
            }
          }
        }
      }
      &:nth-of-type(2) {
        .sectionBase {
          align-items: center;
          justify-content: space-around;
        }
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        .sectionBase {
          align-items: center;
          justify-content: center;
        }
      }
      &:nth-of-type(5) {
        .sectionBase {
          justify-content: center;
        }
      }
    }
  }
  .text-box {
    width: 700px;
    height: 400px;
    font-size: 4rem;
    font-weight: bold;

    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    clip-path: url(#svgTextPath);
    color: white;
    background: rgba(248, 237, 92, 1);

  }
  .dot {
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.9;
  }
  .dot:nth-child(1) {
    width: 300px;
    height: 300px;
    background: rgba(248, 237, 92, 1);
    z-index: 8;
    transform: translateX(-175px) translateY(-175px);
  }
  .dot:nth-child(2) {
    width: 700px;
    height: 700px;
    background: rgba(255, 105, 115, 1);
    z-index: 7;
    transform: translateX(-250px) translateY(-250px);
  }
  .dot:nth-child(3) {
    width: 1200px;
    height: 1200px;
    background: rgba(22, 242, 177, 1);
    z-index: 6;
    transform: translateX(-350px) translateY(-350px);
  }
  text {
    /*font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,*/
    /*Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;*/
    /*font-weight: bold;*/
    /*font-size: 8rem;*/
    text-transform: uppercase;
    font-family: u;
    width: 550px;
    height: 528px;
    font-size: 140px;
    line-height: 1.04em;
    font-weight: 600;
  }

  /deep/.fp-tableCell {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1460px) {
    .wrapper {
      .section {
        .sectionBase {
          /*第二屏*/
          .c {
            width: 96vw;
            .picBase {
              .as {
                width: 50%;
              }
              .o {
                top: 110px;
                right: 47%;
              }
              .right_ {
                right: 66px;
              }
              .textBord {
                width: 38vw;
                height: 340px;
                right: 66px;
                ul {
                  width: 320%;
                  li {
                    width: 38vw;
                  }
                  &.farm {
                    margin-left: -105%;
                  }
                  &.table {
                    margin-left: -210%;
                  }
                }

              }
            }
            .navList {
              ul {
                li {
                  width: 23vw;
                }
              }

            }
          }
          //第三屏
          .thiItem {
            padding-left: 10px;
            .itemList {
              margin: 28px 1vw 0px 3vw;
            }
          }
          .thiVideo {
            width: 60vw;
            margin-right: 10px;
          }
          .carousel {
            width: 80vw;
          }
          /*第六屏*/
          .base {
            width: 98vw;
          }
        }
      }
    }
  }
  @media screen and (max-width: 998px) {
    .wrapper {
      .section {
        .sectionBase {
          /*第二屏*/
          .c {
            width: 98vw;
            .picBase {
              .as {
                width: 44%;
                .hair,
                .pers {
                  width: 74%;
                }
              }
              .o {
                right: 53%;
              }
              .right_ {
                right: 74px;
              }
              .textBord {
                width: 43vw;
                height: 340px;
                right: 74px;
                ul {
                  width: 320%;
                  li {
                    width: 43vw;
                  }
                  &.farm {
                    margin-left: -105%;
                  }
                  &.table {
                    margin-left: -210%;
                  }
                }

              }
            }
          }
          /*.第三屏*/
          .thiItem {
            .itemList {
              width: 38vw;
            }
          }
          .thiVideo {
            width: auto;
            flex-grow: 1;
            margin-right: 0px;
          }
          /*第四屏*/
          .mainBase {
            .title {
              margin-left: -6vw;
            }
          }
          /*第六屏*/
          .base {
            .info {
              position: relative;
              left: 16px;
            }
            .l {
              display: none;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 866px) {
    .wrapper {
      .section {
        .sectionBase {
          .mainBase {
            .title {
              margin-left: -10vw;
              margin-top: -20vh;
              /*overflow: initial;*/
            }
            .more {
              margin-top: 30vh;
            }
          }
        }


      }
    }
  }
  @media screen and (max-width: 810px) {
    .wrapper {
      .section {
        .sectionBase {
          /*第二屏*/
          .c {
            width: 98vw;
            .picBase {
              .as {
                width: 34%;
                .hair,
                .pers {
                  width: 100%;
                }
              }
              .o {
                right: 63%;
                width: 14px;
              }
              .right_ {
                right: 74px;
                width: 40px;
              }
              .textBord {
                width: 50vw;
                height: 340px;
                right: 74px;
                ul {
                  width: 320%;
                  li {
                    width: 50vw;
                    p {
                      font-size: 14px;
                    }
                  }
                  &.farm {
                    margin-left: -105%;
                  }
                  &.table {
                    margin-left: -210%;
                  }
                }

              }
            }
            .navList {
              ul {
                 li {
                   width: 21vw;
                   .i {
                     width: 16px;
                     vertical-align: middle;
                     margin: 0px 4px;
                   }
                   span {
                     font-size: 16px;
                   }
                 }
              }
            }
          }
          /*第三屏*/
          .thiVideo {
            height: 40vh;
            margin: 10px;
            flex-shrink: 0;
          }
          .thiItem {
            max-height: 60vh;
            width: calc(100vw - 16px);
            h4 {
              font-size: 24px;
            }
            .itemList {
              width: 60vw;
            }
          }
          /*第四屏*/
          .title {
            opacity: 0.6;
          }
          .more {
            position: absolute;
            z-index: 2;
            width: 92vw!important;
          }
          /*第五屏*/
          .carousel {
            top: 18vh;
            .title,
            .roundItem {
              margin-left: 20px;
            }
          }
        }
        &:nth-of-type(3) {
          .sectionBase {
            flex-direction: column-reverse;
            overflow: hidden;
          }

        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .wrapper {
      .section {
        .sectionBase {
          /*第二屏*/
          .c {
            height: auto;
            .picBase {
              height: 680px;
              .as {
                width: 100%;
                height: 38%;
                .hair,
                .pers {
                  width: 60%;
                }
              }
              .o {
                left: 1%;
                top: 274px;
                width: 14px;
              }
              .right_ {
                right: 20px;
                bottom: 20px;
                width: 40px;
              }
              .textBord {
                width: 100%;
                padding: 18px 8px;
                box-sizing: border-box;
                height: auto;
                right: 0px;
                bottom: 12px;
                ul {
                  width: 320%;
                  li {
                    width: calc(33.3333% - 30px);
                    p {
                      font-size: 14px;
                      line-height: 26px;
                    }
                    .r {
                      margin-top: 12px;
                    }
                  }
                }

              }
            }
            .navList {
              margin-top: 20px;
              ul {
                flex-wrap: wrap;
                justify-content: space-around;
                li {
                  width: 38vw!important;
                  height: 40px;
                  line-height: 40px;
                  margin-bottom: 10px;
                  .i {
                    width: 14px;
                    vertical-align: middle;
                    margin: 0px 4px;
                  }
                  span {
                    font-size: 14px;
                  }
                  &:nth-last-of-type(1) {
                    width: 100px;
                  }
                }
              }
            }
          }
          /*第三屏*/
          .thiItem {
            h4 {
              width: 100vw;
            }
            .itemList {
              width: 90vw;
              ul {

                li.active {
                  .content {
                    margin: 22px 0px;
                  }
                }
              }
            }

          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    .wrapper {
      .section {
        .sectionBase {
          /*第二屏*/
          .c {
            .picBase {
              .textBord {
                p {
                  font-size: 13px!important;
                }
              }
            }
          }
          /*第三屏*/
          .thiVideo {
            height: 26vh;
            flex-grow: 0;
          }
          .thiItem {
            height: 70vh;
            .itemList {
              margin-top: 10px;
              ul {
                li {
                  &.active {
                    .title {
                      font-size: 18px;
                    }
                    .content {
                      margin: 8px 0px;
                      line-height: 24px;
                    }
                  }
                }
              }
            }
          }
          /*第四屏*/
          .mainBase {
            .more {
              margin-top: 10vh;
              .miniTie {
                margin-bottom: 32px;
              }
              .moreTitle {
                font-size: 30px;
                width: 90vw;
                line-height: 40px;
              }
              .dire {
                margin-bottom: 32px;
              }
            }
          }
        }
      }
    }
  }
</style>
