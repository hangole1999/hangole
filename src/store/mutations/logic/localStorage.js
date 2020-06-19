
export default {
  syncLocalStorage (state, {connectionCount, then}) {
    this.commit('setConnectionCount', {connectionCount, then});
  },

  storeConnectionCount (state, {then}) {
    let storage;
    try {
      storage = window['localStorage'];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);

      storage.setItem('connectionCount', state.connectionCount);

      if (typeof then === 'function') {
        then();
      }
    } catch (err) {
      window.console.log(err);
    }
  },

  storeMetamask (state, {then}) {
    let storage;
    try {
      storage = window['localStorage'];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);

      storage.setItem('connectMetamask', JSON.stringify(state.metamask.using));

      if (typeof then === 'function') {
        then();
      }
    } catch (err) {
      window.console.log(err);
    }
  }
};
