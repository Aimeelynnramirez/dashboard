import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
import classes from './Blog.css';

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
    underConstruction=()=>{
     //console.log("sorry under construction")
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
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {this.state.importPosts ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route render={() => (<div className={classes.Blog}>
                        <ul> 
                           <h3>Dashboard</h3>
                            <span role="img" aria-label="dove" onClick={this.underConstruction}>🕊️ </span>
                            <br/>
                            <p>Hey, I'm Aimee.
                            <br/>
                             Welcome to My Github Portfolio.
                            <br/> 
                             Kindly leave a comment to the backend!</p>
                            <br/>
                            <Link to="/" onClick={this.githubLink}>Github</Link>
                            <br/>
                            <Link to="/" onClick={this.twitterLink}>Twitter</Link>
                            <br/>
                            <Link to={'/new-post'
                               // hash: '#submit',
                               // search: '?quick-submit=true'
                            } >Comment</Link></ul>
                            <br/>
                     </div>)}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;