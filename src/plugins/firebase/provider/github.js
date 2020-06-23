
import firebase from 'firebase';

const githubProvider = new firebase.auth.GithubAuthProvider();

githubProvider.addScope('public_profile');
githubProvider.setCustomParameters({
  'display': 'popup'
});

export default githubProvider;
