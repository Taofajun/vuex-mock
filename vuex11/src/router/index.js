import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mock from '@/components/mock1'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/mock',
      name:'mock',
      component:Mock
    }
  ]
})
