import React from 'react';
import $ from 'jquery';

const Gallery = React.createClass({
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
		<div className="container-gallery">

	      {this.state.post.map((ele,i)=>{
	        return <div key={i}>
	                <h2 className='gallery-title'>{ele.title}</h2> 
	                
	                <img src={ele.image} className='gallery-img'/>
	                
	               </div>
	      })}
      </div>
		)
}
})

export default Gallery