import React from 'react';
import './Client.css';

function Client(){
    return(
        <section id="blog" className="blog parallax">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-wrap">
                            <h2 className="title-text"><span>OUR <strong>Clients</strong></span></h2>
                            <div className="title-line text-center">
                                <span className="short-line"></span>
                                <span className="long-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="owl-carousel">

                                <div className="item">
                                    <article className="">
                                        <div className="post-thumb text-center">
                                            <img src="upload/clients/uaf.jpg" alt="UAF Portfolio" classNameName="client-img" />
                                        </div>
                                    </article>
                                </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Client;