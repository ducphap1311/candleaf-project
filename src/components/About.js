import React from 'react'
import '../scss/About.css'
import icon from '../images/icon.svg'
import aboutImg from '../images/about-img.png'

export const About = () => {
    
    return (
        <div className='about'>
            <div className='about-container'>
                <div className='about-text'>
                    <div className="about-info">
                        <h2 className='about-info__title'>Clean and fragrant soy wax</h2>
                        <p className='about-info__subtitle'>Made for your home and for your wellness</p>
                        <div className='about-info__icon-container'>
                            <img src={icon} alt="" className='check-icon-img'/><span><span className='ingredient-name'>Eco-sustainable:</span> All recyclable materials, 0% CO2 emissions</span>
                        </div>
                        <div className='about-info__icon-container'>
                            <img src={icon} alt="" className='check-icon-img'/><span><span className='ingredient-name'>Hyphoallergenic:</span> 100% natural, human friendly ingredients</span>
                        </div>
                        <div className='about-info__icon-container'>
                            <img src={icon} alt="" className='check-icon-img'/><span><span className='ingredient-name'>Handmade:</span> All candles are craftly made with love.</span>
                        </div>
                        <div className='about-info__icon-container'>
                            <img src={icon} alt="" className='check-icon-img'/><span><span className='ingredient-name'>Long burning:</span> No more waste. Created for last long.</span>
                        </div>
                    </div>                 
                    <button className='about-btn'>Learn more</button>
                </div>

                <div className='about-img'>
                    <img srcSet={`${aboutImg} 4x`} alt="about-img" />
                </div>
            </div>   
        </div>
    )
}
