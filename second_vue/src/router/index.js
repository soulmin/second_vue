import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import course from '@/components/course'
import community from '@/components/community'
import news from '@/components/news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve=>require(['../components/Home.vue'],resolve)
    },
     {
      path: '/course.html',
      name: '课程',
      component: resolve=>require(['../components/course.vue'],resolve)
    },
     {
      path: '/community.html',
      name: '社区',
      component: resolve=>require(['../components/community.vue'],resolve)
    },
     {
      path: '/news.html',
      name: '资讯',
      component: resolve=>require(['../components/news.vue'],resolve)
    },
    {
      path:'*',redirect:'/'
    }
  ]
})
