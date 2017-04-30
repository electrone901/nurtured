import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import SideBar from './SideBar.js'
import RightSideBar from './rightSideBar.js';

const SubmitWriting = React.createClass({
getInitialState() {
  return ({ post: '', document:'', postResult:[], result:{} })
},

submitNewPost: function (e) {
  var info = this.state;
  $.ajax({
    url: "http://esllearning2.mybluemix.net/chat?isay="+ this.state.post,
    method:'GET',
  })

  // .done((data)=>this.setState({postResult:data}))


  .done(function(data) {
    //(data)=>this.setState({postResult:data});
    console.log('are you getting it?');
    var ibmDiv = document.getElementById('ibm');
    ibmDiv.innerHTML += data + "<br>"; //.post;
    ibmDiv.innerHTML += "BBB";//this.state.postResult;
  })
    

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

  // renderRow() {
    // var arr = this.state.Result.map(function(obj) {
    //    return <div>Key: {key}, Value: {this.state.Result[key]}</div>;
    //  })
   //  }
  // }



render(){
  console.log('result', this.state.result)
  console.log('postResult', this.state.postResult)
  return(

    <div>

      <h2 id="checking">Checking Writing Sample</h2>

    
    <div>
      <div id="textform1">
      <form>
        <textarea id="textarea" type="text" placeholder="Copy and paste writng sample here" onChange={this.handleChange2}></textarea><br/>
            <input id="submit" onClick={this.submitNewPost2} type="button" value="Send" />
      </form>

    </div>





<div id="chatboat">

      <form>
        <input id='chatInput' type="text" placeholder="How can I help you?" onChange={this.handleChange}></input><br/>
        <input onClick={this.submitNewPost} type="button" value="Submit" />
      </form>


      <div id="ibm">Results from IBM:<br/>

      </div>

      </div>
</div>

      { (this.state.result) ?

        <div>Grade Level: {this.state.result.GradeLevel}
        </div> : 'no data'
      }





    </div>


    )
}
})

export default SubmitWriting;









