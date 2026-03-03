import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const authApi = axios.create({  
    baseURL:"http://localhost:5000/api/v1/user"
});

export const AuthProvider = ({children})=>{
   

    const [userData , setUserData ]= useState(null);

    const handleRegister = async(name , username , password ) =>{
        try {
            let request =await authApi.post("/register" , {
                name :name ,
                username: username,
                password : password 
            })

            if(request.status===httpStatus.OK){
                return request.data.message;
            }
        } catch (error) {
            throw error 
        }
    }
  
    const handleLogin = async(username , password )=>{
        try {
            let request = await authApi.post("/login" , {
                username : username ,
                password : password 
            });
            if(request.status=== httpStatus.OK){
                localStorage.setItem("token", request.data.token)
                router("/")
            }  
        } catch (error) {
            throw error;
        }
    }

    const router = useNavigate();

    const data ={ 
        userData , setUserData, handleRegister,handleLogin 
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}


