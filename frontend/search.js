import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import ToggleDisplay from 'react-toggle-display';

const SubmitWriting = React.createClass({
getInitialState() {
  return ({ post: '', document:'', postResult:[], result:{}, show:false })
},

submitNewPost: function (e) {
  e.preventDefault();
  var inputUser = e.target.value;
  console.log('inputUser',e.target.value)
  var info = this.state;
  $.ajax({
    url: "http://esllearning2.mybluemix.net/chat?isay="+ this.state.post,
    method:'GET',
  })
  .done(function(data) {
    console.log('are you getting it?', data);
    var myData = data.slice(data.indexOf(':')+1, data.indexOf('}'))
    console.log('are you getting anish', myData);

    var ibmDiv = document.getElementById('ibm');
    ibmDiv.innerHTML += "you: "+ info.post + "<br>";
    ibmDiv.innerHTML += "chatBot: " + myData + "<br>";
    document.getElementById("chatInput").value = "";
  })
    

  },

  handleChange: function(e) {
  console.log('e:', e.currentTarget.value)
  this.setState({post: e.currentTarget.value});
  
  },



  //Adrian API
  submitNewPost2: function (e) {
    this.setState({show: !this.state.show});
  var info = this.state;
  console.log('yaya!')
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
      <h2 id="checking">Checking Writing Sample</h2> 
    <div>

    <div id="textform1">
      <form>
        <textarea id="textarea" type="text" placeholder="Copy and paste writng sample here" onChange={this.handleChange2}></textarea>
        <input id="submitTextButton" onClick={this.submitNewPost2} type="button" value="Send" />  
      </form>
    </div>

    <div id="chatboat">
    Do more with smart conversation.
      <div id="ibm">
      </div>


      <form onSubmit={this.submitNewPost} >
        <input id='chatInput' type="text" placeholder="How can I help you?" onChange={this.handleChange}></input>
        <input id='submitButton2' type="submit" value="Submit" />
      </form>

    </div>

</div>

       <ToggleDisplay show={this.state.show}>
        { (this.state.result) ?

        <div id="submit1">{this.state.result.GradeLevel}
        <h2>Reading Level </h2>
        </div> : 'no data'
        }

        { (this.state.result) ?

          <div id="submit2">{this.state.result.ReadingEase}
          <h2>Readability Score </h2>
          </div> : 'no data'
        }

        { (this.state.result) ?

          <div id="submit3">{this.state.result.GrammarCount}
          <h2>Grammar Errors </h2>
          </div> : 'no data'
        }
        { (this.state.result) ?

          <div id="submit4">{this.state.result.RunOns}
          <h2>Run-On Sentences </h2>
          </div> : 'no data'
        }
          
       </ToggleDisplay>
    </div>
    )
}
})

export default SubmitWriting;









