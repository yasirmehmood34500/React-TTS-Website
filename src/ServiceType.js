import React from 'react';

function ServiceType(props){
    let service_icon="fa fa-"+props.icon;
    return(
						<div className="col-xs-6">
							<div className="service-box">
								<div className="service-box-wrap">
									<i className={service_icon} ></i>
                                    <h3>{props.name}</h3>
									<p>{props.detail}</p>
								</div>
							</div>
						</div>
						
					
    );
}

export default ServiceType;