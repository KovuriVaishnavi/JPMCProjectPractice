import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authentication';
import './protectdashboard.css';
export default function AdminProtect() {
  const auth = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      setIsAuthenticated(false);
    } else if (user !== 1) {
      setUserRole(0);
    } else {
      setIsAuthenticated(true);
      setUserRole(1);
    }
  }, []);

  if (isAuthenticated === null) {
    return (<div className="unauthorized-message">
    <img src='https://media1.tenor.com/images/13491e357e7389879d246df81d252d38/tenor.gif?itemid=15155511' className='emoji'></img>
      <p>You are not authorized to view this page!</p>
      <p>Maybe it's time to reconsider your life choices... 🤔</p>
      <p><a href="/login" className="login-link">Go to Login</a></p>
    </div>);
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
