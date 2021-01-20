import React from 'react';

function TeamProfile(props){
    let full_img_path="upload/team_profile/"+props.img;
    let img_alt=props.name+props.position+" TimeTechSol Time Tech Sol TimeTechSol Software House";
    return(
        
            <div className="col-md-3 col-xs-6">
					<div className="team-wrap">
						<div className="team-thumb">
							<img className="team-profile" src={full_img_path} alt={img_alt} />
						</div>
						<div className="team-details">
							<div className="details-plain">
								<div className="team-title">
                                    <h4>{props.name}</h4>
									<h5>{props.position}</h5>
								</div>
								<p>{props.message}</p>
								<div className="team-social">
                                    {props.fb_link.length > 0 &&
										<a target="" href={props.fb_link} className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-facebook">
											<i className="fa fa-facebook"></i>
											<i className="fa fa-facebook"></i>
										</a>
                                    }
                                    {props.ln_link.length > 0 &&
									<a target="" href={props.ln_link} className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-linkedin">
										<i className="fa fa-linkedin"></i>
										<i className="fa fa-linkedin"></i>
									</a>
                                    }
                                    {props.tw_link.length > 0 &&
									<a target="" href={props.tw_link} className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-twitter">
										<i className="fa fa-twitter"></i>
										<i className="fa fa-twitter"></i>
									</a>
                                    }
								</div>
							</div>
							<div className="details-overly">
								<div className="team-title">
									
									<h4>{props.name}</h4>
									<h5>{props.position}</h5>
								</div>
								<div className="team-social">
                                    {props.fb_link.length > 0 &&
									<a target="" href={props.fb_link} className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-facebook">
										<i className="fa fa-facebook"></i>
										<i className="fa fa-facebook"></i>
									</a>
                                    }
                                    {props.ln_link.length > 0 &&
									<a target="" href={props.ln_link} className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-linkedin">
										<i className="fa fa-linkedin"></i>
										<i className="fa fa-linkedin"></i>
									</a>
                                    }
                                    {props.tw_link.length > 0 &&
									<a target="" href={props.tw_link} className="social-icon social-icon-small social-icon-light social-icon-rounded social-icon-twitter">
										<i className="fa fa-twitter"></i>
										<i className="fa fa-twitter"></i>
									</a>
                                    }
								</div>
							</div>
						</div>
					</div>
				</div>
        
    );
}

export default TeamProfile;