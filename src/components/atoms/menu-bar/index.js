import React, {useState} from 'react';
import './style.css';
import logo from '../../images/logo.png'


const MenuBar = ()=> {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='container'>
            <div className='containerCenter'>
                <a className='spanLogo' href='/'>
                    <img src={logo} className='logo'/>
                </a>
                <nav className={`spanButtons ${isOpen && "open"}`}>
                    <a className='button' href='#'>Produtos</a>
                    <a className='button' href='#'>Github</a>
                    <a className='buttonLogin' href='#'>Login</a>
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