import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/home"
import Product from "./pages/product"
import Login from "./pages/login"
import Registration from "./pages/registration"

import {AuthProvider} from './contexts/auth'

function App() {
  

  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produtos" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
