
export default {
  async syncLocalStorage ({commit}, {then, err, final}) {
    let storage;
    try {
      storage = window['localStorage'];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);

      let connectionCount = storage.getItem('connectionCount');
      let connectMetamask = storage.getItem('connectMetamask');

      try {
        connectionCount = parseInt(connectionCount) || 0;
      } catch (err_) {
        connectionCount = 0;
      }
      try {
        connectMetamask = connectMetamask === 'true';
      } catch (err_) {
        connectMetamask = false;
      }
      if (connectMetamask) {
        await this.dispatch('connectMetamask', {});
      }

      commit('syncLocalStorage', {connectionCount, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },

  storeConnectionCount ({commit}, {then, err, final}) {
    try {
      commit('storeConnectionCount', {then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },

  storeMetamask ({commit}, {then, err, final}) {
    try {
      commit('storeMetamask', {then});
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
