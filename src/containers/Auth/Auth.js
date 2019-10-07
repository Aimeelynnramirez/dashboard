import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link} from 'react-router-dom';
import classes from './App.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Info from './Info';
import * as actions from '../actions/index';

class Auth extends Component {
    state = {
        submitted:false,

        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    empty:'',
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'current-password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            } 
        },
        isSignup: true
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }
    
        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value )  && isValid
        }
        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }
    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true,
             
            }
        };
        this.setState( { controls: updatedControls} );
    }
    submitHandler = ( event ) => {
        event.preventDefault();
    /*     if(this.state.controls.email.value === ""){
          alert("email  is empty, try again")
          console.log("email is empty, try again.")
          return null
        }
        if ( this.state.controls.password.value === ""){
          alert(" password is empty, try again")
          console.log("password is empty, try again.")
           return null
        }

  */
 console.log("this is clicked")
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup, this.state.submitted );
    
}
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }
    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        const form = formElementsArray.map(formElement => (    
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );
 if(this.state.submitted){
     return(
         <div className={classes.App}>
        <Route path={'/dashboard'}  component={Auth}/>
         <p>Thanks for sending!</p>
        </div>
     )   
 }
        return (
            <div className={classes.App}>
                <br/>   
                <br/>
                <p>Leave an email:</p>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button>send</Button>
                </form>
              {/*   <Button 
                 clicked={this.switchAuthModeHandler}>{this.state.isSignup ? 'sign-in' : 'sign-up'}</Button> */}
                 <br/>
                 <br/>
                 <Route path="/dashboard/info" component={Info}/>
                  <Link to="/dashboard/info">?</Link>
            </div>
            
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) )
    };
};

export default connect( null, mapDispatchToProps )( Auth );