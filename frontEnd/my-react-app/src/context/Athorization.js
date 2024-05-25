import {Children, createContext, useContext, useState} from 'react'
import { Axios } from 'axios';
const AuthContext=createContext()

const AuthProvider=({Children})=>{
    const [token,setToken]=useState(null);
    const loginAtion=async(data)=>{
        try{
           const response=await Axios.post("http://localhost:3001/api/auth/login",{...data})
           setToken(response.data.token)
           localStorage.setItem("token",response.data.token)
           return;
        }catch(err){
            console.error(err)
        }
    }
    return(
        <AuthContext.Provider value={{token,loginAtion}}>
        {Children}
        </AuthContext.Provider>
    )
    
}
export default AuthProvider
export const useAuth=()=>{
     return useContext(AuthContext)       
}