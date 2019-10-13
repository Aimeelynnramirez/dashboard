import axios from 'axios';

import * as actionTypes from './actionTypes';
import firebase from 'firebase';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, email, password) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup, token, userId) => {
    return dispatch => {
        dispatch(authStart());
      
        const authData = {
            email: email,
            password: password,
            auth: true
        };
        let url = 'https://aimee-github.firebaseio.com/users.json';
        if (!isSignup) {
            url = 'https://aimee-github.firebaseio.com/users.json';
        }
    axios.post(url, authData)
     .then(response => {
      // dispatch(authSuccess(response.data));
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            let errorMessage = error.message;
            alert(errorMessage)
            });
             firebase.auth().onAuthStateChanged(function (auth) {
                  if (auth) {    
                    axios.get('https://aimee-github.firebaseio.com/users.json')
                    .then(response => {
                    const formElementsArray = [];
                    for ( let key in response.data ) {
                        formElementsArray.push( {
                            id: key,
                            config: response.data[key],
                            uid:auth.uid
                        } );
                    }
   
                   const formMatch = formElementsArray.map(selectedEmail=> {
                    let storage = selectedEmail.config.email;
                    return storage;

                 })
              

                 const formMatchId = formElementsArray.map(selectedId=> {
                    let storage = selectedId.id;
                    return storage;

                 })
               
                 const formMatchPass = formElementsArray.map(selectedPass=> {
                    let storage2 = selectedPass.config.password;
                    return storage2;

                 })

                const wrapper = () => {
                  
                        const copyDelete = [];

                        for(let a = 0;  a < formMatch.length; a++){
                          copyDelete.push(formMatch[a]);


                          } 
                          const copyDeletePass = [];

                          for(let j = 0;  j < formMatch.length; j++){
                            copyDeletePass.push(formMatchPass[j]);

                            } 
 
                                for(let i = 0;  i < formMatch.length; i++){

                                    let formBool =  formMatch[formMatch.length-1] !== copyDelete[i-1];
                                    let formBoolPass =  formMatchPass[formMatchPass.length-1] !== copyDeletePass[i-1];

                                   const getOnce = () => {

                                    if(!formBool && !formBoolPass && i > 0){
                                        alert("Welcome Back!");
                                        let userArray = `https://aimee-github.firebaseio.com/users/${formMatchId[formMatch.length-1]}.json`;
                                        axios.delete(userArray); 
                                        dispatch(authSuccess(response.data));
                                    }
                                    if(formBool | formBoolPass && i > 0){
                                        let userArray = `https://aimee-github.firebaseio.com/users/${formMatchId[formMatch.length-1]}.json`;
                                        axios.delete(userArray); 
                                        return null;
                                    }
                                   }
                                if( formMatch[i] === "" || formMatchPass[i] === "") {
                                    alert("this is empty!");
                                    let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i]}.json`;
                                    axios.delete(userArray); 
                                    console.log(userArray);
                                    return null;
                                }
                               
                                getOnce()
                            }
                       }
                        wrapper()
                    })
                }})
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
                return null;
            });
            
        
    };
};