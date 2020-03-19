<template>
  <div class="im-wrapper" @scroll="s">
    <div class="dialogueBase" ref="chat-base"></div>
    <div class="from-item">
      <el-input type="text" v-model="inputValNow" />
      <el-button @click="pushMessage" class="sendBtn">suc</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'im',
    data(){
      return {
        websocket: null,
        inputValNow: '',
        inputValLast: '',
        t: null,
        flagNum: 0,
        flagStateList: {}
      }
    },
    created() {
      this.t = Math.random() * 100000000
      this.websocket = new WebSocket(`ws://192.168.1.95:8080/websocket/${parseInt(this.t)}`)

      this.websocket.onopen = () => {

        // 收到消息
        this.websocket.onmessage = event => {
          if(JSON.parse(event.data)['code'] === 20000)
            return false
          let t = document.createElement('DIV'),
              i = document.createElement('DIV'),
              ii = document.createElement('IMG'),
              tc = document.createElement('DIV'),
              e = document.createTextNode(JSON.parse(event.data)['data']['msg'])
          t.classList.add('chat-message__service')
          tc.classList.add('chatContent')
          i.classList.add('ic')
          ii.classList.add('iic')
          ii.src = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=134805739,3149757963&fm=26&gp=0.jpg'
          i.appendChild(ii)
          tc.appendChild(e)
          t.appendChild(i)
          t.appendChild(tc)
          this.$refs['chat-base'].appendChild(t)
          console.log('用户收到信息',event)
        }

        // 监听报错
        this.websocket.onerror = event => {
          console.log('errror',enent)
        }
      }
    },
    methods: {
      pushMessage(){
        // 判断是否为空
        if(!this.inputValNow){
          this.$message({
            message: '内容为空，无法发送',
            type: 'warning'
          })
          return false
        }
        this.inputValLast = this.inputValNow
        this.inputValNow = ''
        // 发送消息
        this.websocket.send(JSON.stringify(
          {
            type: 1,
            fromUser: parseInt(this.t) + '',
            toUser: "kefu",
            msg: this.inputValLast,
            flag: ++ this.flagNum
          }))
        // 消息flag推进状态管理数组
        this.flagStateList[this.flagNum] = false
        // 当前消息插入消息展示
        let t = document.createElement('DIV'),
            tc = document.createElement('DIV'),
            e = document.createTextNode(this.inputValLast)
        t.classList.add('chat-message__me')
        tc.classList.add('chatContent')
        tc.appendChild(e)
        t.appendChild(tc)
        this.$refs['chat-base'].appendChild(t)
      },
      // 滚动
      s(){
        console.log('s')
      }
    }
  }
</script>

<style lang="less" scoped>
  .im-wrapper {
    position: relative;
    width: 380px;
    height: 600px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    background-color: rgba(256,256,256,0.9);
    border-radius: 5px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    display: none;
    .dialogueBase {
      width: 100%;
      height: 94%;
      background-color: rgba(256,256,256,0.72);
      margin-bottom: 8px;
      border-radius: 3px;
      padding: 8px;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 8px;
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(102, 89, 89, 0.2);
        background: rgba(158,151,151,0.6);
      }
      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(138, 129, 129, 0.2);
        border-radius: 10px;
        background: rgba(226, 221, 221, 0.4);
      }
      /deep/.chat-message__me {
        display: flex;
        justify-content: flex-end;
        padding: 2px 0px;
        .chatContent {
          display: inline-block;
          background-color: #4958f7;
          color: #fefdff;
          font-size: 15px;
          padding: 10px 22px 10px 12px;
          border-radius: 10px 2px 10px 10px;
          max-width: 100%;
          line-height: 26px;
        }
      }
      /deep/.chat-message__service {
        display: flex;
        justify-content: flex-start;
        padding: 2px 0px;
        .ic {
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8px;
          width: 40px;
          height: 40px;
          box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.27);
          .iic {
            width: 40px;
          }
        }
        .chatContent {
          display: inline-block;
          background-color: #f1f3f5;
          color: #424242;
          font-size: 15px;
          padding: 10px 22px 10px 12px;
          border-radius: 2px 10px 10px 10px;
          max-width: 100%;
          line-height: 26px;
          box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.07);
        }
      }
    }
    .from-item {
      display: flex;
      width: 100%;
      .sendBtn {
        margin-left: 8px;
      }
    }
  }
</style>
