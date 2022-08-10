import React, {createContext, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)

  const login = (email, password) => {
    console.log("login", {email, password});
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
  }

  const logout = () => {
    console.log("logout");
  }

  return(
    <AuthContext.Provider
    value={{ authenticated: !!user, user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}