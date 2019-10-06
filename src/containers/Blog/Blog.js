import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
import icon from '../../assets/goosepic.png';
import classes from './Blog.css';
import Auth from '../Auth/Auth';
///asyncNewPost here.
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        importPosts: true
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
    render () {
        return (
            <div>
                  <div className={classes.Nav}> 
                  <br/>
                  <img alt="a pink logo" src= {icon}/> 
                  <br/>
                  <Link to="/" onClick={this.githubLink}>Github</Link>
                  <br/>
                  <Link to="/" onClick={this.twitterLink}>Twitter</Link>
                  </div> 
                  <br/>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {this.state.importPosts ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route render={() => (
                    <div className={classes.Blog}>
                           <h3>Hey, I'm Aimee.</h3>
                            <p>
                             Kindly leave a comment here!
                             </p>
                             <br/> 
                             <Link to={'/new-post'
                               // hash: '#submit',
                               // search: '?quick-submit=true'
                            }>Comment</Link>  
                            <hr/>
                            <Auth/>  
                    </div>)}/>
                  
                </Switch>
               
                
                           
            </div>
        );
    }
}

export default Blog;