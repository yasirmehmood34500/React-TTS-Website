import React from 'react';

function About(){
    return(
		<section id="about" class="about about-style-2">
        <div className="container ">
			<div className="row  ">
				<div className="col-sm-12">
					<div className="title-wrap">
						<h2 className="title-text"><span>About <strong>HighLine</strong></span></h2>
						<div className="title-line text-center">
							<span className="short-line"></span>
							<span className="long-line"></span>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="about-wrap clearfix">
						<div className="icon-holder">
							<i className="fa fa-question"></i>
						</div>
						<div className="text-box">
							<div className="title-box">
								<h3>Why <strong>TimeTechSol</strong></h3>
							</div>
							<ul className="list-unstyled text-left">
								<li>Static & Dynamic websites (PHP, C#, NodeJs, React etc)</li>
								<li>CMS based data driven website</li>
								<li>Responsive website designing</li>
								<li>Graphics designing (logo, banners, business cards etc)</li>
								<li>Mobile Applications</li>
								<li>Android Game's</li>
							</ul>
						</div>
					</div>
					<div className="about-wrap clearfix">
						<div className="icon-holder">
							<i className="fa fa-book"></i>
						</div>
						<div className="text-box">
							<div className="title-box">
								<h3>Our <strong>Story</strong></h3>
							</div>
							<p>TimeTechSol Private Limited is a Business software, website and apps development company in Pakistan established in 2016 provides IT solutions and services worldwide.</p>
						</div>
					</div>
					<div className="about-wrap clearfix">
						<div className="icon-holder">
							<i className="fa fa-bullseye"></i>
						</div>
						<div className="text-box">
							<div className="title-box">
								<h3>Our <strong>Goal</strong></h3>
							</div>
							<p>We believe that technology plays vital role for grooming people and businesses. That’s why we always try to help people in achieving their objectives by using best technologies and solutions.</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 progressbar-wrap">
					<div className="title-box">
						<h3>Our  <strong>Mission</strong></h3>
					</div>
					<p>Our mission is to deliver optimal solutions with quality and services at reasonable prices. For us customer satisfaction is given top place. We are very friendly in our dealings to the customers and it helps us retain existing clients and expand customer circle. We always try to improve the quality of our products by exploring innovative ideas.</p>
					<div className="col-xs-6">
						<div className="progressbar" data-animate="false">
							<div className="circle" data-percent="98.7" data-color="#fb9902">
								<div></div>
								<p>Web</p>
							</div>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="progressbar" data-animate="false">
							<div className="circle" data-percent="95.8" data-color="#fb9902">
								<div></div>
								<p>Graphic</p>
							</div>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="progressbar" data-animate="false">
							<div className="circle" data-percent="90.5" data-color="#fb9902">
								<div></div>
								<p>Gamming</p>
							</div>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="progressbar" data-animate="false">
							<div className="circle" data-percent="78.2" data-color="#fb9902">
								<div></div>
								<p>Mobile App</p>
							</div>
						</div>
					</div>
				</div>


				<div className="col-sm-12 success-story success-story-wrap text-center">
					<div className="col-xs-6 col-md-3">
						<div className="icon"><i class="fa fa-link"></i></div>
						<div className="counter-wrap">
							<span className="counter">+200</span>
							<p>Web Links</p>
						</div>
					</div>
					<div className="col-xs-6 col-md-3">
						<div className="icon"><i class="fa fa-mobile"></i></div>
						<div className="counter-wrap">
							<span className="counter">+100</span>
							<p>Game Links</p>
						</div>
					</div>
					<div className="col-xs-6 col-md-3">
						<div className="icon"><i class="fa fa-rocket"></i></div>
						<div className="counter-wrap">
							<span className="counter">+100</span>
							<p>Finished Projects</p>
						</div>
					</div>
					<div className="col-xs-6 col-md-3">
						<div className="icon"><i class="fa fa-smile-o"></i></div>
						<div className="counter-wrap">
							<span className="counter">+43</span>
							<p>Satisfied Clients</p>
						</div>
					</div>
				</div>


			</div>
		</div>
		</section>
    );
}

export default About;
