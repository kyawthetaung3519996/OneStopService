import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes';
import "./features/categories/Category.css"
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import NavbarTitle from './components/NavbarTitle';
import './assets/stylesheets/navbar.css'
import './assets/stylesheets/sidebar.css'
import './assets/stylesheets/custom.css'
import { useState } from 'react';

function App() {
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  const toggleMenu = () => {
    setMenuDisplayed(!menuDisplayed);
  };

  return (
    <Router>
      <div id="wrapper" className={menuDisplayed ? 'menuDisplayed' : ''}>
        <div className="app">
          <Sidebar />
          <div id="page-content-wrapper">
            <Navbar  toggleMenu={toggleMenu} />
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App
