import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/home"
import Product from "./pages/product"
import Login from "./pages/login"
import Registration from "./pages/registration"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produtos" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
      </Routes>
    </Router>
  );
}

export default App;
