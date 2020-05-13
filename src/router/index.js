import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
     {
        path: '*',
        redirect: '/home'
      },
     {
        path: '/home',
        name: 'home',
        component: () => import('@/page/Home/index'),
        meta: {
          title: '首页'
        }
      },
      {
         path: '/saleFreedom',
         name: 'saleFreedom',
         component: () => import('@/page/saleFreedom/index'),
         meta: {
           title: '出免费票'
         }
       },
       {
          path: '/unpdatePiao',
          name: 'unpdatePiao',
          component: () => import('@/page/unpdatePiao/index'),
          meta: {
            title: '更新取票机余票'
          }
        },
  ]
})
