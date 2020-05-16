import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router= new Router({
  routes: [{
      path: '*',
      redirect: '/loging'
    },
    {
      path: '/loging',
      name: 'loging',
      component: () => import('@/page/loging/index'),
      meta: {
        title: '登录'
      }
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
    {
      path: '/orderManage',
      name: 'orderManage',
      component: () => import('@/page/orderManage/index'),
      meta: {
        title: '订单管理'
      }
    },
    {
      path: '/orderManageDetail',
      name: 'orderManageDetail',
      component: () => import('@/page/orderManage/detail'),
    },
    {
      path: '/orderManageDetails',
      name: 'orderManageDetails',
      component: () => import('@/page/orderManage/details'),
    },
    {
      path: '/saleManage',
      name: 'saleManage',
      component: () => import('@/page/saleManage/index'),
      meta: {
        title: '售票管理'
      }
    },
    {
      path: '/saleManageDetail',
      name: 'saleManageDetail',
      component: () => import('@/page/saleManage/detail'),
    },
    {
      path: '/saleManageDetails',
      name: 'saleManageDetails',
      component: () => import('@/page/saleManage/details'),
    },
    {
      path: '/orderExamine',
      name: 'orderExamine',
      component: () => import('@/page/orderExamine/index'),
      meta: {
        title: '订单审核'
      }
    },
    {
      path: '/channelManage',
      name: 'channelManage',
      component: () => import('@/page/channelManage/index'),
      meta: {
        title: '渠道管理'
      }
    },
    {
      path: '/channelManages',
      name: 'channelManages',
      component: () => import('@/page/channelManage/detail'),
    },
    {
      path: '/accountSet',
      name: 'accountSet',
      component: () => import('@/page/accountSet/index'),
      meta: {
        title: '账户设置'
      }
    },
    {
      path: '/accountSetmm',
      name: 'accountSetmm',
      component: () => import('@/page/xgmm/index'),
      }
    ,
    {
      path: '/accountSetzf',
      name: 'accountSetzf',
      component: () => import('@/page/zfmm/index'),
    },
    {
      path: '/accountSetbd',
      name: 'accountSetbd',
      component: () => import('@/page/bd/index'),
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: () => import('@/page/orderDetail/index'),
    },
    {
      path: '/personDetail',
      name: 'personDetail',
      component: () => import('@/page/personDetail/index'),
    }
  ]
})
router.afterEach((to,from,next)=>{

　　　　window,scrollTo(0,0)

　　})
export default router;
