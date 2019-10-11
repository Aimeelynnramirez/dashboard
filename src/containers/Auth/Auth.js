// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import classes from './Auth.css';
// Configure Firebase.
const config = {
  apiKey: 'AIzaSyD2iEr5cu3IwPQ3Q_pEmjmZchxvqS0MLPA',
 // databaseURL:  'aimee-github.firebaseio.com',
  authDomain: 'https://aimee-github.firebaseio.com'
  // ...
};
firebase.initializeApp(config);


// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl:'/dashboard/new-post',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ]
};

class Auth extends React.Component {
  render() {
    return (
      <div className={classes.Auth}>
         
        <h1>welcome!</h1>
        <p>sign-in:</p>
        <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        
      </div>
    );
  }
}

export default Auth;