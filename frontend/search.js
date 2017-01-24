
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const SearchByTitle = React.createClass({
  getInitialState(){
    return {post:[]}
  },

   submitNewPost: function (e) {
   	console.log(' ==== input ===', this.state.post)
    var info = this.state
    $.ajax({
		url: "/api/post/search/" + this.state.post,
		method:'GET'
	})

	.done((data)=>this.setState({post:data})
		)

  },

	handleChange: function(e) {
	this.setState({post: e.currentTarget.value})
  },

 
  render(){
  	console.log('ARE YOU GETTING DATA ON Search?',this.state.post)
    return(
   <div>
    <form>
          
          <input className='input-search' type="text" placeholder="Quick Search" onChange={this.handleChange}></input><br/>

          <input onClick={this.submitNewPost} type="button" value="Search" />

    </form>
    <div className='middle'>
      {this.state.post.map((ele,i)=>{
        return <div key={i} className='gallery'>
        	<img src={ele.image} className='itemGallery'/>
        	<Link to={'/posts/' +ele.id}><h4 className='img-title'>{ele.title}</h4> </Link>
        </div>
      })}
    </div>
    <div className="searchEmpty-container"></div>
  </div>
      )
  }
})

export default SearchByTitle;



