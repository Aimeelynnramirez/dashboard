import axios from 'axios';

import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
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
   // const getAuth = authData;
   ///console.log(  dispatch(authSuccess(authData)))
   return(dispatch(authSuccess(authData)))
    /*   axios.post(url, authData)
    .then(response => { 
    console.log(  dispatch(authSuccess(authData)))
   return( dispatch(authSuccess(authData)))
    })
      axios.post(url, authData)
            .then(response => { 

                if( getAuth === "" || authData.email === "" || authData.password === "") {
                   // console.log("this is empty")
                  // return axios.delete(url, authData);
                }else if( getAuth === authData){  
                     axios.get("https://aimee-github.firebaseio.com/sign-up.json", authData)
                    .then(response => { 
                    const formElementsArray = [];
                    for ( let key in authData ) {
                        formElementsArray.push( {
                            key:formElementsArray.length,
                            id: key,
                            config: authData[key]
                        } );
                    }
                  console.log("this is data", formElementsArray);
     
                   // console.log("this is get Auth", getAuth)
                    const formFilter = formElementsArray.map(formItem => {

                        let storage =  formItem;
                     
             if(getAuth.email ===  storage){
             }
                               // formElementsArray.push(formItem)
 
                    
                        //console.log("this is form item", deleteIt);
                       
                        for(let i = 1; i < formElementsArray.length; i++){
                            console.log("this is storage for email: ", storage)
                            console.log("this is array ",formElementsArray.length)
                            console.log("this is array ",formElementsArray[i].config.email)

                            if(formElementsArray[i].config.email == storage){
                               // formElementsArray.split(formElementsArray[i]);
                              // axios.delete(url, formElementsArray[i].id)
                                console.log("this is split:", formElementsArray.key)
                            }
                            break;
                        }
                    }) 
                 })
                }
               // return  dispatch(authSuccess(response.data));

            })
            .catch(err => {
                 console.log(err);
                dispatch(authFail(err));
            }); 
             */
        
    };
};