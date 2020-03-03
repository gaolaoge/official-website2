import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/helloWorld')
    },
    {
      path: '/movieCloudPlatform',
      name: 'movieCloudPlatform',
      component: () => import('@/components/movieCloudPlatform')
    },
    {
      path: '/movieCloudBase',
      name: 'movieCloudBase',
      component: () => import('@/components/movieCloudBase')
    }
  ]
})
