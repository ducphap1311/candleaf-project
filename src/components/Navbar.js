import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../scss/Navbar.css'
import logoImg from '../images/logo-img.svg'
import logoText from '../images/logo-text.svg'
import userIcon from '../images/user-icon.svg'
import cardIcon from '../images/card-icon.svg'
// import { useGlobalContext } from '../context'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const [show, setShow] = useState(false)
    // const {amount} = useGlobalContext();
    const {amount} = useSelector((store) => store.cart)

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-header'>
                    <Link to="/" className='navbar-header__logo-container'>
                        <img src={logoImg} alt='candleaf-img' className='navbar-header__logo-img'/> 
                        <img src={logoText} alt='candleaf-text' className='navbar-header__logo-text'/>
                    </Link>
                    <div className='navbar-header__menu'>
                        <i className='fas fa-bars' onClick={() => setShow(!show)}></i>
                    </div>
                </div>
                <div className='navbar-links'>
                    <ul className='navbar-links__text-links'>
                        <li>
                            <NavLink to="/" className='link'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className='link'>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className='link'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='link'>Contact us</NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-links__icons-links'>
                        <li>
                            <img src={userIcon} alt="user"/>
                        </li>
                        <li>
                            <Link to="/cart" className='navbar-links__cart'>
                                <img src={cardIcon} alt="card" className='navbar-links__card-img' />
                                <div className='navbar-links__card-amount'>{amount}</div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`${show ? 'sidebar show-sidebar': 'sidebar'}`}>
                    <div className='sidebar-header'>
                        <img src={logoImg} alt='candleaf' className='sidebar-header__logo-img'/> 
                        <i className='fa fa-times sidebar-close-btn' onClick={() => setShow(false)}></i>
                    </div>
                    <ul className='sidebar-links'>
                        <li>
                            <NavLink to="/" className='link' onClick={() => setShow(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className='link' onClick={() => setShow(false)}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className='link' onClick={() => setShow(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className='link' onClick={() => setShow(false)}>Contact us</NavLink>
                        </li>
                    </ul>
                    <ul className='sidebar-icons'>
                        <li>
                            <img src={userIcon} alt="user" onClick={() => setShow(false)}/>
                        </li>
                        <li>
                            <Link to="/cart" className='sidebar-icons__cart' onClick={() => setShow(false)}>
                                <img src={cardIcon} alt="card"/>
                                <div className='sidebar-icons__card-amount'>{amount}</div>
                            </Link>
                        </li>
                    </ul>
                </div>             
            </div>
        </div>
    )
}
