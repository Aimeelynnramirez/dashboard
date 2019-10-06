import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.css';
import Blog from './containers/Blog/Blog.js';
class App extends Component {
  render () {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className={classes.App}>
          <Blog />
        <div style={{padding:'2rem', 
                    letterSpacing:'2px', 
                    position:'fixed'}}>
                    aimeelynn.</div>
                    </div>
      </BrowserRouter>
    );
  }
}

export default App;