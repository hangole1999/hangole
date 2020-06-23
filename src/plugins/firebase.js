
import Vue from 'vue';
import firebase from 'firebase';
import firebaseConfig from '@/plugins/firebase/.config';
import provider from '@/plugins/firebase/provider';

firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;
Vue.prototype.$provider = provider;
