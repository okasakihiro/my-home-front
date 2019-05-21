import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/components/Main';
import Crystal from '@/components/Crystal';
import NotFoundPage from '@/components/NotFoundPage';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: '带我超巴？',
      component: Main
    },
    {
      path: '/index',
      redictor: "/"
    },
    {
      path: '/crystal',
      name: '带我超巴？',
      component: Crystal
    },
    {
      path: '*',
      name: '不见了诶',
      component: NotFoundPage
    }
  ]
})
