// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import classes from './Auth.css';
// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
 // databaseURL:  'aimee-github.firebaseio.com',
  authDomain: 'https://aimee-github.firebaseio.com'
  // ...
};
firebase.initializeApp(config);


// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl:'/sign-in',
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