import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <footer id="footer" className="footer">
            <div className="container">
			<div className="row">	
				<div className="footer-top clearfix">
					<div className="col-xs-6 col-md-4">
						<h4 className="widget-title">About <span>HighLine</span></h4>
						<p className="text-justify">TimeTechSol was founded in the April 2016 Pakistan. We provide creative Website Designing, Website Development, Graphic Designing, Android & Game development and seo in Pakistan 
						</p>
						<br></br>
						<a href="/" className="footer-logo-link text-center">
							<img className="footer-logo" src="img/tts.png" alt="Footer Logo" />
						</a>
					</div>
					<div className="col-xs-6 col-md-4">
						<h4 className="widget-title">Recent <span>Projects</span></h4>
						<ul className="list-unstyled recent-post">
							<li className="clearfix">
								<div className="post-thumbnail">
									<a  href="http://mayas.pk/" target=""><img src="img/mayaslogo.svg" alt="Mayas.pk (Multi Vender Website)" /></a>
								</div>
								<div className="post-content">
									<h3><a href="http://mayas.pk/" target="">Mayas.pk (Multi Vender Website)</a></h3>
									<div className="post-meta">
										<span><i className="fa fa-calendar"></i><a href="http://mayas.pk/" target="">July 16</a></span>
									</div>
								</div>
							</li>
							<li className="clearfix">
								<div className="post-thumbnail">
									<a href="https://play.google.com/store/apps/details?id=com.TimeTechSol.BricksBreakerInfinity&hl=en" target=""><img src="img/breaks.jpg" alt="Bricks Breaker Infinity - classNameic Game" /></a>
								</div>
								<div className="post-content">
									<h3><a href="https://play.google.com/store/apps/details?id=com.TimeTechSol.BricksBreakerInfinity&hl=en" target="">Bricks Breaker Infinity - Classic Game</a></h3>
									<div className="post-meta">
										<span><i className="fa fa-calendar"></i><a href="https://play.google.com/store/apps/details?id=com.TimeTechSol.BricksBreakerInfinity&hl=en" target="">June 2018</a></span>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="col-xs-6 col-md-4">
						<h4 className="widget-title">Contact <span>Details</span></h4>
						<ul className="list-unstyled contact-info">
							<li><i className="fa fa-phone"></i> <a href="tel:92-301-7198-621">+92 301 7198 621</a></li>
							<li><i className="fa fa-phone"></i> <a href="tel:92-308-4972-667">+92 308 4972 667</a></li>
							<li><i className="fa fa-envelope"></i> <a href="mailto:info@timetechsol.com">info@timetechsol.com</a></li>
						</ul>
						
						<ul className="list-inline list-social clearfix">
							<li>
								<a href="https://www.facebook.com/timetechsol" className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-facebook" target="">
									<i className="fa fa-facebook"></i>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/timetechsol?fbclid=IwAR3QHAZbshRlHhfmuCw29E1nfONancwTga5SYgAryljMIXz-OJ0KlcHACJo" className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-twitter" target="">
									<i className="fa fa-twitter"></i>
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/company/timetechsol/" className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-linkedin" target="">
									<i className="fa fa-linkedin"></i>
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="row">					
				<div className="col-sm-12">
					<p className="text-center copyright">&copy; 2020 <a href="http://timetechsol.com" target="">TimeTechSol</a> All rights reserved. </p>
				</div>
			</div>
		</div>
            </footer>
    );
}

export default Footer;