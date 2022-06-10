import React, {useEffect, useState} from 'react'
import data from '../data/ProductsData'
import { useParams } from 'react-router-dom'
import logo from '../images/card-icon2.svg'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export const SingleProduct = () => {
    const {id} = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch()

    const getSingleItem = () => {
        const newItem = data.filter(item => item.id === parseInt(id))
        setSingleProduct(newItem[0]);
    }

    useEffect(() => {
        getSingleItem();
    })

    const increaseAmount = () => {
        setAmount(amount + 1);
    }

    const decreaseAmount = () => {
        if(amount === 1){
            setAmount(1)
        } else {
            setAmount(amount - 1)
        }
    }
    const {img, name, price} = singleProduct;

    return (
        <div className='single-product'>
            <div className='single-product-container'>
                <div className='single-product-header'>
                    <img srcSet={`${img} 4x`} alt={name} className='single-product-header__img'/>
                    <h2 className='single-product-header__subtitle'>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</h2>
                </div>
                <div className='single-product-info'>
                    <h2 className='single-product-info__name'>{name} Candleaf®</h2>
                    <p className='single-product-info__price'>${price}</p>
                    <div className='single-product-info__quantity'>
                        <p>Quantity</p>
                        <div className='single-product-info__amount-btn'>
                            <button onClick={increaseAmount}><i className='fas fa-plus'></i></button>
                            <p className='amount'>{amount}</p>
                            <button onClick={decreaseAmount}><i className='fas fa-minus'></i></button>
                        </div>
                    </div>
                    <button className='single-product-info__add-btn' onClick={() => dispatch(addItem({id, amount}))}>
                        <img src={logo} alt="add"/>
                        + Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
