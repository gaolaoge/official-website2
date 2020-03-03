// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullpage from 'vue-fullpage.js'
import store from './store'
// import './assets/font.less'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueFullpage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
