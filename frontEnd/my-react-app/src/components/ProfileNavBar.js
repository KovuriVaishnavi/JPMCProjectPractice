import React from 'react';
import './ProfileNavBar.css';

const ProfileNavBar = ({ onPreferencesClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">Saved Recipes</li>
        <li className="navbar-item" onClick={onPreferencesClick}>Preferences</li>
        <li className="navbar-item">Favourites</li>
      </ul>
    </nav>
  );
};

export default ProfileNavBar;
