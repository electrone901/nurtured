import React from 'react';
import {Link, browserHistory} from 'react-router';
import './style/login.css';


 {/*GALLERY COMPONENT & SIDEBAR*/}
var SignUp = React.createClass({
getInitialState(){
  return {
  	username:'',
  	email: '',
  	password: ''
  }
},
handleChange(inputField,e){
	this.setState({[inputField]:e.target.value})
},
componentDidMount(){
 this.setState({
 	username: this.state.username,
 	email: this.state.email,
 	password:this.state.password
 })
},



	submitLogin(){
		$.ajax({
		  url:'/api/user',
		  type: 'POST',
		  data: {
		  	username:this.state.username,
		  	email: this.state.email,
		  	password: this.state.password
		  }

		})
		//ADD USERNAME TO TOP
		//REDIRECT TO HOME
		browserHistory.push('/')
	},
  
    render() {
    	console.log('==== SIGN UP ====', this.state)
    return (
      <div>
      
       
		    <div className="log">
		    	<h2>Registration Form</h2>
		        <div className="card">
		            <img id="log" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
<form >
    <input onChange={this.handleChange.bind(this, 'username')} type="username" placeholder="userName"  required/>
    <input onChange={this.handleChange.bind(this, 'email')} type="email" placeholder="email"  required/>
    <input onChange={this.handleChange.bind(this,'password')} type="password" placeholder="password" required/>
    
    <div id="remember" className="checkbox">
        <label>
            <input type="checkbox"/> Remember me
        </label>
    </div>
    <input className="btn-success" type="button" onClick={this.submitLogin} value="sign in" />
</form>

		            <a href="#"> Forgot the password? </a>
		        </div>
		    </div>


      </div>
      
    )
  }
})

export default SignUp;

