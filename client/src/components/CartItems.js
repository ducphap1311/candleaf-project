import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseItem, decreaseItem, removeItem  } from '../features/cart/cartSlice'

export const CartItems = () => {
    const dispatch = useDispatch();
    const {cartItems, total} = useSelector((store) => store.cart)

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
                        {cartItems.map(item => {
                        const {id, img, name, price, amount} = item;
                        return <div key={id} className="item">
                            <div className="item__info">
                                <img srcSet={`${img} 4x`} alt="img" className='product__img'/>
                                <div className='product__info'>
                                    <div>
                                        <h2 className='product__name'>{name} Candleaf®</h2>
                                        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>Remove</button>
                                    </div>
                                    <div>
                                        <p className='product__price'>${price}</p>
                                        <div className='product__quantity'>
                                            <button className='btn increase-btn' onClick={() => dispatch(increaseItem(id))}><i className='fas fa-plus'></i></button>
                                            <span>{amount}</span>
                                            <button className='btn decrease-btn' onClick={() => dispatch(decreaseItem(id))}><i className='fas fa-minus'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='item__price'>{price}</p>
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
                    <div className='cart-items-check-out'>
                        <div className='cart-items-check-out__sub-total'>
                            <p className='cart-items-check-out__total'>Sub-total<span>${total.toFixed(2)}</span></p>
                            <p className='cart-items-check-out__tax'>Tax and shipping cost will be calculated later</p>
                        </div>
                        <Link to="/authentication"><button>Check-out</button></Link>
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
