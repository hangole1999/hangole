import Vue from 'vue';
import Router from 'vue-router';

import func from '@/plugins/function';

import Home from '@/views/Home.vue';
import Join from '@/views/Join.vue';
import Login from '@/views/Login.vue';
import Mypage from '@/views/Mypage.vue';

import store from '@/store';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/join',
    name: 'Join',
    component: Join
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
    meta: {
      authRequired: true
    }
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

const requireAuth = (to, from, next) => {
  let authRequired = to.matched.some((routeInfo) => routeInfo.meta.authRequired);

  if (authRequired) {
    if (store.getters.user.token) {
      next();
    } else {
      func.storageEach((storage) => {
        let user = storage.getItem('user');
        user = JSON.parse(user);

        if (user.token) {
          store.state.user.token = user.token;
          store.state.user.id = user.id;
          next();
        } else {
          next('/login');
        }
      }).catch(() => next('/login'));
    }
  } else {
    next();
  }
};

router.beforeEach(requireAuth);

export default router;
