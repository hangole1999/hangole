
import web3 from '@/plugins/web3';
import func from '@/plugins/function';

export default {
  // web3
  async connectMetamask ({commit}, {then, err, final}) {
    try {
      if (await web3.web3Enable()) {
        let web3Instance = await web3.getWeb3()
        let coinbase = await web3.getCoinbase(web3Instance);
        let balance = await web3.getBalance(web3Instance, coinbase);
        let networkType = await web3.getNetwork(web3Instance);

        commit('syncWeb3', {web3Instance, then});
        commit('syncCoinbase', {coinbase});
        commit('syncBalance', {balance});
        commit('syncNetworkType', {networkType});
      } else {
        func.execFunc(err);
      }
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },

  storeMetamask ({commit}, {then, err, final}) {
    try {
      commit('storeMetamask', {then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
}
  