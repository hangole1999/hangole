
export default {
  theme: {
    dark: true
  },
  connectionCount: 0,
  language: 'en',
  user: {
    data: null,
    email: '',
    name: '',
    token: '',
    claims: null,
    loaded: false
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
    drawer: false,
    snackbar: {
      id: 0,
      show: true,
      list: []
    }
  }
};
