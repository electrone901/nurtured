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


submitNewPost: function (e) {
   	console.log(' ==== input ===', this.state.post)
    var info = this.state
    $.ajax({
		url: "http://esllearning2.mybluemix.net/chat?isay="+ this.state.post,
		method:'GET',
		cors: true,
	})
	.done((data)=>this.setState({post:data})
		)

  },

	handleChange: function(e) {
	this.setState({post: e.currentTarget.value})
  },

render(){
	console.log('ARE YOU GETTING DATA?',this.state.post)
	return(
		<div className="container-main">
			<SideBar />   

			<div className='middle'>
		      
		      <form>
          
	          <input className='input-search' type="text" placeholder="Reccomendations" onChange={this.handleChange}></input><br/>

	          <input onClick={this.submitNewPost} type="button" value="Search" />

	    		</form>
	    		<h3 className='middle-feature'>Reccomendations</h3>



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




