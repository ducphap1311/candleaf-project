import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <img src='./images/bg-image.jpg' alt='candleaf' className="hero-img"/>
                <div className='hero-modal'>
                    <h1 className='hero-modal__title'>The nature candle</h1>
                    <p className='hero-modal__subtitle'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                    <Link to="/products" className='hero-modal__discovery-btn'>Discovery our collection</Link>
                </div>
            </div>
        </div>
    )
}
