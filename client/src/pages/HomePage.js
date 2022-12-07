import React, {useEffect} from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'
import { getAllCandleafs } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export const HomePage = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(getAllCandleafs())
  }, [])

  if(isLoading){
    return <h1 style={{textAlign: 'center', marginTop: '200px', fontFamily: 'sans-serif', color: '#474747'}}>Loading...</h1>
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
