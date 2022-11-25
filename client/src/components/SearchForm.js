import React, {useState} from 'react'

export const SearchForm = () => {
    const [searhName, setSearchName] = useState('')
    
    return (
        <div className="content">
            <form>
                <div className="form-control">
                    <input type="text" name="text" value={searhName} placeholder="search" className="search-input" onChange={(e) => setSearchName(e.target.value)}/>
                </div>
                <div className="form-control">
                    <h5>category</h5>
                    <div className='form-control__category'>
                        <button type="button" name="category" className="active">all</button>
                        <button type="button" name="category" className="null">office</button>
                        <button type="button" name="category" className="null">living room</button>
                        <button type="button" name="category" className="null">bedroom</button>
                    </div>
                </div>
                <div className="form-control">
                    <h5>colors</h5>
                    <div className="form-control__colors">
                        <button className="all-btn active">all</button>
                        <button className="color-btn" style={{backgroundColor: "green"}} ></button>
                        <button className="color-btn" style={{backgroundColor: "pink"}} ></button>
                        <button className="color-btn" style={{backgroundColor: "orange"}}></button>
                        <button className="color-btn" style={{backgroundColor: "yellow"}} ></button>
                        <button className="color-btn" style={{backgroundColor: "red"}}></button>
                        <button className="color-btn" style={{backgroundColor: "brown"}}></button>
                        <button className="color-btn" style={{backgroundColor: "purple"}}></button>
                        <button className="color-btn" style={{backgroundColor: "blue"}}></button>
                    </div>
                </div>
            </form>
            <button type="button" className="clear-btn">clear filters</button>
        </div>
    )
}
