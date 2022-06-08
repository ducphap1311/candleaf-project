import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/ProductsData' 
import '../scss/Products.css'

export const Products = () => {
    
    return (
        <div className='products'>
            <div className='products-container'>
                <div className='products-header'>
                    <h1 className='products-header__title'>Products</h1>
                    <p className='products-header__subtitle'>Order it for you or for your beloved ones</p>
                </div>
                <div className='products-list'>
                    {data.map(product => {
                        const {id, img, name, price} = product
                        return <Link to={`/singleproduct/${id}`} className='product' key={id}>
                            <img srcSet = {`${img} 4x`} alt={name} className='product__img'/>
                            <h3 className='product__name'>{name}</h3>
                            <p className='product__price'>{price}$</p>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    )
}
