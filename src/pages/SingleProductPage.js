import React from 'react'
import { SingleProduct } from '../components/SingleProduct'
import {Footer} from '../components/Footer'
import '../scss/global.css'

export const SingleProductPage = () => {

    return (
        <div className='single-product-page'>
            <SingleProduct />
            <Footer />
        </div>
    )
}
