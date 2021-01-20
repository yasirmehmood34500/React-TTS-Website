import React from 'react';
import PageError from './PageError';
import Login from './Login';
import TeamMember from './TeamMember';
import Contact from './Contact';
import Portfolio from './Portfolio';
import PortfolioType from './PortfolioType';
import Slider from './Slider';
import Client from './Client';
import Job from './Job';
import Internship from './Internship';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import API from './API';


function Admin(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/AdminLogin" exact component={Login} />
                    <Route path="/AdminTeamMember" exact component={TeamMember} />
                    <Route path="/AdminContact" exact component={Contact} />
                    <Route path="/AdminPortfolio" exact component={Portfolio} />
                    <Route path="/AdminPortfolioType" exact component={PortfolioType} />
                    <Route path="/AdminSlider" exact component={Slider} />
                    <Route path="/AdminClient" exact component={Client} />
                    <Route path="/AdminInternship" exact component={Internship} />
                    <Route path="/AdminJob" exact component={Job} />
                    <Route path="/AdminAPI" exact component={API} />
                    <Route path="/"  component={PageError} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Admin;