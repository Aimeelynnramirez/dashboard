import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink} from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Info from './Info';
import * as actions from '../actions/index';
import classes from './Admin.css';

class Admin extends Component {
    state = {
        //submitted:false,

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
                touched: false,
                submitted:false
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
                touched: false,
                submit: false,

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
                submitted:true,
             
            }
        };
        this.setState( { controls: updatedControls} );
    }
    submitHandler = ( event ) => {
        event.preventDefault();
        if(this.state.controls.email.value === ""){
          alert("email  is empty, try again")
          console.log("email is empty, try again.")
          return null
        }
        if ( this.state.controls.password.value === ""){
          alert(" password is empty, try again")
          console.log("password is empty, try again.")
           return null
        }

        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
        this.setState({submit : true})
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
                submit={formElement.config.submit}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );
if(this.state.submit){
    return(
           <div className={classes.Admin}> 
             <Route path="/dashboard/info" component={Info}/>
             <NavLink to={{pathname: '/dashboard'}}  onClick={()=> {window.location.reload()} }>Back</NavLink> 
                  <br/>
                  <span>
                  THANKS! 
                 </span>
            </div>
    )
}
        return (
            <div className={classes.Admin}>
                <br/>   
                <br/>
                <p>Admin Login:</p>
                <form onSubmit={this.submitHandler} >
                    {form}
                    <Button>send</Button>
                </form>
              {/*   <Button 
                 clicked={this.switchAuthModeHandler}>{this.state.isSignup ? 'sign-in' : 'sign-up'}</Button> */}
                 <br/>
                 <br/>
    
            </div>
            
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) )
    };
};

export default connect( null, mapDispatchToProps )( Admin );