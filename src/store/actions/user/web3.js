
import web3 from '@/plugins/web3';

export default {
  // web3
  async connectMetamask ({commit}, {then, err, final}) {
    try {
      if (await web3.web3Enable()) {
        let web3Instance = await web3.getWeb3()
        commit('syncWeb3', {web3Instance, then});

        web3.getCoinbase(web3Instance).then((coinbase) => {
          commit('syncCoinbase', {coinbase});

          web3.getBalance(web3Instance, coinbase).then((balance) => commit('syncBalance', {balance}));
        });
        
        // web3.getNetwork(web3Instance).then((networkID) => commit('syncNetworkID', {networkID}));
      } else {
        if (typeof err === 'function') {
          err();
        }
      }
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }

    if (typeof final === 'function') {
      final();
    }
  }
}
  