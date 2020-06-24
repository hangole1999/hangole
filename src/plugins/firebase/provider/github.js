
import firebase from 'firebase';

const provider = new firebase.auth.GithubAuthProvider();

provider.addScope('public_profile');
provider.setCustomParameters({
  'display': 'popup'
});

export default provider;
