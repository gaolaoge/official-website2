import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    inTheEnd: false
  },
  mutations: {
    changeInTheEnd(state,boolean_){
      state.inTheEnd = boolean_
    }
  }
})
