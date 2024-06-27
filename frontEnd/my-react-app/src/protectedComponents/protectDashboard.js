import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authentication';

export default function AdminProtect() {
  const auth = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      setIsAuthenticated(false);
    } else if (user.usertype !== 1) {
      setUserRole(0);
    } else {
      setIsAuthenticated(true);
      setUserRole(1);
    }
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  if (userRole === 0) {
    console.log('from admin protect')
    return <Navigate to="/userdashboard" />;
  }
  console.log('from admin protect')
  return <Outlet />;
}
