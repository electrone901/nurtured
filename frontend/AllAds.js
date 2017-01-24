import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const AllAds = React.createClass({
getInitialState() {
	return ({post: []})
},
componentDidMount: function (){
	$.ajax({
		url: "/api/post",
		method:'GET'
	})
	.done((data)=>this.setState({post:data}))
},

render(){
	console.log('ARE YOU GETTING DATA?',this.state.post)
	return(
		<div className="AllAds-container-main">
			<div className='AllAds-container'>
		      {this.state.post.map((ele,i)=>{
		        return <div key={i}>
		        	<Link to={'/posts/' +ele.id}><h2>{ele.title}</h2> </Link>
		                
		                <p>{ele.body}</p> 
		                <p>{ele.location}</p> 
		                <img src={ele.image} className='allAds-img' />
		               </div>
		      })}
		    </div>

      </div>
		)
}
})

export default AllAds;




