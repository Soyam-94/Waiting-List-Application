import React from "react";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <React.Fragment>
        <div className="container mt-5">
            <div className="waitlist-block">
                <h2 className="text-center mb-3">Waitlist Registration </h2>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Join Waiting List</Link>
                    </li>
                    <li>
                        <Link to="/status">View Status</Link>
                    </li>
                    </ul>
                </nav>

                <Outlet />
            </div>
        </div>
    </React.Fragment>
  )
};

export default Layout;