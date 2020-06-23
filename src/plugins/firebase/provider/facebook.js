
import firebase from 'firebase';

const facebookProvider = new firebase.auth.FacebookAuthProvider();

facebookProvider.addScope('public_profile');
facebookProvider.setCustomParameters({
  'display': 'popup'
});

export default facebookProvider;
