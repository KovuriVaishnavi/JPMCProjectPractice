import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import React, { useState } from 'react';
import ProfileNavBar from '../ProfileNavbar/ProfileNavBar';
import UserPreferences from '../UserPreferences/UserPreferences';
import './ProfilePage.css';
import { useAuth } from '../../context/authentication';
import ShowFavorites from '../showFavorites/showFavourites';
const ProfilePage = () => {
  const auth = useAuth();
  const [showPreferences, setShowPreferences] = useState(false);
  const [view, setView] = useState(''); // 'preferences' or 'favourites'

  const handlePreferencesClick = (type) => {
    setView(type);
    setShowPreferences(prevState => type === 'preferences' ? !prevState : false);
  };

  // Retrieve username from localStorage
  const username = JSON.parse(localStorage.getItem('user')).username;

  return (
    <div className="home-container">
      <div className="content">
        <div className="image-container">
          <img src={'https://source.unsplash.com/random/900×700/?blankprofilephoto'} alt="Profile" className="home-logo" style={{ width: '90%', height: '90%' }} />
          <div className="icon-overlay">
            <CameraAltOutlinedIcon fontSize="large" />
          </div>
        </div>
        <div className="text-container mt-1">
          <h1>{username}</h1>
        </div>
        <button className='circular-button mb-3 mt-1' onClick={auth.logOut}>Log Out</button>
        <ProfileNavBar onPreferencesClick={handlePreferencesClick} />
        {view === 'preferences' && showPreferences && <UserPreferences />}
        {view === 'favourites' && <ShowFavorites/> }
      </div>
    </div>
  );
};

export default ProfilePage;
