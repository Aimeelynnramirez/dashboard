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
        userId: userId,
        email: 'aimeelynnramirez@gmail.com',
        password: password,
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
        dispatch(authStart() || authFail());
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
            .then((response, err) => {
                if( getAuth === "" || authData.email === "" || authData.password === "") {
                   // console.log("this is empty")
                    return axios.delete(url, authData);
                    //return  !dispatch(authSuccess(response.data));
                }else if( getAuth === authData){  
                    axios.get(url)
                    .then(response => {
                    //console.log("this is data", response.data);
                    const formElementsArray = [];
                    for ( let key in response.data ) {
                        formElementsArray.push( {
                            id: key,
                            config: response.data[key]
                        } );
                    }
                   // console.log("this is get Auth", getAuth)
                /*     const formFilter = formElementsArray.filter(formItem => {
                        const deleteIt = formItem.config.email;
                        return deleteIt;
                       // console.log("this is form item", formItem.config.email);
                    })  */
                    const form = formElementsArray.map(formElement => {
                       let storage = formElement.config.email;
                     return storage
                    })
                    // i need to compare what is in storage to what had been inputted.
                       // console.log("this is storage",form);
                        for(let i = 0; i < form.length; i++){
                            //const callIt= form.indexOf();
                            const sliceIt = form.splice(i, 1);
                            //console.log("this is each i :", sliceIt);
                            if(sliceIt === form[i]){
                                // try to delete
                               console.log("this to remove it",form[i])
                               console.log("this is array:", form);
                             
                                return delete form[i];
                            }
                          /*   axios.delete(url).then(response =>{
                                console.log(this.formFliter);
                            }); */
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
            
        
    };
};