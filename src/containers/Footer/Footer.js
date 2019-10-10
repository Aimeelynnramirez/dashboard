import React, { Component } from 'react';
import classes from './Footer.css';


class Footer extends Component {
    componentDidMount () {
        console.log("this mounted.")
    }
    render(){
        return(
            <div className={classes.Footer}>
                <br/>
                <img src="https://i.imgur.com/BGKMUhk.png" alt="profile"/>
                            <p>
                            "Am I gonna get better?
                            <br/>
                            Did I drink the Kool-Aid?
                            <br/>
                            Am I looking in all the wrong places?
                            <br/>
                            Is  my body just space?" 
                            <hr/>
                            - Meg and Dia Band. "American Spirit". <i>Happysad</i>
                            </p>
                         

            </div> 
            

        )
    }

}
export default Footer
