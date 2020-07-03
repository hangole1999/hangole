
import Home from '@/views/Home.vue';
import Join from '@/views/Join.vue';
import Login from '@/views/Login.vue';
import Mypage from '@/views/Mypage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      // hideHeader: true,
      // hideFooter: true
    }
  }, {
    path: '/join',
    name: 'Join',
    component: Join,
    meta: {
      unauthRequired: true
    }
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      unauthRequired: true
    }
  }, {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
    meta: {
      authRequired: true
    }
  }
];

export default routes;
