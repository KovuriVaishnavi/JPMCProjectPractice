import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'; 
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user,setUser]=useState(null);
    const navigate = useNavigate(); 

    const loginAction = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/api/auth/login", { ...data });
            setToken(response.data.token);
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            return response.data.user;
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        if (savedToken) {
          setToken(savedToken);
        }
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      }, []);
     
    const logOut = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        navigate('/'); 
        console.log('Token removed from localStorage');
    }

    return (
        <AuthContext.Provider value={{ token,user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};
