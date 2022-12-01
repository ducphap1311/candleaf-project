import React, {useState, useEffect, useRef} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logoImg from '../images/logo-img.svg'
import logoText from '../images/logo-text.svg'
import userIcon from '../images/user-icon.svg'
import cartIcon from '../images/card-icon.svg'
import menuIcon from '../images/hamburger-menu.png';
import closeIcon from '../images/close-menu.png';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsLogin } from '../features/cart/cartSlice'

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const { amount, isLogin } = useSelector((store) => store.cart)
    const linksContainerRef = useRef();
    const linksRef = useRef();
    const [open, setOpen] = useState(false)
    const [userName, setUserName] = useState("")
    const [out, setOut] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    useEffect(() => {
        const user = localStorage.getItem("userName");
        if(user){
            setUserName(user)
            setOpen(false)
        } else {
            setUserName("")
        }
    }, [isLogin])

    useEffect(() => {
        const user = localStorage.getItem("userName")
        if(user){
            dispatch(checkIsLogin())
        }
    }, [])

    const userLogOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userName")
        dispatch(checkIsLogin())
    }

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
                        <li className='navbar-links__user-container'>
                            {isLogin ? <div className='username-container'>
                                    <p onClick={() => setOut(!out)}>{userName}</p>
                                    {out && <p onClick={userLogOut}>Log out</p>}
                                    </div> : <img src={userIcon} alt="user" className='navbar-links__user-icon' onClick={() => setOpen(!open)}/>}
                            {open && <div className='sign'>
                                        <Link to='/signup' className='link-sign' onClick={() => setOpen(false)}>Sign up</Link>
                                        <Link to='/signin' className='link-sign'>Sign in</Link>
                                    </div>}
                            
                        </li>
                        <li>
                            <Link to="/cart" className='navbar-header__cart'>
                                <img src={cartIcon} alt="card" className='navbar-header__cart-img' />
                                <div className='navbar-header__cart-amount'>{amount}</div>
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
                        <li className='navbar-links__user-container'>
                            {isLogin ? <div className='username-container'>
                                    <p onClick={() => setOut(!out)}>{userName}</p>
                                    {out && <p onClick={userLogOut}>Log out</p>}
                                    </div> : <img src={userIcon} alt="user" className='navbar-links__user-icon' onClick={() => setOpen(!open)}/>}
                            {open && <div className='sign'>
                                        <Link to='/signup' className='link' onClick={() => setOpen(false)}>Sign up</Link>
                                        <Link to='/signin' className='link'>Sign in</Link>
                                    </div>}
                            
                        </li>
                        <li>
                            <Link to="/cart" className='navbar-links__cart-container'>
                                <img src={cartIcon} alt="card" className='navbar-links__cart-icon' />
                                <div className='navbar-links__cart-amount'>{amount}</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
