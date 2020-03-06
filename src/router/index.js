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
    },
    {
      path: '/filmAndTelevisionAssociation',
      name: 'filmAndTelevisionAssociation',
      component: () => import('@/components/filmAndTelevisionAssociation')
    },
    {
      path: '/companyProfile',
      name: 'companyProfile',
      component: () => import('@/components/companyProfile')
    },
    {
      path: '/industryInformation',
      name: 'industryInformation',
      component: () => import('@/components/industryInformation')
    },
    {
      path: 'three',
      name: 'three',
      component: () => import('@/components/three')
    }
  ]
})
