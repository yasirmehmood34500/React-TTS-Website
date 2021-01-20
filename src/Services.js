import React from 'react';
import ServiceType from './ServiceType';
import ServiceTypeDetail from './ServiceTypeDetail';

function Services(){
    return(
        <section id="service" className="service parallax">
            <div className="container ">
			<div className="row">
				<div className="col-md-12">
					<div className="title-wrap">
						<h2 className="title-text"><span>Our <strong>Service</strong></span></h2>
						<div className="title-line text-center">
							<span className="short-line"></span>
							<span className="long-line"></span>
						</div>
					</div>
				</div>

                <div className="col-md-6">
					<div className="service-wrap clearfix">
                        <ServiceType icon="desktop" name="Web Development" detail="Our Web Development Team provides your business website with multi platform." />
                        <div className="col-xs-6">
							<div className="service-box">
								<div className="service-box-wrap border-left">
									<ul className="service-list list-unstyled text-left">
                                        <ServiceTypeDetail detail="Professional website development." />
                                        <ServiceTypeDetail detail="Static, Dynamic & Flash websites." />
                                        <ServiceTypeDetail detail="Complete solution – Development, Hosting & Support." />
                                        <ServiceTypeDetail detail="Customized CMS that suits you." />
                                        <ServiceTypeDetail detail="Integrate a new CMS on existing website" />
                                        <ServiceTypeDetail detail="Animated banners & intros." />
                                    </ul>
                                    <a className="btn btn-shutter-out-horizontal" href="/">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
					<div className="service-wrap clearfix">
                    <ServiceType icon="paint-brush" name="Graphic Design" detail="Our Graphic Team provides logo design service that match your brand and business." />
                        <div className="col-xs-6">
							<div className="service-box">
								<div className="service-box-wrap border-left">
									<ul className="service-list list-unstyled text-left">
                                        <ServiceTypeDetail detail="Strong background in design and branding." />
                                        <ServiceTypeDetail detail="Strong organizational skills and interpersonal skills." />
                                        <ServiceTypeDetail detail="Ability to manage time efficiently." />
                                        <ServiceTypeDetail detail="Certified logo designers will be given preference." />
                                        <ServiceTypeDetail detail="Creating and modifying Illustrator vector graphics." />
                                        <ServiceTypeDetail detail="Tools like Adobe Photoshop, Illustrator, or InDesign." />
                                    </ul>
                                    <a className="btn btn-shutter-out-horizontal" href="/">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
					<div className="service-wrap clearfix">
                    <ServiceType icon="mobile" name="Game Development" detail="Our Game Developer Team develop new Game as per client requirement." />
                        <div className="col-xs-6">
							<div className="service-box">
								<div className="service-box-wrap border-left">
									<ul className="service-list list-unstyled text-left">
                                        <ServiceTypeDetail detail="Professional level Game development." />
                                        <ServiceTypeDetail detail="Generate game scripts and storyboards." />
                                        <ServiceTypeDetail detail="Animate characters and objects." />
                                        <ServiceTypeDetail detail="Contribute to the design and audio features of the game." />
                                        <ServiceTypeDetail detail="Designing role-play mechanics." />
                                    </ul>
                                    <a className="btn btn-shutter-out-horizontal" href="/">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
					<div className="service-wrap clearfix">
                    <ServiceType icon="cogs" name="App Development" detail="We brings your android app idea into reality. We offer professional android app development service." />
                        <div className="col-xs-6">
							<div className="service-box">
								<div className="service-box-wrap border-left">
									<ul className="service-list list-unstyled text-left">
                                        <ServiceTypeDetail detail="Professional level App development." />
                                        <ServiceTypeDetail detail="Strong UX and UI expertise." />
                                        <ServiceTypeDetail detail="Long experience in mobile apps." />
                                        <ServiceTypeDetail detail="Agile practices lead to faster delivery." />
                                        <ServiceTypeDetail detail="Reduced cost with mobile test automation." />
                                    </ul>
                                    <a className="btn btn-shutter-out-horizontal" href="/">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
									
									
			</div>
		</div>
        </section>
    );
}

export default Services;