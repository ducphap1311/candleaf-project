import React from 'react'
import footerImg from '../images/footer-icon.svg'
import footerText from '../images/footer-text.png'

export const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-underline'></div>
                <div className='footer-info'>
                    <div className='footer-header'>
                        <div className='footer-header__logo'>
                            <img src={footerImg} alt="footer-logo" className='footer-header__img'/>
                            <img srcSet={`${footerText} 4x`} className='footer-header__title'></img>
                        </div>
                        <p className='footer-header__subtitle'>Your natural candle made for your home and for your wellness.</p>
                    </div>
                    <div className='footer-informations'>
                        <div className='contact-info'>
                            <h4 className='contact-info__title'>CONTACT INFO</h4>
                            <div className='contact-info__informations'>
                                <p><i className='fa fa-map-marker'></i>CuKuin District, DakLak Province</p>
                                <p><i className='fa fa-phone'></i>0825 820 709</p>
                                <p><i className='fa fa-envelope'></i>hophap1311@gmail.com</p>
                            </div>
                        </div>
                        <div className='about-us'>
                            <h4 className='about-us__title'>ABOUT US</h4>
                            <div className='about-us__informations'>
                                <p><i className='fa fa-arrow-right'></i>Help</p>
                                <p><i className='fa fa-arrow-right'></i>Shipping</p>
                                <p><i className='fa fa-arrow-right'></i>Affiliate</p>
                            </div>
                        </div>
                        <div className='connect-with-us'>
                            <h4 className='connect-with-us__title'>CONNECT WITH US</h4>
                            <div className='connect-with-us__informations'>
                                <p><a href='https://www.facebook.com/profile.php?id=100009562365980' target='_blank'><i className='fab fa-facebook'></i>FaceBook</a></p>
                                <p><a href='https://www.facebook.com/profile.php?id=100009562365980' target='_blank'><i className='fab fa-instagram'></i>Instagram</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
