import React, { Component } from 'react';

class Contact extends Component {
  render() {

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

         </div>

         <div className="row">
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact Information</h4>
					   <p className="address">
						   Kunlin Cai <br />
						   kunlin96@g.ucla.edu <br />
						   <span>(+1)7812283500</span>
					   </p>
				   </div>

            
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
