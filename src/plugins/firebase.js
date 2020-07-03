
import Vue from 'vue';
import firebase from 'firebase';
import firebaseConfig from '@/plugins/firebase/.config';
import provider from '@/plugins/firebase/provider';
import store from '@/store'

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('setUser', {data: user});
});

Vue.prototype.$firebase = firebase;
Vue.prototype.$provider = provider;
