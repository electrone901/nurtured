import React from 'react';
import $ from 'jquery';
// import {Link} from 'react-router'

const Contactus = React.createClass({
	
	render(){
		return(
               <div className='contact-container-main'>


               <h2 className='contact-title'>Contact Us</h2>
           <div className='contact-1'>
           Send us an Email: 
           JustCars@gmail.com <br/>
           Phone: <br/>
           646 360 1414<br/>
           Address: <br/>
           31-00 47th Avenue <br/>
           #1105 Long Island <br/>
           City, NY 11101<br/>
 
           </div>

           <div className='contact-2'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96781.14750262722!2d-74.08738762517704!3d40.70897103497913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a101784a785%3A0x848f182853fe1813!2sNyc+Parts+Inc!5e0!3m2!1sen!2sus!4v1482692463894" width="600" height="300"></iframe>
          </div>



<div className='contact-3'>
<h2>JustCars.com Help </h2> <br/>
                    
<p>
Need help? Have you read the Frequently Asked Question (FAQ) listings?<br/>

If you need to contact the site administrator, please email
Everett Barnes at everettb@thesamba.com<br/>

If you are emailing about username/password/registration problems, please email me from the email account you used to register, if possible, and let me know your username, if you have an account.
</p><br/>

<p>
     If you forgot your login username and/or password:
     You can also use the "forgot" links on the Login page or the Home page.
     Quick Links: Forgot Password | Forgot Username

     If you don't have an account click Register in the upper-left of the site.
     It's free. And I recommend it.
</p>



<p>
     Need to update your email address?
     Login, then click on Control Panel in the upper-left of the site.

     Do you have an old Samba account with an email that you can no longer access? Email me and let me know your old and new email addresses and I can update your account and give you access.
</p>


<p>
     Would you like more information on the site? Check out the About page.

     Interested in supporting the site?  Check out the Donation page.

     We also invite you to please "Like" our official Facebook page.

     Thanks for visiting!
</p>   
</div>           
</div>



		
			)
	}
})

export default Contactus;