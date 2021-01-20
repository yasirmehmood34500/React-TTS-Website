import React from 'react';

function CSideBar(){
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <div className="nav-link">
              <div className="user-wrapper">
                <div className="profile-image">
                  <img src="upload/profile/yasir.jpg" alt="" />
                </div>
                <div className="text-wrapper">
                  <p className="profile-name">Yasir Mehmood</p>
                  <div>
                    <small className="designation text-muted">Yasir</small>
                    <span className="status-indicator online"></span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AdminTeamMember">
              <i className="menu-icon mdi mdi-television"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="/AdminContact">
              <i className="menu-icon mdi mdi-television"></i>
              <span className="menu-title">Contact Message</span>
            </a>
          </li>
          
            <li className="nav-item">
            <a className="nav-link" href="/AdminPortfolioType">
              <i className="menu-icon mdi mdi-backup-restore"></i>
              <span className="menu-title">Portfolio Type</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AdminPortfolio">
              <i className="menu-icon mdi mdi-chart-line"></i>
              <span className="menu-title">Portfolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AdminSlider">
              <i className="menu-icon mdi mdi-chart-line"></i>
              <span className="menu-title">Slider</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AdminClient">
              <i className="menu-icon mdi mdi-chart-line"></i>
              <span className="menu-title">Client</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AdminTeamMember">
              <i className="menu-icon mdi mdi-chart-line"></i>
              <span className="menu-title">Team Meber</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AdminInternship">
              <i className="menu-icon mdi mdi-chart-line"></i>
              <span className="menu-title">Internship</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AdminJob">
              <i className="menu-icon mdi mdi-chart-line"></i>
              <span className="menu-title">Job</span>
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/AdminLogout">
              <i className="menu-icon mdi mdi-table"></i>
              <span className="menu-title">Logout</span>
            </a>
          </li>
          
          
          
          
        </ul>
      </nav>
    );
}

export default CSideBar;