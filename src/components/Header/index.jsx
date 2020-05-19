import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="myNavbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Homepage</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/task">Task</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#myModal">
                        Sign in
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header;