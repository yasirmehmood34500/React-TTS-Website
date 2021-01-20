import React from 'react';
import './TeamMember.css';
import CTopBar from './CTopBar';
import CSideBar from './CSideBar';
import CFooter from './CFooter';

function TeamMember(){
    
    return(
                    <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <CTopBar />
                        </div>
                        <div className="col-lg-2">
                            <CSideBar />
                        </div>
                        <div className="col-lg-10">
                        <div className="card">
                            <div className="card-body">
                            <h4 className="card-title">All Team Member List</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th> Profile</th>
                                
                                    <th>Email /  Position</th>
                                    
                                    
                                    <th>Social Link</th>
                                    <th colspan="2" className="text-center">Action</th>
                                    <th>Add Work</th>
                                    <th>Add Skill</th>
                                </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr>
                                        <td>1</td>
                                        <td>
                                        <a href="/">Yasir Mehmood </a>
                                    </td>
                                    <td>
                                        <img src="../upload/team_profile/yasir.jpg" className="profile_img" alt="" />
                                    </td>
                                        <td>
                                       Yasirmehmood34500@gmail.com <br></br>
                                        Web Programmer & Co-founder
                                        </td>
                                        
                                        <td>
                                            <a href="/" >Facebook</a> <br></br>
                                            <a href="/" >Linkedin</a> <br></br>
                                            <a href="/" >Twitter</a> <br></br>
                                        </td>
                                        <td><a href="/" className="btn btn-danger">Block</a></td>
                                        
                                        <td><a href="/" className="btn btn-info">Approve</a></td>                            
                                        
                                        <td><a href="/" className="btn btn-success">UnBlock</a></td>
                                        
                                        <td>
                                        <a href="/" className="btn btn-info">Update</a>
                                        </td>
                                        <td>
                                        <a href="/" className="btn btn-primary">Working</a>
                                        </td>
                                        <td>
                                        <a href="/" className="btn btn-success">Skill</a>
                                        </td>
                                        
                                    </tr>
                                <tr>
                                    
                                </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                        <footer className="footer">
                            <CFooter />
                        </footer>
                    </div>
                    
                
    );
}

export default TeamMember;