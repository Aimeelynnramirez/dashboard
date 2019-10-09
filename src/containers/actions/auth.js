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
                  if( getAuth === authData){  
                    dispatch(authSuccess(response.data));
                    axios.get(url)
                    .then(response => {

                    const formElementsArray = [];
                    for ( let key in response.data ) {
                        formElementsArray.push( {
                            id: key,
                            config: response.data[key]
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
     
                            /* formMatch.forEach((item, i) => { */
                                for(let i = 0;  i < formMatch.length; i++){
                                //counterIndex += 1;
                                //let maxLength = Number(counterIndex);
                               // console.log("This is number of indexes signed:", maxLength);
                                const state = [];
                               //console.log("# data:")
                                for (let obj in copyDelete) {
                                   //console.log(obj)
                                    state.push(obj)
                                }
                                    let formBool =  formMatch[formMatch.length-1] !== copyDelete[i-1];

                                   const getOnce = () => {
                        
                                    if(!formBool && i > 0){
                                        alert("looks like you already send this email.")
                                        let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i-1]}.json`;
                                        axios.delete(userArray); 
                                    }
                                   }
                                   getOnce()

                                if( formMatch[i] === "" || formMatchPass[i] === "") {
                                    alert("this is empty!")
                                    let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i]}.json`;
                                    axios.delete(userArray); 
                                    console.log(userArray);
                                    return null;
                                }
                            }
                       }
                        wrapper()
                    })
                }    
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
            
        
    };
};
