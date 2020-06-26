
export default {
  theme: {
    dark: false
  },
  connectionCount: 0,
  language: 'en',
  user: {
    data: null,
    email: '',
    name: '',
    token: ''
  },
  metamask: {
    web3: {
      isInjected: false,
      web3Instance: null,
      networkType: null,
      coinbase: null,
      balance: null,
      error: null
    },
    using: false
  },
  ui: {
    snackbar: {
      id: 0,
      show: true,
      list: []
    }
  }
};
