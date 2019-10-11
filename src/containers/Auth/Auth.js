// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import NewPost from '../Blog/NewPost/NewPost.js';
import './Auth.css';
import REACT_APP_API_KEY from '../../components/config_keys';
// Configure Firebase.

const API_KEY = REACT_APP_API_KEY;
const config = {
  apiKey: API_KEY,
  
 // databaseURL:  'aimee-github.firebaseio.com',
  authDomain: 'aimee-github.firebaseio.com'
  // ...
};
firebase.initializeApp(config);


/* // Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl:'/sign-in',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ]
}; */

class Auth extends React.Component {
     // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl:'/dashboard/new-post',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
 
  
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    console.clear();
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>Dashboard</h1>
          <p>sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>Comment</h1>
        <NewPost/>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

export default Auth;