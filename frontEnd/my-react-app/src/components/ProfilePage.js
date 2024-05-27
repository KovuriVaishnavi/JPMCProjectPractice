import React, { useState } from 'react';
import './ProfilePage.css';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ProfileNavBar from './ProfileNavBar';
import UserPreferences from './UserPreferences';

const ProfilePage = () => {
  const [showPreferences, setShowPreferences] = useState(false);

  const handlePreferencesClick = () => {
    setShowPreferences(prevState => !prevState);
  };

  return (
    <div className="home-container">
      <div className="content">
        <div className="image-container">
          <img src={'/SHINCHAN.jpg'} alt="Profile" className="home-logo" style={{ width: '90%', height: '90%' }} />
          <div className="icon-overlay">
            <CameraAltOutlinedIcon fontSize="large" />
          </div>
        </div>
        <div className="text-container mt-1">
          <h1><b>Name</b></h1>
        </div>
        <button className='circular-button mb-3 mt-1'>Log Out</button>
        <ProfileNavBar onPreferencesClick={handlePreferencesClick} />
        {showPreferences && <UserPreferences />}
      </div>
    </div>
  );
};

export default ProfilePage;
