import React from 'react'
import { AuthenticationTitles } from './AuthenticationTitles'
import creditCardImg from '../images/credit-card.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Payment = () => {
    const {cartItems, total} = useSelector(store => store.cart);

    return (
        <div className='payment'>
            <div className='payment-container'>
                <div className='payment-text'>
                    <AuthenticationTitles />
                    <div className='payment-text__method'>
                        <p className='name-method'>Payment method</p>
                        <div className='credit-card'>
                            <div className='credit-card-title'>
                                <img srcSet={`${creditCardImg} 4x`} alt='credit-card' />
                                <p>Credit Card</p>
                            </div>
                            <form>
                                <input type="text" placeholder="Card Number" className='card-number-input'/>
                                <input type="text" placeholder="Holder Name" className='card-name-input'/>
                                <div className='date-input-container'>
                                    <input type="text" placeholder="Expiration (MM/YY)" className='date-input'/>
                                    <input type="text" placeholder="CVV" className='cvv-input'/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='payment-text__shipping-btn'>
                        <Link to="/shipping" className='back-to-details-link'>Back to shipping</Link>
                        <Link to="/payment" className='payment-link'><button>Pay now</button></Link>
                        <Link to="/shipping" className='back-to-details-link-r'>Back to shipping</Link>
                    </div>
                </div>
                <div className='payment-products'>
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
                    <div className='payment-details'>
                        <div className="payment-details__code">
                            <input type="text" placeholder='Coupon code' className='code-input'/>
                            <button>Add code</button>
                        </div>
                        <div className='payment-details__subtotal-shipping'>
                            <div className='subtotal'>
                                <p>Subtotal</p>
                                <p>$ 9.99</p>
                            </div>
                            <div className='shipping'>
                                <p>Shipping</p>
                                <p>Calculated at the next step</p>
                            </div>
                        </div>
                        <div className='payment-details__total'>
                            <p className='title'>Total</p>
                            <p className='total-price'>$ {total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
