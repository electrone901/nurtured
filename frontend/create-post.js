import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const CreatePost = React.createClass({
	getInitialState(){
		return {
		  title: '',
		  image: '',	  
		  body: '',	  
		  author: '',	  
		  tags: '',	
		  price: '',  
		  phone: '', 
		  year: '',
		  brand: '',
		  location: '',    
		  payments_accepted: ''
		}
	},
	handleChange(inputField, e){
		this.setState({[inputField] : e.target.value})
	},
	submitNewPost() {
		$.ajax({
		  url:'/api/post',
		  type: 'POST',
		  data: {
		  	title: this.state.title,
		  	image: this.state.image,	  
		  	body: this.state.body,	  
		  	author: this.state.author,	  
		  	tags: this.state.tags,	
		  	price: this.state.price,  
		  	phone: this.state.phone, 
		  	year: this.state.year,
		  	brand: this.state.brand,
		  	location: this.state.location,    
		  	payments_accepted: this.state.payments_accepted,
		  	userId:this.state.userId
		  }

		})
	},
	render(){
		return(
		<form className="CreateAdd-container-main">

          <h1>Place an Ad</h1>
          <label>Title: </label><br/>
          <input onChange={this.handleChange.bind(this, 'title')} type="text" name="title" />
          <br/>
          <br/>
          <label>Add Images: </label><br/>
          <input onChange={this.handleChange.bind(this, 'image')} type="text" name="image" />
          <br/>
          <br/>
          <label>Body: </label><br/>
          <textarea onChange={this.handleChange.bind(this, 'body')} type="text" name="body"> </textarea>
          <br/>
          <label>Chose Category: </label><br/> 
          <input onChange={this.handleChange.bind(this, 'tags')} type="text" name="tags" placeholder="New, Semi-New or Used"/>
          <br/>
          <label>Price: </label><br/>
          <input onChange={this.handleChange.bind(this, 'price')} type="text" name="price"/> 
          <br/>
          <br/>
          <label>Year: </label><br/>
          <input onChange={this.handleChange.bind(this, 'year')} type="text" name="year" />
          <br/>
          <br/>

          <label>Brand: </label><br/>
          <input onChange={this.handleChange.bind(this, 'brand')} type='text' name='brand' />
          <br/>
          <br/>
          <label>Location: </label><br/>
          <input onChange={this.handleChange.bind(this, 'location')} type='text' name='location' />
          <br/>  
          <br/>
          <label>Payments Accepted: </label><br/>
          <input onChange={this.handleChange.bind(this, 'payments_accepted')} type='text' name='payments_accepted' />
          <br/>  
          <br/>



          <h3>Enter your Information</h3>
          <label>UserName: </label>
          <input onChange={this.handleChange.bind(this, 'author')} type='text' name='author' />
          <br/>  
          <br/> 
          <label>UserID: </label>
          <input onChange={this.handleChange.bind(this, 'userId')} type='text' name='userId' />
          <br/>  
          <br/>
          <label>Phone: </label>
          <input onChange={this.handleChange.bind(this, 'phone')} type='text' name='phone' />
          <br/>  
          <br/>
          <Link to="/"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>
        </form>
			)
	}
})

export default CreatePost;