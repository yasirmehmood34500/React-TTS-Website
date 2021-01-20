import React from 'react';
import './Portfolio.css';
import PortfolioMenu from './PortfolioMenu';
import PortfolioContent from './PortfolioContent';

function Portfolio(){
    return(
        <section id="portfolio" className="filter-section portfolio-style2 parallax">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-wrap">
                            <h2 className="title-text"><span>Our <strong>Portfolio</strong></span></h2>
                            <div className="title-line text-center">
                                <span className="short-line"></span>
                                <span className="long-line"></span>
                            </div>
                        </div>
                        <div className="intro-text text-center">
                            
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="filter-container isotopeFilters">
                            <ul className="list-inline filter">
                                <li className="active"><a href="/" data-filter="*">All </a></li>
                                <PortfolioMenu data_filter=".1" name="Website" />
                                <PortfolioMenu data_filter=".2" name="Software" />
                                <PortfolioMenu data_filter=".3" name="Game" />
                                <PortfolioMenu data_filter=".4" name="Mobile" />
                                <PortfolioMenu data_filter=".5" name="Logo Design" />
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12">	
                        <div className="row">
                            <div className="isotopeContainer">                                
                                <PortfolioContent category="1" name="TimeTechSol" img="timetechsol.jpg" link="https://timetechsol.com" />
                                <PortfolioContent category="1" name="Business Directory" img="businessdirectory.jpg" link="" />
                                <PortfolioContent category="1" name="Dare Muslim School" img="daremuslim.jpg" link="" />
                                <PortfolioContent category="1" name="" img="ebsixone.jpg" link="" />
                                <PortfolioContent category="1" name="Fs Publishers" img="fspublisher.jpg" link="" />
                                <PortfolioContent category="1" name="" img="getdone.jpg" link="" />
                                <PortfolioContent category="1" name="HitCarts" img="mayas.jpg" link="" />
                                <PortfolioContent category="1" name="PSFST" img="psfst.jpg" link="" />
                                <PortfolioContent category="1" name="QEC UAF" img="qecuaf.jpg" link="" />
                                <PortfolioContent category="1" name="SAMS" img="sams.jpg" link="" />
                                <PortfolioContent category="1" name="" img="sciassists.jpg" link="" />
                                <PortfolioContent category="1" name="Swott" img="swott.jpg" link="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;