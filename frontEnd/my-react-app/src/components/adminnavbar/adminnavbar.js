import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuth } from '../../context/authentication';
import './adminnavbar.css';

export default function AdminNavbar() {
  const auth = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <h4 className="m-3" style={{ color: 'orange' }}>RecipeRadar</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#userdashboard">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactus">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#app-download">
                App Download
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link btn" to="/addrecipe">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn logout-button" type="button" onClick={auth.logOut}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
