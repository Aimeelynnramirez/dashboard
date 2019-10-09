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


                const wrapper = (counterIndex) => {
                    // const number = Object.keys(formMatch)
                     counterIndex = 0;

                    //console.log("form map: " , [...formMatch]
                        const copyDelete = [];
                        //const copy = [];
                       for(let a = 0;  a < formMatch.length; a++){
                     //  console.log("this is number:", parseInt(number[i]))
                            copyDelete.push(formMatch[a]);
                          } 

                            /* formMatch.forEach((item, i) => { */
                                for(let i = 0;  i < formMatch.length; i++){
                                counterIndex += 1;
                               // console.log("wrapper: ", counterIndex)
                                let maxLength = Number(counterIndex);
                                console.log("This is number of indexes signed:", maxLength);
                               // let length = Number(number[i]);
                                //let lengthMax = Number(number[i]);
                               // console.log("get the length:", formMatch.length);
                                //console.log("this is i:", i);  
                                //length -= 1;
                              //console.log("this is length", length)
                                //lengthMax -= 2;
                               // console.log("this is 2 array find:", lengthMax);
                                //let j = length - 1;
                                //let a = length - 2;
                              //console.log("this is j", j)
                              //console.log("this is a", a)
                               // console.log("this is copy delete:",copyDelete[i-1])
                                //console.log("this is copy delete:", formMatch[i])
                            const state = [];
                            console.log("# data:")
                               //console.log("this copy delete", copyDelete)
                                for (let obj in copyDelete) {
                                   // let i = Object.keys(copyDelete).indexOf(obj);    
                                   console.log(obj)
                                    state.push(obj)
                                }
                               // console.log("this length", copyDelete[i-1])
                               //console.log("this form match length", formMatch[formMatch.length-1])
             
                                    let formBool =  formMatch[formMatch.length-1] !== copyDelete[i-1];
                                   // let formBoolBack =  formMatch[i-2] !== copyDelete[i];
                                    //let formBoolBackMore =  formMatch[i-3] !== copyDelete[i];
                                    //let formBoolBackMoreFirst =  formMatch[i-4] !== copyDelete[i];

                                   const getOnce = () => {
                                   // let counter = 0;
                                   // let callCounter = counter += 1;
                                   // console.log(formBool)
                                    if(!formBool  && i > 0){
                                        alert("stop! you already send this email.")
                                        let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i-1]}.json`;
                                        axios.delete(userArray); 
                                       // console.log(userArray);
                                       //console.log("this is an error counter:" , callCounter)
                                    }
                                   }
                                   getOnce()
                                 
                                  //console.log("this is item ", item)
                                  //copy.push(item);
                                  //console.log("this is copy",[copy]
                               /*    if( i > 3)  {
                                      alert("sorry database is full")
                                      return null;
                                  }    */                
  
                                if( formMatch[i] === "" || formMatchPass[i] === "") {
                                    alert("this is empty!")
                                    let userArray = `https://aimee-github.firebaseio.com/sign-up/${formMatchId[i]}.json`;
                                    axios.delete(userArray); 
                                    console.log(userArray);
                                    return null;
                                }
                            }
                        
                        //)
                        //return dispatch(authSuccess(authData));
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
