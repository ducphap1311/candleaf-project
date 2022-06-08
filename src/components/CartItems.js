import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import '../scss/CartItems.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseItem, decreaseItem, removeItem  } from '../features/cart/cartSlice'

export const CartItems = () => {
    // const {cartItems, increase, decrease, removeItem} = useGlobalContext();
    const dispatch = useDispatch();
    const {cartItems} = useSelector((store) => store.cart)

    if(cartItems.length !== 0){
        return (
            <div className='cart-items'>
                <div className='cart-items-container'>
                    <div className='cart-items-header'>
                        <h1 className='cart-items-header__title'>Your cart items</h1>
                        <Link to='/products'><p className='cart-items-header__back-to-shop-link'>Back to shopping</p></Link>
                    </div>
                    <div className='cart-items-list'>
                        <div className='title'>
                            <h3 className='title__name'>Product</h3>
                            <h3 className='title__price'>Price</h3>
                            <h3 className='title__quantity'>Quantity</h3>
                            <h3 className='title__total'>Total</h3>
                        </div>
                        <hr />
                        {cartItems.map(item => {
                        const {id, img, name, price, amount} = item;
                        return <div key={id} className="item">
                            <div className="item__info">
                                <img srcSet={`${img} 4x`} alt="img" className='product__img'/>
                                <div className='product__info'>
                                    <h2 className='product__name'>{name} Candleaf®</h2>
                                    <p className='product__price'>${price}</p>
                                    <div className='product__quantity'>
                                        <button className='btn increase-btn' onClick={() => dispatch(increaseItem(id))}><i className='fas fa-plus'></i></button>
                                        <span>{amount}</span>
                                        <button className='btn decrease-btn' onClick={() => dispatch(decreaseItem(id))}><i className='fas fa-minus'></i></button>
                                    </div>
                                    <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>Remove</button>
                                </div>
                            </div>
                            <p className='item__price'>${price}</p>
                            <div className='item__quantity'>
                                <div className='quantity-container'>
                                    <button className='btn increase-btn' onClick={() => dispatch(increaseItem(id))}><i className='fas fa-plus'></i></button>
                                    <span>{amount}</span>
                                    <button className='btn decrease-btn' onClick={() => dispatch(decreaseItem(id))}><i className='fas fa-minus'></i></button>
                                </div>            
                            </div>
                            <p className='item__total'>${(price*amount).toFixed(2)}</p>
                        </div>     
                    })}
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className='empty-cart'>
                <h1>Your cart is empty</h1>
                <Link to='/products' className='fill-link'>Fill it</Link>
            </div>
    }
    
}
