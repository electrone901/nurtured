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
  	url: "http://esllearning2.mybluemix.net/chat?isay="+ this.state.post,
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
			<h2 id="checking">Student DashBoard</h2>

			<div>
      	<Link to="/student-dashBoard">
      		<img id="pictProfile" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqGAAAAJDcwY2IzMDFlLTkwYTgtNDVlOC04NDljLWU1MDVlNGU2NDQ4Yw.jpg"/>
      	</Link><br/>
      	<span className="studentName">Luis</span>
			</div>

			<div id="greetingQuote">
				<h2>Welcome back Luis!</h2>

			</div>

			<div id="greetingQuote2">
				<h2>Check your Assigments</h2>

			</div>

			<div id="greetingQuote3">
				<h2>See past progress</h2>

			</div>


			<div id="greetingQuote4">
				<h2>Start a new assigment</h2>

			</div>



		  <div>


		  <center>
		     


		  <form>
				<textarea id="textarea" type="text" placeholder="Copy and paste writng sample here" onChange={this.handleChange2}></textarea><br/>
	          <input id="submit" onClick={this.submitNewPost2} type="button" value="Send" />
	    </form>

	    <form>
        <input className='input-search' type="text" placeholder="How can I help you?" onChange={this.handleChange}></input><br/>
        <input onClick={this.submitNewPost} type="button" value="Submit" />
  		</form>




		  </center>


		 {/*{(this.state.postResult) ?
		  	<div>
			  		{this.state.postResult}
		  	</div> : ''
		  }
		*/}


		  



		  { (this.state.result) ?

				<div>Grade Level: {this.state.result.GradeLevel}</div> : 'no data'
			}




		  </div>
		</div>


		)
}
})

export default StudentDashBoard;


