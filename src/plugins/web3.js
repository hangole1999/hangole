
import vue from 'vue';
import Web3 from 'web3';

const web3Enable = () => new Promise((resolve) => {
  let enabled = false;
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    enabled = true;
  }
  resolve(enabled);
});

const getWeb3 = () => new Promise((resolve, reject) => {
  if (typeof window.web3 !== 'undefined') {
    resolve(new Web3(window.ethereum));
  } else {
    reject(new Error('Unable to connect to Metamask'));
  }
});

const getCoinbase = (web3) => new Promise((resolve, reject) => {
  web3.eth.getCoinbase((err, coinbase) => {
    if (err) {
      reject(new Error('Unable to retrieve coinbase'));
    } else {
      resolve(coinbase);
    }
  });
});

const getNetwork = (web3) => new Promise((resolve, reject) => {
  web3.eth.net.getNetworkType((err, networkType) => {
    if (err) {
      reject(new Error('Unable to retrieve network type'));
    } else {
      resolve(networkType);
    }
  });
});

const getBalance = (web3, coinbase) => new Promise((resolve, reject) => {
  web3.eth.getBalance(coinbase, (err, balance) => {
    if (err) {
      reject(new Error(`Unable to retrieve balance for addres: ${coinbase}`))
    } else {
      resolve(balance);
    }
  });
});

vue.prototype.$web3Enable = web3Enable;
vue.prototype.$getWeb3 = getWeb3;
vue.prototype.$getCoinbase = getCoinbase;
vue.prototype.$getNetwork = getNetwork;
vue.prototype.$getBalance = getBalance;
  
export default {
  web3Enable,
  getWeb3,
  getCoinbase,
  getNetwork,
  getBalance
};
