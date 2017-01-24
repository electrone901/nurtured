import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const NewTags = React.createClass({
getInitialState() {
	return ({post: []})
},
componentDidMount: function (){
	$.ajax({
		url: "/api/post/:"+ this.state.post,
		method:'GET'
	})
	.done((data)=>this.setState({post:data}))
},

render(){
	console.log('ARE YOU GETTING DATA?',this.state.post)
	return(
		<div className="container-main">
			<div className='container1'>
		      <h1>Searching by Brand New Items</h1>
		      {this.state.post.map((ele,i)=>{
		        return <div key={i}>
		        	<Link to={'/posts/' +ele.id}><h2>{ele.title}</h2> </Link>
		                
		                <p>{ele.body}</p> 
		                <p>{ele.location}</p> 
		                <p>Item Condition:{ele.tags}</p> 
		                <img src={ele.image}/>
		               </div>
		      })}
		    </div>

      </div>
		)
}
})

export default NewTags;

