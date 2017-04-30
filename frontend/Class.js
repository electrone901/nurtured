import React from 'react';
import $ from 'jquery';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

const Class = React.createClass({
     render(){
          return(
               <div>
                    <h2>Class</h2>
                    <br/>
                    	HERE SHOW A LIST OF STUDENTS JUST A PICTURE

                    <div>
                    	<Link to="/student-dashBoard">
                    		<img id="pictProfile" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqGAAAAJDcwY2IzMDFlLTkwYTgtNDVlOC04NDljLWU1MDVlNGU2NDQ4Yw.jpg"/>
                    	</Link><br/>
                    	<span className="studentName">Luis</span>
          					</div>

          					<div>
                    	<Link to="/student-dashBoard">
                    		<img id="pictProfile" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqGAAAAJDcwY2IzMDFlLTkwYTgtNDVlOC04NDljLWU1MDVlNGU2NDQ4Yw.jpg"/>
                    	</Link><br/>
                    	<span className="studentName">Luis</span>
          					</div>


          					<div>
                    	<Link to="/student-dashBoard">
                    		<img id="pictProfile" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqGAAAAJDcwY2IzMDFlLTkwYTgtNDVlOC04NDljLWU1MDVlNGU2NDQ4Yw.jpg"/>
                    	</Link><br/>
                    	<span className="studentName">Luis</span>
          					</div>







 
               </div>
          )
	}
})

export default Class;