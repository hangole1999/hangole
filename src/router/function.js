
import Vue from 'vue';

import store from '@/store';

const waitFirebase = () => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const timer = setInterval(() => {
      if (store.state.user.loaded) {
        clearInterval(timer);
        resolve();
      } else if (count++ > 500) {
        clearInterval(timer);
        reject(new Error('[TIMEOUT] Please check the internet network connection.'));
      }
    }, 10);
  })
};

const connectLogging = (to) => {
  const { uid, email } = store.state.user.data;
  window.console.log('connectLogging', to, uid, email);
  // Vue.prototype.$firebase.firestore().collection('pageLogs').add({
  //   uid,
  //   email,
  //   to: to.path,
  //   createdAt: new Date()
  // }).catch((error) => console.log(error.message));
};

const isLevelApproved = (level) => {
  let result = true;

  if (store.state.user.data) {
    const msg = [
      'Only level 0 or higher can enter',
      'Only level 1 or higher can enter',
      'Only level 2 or higher can enter'
    ];

    if (typeof level === 'number' && level >= 0 && level < msg.length) {
      if (level > 0 && store.state.user.claims.level < level) {
        console.error(`[PERMISSION] ${msg[level]}`);
        result = false;
      }
    } else {
      console.error('[PERMISSION] There\'s something error');
      result = false;
    }
  } else {
    console.error('[LOGIN_REQUIRED] Require login');
    result = false;
  }

  return result;
};

const checkAuth = (to, from, next) => {
  Vue.prototype.$Progress.start();

  let authRequired = to.matched.some((routeInfo) => routeInfo.meta.authRequired);
  let unauthRequired = to.matched.some((routeInfo) => routeInfo.meta.unauthRequired);

  if (authRequired) {
    waitFirebase().then(() => {
      let levels = to.matched.map((routeInfo) => routeInfo.meta.level || 0);
      let level = Math.max(levels) || 0;

      if (isLevelApproved(level)) {
        connectLogging(to);
        next();
      } else {
        next('/login');
      }
    }).catch((error) => {
      console.error(error);
      next('/');
    });
  } else if (unauthRequired && store.state.user.data) {
    console.log('unauthRequired', unauthRequired);
    console.log('user.data', store.state.user.data);
    console.error('[UNAUTH_REQUIRED] Require logout');
    next('/');
  } else {
    next();
  }
};

const onRouterError = (error) => {
  Vue.prototype.$Progress.finish();
  console.error(error);
};

export default {
  connectLogging,
  isLevelApproved,
  waitFirebase,
  checkAuth,
  onRouterError
};
