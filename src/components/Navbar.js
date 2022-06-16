import React, {useState, useEffect, useRef} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logoImg from '../images/logo-img.svg'
import logoText from '../images/logo-text.svg'
import userIcon from '../images/user-icon.svg'
import cardIcon from '../images/card-icon.svg'
import menuIcon from '../images/hamburger-menu.png';
import closeIcon from '../images/close-menu.png';

import { useSelector } from 'react-redux'

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const {amount} = useSelector((store) => store.cart)
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-header'>
                    <div className='navbar-header__menu'>
                        {showLinks ? <img srcSet={`${closeIcon} 4x`} alt="close-icon" onClick={() => setShowLinks(!showLinks)} className='navbar-header__close-icon'></img>: <img srcSet={`${menuIcon} 4x`} alt="menu-icon" onClick={() => setShowLinks(!showLinks)} className='navbar-header__menu-icon'></img>}
                    </div>
                    <Link to="/" className='navbar-header__logo-container'>
                        <img src={logoImg} alt='candleaf-img' className='navbar-header__logo-img'/> 
                        <img src={logoText} alt='candleaf-text' className='navbar-header__logo-text'/>
                    </Link>   
                    <ul className='navbar-header__icons-links'>
                        <li>
                            <img src={userIcon} alt="user"/>
                        </li>
                        <li>
                            <Link to="/cart" className='navbar-header__cart'>
                                <img src={cardIcon} alt="card" className='navbar-header__card-img' />
                                <div className='navbar-header__card-amount'>{amount}</div>
                            </Link>
                        </li>
                    </ul>    
                </div>
                <div className='navbar-links' ref={linksContainerRef}>
                    <ul className='navbar-links__text-links' ref={linksRef}>
                        <li>
                            <NavLink to="/" className='link'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className='link'>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className='link'>About</NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-links__icons-links'>
                        <li>
                            <img src={userIcon} alt="user" className='navbar-links__user-img'/>
                        </li>
                        <li>
                            <Link to="/cart" className='navbar-links__cart'>
                                <img src={cardIcon} alt="card" className='navbar-links__card-img' />
                                <div className='navbar-links__card-amount'>{amount}</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
