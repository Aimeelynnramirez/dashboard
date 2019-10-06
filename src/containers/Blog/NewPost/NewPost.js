import React, { Component } from 'react';
import classes from './NewPost.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class NewPost extends Component {
    state = {
        postAuthor:[],
        title: '',
        content: '',
        author: '',
        data:'',
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
            Title: this.state.title,
            Body: this.state.content,
            Author: this.state.author,        
        };   
        axios.post('https://aimee-github.firebaseio.com/posts.json', data)
          .then(res => {
                    if(res.error) {
                        throw(res.error);
                    }
                    //counter +=1;
                    //console.log("this is counter: ",counter);
                    const newDataAuthor = data.author;
                   //console.log("author: ", newDataAuthor);
                   //This gets the item into the container.
                    this.state.postAuthor.push(newDataAuthor);
                    //console.log("this is posts", this.state.postBody);
                    // console.log("this is posts title", this.state.postTitle);
                    // this is a way to get it to API. Best to call it above...
                    //this.props.history.push('https://aimee-github.firebaseio.com/posts.json');
                    this.setState({data:data, 
                                   author:this.state.postAuthor,
                                   submitted:true })
                })        
    }   
    render () {
        const author = this.state.author;
        
        const submittedArray = [];
        for ( let key in this.state.data) {
            submittedArray.push( {
                id: key,
                config: this.state.data[key]
            } );
            console.log("this is submitted: ", submittedArray);
        }
        const showSubmitted = submittedArray.map(submittedElement => (
            <div key={submittedElement.id}
               value={submittedElement.config.value}>
              <h3>{submittedElement.id}:</h3>
               {submittedElement.config}
               </div>)
                )
        if (this.state.submitted) {
        return(<div>
            <NavLink to={{pathname: '/dashboard'}}>Dashboard</NavLink> 
            <div className={classes.NewPost}>
            <span>Confirmed!</span>
            <p>Thanks {author}! </p>
            <p> You sent :</p>
            {showSubmitted}
            <br/>
            <h4>Cheers!</h4>
            </div>
            </div>
                )
             }
        return (
            <div>
           <NavLink to={{pathname: '/dashboard'}}>Dashboard</NavLink> 
            <div className={classes.NewPost}>
                <br/>
                <h3>Add a Post</h3>
                <hr/>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="6" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <input placeholder="Aimee" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                <button onClick={()=> {if(window.confirm('Are you sure you want to send this comment?')) this.postDataHandler()}}>Add Post</button>
   
                </div>
                
            </div>
        );
    }
}

export default NewPost;