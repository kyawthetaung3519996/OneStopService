import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname.includes(path);

  return (
    <div id="sidebar-wrapper" className="d-flex flex-column flex-shrink-0">
      <div id="sidebar-image">
        <Link to="/dashboard">
          <img src="logo.png" alt="rss feed" />
        </Link>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className={isActive('/dashboard') ? 'active dropup' : ''}>
          <Link to="/dashboard" id="main-menu">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Dashboard
          </Link>
        </li>
        <li className={isActive('/categories') ? 'active dropup' : ''}>
          <Link to="/categories" id="main-menu">
            <FontAwesomeIcon icon={faList} className="me-2" />
            Category
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
