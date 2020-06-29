
import func from '@/plugins/function';

export default {
  async syncLocalStorage ({commit, getters}, {then, err, final}) {
    await func.storageEach(async (storage) => {
      let theme = storage.getItem('theme');
      let language = storage.getItem('language');
      let connectionCount = storage.getItem('connectionCount');
      let connectMetamask = storage.getItem('connectMetamask');
      let dark = true;

      try {
        theme = JSON.parse(theme);
        if (typeof theme !== 'object') {
          dark = !!theme.dark;
        }
      } catch (err_) {
        theme = getters.theme;
      }
      try {
        language = language || 'en';
      } catch (err_) {
        language = 'en';
      }
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

      commit('syncLocalStorage', {dark: dark, language, connectionCount, then});
    }).catch(err).finally(final);
  }
};
