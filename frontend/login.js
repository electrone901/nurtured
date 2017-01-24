import React from 'react';
import {Link,browserHistory} from 'react-router';
import { withRouter } from 'react-router'
import './style/login.css';
import {connect} from 'react-redux'; //conect library
import * as userActions from './reducers/userActions.js' //import all actions & 

 {/*GALLERY COMPONENT & SIDEBAR*/}
var Login = React.createClass({
getInitialState(){
  return {

  	user: null,
  	email: '',
  	password: ''
  }
},
handleChange(inputField,e){
	this.setState({[inputField]:e.target.value})
},
componentDidMount(){
 this.setState({
 	email: this.state.title,
 	password:this.state.password
 })
},

	submitLogin(){
		$.ajax({
		  url:'/api/login',
		  type: 'POST',
		  data: {
		  	email: this.state.email,
		  	password: this.state.password
		  }

		})
		.then((data)=>{
			this.props.login(data)
		})
// login from useractions
		browserHistory.push('/')
		
		
	},
  
    render() {
    return (
      <div>
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
    <input className="btn-success" type="button" onClick={this.submitLogin} value=" Login " />
</form>

		            <a href="#"> Forgot the password? </a>
		        </div>
		    </div>


      </div>
      
    )
  }
})

//take obj from store turns into props, access & sets state 
// const mapStoreToProps = store => (
//   {user: store.userReducer}
// )
export default connect(null, userActions)(Login); //connects: mapStoreToProps is global state in the props



