
import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';
import func from './function';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(func.checkAuth);
router.afterEach(Vue.prototype.$Progress.finish);
router.onError(func.onRouterError);

export default router;
