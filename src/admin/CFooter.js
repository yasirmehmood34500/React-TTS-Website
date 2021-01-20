import React from 'react';

function CFooter(){
    return(
        <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2020
              <a href="/" >TimeTechSol</a>. All rights reserved.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">TimeTechSol || Admin Panel
              <i className="mdi mdi-heart text-danger"></i>
            </span>
          </div>
    );
}

export default CFooter;