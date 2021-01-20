import React from 'react';
import './CTopBar.css';

function CTopBar(){
    return(
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a className="navbar-brand brand-logo" href="/AdminTeamMember">
          <b className="brand-text">Dashboard</b>
        </a>
        <a className="navbar-brand brand-logo-mini" href="/AdminTeamMember">
          <b className="brand-text">Dashboard</b>
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center">
        
        <ul className="navbar-nav navbar-nav-right">
          
          <li className="nav-item dropdown d-none d-xl-inline-block">
            <a className="nav-link dropdown-toggle" id="UserDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
              <span className="profile-text">Yasir Mehmood Dashboard</span>
              <img className="img-xs rounded-circle" src="upload/profile/yasir.jpg" alt="" />
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
              
              <a href="logout.php" className="dropdown-item">
                Sign Out
              </a>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    );
}

export default CTopBar;