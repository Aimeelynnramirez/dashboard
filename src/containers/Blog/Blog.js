import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
// import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
import icon from '../../assets/goosepic.png';
import classes from './Blog.css';
import Auth from '../Auth/Auth';
//import Footer from '../Footer/Footer';
///asyncNewPost here.
/* const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
}); */

class Blog extends Component {
    state = {
        importPosts: true,
        changeColorBg: true
    }
    componentDidMount(){
       // console.clear();
    }
    githubLink=() =>{
        document.location.replace('https://github.com/Aimeelynnramirez');
    }

    twitterLink=() =>{
        document.location.replace('https://twitter.com/aimeelramirez');
    }

     switchBgModeHandler = () => {
       document.body.style.cssText=`color:#f5f5f5;
       background-color:#222222
     `;
        this.setState(prevState => {
            return {changeColorBg: !prevState.changeColorBg};
        });
        if(!this.state.changeColorBg){
            document.body.style.cssText=`color:#000000;
            background-color:#ffffff
          `;
        }
    }
  
    render () {
        return (
            <div>
                 <Route exact path="/dashboard/home"  component={Blog}/>
                  <div className={classes.Nav} > 
                  <br/>
                  <img alt="a pink logo" src= {icon}/> 
                  <br/>
                  <Link to="/" onClick={this.githubLink}>Github</Link>
                  <br/>
                  <Link to="/" onClick={this.twitterLink}>Twitter</Link>
                  <br/>
                  <p>Turn to
                   <br/>
                  <button
                  onClick ={this.switchBgModeHandler} aria-label="half-moon switch mode to sun in uncode">
                  {this.state.changeColorBg ? '\u263E' : '\u263C'}
                  </button>
                  <br/>
                  Mode.</p>
                  </div> 
                
                <br/>
                <Switch>
{/*                   {this.state.importPosts ? <Route path="/dashboard/new-post" component={AsyncNewPost} /> : null}
 */}                   
                    <Route render={() => (
                <div> 
            {/*    <div className={classes.Blog}>
            <Footer/>
                </div> */}

                    <div className={classes.Blog}>
                           <span>faith, hope and love.</span>
                           <h5>Who am I anyways?</h5>
                           <p>Hey, my name is Aimee.</p>
                            <p>
                            Well, To start I'm passionate about the things I do here.   

                            <br/>
                             </p>
 {/*                       <Link to={'/dashboard/new-post'
                               // hash: '#submit',
                               // search: '?quick-submit=true'
                            }>Comment</Link>   */}
                            <br/>
                            <img src="https://i.imgur.com/CV4ujQq.jpg" alt="a flower collage with a painted oil canvas interperation of flowers to the right."/>  
                            <Auth/> 
                            </div> 
                    </div>)}/>
                </Switch>
    
               
            </div>
            
        );
    }
}

export default Blog;