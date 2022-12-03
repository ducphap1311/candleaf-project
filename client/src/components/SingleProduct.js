import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export const SingleProduct = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch()

    const getSingleItem = () => {
        fetch(`https://candleaf-ecommerce.herokuapp.com/api/v1/candleafs/`+ id)
        .then(res => res.json())
        .then(data => {
            setSingleProduct(data.candleaf)
        })
        .catch(err => console.log(err))
        
    }

    useEffect(() => {
        getSingleItem();
    }, [])

    const increaseAmount = () => {
        setAmount(amount + 1) ;
    }

    const decreaseAmount = () => {
        if(amount === 1){
            setAmount(1)
        } else {
            setAmount(amount - 1)
        }
    }
    const {img, name, price} = singleProduct;

    if(!singleProduct){
        return <div>
            Loading...
        </div>
    } else {
        return (
            <div className='single-product'>
                <div className='single-product-container'>
                    <div className='single-product-header'>
                        <img srcSet={`${img} 4x`} alt={name} className='single-product-header__img'/>
                        <h2 className='single-product-header__subtitle'>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</h2>
                        <p className='single-product-header__free-ship'>FREE SHIPPING</p>
                    </div>
                    <div className='single-product-info'>
                        <h2 className='single-product-info__name'>{name} Candleaf®</h2>
                        <div className='single-product-info__price-category-container'>
                            <div className='single-product-info__price-container'>
                                <p className='single-product-info__price'>${price}</p>
                                <div className='single-product-info__quantity'>
                                    <p className='quanlity-title'>Quantity</p>
                                    <div className='single-product-info__amount-btn'>
                                        <button onClick={increaseAmount}><i className='fas fa-plus'></i></button>
                                        <p className='amount'>{amount}</p>
                                        <button onClick={decreaseAmount}><i className='fas fa-minus'></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className='single-product-info__category-container'>
                                <div className='category1-container'>
                                    <input type="radio" className='category1' name="category"/>
                                    <label>One time purchase</label>
                                </div>
                                <div className='category2-container'>
                                    <input type="radio" className='category2' name="category" />
                                    <label>Subscribe and delivery every</label>
                                    <select className='delivery-time'>
                                            <option value="1 weeks">1 weeks</option>
                                            <option value="2 weeks">2 weeks</option>
                                            <option value="3 weeks">3 weeks</option>
                                            <option value="4 weeks">4 weeks</option>
                                    </select>    
                                    
                                    <p className='subscribe-text'>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <span>See details</span></p>
                                </div>
                                <button className='single-product-info__add-btn' onClick={() => dispatch(addItem({id, amount}))}>
                                    <i className="fas fa-shopping-cart"></i>+ Add to cart   
                                </button>
                            </div>
                        </div>         
                        <div className='single-product-info__extra-informations'>
                            <p><span>Wax:</span> Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                            <p><span>Fragrance:</span> Premium quality ingredients with natural essential oils</p>
                            <div className='info'>
                                <p><span>Burning Time:</span> 70-75 hours</p>
                                <p><span>Dimension:</span> 10cm x 5cm </p>
                                <p><span>Weight:</span> 400g </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
