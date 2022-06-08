import React from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import '../scss/global.css'

export const AboutPage = () => {
    return (
        <div className='about-page'>
            <About />
            <Footer />
        </div>
    )
}
