import React, {createContext, useState, useEffect} from "react";

import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")
    
        if (recoveredUser){
            setUser(recoveredUser)
        }

        setLoading(false)
    
    }, [])

    const login = (email, password) => {
        console.log("login", {email, password});

        const loggedUser = (
            fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
    
                    username: 'kminchelle',
                    password: '0lelplR',
    
                })
            })
            .then(res => res.json())
            .then(console.log))
        

        localStorage.setItem('user', email)

        if (email === 'kminchelle@qq.com' && password ==='0lelplR'){
            setUser(loggedUser)
            navigate("/produtos")
        }   
    }

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user")
        setUser(null)
        navigate("/login")
    }

    return(
        <AuthContext.Provider
        value={{ authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}