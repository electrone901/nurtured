import React from 'react';
import {Link} from 'react-router';
import './style/login.css';

 {/*GALLERY COMPONENT & SIDEBAR*/}
var Login = React.createClass({
getInitialState(){
  return {
  	email: '',
  	password: ''
  }
},
handleChange(inputField,e){
	this.setState({[inputField]:e.target.value})
}
componentDidMount(){
 this.setState({
 	email: this.state.title,
 	password:this.state.password
 })
},
//write programatically MARYEDITED@GMAIL.COM

	submitLogin(){
		$.ajax({
		  url:'/api/login',
		  type: 'POST',
		  data: {
		  	email: 'MARYEDITED@GMAIL.COM',
		  	password: '123'
		  }

		})
	},
  
    render() {
    return (
      <div>
      
Login
	        {/*LOGIN FORM*/} 
		    <div className="log">
		   {/* <p>Register</p>*/} 
		        <div className="card">
		            <img id="log" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
<form >
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

export default Login;

