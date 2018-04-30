import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Reg from '@/pages/Reg';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg,
    },
  ],
});
