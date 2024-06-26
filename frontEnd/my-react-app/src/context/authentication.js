import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate(); 
    const loginAction = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/api/auth/login", { ...data });
            console.log('Response data:', response.data);
    
            const { token, user, userDetails } = response.data;
    
            // Ensure userDetails is valid before storing
            if (userDetails && typeof userDetails === 'object') {
                setUserDetails(userDetails);  // assuming userDetails is an object
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
            } else {
                console.error('Invalid userDetails received:', userDetails);
                setUserDetails({});
                localStorage.setItem("userDetails", JSON.stringify({}));
            }
    
            setToken(token);
            setUser(user);
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
    
            return user;
        } catch (err) {
            console.error('Login error:', err);
        }
    };
    

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        const savedUserDetails = localStorage.getItem("userDetails");  // retrieve userDetails
        if (savedToken) {
          setToken(savedToken);
        }
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
        if (savedUserDetails) {
            try {
              setUserDetails(JSON.parse(savedUserDetails));
            } catch (error) {
              console.error('Error parsing saved user details:', error);
              setUserDetails({});
            }
          }
    }, []);
     
    const logOut = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userDetails");  // remove userDetails
        setToken(null);
        setUser(null);
        setUserDetails({});  // reset userDetails
        navigate('/'); 
        console.log('Token and user details removed from localStorage');
    }

    return (
        <AuthContext.Provider value={{ token, user, userDetails, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};
