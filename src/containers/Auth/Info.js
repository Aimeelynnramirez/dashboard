import React, { Component } from 'react';
import classes from './Info.css';
import { NavLink } from 'react-router-dom';


class Info extends Component {
    state = {
    
        submitted: false
    }

    componentDidMount () {
     // this makes sure that it goes to the right place.
    // this.props.history.push('/Info');
        // validated props.
       //console.log(this.props);  
    }
    getMoreInfo = ()=>{
         this.setState({submitted:true})
    }
   
    render () {
        if (this.state.submitted) {
        return(
        <div>
        <NavLink  to={{pathname: '/dashboard'}}>hide</NavLink>
        <br/>
        <div className={classes.Info}>
            <br/>
            <p>I'm a basic bee. Enough about me.</p> 
            <p>Leave me a comment or an email. I'll try to get back to you! 
            <br/>
            <br/>
             Cheers!</p> 
         </div>
         </div>
                )
             }
        return (
            <div>
        <NavLink  to={{pathname: '/dashboard'}}>hide</NavLink>
        <br/>
            <div className={classes.Info}>
                 <p>My name  is Aimee. <br/>I run on coffee. I like to meditate. I enjoy the walks on the beach and my pumpkin spiced lattes. </p> 
                <button onClick={()=> { this.getMoreInfo()}}>More.</button>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Info;