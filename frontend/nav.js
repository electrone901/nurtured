import React from 'react';
import {Link} from 'react-router';
import './style/Nav.css';
import {connect} from 'react-redux'; 
import * as userActions from './reducers/userActions.js' 


{/*NAVIGATION BAR*/}
var Navbar = React.createClass({
  handleLogout: function(e){
    e.preventDefault()
    $.ajax({
      url:'/api/logout',
      type: 'POST'
    })
    .then(()=>{
    this.props.logout() //action from userActions
    })
  },






  render: function() {
    console.log('this.props.userState.user ',this.props.userState.user)
    return (
    <div>

       { /*FIRST NAV*/}
      <nav className="navbar main">
          <div className="logo col-xs-3">
            <a href="/" className="logoWidth">
             <img src= "http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" />

            </a>
          </div>
      </nav>

      { /*SECOND NAV*/}
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext"><Link to="/home">Home</Link></li> 
              <li className="linetext"><Link to="/gallery">Class</Link></li>
              <li className="linetext"><Link to="/all-ads">Settings</Link></li>
              <li className="linetext"><Link to="/">Logout</Link></li>
    {/*          <li className="linetext"><Link to="/manageAd"></Link></li>
              <li className="linetext"><Link to="/contact">Contact Us</Link></li>  
              <li className="linetext"><Link to="/help">Help</Link></li>



             {this.props.userState.user ?
                <li className="linetext"><a href='#' onClick={this.handleLogout}>Log Out</a></li> :
                <li className="linetext"><Link to="/login">Login</Link></li>
              }
              {! this.props.userState.user ?
                <li className="linetext"><Link to="/signup">Sign Up</Link></li> :
                null
              }              

*/}


              <li className="linetext"><Link to="/search">Search</Link></li>  
            </ul>

          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav>

    </div>
    )
  }
})

const mapStoreToProps = store => (
  {userState: store.userReducer}
)
export default connect(mapStoreToProps, userActions)(Navbar); //connects: mapStoreToProps is global state in the props


