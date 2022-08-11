import React, {useState, useContext} from 'react';
import './style.css';
import logo from '../../images/logo.png'

import { AuthContext } from "../../../contexts/auth";


const MenuBar = ()=> {
    const { authenticated, logout } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        logout()
    }

    const buttonlog = () =>{
        if (authenticated){
            return <button className='buttonLogin' onClick={handleLogout}>Logout</button>
        }else{
            return <a className='buttonLogin' href='/login'>Login</a>
        }
    } 

    return (
        <header className='container'>
            <div className='containerCenter'>
                <a className='spanLogo' href='/'>
                    <img src={logo} className='logo'/>
                </a>
                <nav className={`spanButtons ${isOpen && "open"}`}>
                    <a className='button' href='/'>Home</a>
                    <a className='button' href='/produtos'>Produtos</a>
                    <a className='button' target="_blank" href='https://github.com/gabrielaSant0s'>Github</a>
                    {buttonlog()}
                </nav>
            </div>
            <div className={`navToggle ${isOpen && "open"}`}
            onClick={()=> setIsOpen(!isOpen)}>
                <div className='bar'></div>
            </div>
        </header>
    )
}

export default MenuBar