<template>
  <div class="wrapper">
    <div class="b" @click="changeShow">
      <img src="@/icons/showFooter.png"
           alt=""
           class="showFooter">
      <img src="@/icons/showFooterIcon.png"
           alt=""
           :class="[{'active': show}]"
           class="showFooterIcon">
    </div>
    <footer>
      <section class="s"  :class="[{'active': show}]">
        <div class="routeList">
          <div v-for="(item,index) in routeList" :key="index" class="t">
            <h6 class="title">
              {{ item.title }}
            </h6>
            <ul>
              <li v-for="(item_,index_) in item.list" :key="index_" @click="$router.push(item.routerLink)">
                {{ item_.t }}
              </li>
            </ul>
          </div>
        </div>
        <div class="info">
          <h6 class="title item">
            {{ info.company }}
          </h6>
          <p class="item">
            {{ info.address }}
          </p>
          <p class="item">
            {{ info.post }}
          </p>
          <p class="item">
            {{ info.phone }}
          </p>
          <p class="item">
            {{ info.telephone }}
          </p>
          <p class="item">
            {{ info.email }}
          </p>
        </div>
      </section>
      <section class="f">
        <img src="@/icons/u.png" alt="">
        <span>
        {{ t }}
      </span>
      </section>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data(){
      return {
        t: '鲁公网安备 33010002000124号',
        show: false,
        routeList: [
          {
            title: '中国电影云平台',
            list: [
              {
                t: '云管理系统',
                routerLink: '/'
              },
              {
                t: '渲染农场',
                routerLink: '/'
              }
            ]
          },
          {
            title: '中国电影云基地',
            list: [
              {
                t: '目标及定位',
                routerLink: '/'
              },
              {
                t: '我们的优势',
                routerLink: '/'
              },
              {
                t: '园区现状',
                routerLink: '/'
              },
              {
                t: '剧组接待',
                routerLink: '/'
              },
              {
                t: '文化产业孵化器',
                routerLink: '/'
              }
            ]
          },
          {
            title: '影视协会',
            list: [
              {
                t: '影视协会',
                routerLink: '/'
              }
            ]
          },
          {
            title: '行业资讯',
            list: [
              {
                t: '行业资讯',
                routerLink: '/'
              }
            ]
          },
          {
            title: '关于我们',
            list: [
              {
                t: '公司介绍',
                routerLink: '/'
              },
              {
                t: '公司愿景',
                routerLink: '/'
              },
              {
                t: '公司团队',
                routerLink: '/'
              },
              {
                t: '联系方式',
                routerLink: '/'
              }
            ]
          }
        ],
        info: {
          company: '青岛盛世影云有限公司',
          address: '地址：山东省青岛市即墨区经济开发区',
          post: '邮编：266000',
          phone: '固定电话：0532-2615612',
          telephone: '手机：187676883366',
          email: '邮箱：huahsak@163.com'
        }
      }
    },
    methods: {
      changeShow(){
        this.show = !this.show
        this.$emit('changeS_',this.show)
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    position: relative;
    z-index: 3;
    margin-bottom: 0px;
    width: 100vw;
    transition: all 0.2s;
    .b {
      position: relative;
      margin: 0px auto -14px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 50px;
      cursor: pointer;
      .showFooter {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 53px;
      }
      .showFooterIcon {
        position: relative;
        width: 18px;
        transform: rotate(0deg);
        transition: all 0.2s;
        &.active {
          transform: rotate(-135deg);
        }
      }
    }
    footer {
      background-color: rgba(18,18,18,0.9);
      text-align: center;
      .f {
        img {
          width: 16px;
          display: inline-block;
          vertical-align: middle;
          margin: 0px 8px;
        }
        span {
          font-size:12px;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:51px;
        }
      }
      .s {
        height: 0px;
        font-size: 16px;
        background-color: rgba(245,245,245,1);
        /*padding-top: 60px;*/
        box-sizing: border-box;
        transition: 0.2s height 0.4s;
        display: flex;
        justify-content: space-around;
        .routeList {
          padding-top: 60px;
          width: 700px;
          display: flex;
          justify-content: space-between;
          .t {
            text-align: left;
            .title {
              font-size:14px;
              font-weight:600;
              color:rgba(51,51,51,1);
              line-height:20px;
              margin-bottom: 10px;
            }
            ul {
              padding-left: 0px;
              li {
                list-style: none;
                cursor: pointer;
                font-size:12px;
                font-weight:400;
                color:rgba(51,51,51,0.6);
                line-height:17px;
                margin-bottom: 10px;
              }
            }
          }
        }
        .info {
          padding-top: 60px;
          width: 400px;
          text-align: left;
          .title {
            display: inline-block;
            background-color: rgba(247,237,92,0.9);
            font-size:12px;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:17px;
          }
          .item {
            margin-bottom: 10px;
            font-size:12px;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:17px;
          }
        }
        &.active {
          height: 275px;
        }
      }
    }
  }
</style>
