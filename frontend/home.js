import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import SideBar from './SideBar.js'
import RightSideBar from './rightSideBar.js';

const Home = React.createClass({
getInitialState() {
	return ({post: '', document:''})
},
// componentDidMount: function (){
// 	$.ajax({
// 		url: "/api/post/sort/by-five",
// 		method:'GET'
// 	})
// 	.done((data)=>this.setState({post:data}))
// },


submitNewPost: function (e) {
	var info = this.state;
  $.ajax({
  	url: "http://esllearning2.mybluemix.net/chat?isay="+ this.state.post,
		method:'GET',
	})
	.done((data)=>this.setState({post:data}))
  },

	handleChange: function(e) {
	this.setState({post: e.currentTarget.value})
  },

  submitNewPost2: function (e) {
	var info = this.state;
  $.ajax({
  	url: "http://esllearning2.mybluemix.net/chat?isay="+ this.state.post,
		method:'GET',
	})
	.done((data)=>this.setState({post:data}))
  },

  handleChange2: function(e) {
	this.setState({post: e.currentTarget.value})
  },

render(){
	return(

		<div className="container-main">
			<div className='middle'>

			<form>
				<textarea className='' type="text" placeholder="Copy and paste writng sample here" onChange={this.handleChange2}></textarea><br/>
	          <input onClick={this.submitNewPost2} type="button" value="Send" />
	          
	    </form>

	    <form>
	          <input className='input-search' type="text" placeholder="How can I help you?" onChange={this.handleChange}></input><br/>
	          <input onClick={this.submitNewPost} type="button" value="Submit" />
	    		</form>

	    		<div>
	    		 {this.state.post}

	    		</div>
		     
		  </div>
    </div>
		)
}
})

export default Home







