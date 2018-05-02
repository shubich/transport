import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from '@/pages/Home';
import Routes from '@/pages/Routes';
import Profile from '@/pages/Profile';
import Login from '@/pages/Login';
import Reg from '@/pages/Reg';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/routes',
      name: 'Routes',
      component: Routes,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresNotAuth: true },
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg,
      meta: { requiresNotAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth);
  const isNotAuthRequired = to.matched.some(record => record.meta.requiresNotAuth);

  if (isAuthRequired && !isAuthenticated) {
    next({ path: '/login' });
  } else if (isNotAuthRequired && isAuthenticated) {
    next({ path: '/' });
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
