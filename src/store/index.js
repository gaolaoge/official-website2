import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    inTheEnd: false,
    joinUsM: false
  },
  mutations: {
    changeInTheEnd(state,boolean_){
      state.inTheEnd = boolean_
    },
    changeJoinUsM(state,boolean_){
      state.joinUsM = boolean_
    }
  }
})
