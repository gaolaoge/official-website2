import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    inTheEnd: false,
    joinUsM: false,    //录入信息模块展示
    articleM: false,   //咨询详情模块展示
    videoM: false     //视频弹窗
  },
  mutations: {
    changeInTheEnd(state,boolean_){
      state.inTheEnd = boolean_
    },
    changeJoinUsM(state,boolean_){
      state.joinUsM = boolean_
    },
    changeArticleM(state,boolean_){
      state.articleM = boolean_
    },
    changeVideoM(state,boolean_){
      state.videoM = boolean_
    }
  }
})
