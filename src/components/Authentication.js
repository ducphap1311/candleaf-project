import React from 'react'
import { AuthenticationTitles } from './AuthenticationTitles';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Authentication = () => {
    const {cartItems, total} = useSelector(store => store.cart);

    return (
        <div className='authentication'>
            <div className='authentication-container'>
                <div className='authentication-text'>
                    <AuthenticationTitles />
                    <div className='authentication-text__contact'>
                        <div className='authentication-title'>
                            <h2>Contact</h2>
                            <p>Do you have an account?  <span>Login</span></p>
                        </div>
                        <form className='authentication-text-form'>
                            <input type="text" placeholder='Email or mobile phone number' className='text-input' />
                            <input type="checkbox" name="10% discount" className='checkbox-input' />
                            <label htmlFor="10% discount">Add me to Candleaf newsletter for a 10% discount</label>
                        </form>
                    </div>
                    <div className='authentication-text__shipping-address'>
                        <h2>Shipping Address</h2>
                        <form>
                            <input type="text" placeholder='Name' className='name-input'/><input type="text" placeholder='Second Name' className='second-name-input'/>
                            <input type="text" placeholder='Address and number' className='address-num-input'/>
                            <input type="text" placeholder='Shipping note (optional)' className='shipping-note-input'/>
                            <input type="text" placeholder='City' className='city-input'/><input type="text" placeholder='Postal Code' className='code-input'/><input type="text" placeholder='Province' className='province-input'/>
                            <input type="text" placeholder='Country Region' className='country-input' required/>
                            <input type="checkbox" className='save-checkbox' name="save"/>
                            <label htmlFor="save">Save this informations for a future fast checkout</label>
                        </form>
                    </div>
                    <div className='authentication-text__shipping-btn'>
                        <Link to="/cart" className='back-to-cart-link'>Back to cart</Link>
                        <Link to="/shipping" className='shipping-link'><button>Go to shopping</button></Link>
                        <Link to="/cart" className='back-to-cart-link-r'>Back to cart</Link>
                    </div>
                </div>
                <div className='authentication-product'>
                    {cartItems.map(item => {
                        const {id, img, amount, name, price} = item;
                        return <div className='product-info' key={id}>
                                    <div className='product-info__img-amount'>
                                        <img srcSet={`${img} 4x`} alt="img"/>
                                        <p>{amount}</p>
                                    </div>
                                    <div className='product-info__name-price'>
                                        <h2>{name}</h2>
                                        <p>$ {price*amount}</p>
                                    </div>
                                </div>
                    })}
                    <div className='authentication-details'>
                        <div className="authentication-details__code">
                            <input type="text" placeholder='Coupon code' className='code-input'/>
                            <button>Add code</button>
                        </div>
                        <div className='authentication-details__subtotal-shipping'>
                            <div className='subtotal'>
                                <p>Subtotal</p>
                                <p>$ 9.99</p>
                            </div>
                            <div className='shipping'>
                                <p>Shipping</p>
                                <p>Calculated at the next step</p>
                            </div>
                        </div>
                        <div className='authentication-details__total'>
                            <p className='title'>Total</p>
                            <p className='total-price'>$ {total}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
