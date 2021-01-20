import React from 'react';

function Slider() {
  return (
	<section id="home-slider" class="home-slider image-bg">
	<div className='slider'>
        <div idName="particles-js"></div>
		<div idName="home-carousel" className="owl-carousel">
			 
			<div className="owl-slide">
				<div clclassNameass="slider-content">
					<div className="slider-caption">
						<div className="caption-container">
							<h2 className="banner-title-text"><span>Web Development </span> Proramming</h2>
							<p className="sub-title white-text">TimeTechSol Provide Web Development in PHP, NodeJs, ReactJs  React Native</p>
							<a className="btn btn-shutter-out-horizontal btn-transparent" href="#contact">CONTACT</a>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<a href="#about" className="scroll-arrow"><i className="fa fa-chevron-down infinite animated fade-In-Down"></i></a>
    </div>
	</section>
  );
}

export default Slider;
