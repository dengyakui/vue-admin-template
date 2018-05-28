import Vue from 'vue'
import Router from 'vue-router'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  {
    path: '/helloworld',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'HelloWorld',
        component: () => import('@/views/helloworld/index'),
        meta: { title: '测试', icon: 'form' }
      },
      {
        path: 'layout',
        name: 'Layout',
        component: () => import('@/views/helloworld/layout'),
        meta: { title: '布局', icon: 'form' }
      },
      {
        path: 'container',
        name: 'container',
        component: () => import('@/views/helloworld/container'),
        meta: { title: '布局-容器', icon: 'form' }
      },
      {
        path: 'icon',
        name: 'icon',
        component: () => import('@/views/helloworld/icon'),
        meta: { title: '图标', icon: 'form' }
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import('@/views/helloworld/radio'),
        meta: { title: 'radio', icon: 'form' }
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import('@/views/helloworld/checkbox'),
        meta: { title: 'checkbox', icon: 'form' }
      },
      {
        path: 'selector',
        name: 'selector',
        component: () => import('@/views/helloworld/selector'),
        meta: { title: 'selector', icon: 'form' }
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/helloworld/table'),
        meta: { title: 'table', icon: 'form' }
      },
      {
        path: 'cascader',
        name: 'cascader',
        component: () => import('@/views/helloworld/cascader'),
        meta: { title: 'cascader', icon: 'form' }
      },
      {
        path: 'switch',
        name: 'switch',
        component: () => import('@/views/helloworld/switch'),
        meta: { title: 'switch', icon: 'form' }
      },
      {
        path: 'slider',
        name: 'slider',
        component: () => import('@/views/helloworld/slider'),
        meta: { title: 'slider', icon: 'form' }
      },
      {
        path: 'timepicker',
        name: 'timepicker',
        component: () => import('@/views/helloworld/timepicker'),
        meta: { title: 'timepicker', icon: 'form' }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/helloworld/tree'),
        meta: { title: 'tree', icon: 'form' }
      },
      {
        path: 'loading',
        name: 'loading',
        component: () => import('@/views/helloworld/loading'),
        meta: { title: 'loading', icon: 'form' }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/helloworld/message'),
        meta: { title: 'message', icon: 'form' }
      },
      {
        path: 'messagebox',
        name: 'messagebox',
        component: () => import('@/views/helloworld/messagebox'),
        meta: { title: 'messagebox', icon: 'form' }
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/helloworld/menu'),
        meta: { title: 'menu', icon: 'form' }
      },
      {
        path: 'inlineEditTable',
        name: 'inlineEditTable',
        component: () => import('@/views/helloworld/inlineEditTable'),
        meta: { title: 'inlineEditTable', icon: 'form' }
      },
      {
        path: 'complexTable',
        name: 'complexTable',
        component: () => import('@/views/helloworld/complexTable'),
        meta: { title: 'complexTable', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

