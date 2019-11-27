
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import NewPost from '../Blog/NewPost/NewPost.js';
import classes from './Auth.css';
import REACT_APP_API_KEY from '../../components/config-keys.js';


const API_KEY = REACT_APP_API_KEY;

const config = {
  apiKey: API_KEY,
  databaseURL: 'https://aimee-github.firebaseio.com',
  authDomain: 'aimee-github.firebaseapp.com'

};
firebase.initializeApp(config);

class Auth extends React.Component {
    state = {
    isSignedIn: false 
  };

  uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl:'/dashboard/new-post',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,

      //firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
 
  
    callbacks: {
      // Avoid redirects after sign-in.
     /// signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

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
      <div className={classes.Auth}>
        <h1>Comment</h1>
        <p>Welcome {firebase.auth().currentUser.displayName || firebase.auth().currentUser.email || firebase.auth().currentUser.phoneNumber }! <br/> You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        <NewPost/>
       
      </div>
    );
  }
}

export default Auth;