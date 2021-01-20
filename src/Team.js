import React from 'react';
import './Team.css';
import TeamProfile from './TeamProfile';

function Team(){
    let mess="Our vision is to become major IT service provider leading performer, in Web & Software Development solutions in competitive global marketplace";
    return(
        <section id="team" className="our-team">
            <div className="container ">
                <div className="row ">
                    <div className="col-sm-12">
                        <div className="title-wrap">
                            <h2 className="title-text"><span>Our <strong>Teams</strong></span></h2>
                            <div className="title-line text-center">
                                <span className="short-line"></span>
                                <span className="long-line"></span>
                            </div>
                        </div>
                    </div>
                    
                    <TeamProfile name="Imran Iqbal" img="imran.jpg" position="CEO & Co-founder" message={mess} fb_link="https://www.facebook.com/imran.iqbal101" ln_link="https://www.linkedin.com/in/imran-iqbal-61bb88157/?fbclid=IwAR1BylVeg2VrELnCtW_7_8vzoWU33jA9MxAMY9WIfjTke-d3vKWm63gwJ9U" tw_link="" />
                    <TeamProfile name="Yasir Mehmood" img="yasir.jpg" position="Web Programmer & Co-founder" message={mess} fb_link="https://www.facebook.com/yasiryasir34500" ln_link="https://www.linkedin.com/in/yasirmehmood34500/" tw_link="https://twitter.com/yasirmehmood345" />
                    <TeamProfile name="Muhammad Usman" img="usman.jpg" position="Symfony Developer" message={mess} fb_link="" ln_link="" tw_link="" />
                    <TeamProfile name="Muhammad Shakeel" img="shakeel.jpg" position="React Native Developer" message={mess} fb_link="" ln_link="" tw_link="" />
                    <TeamProfile name="Zia Rasool" img="zia.jpg" position="WordPress Developer" message={mess} fb_link="" ln_link="" tw_link="" />
                    <TeamProfile name="Anjum Muneer " img="anjum.jpg" position="React Developer" message={mess} fb_link="" ln_link="" tw_link="" />
                    <TeamProfile name="Muhammad Ahsan" img="user.png" position="WordPress Developer" message={mess} fb_link="" ln_link="" tw_link="" />
                    <TeamProfile name="Mubeen Majeed" img="mubeen.jpg" position="Android Developer" message={mess} fb_link="" ln_link="" tw_link="" />
                    <TeamProfile name="Inam Ul Haq" img="inam.jpg" position="Laravel Developer" message={mess} fb_link="" ln_link="" tw_link="" />
                    <TeamProfile name="Faheem Jameel" img="faheem.jpg" position="Graphic Designer" message={mess} fb_link="" ln_link="" tw_link="" />
                    {/* <TeamProfile name="User Name" img="user.png" position="Position" message={mess} fb_link="" ln_link="" tw_link="" /> */}

                </div>
            </div>
        </section>
    );
}

export default Team;