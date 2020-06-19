
export default {
  setConnectionCount ({commit}, {connectionCount, then, err, final}) {
    try {
      commit('setConnectionCount', {connectionCount, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },
  connect ({commit}, {then, err, final}) {
    try {
      commit('connect', {then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  }
};
