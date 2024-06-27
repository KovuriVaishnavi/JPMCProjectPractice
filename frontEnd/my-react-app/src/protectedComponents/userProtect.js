import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authentication';
import { useState,useEffect } from 'react';
export default function UserProtect() {
  const auth = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      setIsAuthenticated(false);
    } else if (user.usertype !== 0) {
      setUserRole(1);
    } else {
      setIsAuthenticated(true);
      setUserRole(0);
    }
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  if (userRole === 1) {
    console.log("from user protected");
    return <Navigate to="/admindashboard" />;
  }
   console.log('from user protected');
  return <Outlet />;
}