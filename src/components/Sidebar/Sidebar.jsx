import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Sidebar() {
  let currentLocation = window.location.pathname;
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.png")} alt="logo" /></a>
          {/* <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg" )} alt="logo" /></a> */}
        </div>
        <ul className="nav">
          <li className={currentLocation == '/' ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className={currentLocation == '/task' ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/task">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Form Elements</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default withRouter(Sidebar);