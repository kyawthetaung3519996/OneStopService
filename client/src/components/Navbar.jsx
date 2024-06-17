import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleMenu }) {
  return (
    <nav className="navbar navbar-expand-xsm navbar-wrapper">
      <div className="container-fluid">
        <div className="navbar-collapse">
          <a href="#" id="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} id="fa-bars" />
            <FontAwesomeIcon icon={faAngleDoubleLeft} id="fa-arrow" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
