import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

 {/*GALLERY COMPONENT & SIDEBAR*/}
var SideBar = React.createClass({
  
    render() {
    return (
      <div className="gallery-1">
	      <table>
	        <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	<Link to={'/gallery'}>What's New Today
				    	   &nbsp; &nbsp; &nbsp; &nbsp;
				    	</Link>
				    </th>

				    <th>
				    	January 3, 2017
				    </th>  
			</tr>
	      </table>




      
          {/*SIDEBAR*/} 
          <div className="secondTable-1"> 
	        <table className ="table-bordered">

	          <tbody>
	            <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	Search  By Categories 
				    	&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
				    </th>
			   </tr>

	            <tr>
	              <td>
	              	<Link to="/NewestPost" className="glyphicon glyphicon-fire">  Newest Ads </Link>
	              </td>
	            </tr>

	            <tr>
	            	<Link to="/OldestPost" className="glyphicon glyphicon-hand-right">  Oldest Ads</Link>
	            </tr>

	             <tr>
	               <td>
	             	<Link to="/FirstTenPost" className="glyphicon glyphicon-gift">   Get First Ten Ads </Link>
	               </td>
	            </tr>
	          </tbody>
	        </table>
	    </div>


	    {/*THIRD TABLE*/}
	  <div className="secondTable">
	    <table className ="table-bordered">

	        <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	Search  By  Item Conditions 
				    	&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
				    </th>
			</tr>

	          <tbody> 
	            <tr>
	              <td>
	             	<Link to="/NewestPost" className="glyphicon glyphicon-gift">   New</Link>
	               </td>
	            </tr>
	             <tr>
	               <td>
	             	<Link to="/gallery" className="glyphicon glyphicon-gift">    Like New</Link>
	               </td>
	            </tr>

	            <tr>
	               <td>
	             	<Link to="/NewestPost" className="glyphicon glyphicon-gift"> Used </Link>
	               </td>
	            </tr>
	            <tr>
	               <td>
	             	<Link to="/gallery" className="glyphicon glyphicon-gift"> Broken for Replacement Parts</Link>
	               </td>
	            </tr>
	            <tr>
	               <td>
	             	<Link to="/search" className="glyphicon glyphicon-gift"> Search </Link>
	               </td>
	            </tr>
	          </tbody>
	        </table>
	    </div>

	{/*FOUR TABLE*/}
	    <div className="secondTable-2"> 
	        <table className ="table-bordered">

	          <tbody>
	            <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	CHECK OUR  GALLERY
				    	&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				    </th>
			   </tr>

	           <tr>
	            <Link to="/gallery"> 
	            	See All Images <br/>
	             <img src= "http://images.thesamba.com/vw/images/xmas/xmas89.jpg" id='gallery-sideBar'/>
	            </Link>
	           </tr>
	          </tbody>
	        </table>
	    </div>

	{/*FIVE TABLE*/}
	    <div className="secondTable-2"> 
	        <table className ="table-bordered">

	          <tbody>
	            <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	I Want to Feature an Ad
				    	&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				    </th>
			   </tr>

	           <tr>
	               <td>
	             	<Link to="/help" className="glyphicon glyphicon-gift"> Read Our Policy </Link>
	               </td>
	            </tr>
	          </tbody>
	        </table>
	    </div>

      </div>
      
    )
  }
})

export default SideBar;


