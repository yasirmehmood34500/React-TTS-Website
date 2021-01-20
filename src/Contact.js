import React from 'react';

function Contact(){
    return(
        <section id="contact" className="contact">
            <div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-wrap">
						<h2 className="title-text"><span>Wanna <strong>Talk</strong></span></h2>
						<div className="title-line text-center">
							<span className="short-line"></span>
							<span className="long-line"></span>
						</div>
					</div>
					<div className="intro-text text-center">
					</div>
				</div>
				
				<div className="col-sm-5">
					<div className="title-box">
						<h3>Contact us <strong>directly</strong></h3>
					</div>
					<div className="contact-item clearfix">
						<div className="contact-left pull-left">
							<i className="fa fa-envelope"></i>
						</div>
						<div className="contact-right">
							<div className="contact-desc">
								<span>Mail Us</span>
								<h4><a href="mailto:info@timetechsol.com">info@timetechsol.com</a></h4>
							</div>
						</div>
					</div>
					<div className="contact-item clearfix">
						<div className="contact-left pull-left">
							<i className="fa fa-facebook"></i>
						</div>
						<div className="contact-right">
							<div className="contact-desc">
								<span>Facebook</span>
								<h4><a href="https://facebook.com/timetechsol" target="">Timetechsol</a></h4>

							</div>
						</div>
					</div>
					<div className="contact-item clearfix">
						<div className="contact-left pull-left">
							<i className="fa fa-phone"></i>
						</div>
						<div className="contact-right">
							<div className="contact-desc">
								<span>Call Us</span>
								<h4><a href="tel:92-301-7198-621">+92 301 7198 621</a></h4>
								<h4><a href="tel:92-308-4972-667">+92 308 4972 667</a></h4>
							</div>
						</div>
					</div>
				</div>
				
				
				<div className="col-sm-7">
					<div className="title-box">
						<h3>Write a <strong>message</strong></h3>
					</div>
					
					<h4 className="text-center">
						Successfully Sended
					</h4>
					<form action="" method="post" >
						
						
						<div className="form-group">
							<div className="help-block with-errors hidden"></div>
							<input name="name" id="fname" placeholder="Your Name*" className="form-control" type="text" required data-error="Please enter Your Name" /> 
							<div className="input-group-icon"><i className="fa fa-user"></i></div>
						</div>
						<div className="form-group">
							<div className="help-block with-errors hidden"></div>
							<input name="email" id="email" placeholder="Your Email*" className="form-control" type="email" required data-error="Please enter Your Email" /> 
							<div className="input-group-icon"><i className="fa fa-envelope"></i></div>
						</div>
						<div className="form-group">
							<div className="help-block with-errors hidden"></div>
							<input name="mobile" id="phone" placeholder="Contact Phone*" className="form-control" type="text" required data-error="Please enter Contact Phone" />
							<div className="input-group-icon"><i className="fa fa-phone"></i></div> 
						</div>
						<div className="form-group">
							<div className="help-block with-errors hidden"></div>
							<input name="subject" id="subject" placeholder="Subject*" className="form-control" type="text" required data-error="Please enter Subject" />
							<div className="input-group-icon"><i className="fa fa-book"></i></div> 
						</div>
						<div className="form-group">
							<div className="help-block with-errors hidden"></div>
							<textarea rows="3" name="message" id="message" placeholder="Write comment here*" className="form-control" required data-error="Please enter Contact message"></textarea>
							<div className="input-group-icon"><i className="fa fa-pencil"></i></div>
						</div>
						<div className="form-group">
							<button type="submit" id="submit" name="save_btn" className="btn btn-shutter-out-horizontal">Send Message</button>
						</div>
					</form>
					
				</div>
			</div>
		 </div>
        </section>
    );
}

export default Contact;