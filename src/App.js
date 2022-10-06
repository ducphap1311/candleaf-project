import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {Navbar} from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { SingleProductPage } from './pages/SingleProductPage';
import { CartPage } from './pages/CartPage';
import { ProductsPage } from './pages/ProductsPage';
import ScrollToTop from './components/ScrollToTop';
import './scss/main.css';
import { useEffect } from 'react';
import { getTotalAmount } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { ShippingPage } from './pages/ShippingPage';

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(getTotalAmount())
  }, [cartItems])

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/singleproduct/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/authentication' element={<AuthenticationPage />} />
        <Route path='/shipping' element={<ShippingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
