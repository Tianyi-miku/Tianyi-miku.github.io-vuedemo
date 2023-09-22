import { BasicLayout, RouteView } from '@/layouts'
import { Router } from './types'

export const example: Router = {
  path: '/',
  name: 'index',
  component: BasicLayout,
  meta: { title: 'menu.home' },
  redirect: '/dashboard',
  children: [
    // dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/analysis',
      component: RouteView,
      meta: { title: 'menu.dashboard.title', icon: 'bx-analyse', keepAlive: true, permission: ['admin'] },
      children: [
        {
          path: 'analysis/:pageNo([1-9]\\d*)?',
          name: 'Analysis',
          component: () => import('@/views/dashboard/Index.vue'),
          meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['admin'], hidden: false }
        },
        {
          path: 'cesuim',
          name: 'Cesuim',
          component: () => import('@/views/Cesuim/index.vue'),
          meta: { title: 'menu.dashboard.cesuim', keepAlive: true, permission: ['admin'] }
        },
        {
          path: 'three',
          name: 'three',
          component: () => import('@/views/Three/index.vue'),
          meta: { title: 'menu.dashboard.three', keepAlive: true, permission: ['admin'] }
        },
      ]
    },

    // forms
    {
      path: '/form',
      name: 'form',
      redirect: '/form/base-form',
      component: RouteView,
      meta: { title: 'menu.form.title', icon: 'bx-analyse', permission: ['admin'] },
      children: [
        {
          path: '/form/base-form',
          name: 'BaseForm',
          component: () => import('@/views/Canvans/index.vue'),
          meta: { title: 'menu.form.basic-form', keepAlive: true }
        },
        {
          path: '/form/step-form',
          name: 'StepForm',
          component: () => import('@/views/Lightningchart/index.vue'),
          meta: { title: 'menu.form.step-form.title', keepAlive: false }
        },
      ]
    },
    {
      path: '/list',
      name: 'list',
      component: RouteView,
      redirect: '/list/table-list',
      meta: { title: 'menu.list.title', icon: 'bx-analyse', permission: ['table', 'admin'] },
      children: [
        {
          path: '/list/table-list/:pageNo([1-9]\\d*)?',
          name: 'TableListWrapper',
          hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
          component: () => import('@/views/DynamicFrom/index.vue'),
          meta: { title: 'menu.list.table-list', keepAlive: true }
        },
        {
          path: '/list/basic-list',
          name: 'BasicList',
          component: () => import('@/views/Process/index.vue'),
          meta: { title: 'menu.list.basic-list', keepAlive: true }
        },
      ]
    },


    // account
    {
      path: '/account',
      component: RouteView,
      redirect: '/account/center',
      name: 'account',
      meta: { title: 'menu.account.title', icon: 'bx-analyse', keepAlive: true },
      children: [
        {
          path: '/account/center',
          name: 'center',
          component: () => import('@/views/account/index.vue'),
          meta: { title: 'menu.account.center', keepAlive: true }
        },
      ]
    },

    // other
    /*
    {
      path: '/other',
      name: 'otherPage',
      component: PageView,
      meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
      redirect: '/other/icon-selector',
      children: [
        {
          path: '/other/icon-selector',
          name: 'TestIconSelect',
          component: () => import('@/views/other/IconSelectorView'),
          meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
        },
        {
          path: '/other/list',
          component: RouteView,
          meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
          redirect: '/other/list/tree-list',
          children: [
            {
              path: '/other/list/tree-list',
              name: 'TreeList',
              component: () => import('@/views/other/TreeList'),
              meta: { title: '树目录表格', keepAlive: true }
            },
            {
              path: '/other/list/edit-table',
              name: 'EditList',
              component: () => import('@/views/other/TableInnerEditList'),
              meta: { title: '内联编辑表格', keepAlive: true }
            },
            {
              path: '/other/list/user-list',
              name: 'UserList',
              component: () => import('@/views/other/UserList'),
              meta: { title: '用户列表', keepAlive: true }
            },
            {
              path: '/other/list/role-list',
              name: 'RoleList',
              component: () => import('@/views/other/RoleList'),
              meta: { title: '角色列表', keepAlive: true }
            },
            {
              path: '/other/list/system-role',
              name: 'SystemRole',
              component: () => import('@/views/role/RoleList'),
              meta: { title: '角色列表2', keepAlive: true }
            },
            {
              path: '/other/list/permission-list',
              name: 'PermissionList',
              component: () => import('@/views/other/PermissionList'),
              meta: { title: '权限列表', keepAlive: true }
            }
          ]
        }
      ]
    }
    */
  ]
}
