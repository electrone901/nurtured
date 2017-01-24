import React from 'react';
import ReactDOM from 'react-dom';
import './style/footer.css'

var Footer = React.createClass({
	render: function () {
		return (

		<div className="footer">
				
						<div className="credits">
							<h3>About Us</h3>
							<span>Just Relax app is the best movie<br/> 
							      site, where you can search movies  <br/>
							      online completely free.No download,<br/>
								  no surveys and no streaming <br/>
								  of movies. <br/></span>
						</div>

						<div className="credits">
							<h3>
							What we offer :</h3>
							<li> Free Movie search</li>
							<li> TV Show Search Engine </li>
							<li> Actor Search </li>
							<li> Movies in different languages </li>
							
							
						</div>

						<div className="credits">
							<h3>31-00 47th Avenue <br/>
							 #1105 Long Island <br/>
							  City, NY 11101</h3>
						</div>

						<div className="credits1">
									<p>Copyright 2016 Just Relax App / Coalition For Queens</p>
						</div>

			</div>
		)
	}
});

export default Footer;
