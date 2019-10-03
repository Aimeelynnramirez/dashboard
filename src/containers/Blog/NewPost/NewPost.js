import React, { Component } from 'react';
import classes from './NewPost.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class NewPost extends Component {
    state = {
        postAuthor:[],
        postTitle:[],
        postBody:[],
        title: '',
        content: '',
        author: 'Aimee',
        submitted: false
    }

    componentDidMount () {
     // this makes sure that it goes to the right place.
     this.props.history.push('/new-post');
        // validated props.
       //console.log(this.props);  
    }
    postDataHandler = (data) => {
    //just for scope.
   // let counter = 0;
     data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,        
        };   
        axios.post('https://aimee-github.firebaseio.com/posts.json', data)
          .then(res => {
                    if(res.error) {
                        throw(res.error);
                    }
                    //counter +=1;
                    //console.log("this is counter: ",counter);
                    const newDataTitle = data.title;
                    const newData = data.body;
                    const newDataAuthor = data.author;
                   //console.log("author: ", newDataAuthor);
                   //This gets the item into the container.
                    this.state.postBody.push(newData);
                    this.state.postTitle.push(newDataTitle);
                    this.state.postAuthor.push(newDataAuthor);
                    //console.log("this is posts", this.state.postBody);
                    // console.log("this is posts title", this.state.postTitle);
                    // this is a way to get it to API. Best to call it above...
                    //this.props.history.push('https://aimee-github.firebaseio.com/posts.json');
                    this.setState({content:this.state.postBody,
                                   title: this.state.postTitle, 
                                   author:this.state.postAuthor,
                                   submitted:true })
                })        
    }   
    render () {
        let title = this.state.title;
        let body = this.state.content;
        let author = this.state.author;
        if (this.state.submitted) {
        return(<div>
            <NavLink to={{pathname: '/dashboard'}}>Dashboard</NavLink> 
            <div className={classes.NewPost}>
            <span>Confirmed!</span>
            <p>Thanks {author}! <br/>
             You sent :</p>
            <h3>Title:</h3>
            {title}
            <br/>
            <h3>Content:</h3>
            {body}
            <br/>
            <h4>Cheers!</h4>
            </div>
            </div>)
             }
        return (
            <div><NavLink to={{pathname: '/dashboard'}}>Dashboard</NavLink> 
            <div className={classes.NewPost}>
                <br/>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="6" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <input value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                <button onClick={()=> {if(window.confirm('Are you sure you want to send this comment?')) this.postDataHandler()}}>Add Post</button>
                </div>
            </div>
        );
    }
}

export default NewPost;