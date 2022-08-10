import React, {useContext} from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate
} from 'react-router-dom'
import Home from "./pages/home"
import Product from "./pages/product"
import Login from "./pages/login"
import Registration from "./pages/registration"

import {AuthProvider, AuthContext} from './contexts/auth'

function App() {
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext)

    if(loading){
      return <div className='loading'>Carregando ...</div>
    }

    if (!authenticated){
      return <Navigate to="/login"/>
    }

    return children
  }
  

  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produtos" element={<Private><Product/></Private>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
