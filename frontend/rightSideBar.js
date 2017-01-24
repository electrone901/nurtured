import SearchByTitle from './search.js';
import React from 'react';
import {Link} from 'react-router';
// import SearchByTitle from './search.js';


 {/*GALLERY COMPONENT & SIDEBAR*/}
var RightSideBar = React.createClass({
  
    render() {
    return (
      <div className="gallery-1">

      {/*SIDEBAR*/} 
          <div className="secondTable-1"> 
	        <table className ="table-bordered">

	          <tbody>
	            <tr className='navLeftSide-table-header'>

				    
				    <th className='SearchByTitle'>
				    	Search By Title 
				    </th>
			   </tr>

	            <tr>
	              <td>
	              <SearchByTitle/>
	              </td>
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
				    	TODAY'S HOURS: 
				    	&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
				    </th>
			   </tr>

	           <tr>
	               <td>
	             	<h4 className="glyphicon glyphicon-gift"> 10 a.m. - 6 p.m. </h4>
	               </td>
	            </tr>
	          </tbody>
	        </table>
	    </div>





      {/*FIRST TABLE*/}
	    <div className="secondTable-2"> 
	        <table >

	          <tbody>
	            <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	<Link to={'/createPost'}> ADVERTISE WITH US!
				    	    &nbsp; &nbsp;
				    	</Link>
				    </th> 
			   </tr>

	           <tr>
	             <img src= "https://tpc.googlesyndication.com/simgad/15271050611293750725" id='advertise'/>
	           </tr>
	          </tbody>
	        </table>
	    </div>

	     {/*LINK TO CREATE POST*/}
	      <table>
	        <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	<Link to={'/createPost'}>It's quick and easy. Create A Post Now.
				    	   &nbsp; &nbsp; &nbsp; &nbsp;
				    	</Link>
				    </th>  
			</tr>
	      </table>


	    {/*FIRST TABLE*/}
	    <div className="secondTable-2"> 
	        <table >

	          <tbody>
	            <tr className='navLeftSide-table-header'>
				    
				    <th>
				    	<Link to={'/createPost'}>
				    	Don't Wait, Advertise Today!!
				    	   &nbsp; &nbsp; &nbsp; &nbsp;
				    	</Link>
				    </th> 
			   </tr>

	           <tr>
	             <img src= "https://tpc.googlesyndication.com/simgad/240532871707449050" id='advertise'/>
	           </tr>
	          </tbody>
	        </table>
	    </div>


      </div>
      
    )
  }
})

export default RightSideBar;


