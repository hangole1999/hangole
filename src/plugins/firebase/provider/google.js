
import firebase from 'firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.addScope('public_profile');
googleProvider.setCustomParameters({
  'display': 'popup'
});

export default googleProvider;
