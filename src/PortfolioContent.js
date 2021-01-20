import React from 'react';

function PortfolioContent(props){
    let img_path="upload/portfolio/"+props.img;
    let cate="col-md-3 col-xs-6 no-space isotopeSelector "+props.category;
    return(
                                <div className={cate} >
                                    <div className="portfolio-wrapper">
                                        <img src={img_path} alt={props.name} className="portfolio-img" />									
                                        <div className="overly-style2">
                                            <div className="overly-inner">
                                                <div className="pfolio-link">
                                                    {props.link.length > 0 &&
                                                        <a title="Details" href={props.link} ><i className="fa fa-link"></i></a>
                                                    }
                                                    <a data-lightbox="websites" data-title={props.name} href={img_path}><i className="fa fa-search-plus"></i></a>
                                                </div>
                                                <div className="pfolio-caption">
                                                    <h3><a href="/">{props.name}</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    );
}

export default PortfolioContent;