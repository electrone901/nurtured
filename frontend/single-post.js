import React from 'react';
import $ from 'jquery';

const SinglePost = React.createClass({
getInitialState() {
 return ({post: []})
},

componentDidMount: function () {
	$.ajax({
		url:'/api/post/' + this.props.params.postId,
		method:'GET'
	})
	.done((data)=>{
		this.setState({post:data})
	})
},  
render() {
	console.log('ARE YOU GETTING DATA',this.state.post)
	return(
		<div className="container">
	      <h1>THIS SHOULD BE A SINGLE POST</h1>
	      <h2>{this.state.post.title}</h2>
	      <img src={this.state.post.image}/>
	      <p>{this.state.post.body}</p>


	      <h2>Product Information</h2>
	      <h4>Brand: {this.state.post.brand}</h4>
	      <h4>Year: {this.state.post.year}</h4>
	      <h4>Price: {this.state.post.price}</h4>
	      <h4>Condition: {this.state.post.tags}</h4>
		  <h4>Location: {this.state.post.location}</h4>
	      <h4>Payments Accepted: {this.state.post.payments_accepted}</h4>
	    
	      

	      <h2>Ad Information</h2>
	      <h4>Ad placed: {this.state.post.createdAt}</h4>
	      <h4>Ad last edited: {this.state.post.updatedAt}</h4>
	      <h4>Ad id: {this.state.post.id}</h4>
	      

	      <h2>Advertiser Information</h2>
	      <h4>Advertiser: {this.state.post.author}</h4>
	      <h4>UserId: {this.state.post.UserId}</h4>
	      <h4>Phone: {this.state.post.phone}</h4>



      </div>
		)
}

})
export default SinglePost;

