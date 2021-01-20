import React from 'react';


function Login(){
    return(
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper auth-page">
            <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
                <div className="row w-100">
                <div className="col-lg-4 mx-auto">
                    <div className="auto-form-wrapper">
                    <form action="" method="post">
                        <div className="form-group">
                        <label className="label">Username</label>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Username" name="username" />
                            <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="mdi mdi-check-circle-outline"></i>
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <label className="label">Password</label>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="*********" name="password" />
                            <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="mdi mdi-check-circle-outline"></i>
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary submit-btn btn-block" type="submit" name="login_btn">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Login;