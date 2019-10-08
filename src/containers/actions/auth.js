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
                  if( getAuth === authData){  
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
                   //console.log("this is data array: ", formElementsArray)
                   // console.log("this is get Auth", getAuth)
                   const formMatch = formElementsArray.map(selectedEmail=> {
                    let storage = selectedEmail.config.email;
                    return storage;

                 })
                 const formMatchId = formElementsArray.map(selectedId=> {
                    let storage = selectedId.id;
                    return storage;

                 })
               
                 const formMatchPass = formElementsArray.map(selectedPass=> {
                    let storage = selectedPass.config.password;
                    return storage;

                 })
                //console.log(formMatch);
                     const number = Object.keys(formMatch)


                    //console.log("form map: " , [...formMatch]
                        const copyDelete = [];
                        //const copy = [];
                       for(let i = 0;  i < formMatch.length; i++){
                     //  console.log("this is number:", parseInt(number[i]))
                            copyDelete.push(formMatch[i]);
                          } 
                            formMatch.forEach((item, i) => {
                                let length = Number(number[i]);
                                //console.log(length)
                                //let newI = i + 1;
                                let j = length - 1;
                                let a = length - 2;
                             // console.log(newI)
                             if(i > 0){
                                if(item === copyDelete[j] || item === copyDelete[0] || item === copyDelete[a]){
                                   //console.log("this", copyDelete[length-1])
                                   // console.log("this", item)
                                    alert("stop! you already send this email.")
                                    let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i]}.json`;
                                    axios.delete(userArray); 
                                    console.log(userArray);
                                }
                                  //console.log("this is item ", item)
                                  //copy.push(item);
                                  //console.log("this is copy",[copy]
                                  if( i > 3)  {
                                      alert("sorry database is full")
                                      return null;
                                  }                   
                                }
                                if( formMatch[i] === "" || formMatchPass[i] === "") {
                                    alert("this is empty!")
                                    let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i]}.json`;
                                    axios.delete(userArray); 
                                    console.log(userArray);
                                    return null;
                                }
  
                        })
                        
                        

                
                    
  

                       
   
        
                             /*  let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i]}.json`;
                              axios.delete(userArray);
                              console.log("this is form array: ", userArray)
                              break; */
           /*                  if(storage == formMatch[i] && formElementsArray.length > 1 ){
                                console.log("this is i: ", i);
                                console.log("this is storage i: ", storage);
                                console.log("this is  formMatch i: ", formMatch[i]);
        
                                    let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i]}.json`;
                                    axios.delete(userArray);
                                    //userArray.remove();
                                    console.log("this is form array: ", userArray)
                                 */
                             //return find;
                        
                        
                    
    
                 
//console.log("this is true or false", form);
               
                    })
                }
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
            
        
    };
};
