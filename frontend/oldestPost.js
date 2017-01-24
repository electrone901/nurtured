import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const OldestPost = React.createClass({
getInitialState() {
	return ({post: []})
},
componentDidMount: function (){
	$.ajax({
		url: "/api/post/sort/descending",
		method:'GET'
	})
	.done((data)=>this.setState({post:data}))
},

render(){
	console.log('ARE YOU GETTING DATA?',this.state.post)
	return(
		<div className="container-main">
			<div className='container1'>
		      <h1>Order by Oldest to Newest</h1>
		      {this.state.post.map((ele,i)=>{
		        return <div key={i}>
		        	<Link to={'/posts/' +ele.id}><h2>{ele.title}</h2> </Link>
		                
		                <p>{ele.body}</p> 
		                <p>{ele.location}</p> 
		                <img src={ele.image}/>
		               </div>
		      })}
		    </div>

      </div>
		)
}
})

export default OldestPost

