import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import data from '../data/ProductsData' 
import {useSelector} from 'react-redux'
import { SearchForm } from './SearchForm';
import e from 'cors';

export const Products = (props) => {

    const [size, setSize] = useState(window.innerWidth);
    // const {data} = useSelector(store => store.cart)
    const [searchName, setSearchName] = useState('')
    const [data, setData] = useState([])
    const [color, setColor] = useState('all')
    const [sort, setSort] = useState('price')
    const [active, setActive] = useState('all')
    const [colorActive, setColorActive] = useState('all')
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
    }, [searchName, color, sort, active])

    const fetchData = () => {
        const url = `http://localhost:5000/api/v1/candleafs?name=${searchName}&color=${color}&sort=${sort}&category=${active}&limit=${props.number}&popular=${props.popular}`
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data.candleafs)
        }).catch(error => console.log(error));
    }

    const clickColor = (e, type) => {
        e.preventDefault();
        setColor(type)
        setColorActive(type)
    }

    const clearFilters = (e) => {
        e.preventDefault()
        setColor('')
        setSearchName('')
        setColorActive('all')
        setActive('all')
    }

    const clickSort = (value) => {
        setSort(value)
    }   
        if(props.number){
            return <div>
                <div className='products-container'>
                    <div className='products-header'>
                        <h1 className='products-header__title'>Products</h1>
                        <p className='products-header__subtitle'>Order it for you or for your beloved ones</p>
                    </div>
                    {data.length > 0 ? <div className='products-list'>    
                            {data.map(product => {
                                const {_id, img, name, price} = product
                                return <Link to={`/singleproduct/${_id}`} className='product' key={_id}>
                                    <img srcSet = {`${img} 4x`} alt={name} className='product__img'/>
                                    <h3 className='product__name'>{name}</h3>
                                    <p className='product__price'>{price}$</p>
                                </Link>
                            })}
                            </div>:<div>
                                    <p>Sorry, no products matched your search.</p>
                            </div>}  
                    </div>

            </div>
        }

        if(props.popular){
            return <div>
                <div className='products-container'>
                    <div className='products-header'>
                        <h1 className='products-header__title'>Products</h1>
                        <p className='products-header__subtitle'>Order it for you or for your beloved ones</p>
                    </div>
                    {data.length > 0 ? <div className='products-list'>    
                            {data.map(product => {
                                const {_id, img, name, price} = product
                                return <Link to={`/singleproduct/${_id}`} className='product' key={_id}>
                                    <img srcSet = {`${img} 4x`} alt={name} className='product__img'/>
                                    <h3 className='product__name'>{name}</h3>
                                    <p className='product__price'>{price}$</p>
                                </Link>
                            })}
                            </div>:<div>
                                    <p>Sorry, no products matched your search.</p>
                            </div>}  
                    </div>

            </div>
        }

        return (
            <div className='products'>
                <div className='products-container'>
                    <div className='products-header'>
                        <h1 className='products-header__title'>Products</h1>
                        <p className='products-header__subtitle'>Order it for you or for your beloved ones</p>
                    </div>
                    <div className="content-products">
                    <div className="content">
                        <form className='form-container'>
                            <div className="form-control">
                                <input type="text" value={searchName} placeholder="search" className="search-input" onChange={(e) => setSearchName(e.target.value)}/>
                            </div>
                            <div className="form-control">
                                <h5>Category</h5>
                                <div className='form-control__category'>
                                    <button type="button" id="all" className={`${active == 'all' ? 'active': 'null'} cate-btn`} onClick={() => setActive('all')}>All</button>
                                    <button type="button" id="office" className={`${active == 'office' ? 'active': 'null'} cate-btn`} onClick={() => setActive('office')}>Office</button>
                                    <button type="button" id="living-room" className={`${active == 'lr' ? 'active': 'null'} cate-btn`} onClick={() => setActive('lr')}>Living room</button>
                                    <button type="button" id="bedroom" className={`${active == 'bedroom' ? 'active': 'null'} cate-btn`} onClick={() => setActive('bedroom')}>Bedroom</button>
                                </div>
                            </div>
                            <div className="form-control">
                                <h5>Colors</h5>
                                <div className="form-control__colors">
                                    <button className={`${colorActive == 'all' ? 'color-active': 'null'} all-btn`} onClick={(e) => clickColor(e, 'all')}>All</button>
                                    <button className={`${colorActive == 'green' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "green"}} onClick={(e) => clickColor(e, 'green')}></button>
                                    <button className={`${colorActive == 'pink' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "pink"}} onClick={(e) => clickColor(e, 'pink')}></button>
                                    <button className={`${colorActive == 'orange' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "orange"}} onClick={(e) => clickColor(e, 'orange')}></button>
                                    <button className={`${colorActive == 'yellow' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "yellow"}} onClick={(e) => clickColor(e, 'yellow')}></button>
                                    <button className={`${colorActive == 'red' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "red"}} onClick={(e) => clickColor(e, 'red')}></button>
                                    <button className={`${colorActive == 'brown' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "brown"}} onClick={(e) => clickColor(e, 'brown')}></button>
                                    <button className={`${colorActive == 'purple' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "purple"}} onClick={(e) => clickColor(e, 'purple')}></button>
                                    <button className={`${colorActive == 'blue' ? 'color-active': 'null'} color-btn`} style={{backgroundColor: "blue"}} onClick={(e) => clickColor(e, 'blue')}></button>
                                </div>
                            </div>
                        </form>
                        <button type="button" className="clear-btn" onClick={clearFilters}>Clear filters</button>
                        <form className='form-container form-sort'>
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
                            {data.map(product => {
                                const {_id, img, name, price} = product
                                return <Link to={`/singleproduct/${_id}`} className='product' key={_id}>
                                    <img srcSet = {`${img} 4x`} alt={name} className='product__img'/>
                                    <h3 className='product__name'>{name}</h3>
                                    <p className='product__price'>{price}$</p>
                                </Link>
                            })}
                            </div>:<div>
                                    <p>Sorry, no products matched your search.</p>
                            </div>}  
                    </div>

                </div>
            </div>
        )
    
}
