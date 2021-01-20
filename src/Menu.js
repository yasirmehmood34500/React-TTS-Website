import React from 'react';

function Menu() {
  return (
    <header id="header" class="header navbar-fixed-top nav-container">
		<div className="container">
    <div className="row">
      <div className="col-sm-12">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
              <a className="navbar-brand" href="/"><img className="logo" src="img/logo2.png" alt="logo" /></a>
            </div>
            <div idName="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a className="active" href="#home-slider">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Client</a></li>
                <li><a className="last" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  </header>
  );
}

export default Menu;
