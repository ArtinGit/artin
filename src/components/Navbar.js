import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>Artin<span className='primary'>C</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                    <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                    <Link to={`/featured`}>Featured</Link>
                    </li>
                    <li>
                    <Link to={`/earn`}>Earn</Link>
                    </li>
                    <li>
                    <Link to={`/Footer`}>Contact</Link>
                    </li>
                </ul>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
