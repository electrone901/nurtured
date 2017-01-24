import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import SideBar from './SideBar.js'
import RightSideBar from './rightSideBar.js'

const Home = React.createClass({
getInitialState() {
	return ({post: []})
},
componentDidMount: function (){
	$.ajax({
		url: "/api/post/sort/by-five",
		method:'GET'
	})
	.done((data)=>this.setState({post:data}))
},

render(){
	console.log('ARE YOU GETTING DATA?',this.state.post)
	return(
		<div className="container-main">
			<SideBar />   

			<div className='middle'>
		      <h3 className='middle-feature'>FEATURE  CAR  ADS</h3>
		      {this.state.post.map((ele,i)=>{
		        return <div key={i} className='gallery'>
		        	<img src={ele.image} className='itemGallery'/>
		        	<Link to={'/posts/' +ele.id}><h4 className='img-title'>{ele.title}</h4> </Link>
		        </div>
		      })}
		    </div>


		    <div className='navRightSide'>
		    	<RightSideBar/>
		      
		     
		    </div>


      </div>
		)
}
})

export default Home




