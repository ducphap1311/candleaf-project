import React from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'

export const HomePage = () => {
  return (
    <div className='home-page'>
      <Hero />
      <Products number={8}/>
      <About />
      <Products popular={true}/>
      <Footer />
    </div>
  )
}
