import React from 'react'
import { CartItems } from '../components/CartItems'
import { Footer } from '../components/Footer'
import {Navbar} from '../components/Navbar'
import '../scss/global.css'

export const CartPage = () => {
    return (
        <div className='cart-page'>
            <CartItems />
            <Footer />
        </div>
    )
}
