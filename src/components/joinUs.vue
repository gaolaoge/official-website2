<template>
  <div class="wrapper-joinUs" :style="{backgroundImage: 'url(' + bgi + ')'}">
    <div class="formM" v-show="status == 'fillIn'">
      <h5 class="tit">
        {{ title }}
      </h5>
      <p class="dire">
        {{ dire }}
      </p>
        <div class="fromItem">
          <label for="name">
            {{ label.name }}
          </label>
          <input type="text" id="name" v-model="from.name">
        </div>
        <div class="fromItem">
          <label for="business">
            {{ label.business }}
          </label>
          <input type="text" id="business" v-model="from.business">
        </div>
        <div class="fromItem">
          <label for="contactPerson">
            {{ label.contactPerson }}
          </label>
          <input type="text" id="contactPerson" v-model="from.contactPerson">
        </div>
        <div class="fromItem">
          <label for="identity">
            {{ label.identity }}
          </label>
          <input type="text" id="identity" v-model="from.identity">
        </div>
        <div class="fromItem" prop="phoneNum">
          <label for="phone">
            {{ label.phone }}
          </label>
          <input type="text" id="phone" v-model="from.phone">
        </div>
        <div class="iconItem">
          <div class="l">
            <img src="@/icons/returnIcon.png" alt="" @click="$store.commit('changeJoinUsM',false)">
            <span>
              {{ btnIcons.return_ }}
            </span>
          </div>
          <div class="r">
            <img src="@/icons/returnIcon.png" alt="" @click="pushData">
            <span>
              {{ btnIcons.go }}
            </span>
          </div>
        </div>
    </div>
tem <div class="shutWin" v-show="status == 'carryOut'">
      <img src="@/icons/suc.png" alt="" class="s">
      <p class="prompt" v-html="promptTex"></p>
      <span class="t">
        {{ tabO }}
        <span class="ts">
          {{ sec }}
        </span>
        {{ tabT }}
      </span>

    </div>
  </div>
</template>

<script>
  import bgi from '@/assets/formImg.png'
  import { pushJoinUs } from '@/api/api.js'

  export default {
    name: 'joinUs',
    data(){
      return {
        title: '欢迎加入中国电影云基地',
        dire: `打造集中电影云平台研发中心，
               互动空间、
               高科技体验馆、
               电影元素商业街区、
               电影上下游产业办公用房、
               众创空间、
               孵化器、
               邻里关系为一体的产业园区。`,
        bgi: bgi,
        from: {
          name: '',
          business: '',
          contactPerson: '',
          identity: '',
          phone: ''
        },
        label: {
          name: '公司名称',
          business: '主要业务',
          contactPerson: '联系人',
          identity: '联系人身份',
          phone: '联系人电话'
        },
        btnIcons: {
          return_: '返回',
          go: '提交'
        },
        status: 'fillIn',
        promptTex: '您已提交成功！<br>我们将尽快与您联系～',
        tabO: '本窗口将在',
        tabT: '后自动关闭',
        sec: '3s'
      }
    },
    methods: {
      pushData(){
        if(!this.from.name){
          this.$message({
            message: '请正确填写公司名称',
            type: 'error'
          })
          return false
        }

        if(!this.from.business){
          this.$message({
            message: '请正确填写公司主要业务',
            type: 'error'
          })
          return false
        }

        if(!this.from.contactPerson || !this.from.identity){
          this.$message({
            message: '请明确联系人信息',
            type: 'error'
          })
          return false
        }

        //验证电话号码
        let phone = this.from.phone,
            sDefault = /^1[3456789]\d{9}$/.test(phone),
            gDefault = /^0\d{2,3}-?\d{7,8}$/.test(phone)
        console.log(sDefault,gDefault)
        if(!sDefault && !gDefault) {
          this.$message({
            message: '请填写正确手机号码',
            type: 'error'
          })
          return false
        }

        //发送请求
        pushJoinUs({
          'comname': this.from.name,
          'business': this.from.business,
          'contacts': this.from.contactPerson,
          'identity': this.from.identity,
          'telephone': this.from.phone
        })
          .then(data => {
            this.status = 'carryOut'

            let t = setInterval(() => {
              let n = parseInt(this.sec)
              if(n == 0){
                this.$store.commit('changeJoinUsM',false)
                this.sec = 3
                this.status = 'fillIn'
                clearInterval(t)
                return false
              }
              this.sec = --n + 's'
            },1000)

            this.from = {
              name: '',
              business: '',
              contactPerson: '',
              identity: '',
              phone: ''
            }
          })


      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper-joinUs {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    .formM {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 580px;
      margin: 0px auto;
      .tit {
        margin-top: 120px;
        font-size:36px;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:50px;
      }
      .dire {
        margin-top: 16px;
        font-size:14px;
        font-weight:400;
        color:rgba(255,255,255,0.79);
        line-height:28px;
      }
      .fromItem {
        margin-top: 40px;
        padding: 10px 0px;
        width: 400px;
        border-bottom: 1px solid rgba(256,256,256,0.19);
        label {
          font-size:18px;
          font-weight:400;
          color:rgba(255,255,255,0.9);
          line-height:25px;
          width: 100px;
          display: inline-block;
        }
        input {
          width: 280px;
          background-color: transparent!important;
          border: 0px;
          color: #fff;
          font-size: 16px;
          outline: none;
        }
      }
      .iconItem {
        margin-top: 80px;
        width: 400px;
        display: flex;
        justify-content: space-between;
        .l,
        .r {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            cursor: pointer;
          }
          span {
            padding-left: 10px;
            display: inline-block;
            vertical-align: middle;
            color: rgba(256,256,256,1);
          }
        }
        .r {
          img {
            transform: rotate(180deg);
          }
        }
      }
    }
    .shutWin {
      display: flex;
      align-items: center;
      flex-direction: column;
      .s {
        width: 88px;
        margin-top: 277px;
      }
      .prompt {
        width: 200px;
        margin-top: 24px;
        font-weight:400;
        color:rgba(255,255,255,1);
        font-size: 20px;
        text-align: center;
        line-height:34px;
      }
      .t {
        margin-top: 72px;
        font-size:16px;
        font-weight:400;
        color:rgba(255,255,255,0.3);
        line-height:22px;
        .ts {
          color:rgba(255,255,255,0.8);
        }
      }
    }

  }
  @media screen and (max-width: 640px) {
    .wrapper-joinUs {
      .formM {
        width: 90vw;
        .tit {
          margin-top: 100px;
          font-size:30px;
        }
        .dire {
          font-size:13px;
        }
        .fromItem,
        .iconItem {
          width: 90vw;
          margin-top: 22px;
          label {
            font-size: 16px;
          }
          input {
            width: calc(100% - 110px);
          }
          .l,
          .r {
            img {
              width: 34px;
            }
          }
        }
      }
    }
  }
</style>
