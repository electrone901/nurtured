// make an api that gives u all ads where UserId = 2, now the prob is how to get the 2 programatically  /api/post/UserId/2  
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const EditablePost = React.createClass({
getInitialState() {
	return ({post: []})
},
componentDidMount: function (){
	$.ajax({
		url: "/api/manage" + input,
		method:'GET'
	})
	.done((data)=>this.setState({post:data}))
},

render(){
	console.log('ARE YOU GETTING DATA Luis?',this.state.post)
	return(
		<div className="container">
	      <h1>MANAGE YOUR ADS </h1>
	      <h4>YOU MUST LOGING TO CONTINUE </h4>
	      {this.state.post.map((ele,i)=>{
	        return <div key={i}>
		            <h2>{ele.title}</h2>
		            <Link to={'/posts/manageSinglePost/' +ele.id}><h2 className="EditAdd-tag">Edit this Ad</h2> </Link>
		            <p>{ele.body}</p> 
		            <p>{ele.location}</p> 
	                <img src={ele.image}/>
	                <hr className="line"/>  
	               </div>
	      })}
	      <div className="manageAddEpmty-container"></div>
      </div>
		)
}
})
var line={
	size:'30px'
}

export default EditablePost;

//
// make a edit button that shows current state as form
// handleChange to setState
// submit/update button call a function submitUpdate: api call to post to db
// update the view
// go back to the update view 








