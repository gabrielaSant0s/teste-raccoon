import React, {createContext, useState} from "react";

import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const login = (email, password) => {
        console.log("login", {email, password});

        if (email === 'kminchelle@qq.com' && password ==='0lelplR'){
            setUser(
                fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
    
                    username: 'kminchelle',
                    password: '0lelplR',
    
                })
            })
            .then(res => res.json())
            .then(console.log)
            )
            navigate("/produtos")
        }   
    }

    const logout = () => {
        console.log("logout");
        setUser(null)
        navigate("/login")
    }

    return(
        <AuthContext.Provider
        value={{ authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}