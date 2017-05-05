import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const StudentDashBoard = React.createClass({
getInitialState() {
	return ({ post: '', document:'', postResult:[], result:{} })
},

submitNewPost: function (e) {
	var info = this.state;
  $.ajax({
  	url: "https://esllearning2.mybluemix.net/chat?isay="+ this.state.post,
		method:'GET',
	})
	.done((data)=>this.setState({postResult:data}))
  },

	handleChange: function(e) {
	this.setState({post: e.currentTarget.value})
  },

  //Adrian API
  submitNewPost2: function (e) {
	var info = this.state;
  $.ajax({
  	url: "http://localhost:4000/predict?text="+ this.state.result,
		method:'GET',
	})
	.done((data)=>this.setState({result:data}))
  },

  handleChange2: function(e) {
	this.setState({post: e.currentTarget.value})
  },

render(){
	console.log('result', this.state.result)
	console.log('postResult', this.state.postResult)
	return(

		<div> 
			<Link to="/submit-writing"><img id="welcomeBackground" src="http://laavenidanyc.com/wp-content/uploads/2017/04/welcomepict.png"/></Link>
		</div>



		)
}
})

export default StudentDashBoard;


