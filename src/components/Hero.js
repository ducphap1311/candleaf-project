import React from 'react'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <img src='./images/bg-image.jpg' alt='candleaf' className="hero-img"/>
                <div className='hero-modal'>
                    <h1 className='hero-modal__title'>The nature candle</h1>
                    <p className='hero-modal__subtile'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                    <button className='hero-modal__discovery-btn'>Discovery our collection</button>
                </div>
            </div>
        </div>
    )
}
