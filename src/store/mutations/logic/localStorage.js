
import func from '@/plugins/function';

export default {
  syncLocalStorage (state, {connectionCount, then}) {
    this.commit('setConnectionCount', {connectionCount, then});
  },

  storeMetamask (state, {then}) {
    func.storageEach(
      (storage) => storage.setItem('connectMetamask', JSON.stringify(state.metamask.using))
    ).then(then);
  }
};
