import React from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { PopularProducts } from '../components/PopularProducts'
import { Products } from '../components/Products'
import '../scss/global.css'

export const HomePage = () => {
  return (
    <div className='home-page'>
      <Hero />
      <Products />
      <About />
      <PopularProducts />
      <Footer />
    </div>
  )
}
