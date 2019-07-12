//Vue core
import Vue from 'vue';
//Vue router
import Router from 'vue-router';
//person components
import Main from '@/components/Main';
import Crystal from '@/components/tools/Crystal';
import NotFoundPage from '@/components/NotFoundPage';
import Resume from '@/components/resume/Resume';

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
      name: '带我超巴？',
      redictor: "/"
    },
    {
      path: '/crystal',
      name: '井井计算器',
      component: Crystal
    },
    {
      path: '/blog',
      name: '混沌',
      redictor: "https://blog.granbluefantasy.app"
    },
    {
      path: '/resume',
      name: '简历',
      component: Resume
    },
    {
      path: '*',
      name: '不见了诶',
      component: NotFoundPage
    }
  ]
})
