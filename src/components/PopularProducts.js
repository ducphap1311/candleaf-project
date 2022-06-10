import React from 'react'
import data from '../data/ProductsData'
import { Link } from 'react-router-dom'

export const PopularProducts = () => {
    
    return (
        <div className='popular-products'>
            <div className='popular-products-container'>
                <div className='products-header'>
                    <h1 className='products-header__title'>Popular</h1>
                    <p className='products-header__subtitle'>Our top selling product that you may like</p>
                </div>
                <div className='products-list'>
                    {data.map(product => {
                        const {id, img, name, price, popular} = product
                        if(popular === true){
                            return <Link to = {`/singleproduct/${id}`} className='product' key={id}>
                            <img srcSet = {`${img} 4x`} alt={name} className='product__img' />
                            <h3 className='product__name'>{name}</h3>
                            <p className='product__price'>{price}$</p>
                        </Link>
                        }
                        return;
                    })}
                </div>
            </div>
        </div>
    )
}
