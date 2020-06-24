
import firebase from 'firebase';

const provider = new firebase.auth.FacebookAuthProvider();

// provider.addScope('email');
// provider.setCustomParameters({
//   'display': 'popup'
// });

export default provider;
