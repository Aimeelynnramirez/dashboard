import axios from 'axios';

import * as actionTypes from './actionTypes';

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
            returnSecureToken: true
        };
        let url = 'https://aimee-github.firebaseio.com/sign-up.json';
        if (!isSignup) {
            url = 'https://aimee-github.firebaseio.com/sign-up.json';
        }
    const getAuth = authData;
       axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data));
                if( getAuth === "" || authData.email === "" || authData.password === "") {
                    return axios.delete(url, authData);
                }else if( getAuth === authData){  
                    dispatch(authSuccess(response.data));
                    axios.get(url)
                    .then(response => {
                   // console.log("this is data", response.data);
                    const formElementsArray = [];
                    for ( let key in response.data ) {
                        formElementsArray.push( {
                            id: key,
                            config: response.data[key]
                        } );
                    }
          console.log("this is data array: ", formElementsArray)
                   // console.log("this is get Auth", getAuth)
                   const formMatch = formElementsArray.map(selectedEmail=> {
                    let storage = selectedEmail.config.email;

                    return storage;

                 })
               
                console.log(...formMatch);

                    const form = formElementsArray.map(formElement => {
                       let storage = formElement.config.email;
                       //console.log(matchIt);
                       
                       for(let i = 0; i < formMatch.length;i++){
                     //console.log("i: " , formMatch[i])
                       console.log("this is match", storage)
                       console.log("this is match", formMatch[i])  
                      const find = storage != formMatch[i]
                      console.log("this is find:", find);
                      if( storage === formMatch[i] && i > 0) {
                        console.log("these are email array :", find)
                        formMatch.pop();
                        console.log(formMatch)
                        return;
                    }     
                    }
                    
               
                    })
       
   
                    })
                }
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
            
        
    };
};
