
export default {
  syncLocalStorage (state, {dark, language, connectionCount, then}) {
    this.commit('setTheme', {dark});
    this.commit('setLanguage', {language});
    this.commit('setConnectionCount', {connectionCount, then});
  }
};
