import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/nav',
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('./views/nav.vue')
    },
    {
      path: '/component-communication',
      name: 'component-communication',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/component-communication.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('./views/checkbox.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/form.vue')
    },
    {
      path: '/extend&mount',
      name: 'extend&mount',
      component: () => import('./views/extend&mount.vue')
    },
    {
      path: '/dynamic_render',
      name: 'dynamic_render',
      component: () => import('./views/dynamic-render.vue')
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('./views/alert.vue')
    },
    {
      path: '/render-demo',
      name: 'render-demo',
      component: () => import('./views/demo.vue')
    },
    {
      path: '/table-render',
      name: 'table-render',
      component: () => import('./views/table-render.vue')
    },
    {
      path: '/table-slot',
      name: 'table-slot',
      component: () => import('./views/table-slot.vue')
    },
    {
      path: '/table-render2',
      name: 'table-render2',
      component: () => import('./views/table-render2.vue')
    },
    {
      path: '/table-render3',
      name: 'table-render3',
      component: () => import('./views/table-render3.vue')
    },{
      path: '/dynamic-component',
      name: 'dynamic-component',
      component: () => import('./views/dynamic-component.vue')
    }
  ]
})
