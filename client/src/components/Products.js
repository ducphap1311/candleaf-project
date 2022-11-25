import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import data from '../data/ProductsData' 
import {useSelector} from 'react-redux'
import { SearchForm } from './SearchForm';
import e from 'cors';

export const Products = () => {
    const [size, setSize] = useState(window.innerWidth);
    // const {data} = useSelector(store => store.cart)
    const [searchName, setSearchName] = useState('')
    const [data, setData] = useState([])
    const [color, setColor] = useState('all')
    const [sort, setSort] = useState('price')

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [size])

    useEffect(() => {
        fetchData()
    }, [searchName, color, sort])

    const fetchData = () => {
        const url = `https://candleafs-api.herokuapp.com/api/v1/candleafs?name=${searchName}&color=${color}&sort=${sort} `
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setData(data.candleafs)
        }).catch(error => console.log(error));
    }

    const clickColor = (e, type) => {
        e.preventDefault();
        setColor(type)
    }

    const clearFilters = (e) => {
        e.preventDefault()
        setColor('')
        setSearchName('')
    }

    const clickSort = (value) => {
        setSort(value)
    }

        return (
            <div className='products'>
                <div className='products-container'>
                    <div className='products-header'>
                        <h1 className='products-header__title'>Products</h1>
                        {/* <p className='products-header__subtitle'>Order it for you or for your beloved ones</p> */}
                    </div>
                    <div style={{display: "flex"}}>
                    <div className="content">
                        <form style={{border: "none"}}>
                            <div className="form-control">
                                <input type="text" value={searchName} placeholder="search" className="search-input" onChange={(e) => setSearchName(e.target.value)}/>
                            </div>
                            {/* <div className="form-control">
                                <h5>category</h5>
                                <div className='form-control__category'>
                                    <button type="button" name="category" className="active">all</button>
                                    <button type="button" name="category" className="null">office</button>
                                    <button type="button" name="category" className="null">living room</button>
                                    <button type="button" name="category" className="null">bedroom</button>
                                </div>
                            </div> */}
                            <div className="form-control">
                                <h5>colors</h5>
                                <div className="form-control__colors">
                                    <button className="all-btn active" onClick={(e) => clickColor(e, 'all')}>all</button>
                                    <button className="color-btn" style={{backgroundColor: "green"}} onClick={(e) => clickColor(e, 'green')}></button>
                                    <button className="color-btn" style={{backgroundColor: "pink"}} onClick={(e) => clickColor(e, 'pink')}></button>
                                    <button className="color-btn" style={{backgroundColor: "orange"}} onClick={(e) => clickColor(e, 'orange')}></button>
                                    <button className="color-btn" style={{backgroundColor: "yellow"}} onClick={(e) => clickColor(e, 'yellow')}></button>
                                    <button className="color-btn" style={{backgroundColor: "red"}} onClick={(e) => clickColor(e, 'red')}></button>
                                    <button className="color-btn" style={{backgroundColor: "brown"}} onClick={(e) => clickColor(e, 'brown')}></button>
                                    <button className="color-btn" style={{backgroundColor: "purple"}} onClick={(e) => clickColor(e, 'purple')}></button>
                                    <button className="color-btn" style={{backgroundColor: "blue"}} onClick={(e) => clickColor(e, 'blue')}></button>
                                </div>
                            </div>
                        </form>
                        <button type="button" className="clear-btn" onClick={clearFilters}>clear filters</button>
                        <form>
                            <label htmlFor="sort">Sort By</label>
                            <select name="sort" id="sort" className="sort-input" onChange = {(e) => clickSort(e.target.value)}>
                                <option value="price">Price (Lowest)</option>
                                <option value="-price">Price (Highest)</option>
                                <option value="name">Name (A - Z)</option>
                                <option value="-name">Name (Z - A)</option>
                            </select>
                        </form>
                    </div>
                    {data.length > 0 ? <div className='products-list'>
                        
                            {size > 570 ? data.map(product => {
                                const {_id, img, name, price} = product
                                return <Link to={`/singleproduct/${_id}`} className='product' key={_id}>
                                    <img srcSet = {`${img} 4x`} alt={name} className='product__img'/>
                                    <h3 className='product__name'>{name}</h3>
                                    <p className='product__price'>{price}$</p>
                                </Link>
                            }): <div className='products-list'>
                                    {data.map(product => {
                                        const {_id, img, name, price, popular} = product
                                        if(popular === true){
                                        return <Link to = {`/singleproduct/${_id}`} className='product' key={_id}>
                                                <img srcSet = {`${img} 4x`} alt={name} className='product__img' />
                                                <h3 className='product__name'>{name}</h3>
                                                <p className='product__price'>{price}$</p>
                                            </Link>
                                        }
                                        return;
                                    })}
                                    <Link to="/products" className='more-products-btn'>See more</Link>
                                </div>}
                            </div>: <div>
                                    <p>Sorry, no products matched your search.</p>
                            </div>}  
                    </div>

                </div>
            </div>
        )
    
}
