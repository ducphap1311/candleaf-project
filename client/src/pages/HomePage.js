import React, {useEffect, useState} from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'

export const HomePage = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const timeout = setTimeout(()=> {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  if(loading){
    return <h1 style={{textAlign: 'center', marginTop: '200px'}}>Loading...</h1>
  }
  
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
