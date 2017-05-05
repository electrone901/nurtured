import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const MainHomePage = React.createClass({
     render(){
          return(
               <div>
              		<img id="mainHomeImg" src="http://laavenidanyc.com/wp-content/uploads/2017/05/mainhome00.png" />
              		<div id="GetStartedPosition">
              			 <Link to="/student-dashBoard"><input id="GetStarted"  type="button" value="Get Started" /></Link>
              		</div>
               </div>

          )
	}

})

export default MainHomePage;
