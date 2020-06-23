
import func from '@/plugins/function';

export default {
  async syncLocalStorage ({commit}, {then, err, final}) {
    await func.storageEach(async (storage) => {
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
    }).catch(err).finally(final);
  },

  storeMetamask ({commit}, {then, err, final}) {
    try {
      commit('storeMetamask', {then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
};
